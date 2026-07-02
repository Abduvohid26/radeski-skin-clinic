import React from "react";
import { CLINIC_INFO } from "../data";
import { Phone, Send, Instagram, Globe, MapPin } from "lucide-react";
import { motion } from "motion/react";

interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
  secondaryText?: string;
}

export default function LinksTab() {
  const links: LinkItem[] = [
    {
      id: "phone-1",
      title: "Telefon",
      subtitle: CLINIC_INFO.phoneDisplay,
      secondaryText: "",
      icon: <Phone className="w-6 h-6 text-[#c3a05a]" />,
      action: () => window.location.href = `tel:${CLINIC_INFO.phone.replace(/\s+/g, "")}`,
    },
    {
      id: "phone-2",
      title: "Telefon",
      subtitle: CLINIC_INFO.phoneDisplay2,
      secondaryText: "",
      icon: <Phone className="w-6 h-6 text-[#c3a05a]" />,
      action: () => window.location.href = `tel:${CLINIC_INFO.phone2.replace(/\s+/g, "")}`,
    },
    {
      id: "telegram",
      title: "Telegram",
      subtitle: `@${CLINIC_INFO.telegramUsername}`,
      secondaryText: "",
      icon: <Send className="w-6 h-6 text-[#c3a05a]" />,
      action: () => window.open(`https://t.me/${CLINIC_INFO.telegramUsername}`, "_blank"),
    },
    {
      id: "instagram",
      title: "Instagram",
      subtitle: `@${CLINIC_INFO.instagramUsername}`,
      secondaryText: "",
      icon: <Instagram className="w-6 h-6 text-[#c3a05a]" />,
      action: () => window.open(`https://instagram.com/${CLINIC_INFO.instagramUsername}`, "_blank"),
    },
    {
      id: "website",
      title: "Veb-sayt",
      subtitle: CLINIC_INFO.web.replace("https://", ""),
      secondaryText: "",
      icon: <Globe className="w-6 h-6 text-[#c3a05a]" />,
      action: () => window.open(CLINIC_INFO.web, "_blank"),
    },
    {
      id: "address-1",
      title: "Manzil Farg'ona",
      subtitle: CLINIC_INFO.addressFergana,
      secondaryText: "",
      icon: <MapPin className="w-6 h-6 text-[#c3a05a]" />,
      action: () => window.open(CLINIC_INFO.mapUrlFergana, "_blank"),
    },
    {
      id: "address-2",
      title: "Manzil Qo'qon",
      subtitle: CLINIC_INFO.addressKokand,
      secondaryText: "",
      icon: <MapPin className="w-6 h-6 text-[#c3a05a]" />,
      action: () => window.open(CLINIC_INFO.mapUrlKokand, "_blank"),
    },
  ];

  return (
    <div className="space-y-4">
      {links.map((link, idx) => (
        <motion.button
          key={link.id}
          onClick={link.action}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          className="group w-full rounded-[26px] border border-[#c3a05a]/20 bg-[#1d0507] px-4 py-4 text-left shadow-[0_18px_40px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#c3a05a]/40"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-[#c3a05a]/10 text-[#c3a05a] ring-1 ring-[#c3a05a]/15 transition-colors duration-200 group-hover:bg-[#c3a05a]/15">
              {link.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-base text-[#c3a05a]">{link.title}</p>
              <p className="mt-1 text-sm text-white leading-5">{link.subtitle}</p>
              {link.secondaryText && (
                <p className="mt-1 text-xs text-white/80 leading-5">{link.secondaryText}</p>
              )}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
