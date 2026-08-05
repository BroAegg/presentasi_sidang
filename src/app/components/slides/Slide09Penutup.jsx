"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Slide09Penutup() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center gap-8"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* Gold Divider */}
      <motion.div variants={fadeUp}>
        <div className="slide-heading-accent mx-auto w-16" />
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="slide-title"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        Terima Kasih
      </motion.h2>

      {/* Subtitle with icon */}
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 text-cream-300"
      >
        <MessageCircle size={20} className="text-gold-400" />
        <p className="text-lg tracking-wide">Sesi Tanya Jawab</p>
      </motion.div>

      {/* Presenter card */}
      <motion.div variants={fadeUp} className="mt-4">
        <div className="content-card-gold px-10 py-4 inline-block">
          <p className="text-cream-100 font-medium text-base">Aegner Billik</p>
          <p className="text-gold-400 text-sm mt-0.5 font-mono">220102007</p>
          <p className="text-cream-300 text-xs mt-1">
            Universitas Muhammadiyah Bandung
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
