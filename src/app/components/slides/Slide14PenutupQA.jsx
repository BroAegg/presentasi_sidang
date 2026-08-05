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
      className="flex flex-col items-center justify-center h-full text-center gap-4 px-4"
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
        style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}
      >
        Terima Kasih
      </motion.h2>

      {/* Subtitle */}
      <motion.div variants={item} className="flex items-center gap-3 text-cream-300">
        <MessageCircle size={20} className="text-gold-400" style={{ filter: "drop-shadow(0 0 10px rgba(212,168,83,0.4))" }} />
        <p className="text-lg tracking-wide font-medium">Sesi Tanya Jawab Dewan Penguji</p>
      </motion.div>

      {/* Optional Slide 13 Image Container (Primary: slide13.jpeg) */}
      <motion.div variants={item} className="w-full max-w-lg">
        <div className="image-placeholder w-full h-auto min-h-[160px] rounded-xl flex items-center justify-center p-2">
          <img
            src="/assets/slide13.jpeg"
            alt="Penutup Slide 13"
            className="w-full max-h-48 object-contain"
            onError={(e) => {
              if (!e.target.dataset.triedPng) {
                e.target.dataset.triedPng = "true";
                e.target.src = "/assets/slide13.png";
              } else if (!e.target.dataset.triedJpg) {
                e.target.dataset.triedJpg = "true";
                e.target.src = "/assets/slide13.jpg";
              } else if (!e.target.dataset.triedOld) {
                e.target.dataset.triedOld = "true";
                e.target.src = "/assets/penutup.jpeg";
              } else {
                e.target.style.display = "none";
              }
            }}
          />
        </div>
      </motion.div>

      {/* Author Card */}
      <motion.div variants={item} className="mt-1">
        <div className="content-card-gold px-8 py-3 inline-block text-center">
          <div className="flex items-center justify-center gap-2 mb-1 text-gold-400">
            <GraduationCap size={18} />
            <span className="text-xs uppercase tracking-widest font-semibold">Presenter / Author</span>
          </div>
          <p className="text-cream-100 font-bold text-base">Aegner Billik</p>
          <p className="glow-text-gold text-xs mt-0.5 font-mono font-semibold">NIM: 220102007</p>
          <p className="text-cream-300 text-[0.7rem] mt-0.5">Program Studi Teknik Informatika — Universitas Muhammadiyah Bandung</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
