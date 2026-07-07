import { Doctor, Service, Review } from "./types";

export const CLINIC_INFO = {
  name: "Radeski Skin & Aesthetic Clinic",
  shortName: "Radeski Clinic",
  tagline: "Sizning teringiz eng yaxshi parvarishga loyiq",
  address: "Farg'ona filiali — Qo'qon filiali",
  addressFergana: "Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1A-bino, Radeski Skin Clinic",
  addressKokand: "Qo'qon shahri, 47-MFI, Huqandiy mavzesi, 144A",
  mapUrlFergana: "https://www.google.com/maps/search/?api=1&query=Farg%27ona%20sh.%2C%20O%27zbekiston%20Ovozi%20ko%27chasi%2C%201A-bino",
  mapUrlKokand: "https://maps.app.goo.gl/fqVc6Ju9eNFWfsTj6",
  phone: "+998 73 200 73 73",
  phoneDisplay: "+998 (73) 200-73-73",
  phone2: "+998 95 210 73 73",
  phoneDisplay2: "+998 (95) 210-73-73",
  telegramUsername: "RADESKIUZ",
  instagramUsername: "RADESKI.CLINIC.KOKAND",
  workingHours: "Dushanba - Shanba: 09:00 - 18:00, Yakshanba: Dam olish kuni",
  email: "info@radeski.uz",
  web: "https://radeski.uz",
};

export const SERVICES: Service[] = [
  {
    id: "acne-treatment",
    title: "Akne (Husnbuzar) Davolash",
    description: "O'smirlar va kattalardagi akne muammosini, teri osti toshmalarini va akne-post (dog'lar, chandiqlar) asoratlarini kompleks individual dasturlar asosida butunlay davolash.",
    estimatedPrice: "150,000 UZS dan boshlab",
    duration: "45-60 daqiqa",
    benefits: [
      "Yallig'lanishlarni tezkor so'ndirish",
      "Yangi toshmalar paydo bo'lishining oldini olish",
      "Teri teksturasi va rangini tekislash",
      "Individual parvarish va parhez tavsiyalari"
    ]
  },
  {
    id: "facial-cleaning",
    title: "Professional Yuz Tozalash (Cleaning)",
    description: "Terini o'lik hujayralardan, komedonlardan, ortiqcha sebum va changlardan mexanik, ultratovushli yoki kombinatsiyalashgan usulda chuqur tozalash va yuz terisini nafas oldirish.",
    estimatedPrice: "200,000 UZS dan boshlab",
    duration: "60-90 daqiqa",
    benefits: [
      "G'ovaklarni chuqur tozalash va qisqartirish",
      "Komedonlar va qora nuqtalarni butunlay tozalash",
      "Silliq va sog'lom porlash effekti",
      "Terida qon aylanishini yaxshilash"
    ]
  },
  {
    id: "laser-therapy",
    title: "Laser Kosmetologiyasi",
    description: "Zamonaviy neodim va CO2 lazerlar yordamida yuzdagi qora va qizil dog'larni, mayda qon tomir to'rlarini, chandiqlarni xavfsiz va og'riqsiz yo'qotish.",
    estimatedPrice: "300,000 UZS dan boshlab",
    duration: "20-40 daqiqa",
    benefits: [
      "Chandiq va pigmentatsiyani sezilarli kamaytirish",
      "Teri hujayralarining tabiiy yangilanishi",
      "Minimal reabilitatsiya davri",
      "Yuz rangini mukammal tenglashtirish"
    ]
  },
  {
    id: "injection-cosmetology",
    title: "Inyeksion Kosmetologiya",
    description: "Botulinoterapiya (ajinlarni yo'qotish), kontur plastika (lab, daxan va yonoq shaklini to'ldirish), mezoterapiya va biorevitalizatsiya orqali terini chuqur namlantirish va yoshartirish.",
    estimatedPrice: "400,000 UZS dan boshlab",
    duration: "30-50 daqiqa",
    benefits: [
      "Mimik ajinlarni to'liq tekislash",
      "Lab va yuz konturlariga chiroyli hajm berish",
      "Terini ichki namlik bilan to'yintirish",
      "Ajralib turadigan lifting (tortish) effekti"
    ]
  },
  {
    id: "hardware-cosmetology",
    title: "Apparat Kosmetologiyasi",
    description: "RF-lifting, SMAS-lifting va mikrotokli muolajalar yordamida jarrohlik aralashuvisiz yuz terisini tortish, osilgan yonoqlarni tiklash va elastiklikni oshirish.",
    estimatedPrice: "350,000 UZS dan boshlab",
    duration: "45-75 daqiqa",
    benefits: [
      "Kollagen va elastin ishlab chiqarilishini kuchaytirish",
      "Yuz ovalini (konturini) aniq va tarang qilish",
      "Ajinlar chuqurligini sezilarli qisqartirish",
      "Mutlaqo og'riqsiz va xavfsiz lifting"
    ]
  },
  {
    id: "dermatology-clinical",
    title: "Klinik Dermatologiya",
    description: "Psoriaz, ekzema, kontakt dermatit, allergik toshmalar va boshqa surunkali yoki o'tkir teri kasalliklarini eng so'nggi xalqaro protokollar bo'yicha diagnostika va davolash.",
    estimatedPrice: "100,000 UZS dan boshlab (Konsultatsiya)",
    duration: "30 daqiqa",
    benefits: [
      "To'g'ri va chuqur laborator diagnostika",
      "Kasallikning tub sababini aniqlash va davolash",
      "Remissiya (tinchlanish) davrini uzoq muddatga cho'zish",
      "Hayot sifatini va teri salomatligini tiklash"
    ]
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-ashurov",
    name: "Ashurov Dilshod Davlatovich",
    originalName: "Ашуров Дилшод Давлатович",
    role: "Bosh shifokor, Dermatolog-Kosmetolog",
    description: "15 yildan ortiq klinik tajribaga ega yetakchi mutaxassis. Surunkali teri kasalliklarini samarali davolash va murakkab kosmetologik muolajalar bo'yicha ekspert.",
    experience: "15 yil tajriba",
    specialty: ["Klinik dermatologiya", "Akne davolash", "Tashxis qo'yish", "Lazer terapiyasi"],
    imageUrl: "👨‍⚕️"
  },
  {
    id: "dr-yokubov",
    name: "Yoqubov Farrux Farxodjonovich",
    originalName: "Ёкубов Фаррух Фарходжонович",
    role: "Dermatovenerolog, Estetik Kosmetolog",
    description: "Teri patologiyalarini o'rganish va uning yoshligini saqlash bo'yicha yetuk shifokor. Zamonaviy estetik meditsina bo'yicha xalqaro sertifikatlar sohibi.",
    experience: "10 yil tajriba",
    specialty: ["Dermatovenerologiya", "Estetik kosmetologiya", "Komedonlarni tozalash"],
    imageUrl: "👨‍⚕️"
  },
  {
    id: "dr-haidmuradova",
    name: "Xaidmuradova Shirin Jumageldiyevna",
    originalName: "Хаидмурадова Ширин Джумагелдиевна",
    role: "Dermatolog, Inyeksion Muolajalar Mutaxassisi",
    description: "Inyeksion yoshartirish, lab konturini chiroyli shakllantirish, mezoterapiya va biorevitalizatsiya texnikalarini mukammal egallagan yuqori malakali shifokor.",
    experience: "8 yil tajriba",
    specialty: ["Inyeksion kosmetologiya", "Botulinoterapiya", "Mezoterapiya", "Lifting"],
    imageUrl: "👩‍⚕️"
  },
  {
    id: "dr-ibragimov",
    name: "Ibragimov Qudrat",
    originalName: "Ибрагимов Кудрат",
    role: "Kosmetolog, Apparat Muolajalari Eksperti",
    description: "RF-lifting, SMAS-lifting va lazer uskunalarini boshqarish bo'yicha yetakchi muhandis-shifokor. Terining tabiiy kollagenini uyg'otish bo'yicha mutaxassis.",
    experience: "7 yil tajriba",
    specialty: ["Apparat kosmetologiyasi", "RF-lifting", "SMAS-lifting", "Teri taranglashtirish"],
    imageUrl: "👨‍⚕️"
  },
  {
    id: "dr-kodirova",
    name: "Qodirova Dilyafruzxon",
    originalName: "Кодирова Диляфрузхон",
    role: "Dermatolog, Estetik Kosmetolog",
    description: "Yuz terisini nozik va professional tozalash, kimyoviy peelinglar va terining chuqur gidratatsiyasini taminlash bo'yicha beqiyos mahorat sohibasi.",
    experience: "6 yil tajriba",
    specialty: ["Yuzni chuqur tozalash", "Kimyoviy peelinglar", "Aesthetic parvarish", "Akne-post davolash"],
    imageUrl: "👩‍⚕️"
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Zuhra Aliyeva",
    rating: 5,
    comment: "Dilshod Davlatovichga katta rahmat! Akne muammosidan 3 yil davomida qiynalgan edim, bu klinika meni butunlay sog'lom teriga qaytardi. 3 oylik davolash kursi juda ajoyib natija berdi.",
    date: "2026-06-15",
    treatment: "Akne (Husnbuzar) Davolash"
  },
  {
    id: "rev-2",
    name: "Sardor Karimov",
    rating: 5,
    comment: "Klinikaga birinchi marta kirdim. Juda toza va shinam, xodimlar muloyim. Yuzni tozalash (cleaning) muolajasi judayam yoqdi, og'riqsiz va professional darajada bajarildi.",
    date: "2026-06-20",
    treatment: "Professional Yuz Tozalash"
  },
  {
    id: "rev-3",
    name: "Madina Rasulova",
    rating: 5,
    comment: "Shirin Jumageldiyevnaga inyeksion kosmetologiya bo'yicha murojaat qilgandim. Lab shaklini judayam tabiiy va nafis qilib berishdi. Atrofdagilar faqat maqsh qilishyapti, minnatdorman!",
    date: "2026-06-25",
    treatment: "Inyeksion Kosmetologiya"
  },
  {
    id: "rev-4",
    name: "Xurshid Ergashev",
    rating: 4,
    comment: "Psoriaz kasalligi bo'yicha Dilshod Ashurovda davolanyapman. Tavsiya etilgan dori-darmonlar va parhez yordamida kasallik sezilarli darajada tinchlandi. Klinikani tavsiya etaman.",
    date: "2026-06-28",
    treatment: "Klinik Dermatologiya"
  }
];
