"use client";

import { motion } from "framer-motion";
import { MessageCircle, GraduationCap } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
};

export default function Slide14PenutupQA() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center gap-6 px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Gold Divider */}
      <motion.div variants={item}>
        <div className="slide-heading-accent mx-auto w-20" />
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={item}
        className="slide-title glow-gold"
        style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
      >
        Terima Kasih
      </motion.h2>

      {/* Subtitle */}
      <motion.div variants={item} className="flex items-center gap-3 text-cream-300">
        <MessageCircle size={24} className="text-gold-400" style={{ filter: "drop-shadow(0 0 10px rgba(212,168,83,0.4))" }} />
        <p className="text-xl tracking-wide font-medium">Sesi Tanya Jawab Dewan Penguji</p>
      </motion.div>

      {/* Author Card */}
      <motion.div variants={item} className="mt-2">
        <div className="content-card-gold px-10 py-4 inline-block text-center">
          <div className="flex items-center justify-center gap-2 mb-1 text-gold-400">
            <GraduationCap size={20} />
            <span className="text-xs uppercase tracking-widest font-semibold">Presenter / Author</span>
          </div>
          <p className="text-cream-100 font-bold text-lg">Aegner Billik</p>
          <p className="glow-text-gold text-sm mt-0.5 font-mono font-semibold">NIM: 220102007</p>
          <p className="text-cream-300 text-xs mt-1">Program Studi Teknik Informatika — Universitas Muhammadiyah Bandung</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
