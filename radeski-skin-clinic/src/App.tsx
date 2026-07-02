import React from "react";
import Header from "./components/Header";
import LinksTab from "./components/LinksTab";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#2c080c_0%,#120204_55%,#1a0406_100%)] text-gold-100 flex items-center justify-center px-4 py-6">
      <div className="relative w-full max-w-md overflow-hidden rounded-[36px] border border-gold-400/15 bg-liquid shadow-[0_40px_90px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.1),transparent_55%)],linear-gradient(90deg,rgba(212,175,55,0.08),transparent_30%,rgba(212,175,55,0.08))" />
        <div className="relative p-6 sm:p-8">
          <Header />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-6"
          >
            <LinksTab />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
