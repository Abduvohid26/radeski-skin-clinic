import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3011;

// Initialize Gemini SDK with telemetry User-Agent header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

app.use(express.json());

// API route for Gemini AI Skincare Assistant
app.post("/api/gemini/consult", async (req, res) => {
  try {
    const { question, history } = req.body;

    if (!question) {
      res.status(400).json({ error: "Siz savol yuborishingiz kerak (Question is required)" });
      return;
    }

    const systemInstruction = `You are the official AI Medical & Skincare Assistant for Radeski Skin & Aesthetic Clinic, a leading aesthetic medicine, cosmetology, and dermatology clinic located in Fergana, Uzbekistan (Address: Fergana, O'zbekiston Ovozi ko'chasi, 1A-uy).
Your goal is to provide highly professional, friendly, empathetic, and informative responses in Uzbek (or Russian if the user asks in Russian).
You must advise the user on general skin health, skincare routines, acne treatment, and explain the professional treatments offered at Radeski Clinic.
Always keep in mind:
1. Radeski Clinic has 5 outstanding specialist doctors:
   - Ashurov Dilshod Davlatovich (Ашуров Дилшод Давлатович) - Bosh shifokor, dermatolog, kosmetolog (Chief doctor, dermatologist, cosmetologist).
   - Yoqubov Farrux Farxodjonovich (Ёкубов Фаррух Фарходжонович) - Dermatovenerolog, kosmetolog.
   - Ibragimov Qudrat (Ибрагимов Кудрат) - Kosmetolog, apparat muolajalari bo'yicha mutaxassis.
   - Qodirova Dilyafruzxon (Кодирова Диляфрузхон) - Dermatolog, estetik kosmetolog.
   - Xaidmuradova Shirin Jumageldiyevna (Хаидмурадова Ширин Джумагелдиевна) - Dermatolog, kosmetolog, inyeksion muolajalar mutaxassisi.

2. Clinic Treatments & Services:
   - Acne (husnbuzar) davolash (expert-level programs).
   - Professional yuz tozalash (facial cleaning) va peelinglar.
   - Laser kosmetologiyasi (dog'lar, chandiqlar va turlarni yo'qotish).
   - Inyeksion kosmetologiya (botoks, fillerviy muolajalar, mezoterapiya, biorevitalizatsiya).
   - Apparat kosmetologiyasi (zamonaviy asbob-uskunalar yordamida teri yoshartirish).
   - Teri kasalliklarini davolash (psoriaz, ekzema, dermatitlar).

3. Important Guidance:
   - Answer their specific question/symptom clearly, professionally, and list practical general tips (e.g., proper washing, sunscreen usage, hydration).
   - Gently remind the patient that online advice is purely informative and for an accurate diagnosis, they should book a personal consultation with a Radeski doctor.
   - Point out which specific Radeski doctor would be best suited for their issue (e.g. Shirin Jumageldiyevna for injection therapies, Dilshod Davlatovich for chronic dermatological issues, etc.).
   - Use a polite tone. Formulate your answer with clear markdown paragraphs, bold titles, and clean bullet points to make it readable.
   - Under no circumstances make up treatments or diagnostics that the clinic doesn't provide. Keep it focused on the authentic Radeski Skin & Aesthetic Clinic.`;

    // Map conversation history into Gemini's contents format
    const contents: any[] = [];
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        });
      }
    }
    // Append the current message
    contents.push({
      role: "user",
      parts: [{ text: question }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const text = response.text || "Uzr, savolingizga javob berishda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.";
    res.json({ answer: text });
  } catch (error: any) {
    console.error("Gemini consultation error:", error);
    res.status(500).json({
      error: "Tizimda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring yoki to'g'ridan-to'g'ri bog'laning.",
      details: error.message,
    });
  }
});

// Serve health status
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", clinic: "Radeski Skin & Aesthetic Clinic" });
});

// Vite middleware setup for full-stack integration
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

start();
