"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 35, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
};

export default function Slide09Penutup() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center gap-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Gold Divider */}
      <motion.div variants={item}>
        <div className="slide-heading-accent mx-auto w-16" />
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={item}
        className="slide-title glow-gold"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Terima Kasih
      </motion.h2>

      {/* Subtitle */}
      <motion.div variants={item} className="flex items-center gap-3 text-cream-300">
        <MessageCircle size={20} className="text-gold-400" style={{ filter: "drop-shadow(0 0 8px rgba(212,168,83,0.3))" }} />
        <p className="text-lg tracking-wide">Sesi Tanya Jawab</p>
      </motion.div>

      {/* Presenter Card */}
      <motion.div variants={item} className="mt-4">
        <div className="content-card-gold px-10 py-4 inline-block">
          <p className="text-cream-100 font-medium text-base">Aegner Billik</p>
          <p className="glow-text-gold text-sm mt-0.5 font-mono">220102007</p>
          <p className="text-cream-300 text-xs mt-1">Universitas Muhammadiyah Bandung</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
