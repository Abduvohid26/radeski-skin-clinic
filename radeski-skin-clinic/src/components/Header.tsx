import React from "react";
import { motion } from "motion/react";
import logoUrl from "../assets/radeski-logo.svg";

export default function Header() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#c3a05a]/15 bg-burgundy-950/85 px-5 py-6 shadow-[0_20px_45px_rgba(0,0,0,0.2)]">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(195,160,90,0.16),transparent_70%)] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 flex flex-col gap-4"
      >
        <div className="flex items-center justify-center">
          <img
            src={logoUrl}
            alt="Radeski Skin Clinic logo"
            className="h-16 w-auto max-w-full object-contain"
          />
        </div>

        <p className="text-sm font-bold leading-7 text-center text-white">Sizning teringiz eng yaxshi parvarishga loyiq.</p>
      </motion.div>
    </div>
  );
}
