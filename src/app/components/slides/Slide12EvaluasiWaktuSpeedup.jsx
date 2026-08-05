"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Calculator } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

export default function Slide12EvaluasiWaktuSpeedup() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden justify-between"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Evaluasi Efisiensi Waktu &amp; Speedup Ratio</h2>
        <p className="slide-subtitle mt-1">
          Perbandingan kuantitatif durasi pengisian formulir manual vs sistem OCR Autofill
        </p>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center items-center max-w-4xl mx-auto w-full space-y-4 my-auto">
        {/* Card 1: Main Speedup Ratio Callout */}
        <motion.div variants={item} className="content-card-gold p-5 w-full flex items-center justify-between shadow-2xl">
          <div>
            <span className="text-xs text-gold-400 font-bold uppercase tracking-wider block">Efisiensi Kecepatan Pendaftaran</span>
            <p className="text-4xl font-black text-cream-100 font-mono mt-1">3.66× Lebih Cepat</p>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-gold-400/20 border border-gold-400/50 flex items-center justify-center text-gold-300 shadow-inner">
            <Zap size={32} />
          </div>
        </motion.div>

        {/* Card 2: Time Duration Comparison (Manual vs Autofill) */}
        <motion.div variants={item} className="grid grid-cols-2 gap-4 w-full">
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/25 backdrop-blur-md">
            <span className="text-xs text-red-400 uppercase font-bold tracking-wider block">Input Manual (T_manual)</span>
            <p className="text-3xl font-mono font-bold text-cream-100 mt-1">120.00 Detik</p>
            <p className="text-xs text-cream-300 mt-1">Rata-rata pengetikan manual 2 menit per calon mahasiswa</p>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-md">
            <span className="text-xs text-emerald-400 uppercase font-bold tracking-wider block">Autofill OCR (T_autofill)</span>
            <p className="text-3xl font-mono font-bold text-cream-100 mt-1">32.77 Detik</p>
            <p className="text-xs text-cream-300 mt-1">Ekstraksi otomatis Tesseract OCR + transmisi RESTful API</p>
          </div>
        </motion.div>

        {/* Card 3: Speedup Ratio Math Formula Box */}
        <motion.div variants={item} className="content-card p-4 w-full font-mono">
          <div className="flex items-center gap-2 mb-2 text-gold-400">
            <Calculator size={16} />
            <span className="text-xs uppercase font-bold tracking-wider">Rumus Speedup Ratio</span>
          </div>
          <div className="p-3 rounded-xl bg-black/60 border border-white/10 text-cream-100 text-center font-bold text-sm tracking-wide">
            {"Speedup = T_manual / T_autofill = 120.00s / 32.77s = 3.66×"}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
