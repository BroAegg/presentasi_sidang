"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Calculator } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.05 },
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
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Evaluasi Performa Waktu & Speedup Ratio</h2>
        <p className="slide-subtitle mt-1">
          Pemangkasan inefisiensi pendaftaran mahasiswa baru melalui otomatisasi
        </p>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center gap-5 mt-3">
        <div className="grid grid-cols-12 gap-5 items-stretch">
          {/* Glowing Metric Highlight Card */}
          <motion.div variants={item} className="col-span-5 content-card-gold flex flex-col justify-center items-center text-center p-6">
            <div className="w-14 h-14 rounded-full flex items-center justify-center text-emerald-400 mb-3" style={{ background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.25)" }}>
              <Zap size={28} />
            </div>
            <p className="text-xs uppercase tracking-widest text-cream-300 font-semibold mb-1">Speedup Ratio</p>
            <h3 className="text-5xl font-black text-emerald-400 my-2 font-mono" style={{ textShadow: "0 0 30px rgba(52, 211, 153, 0.4)" }}>
              3.66x
            </h3>
            <p className="text-sm font-semibold text-cream-100 mt-1">Lebih Cepat Dibanding Manual</p>
          </motion.div>

          {/* Math Formula Block & Empirical Simulation Details */}
          <div className="col-span-7 flex flex-col justify-between gap-3">
            {/* Math Formula Card */}
            <motion.div variants={item} className="content-card p-4">
              <div className="flex items-center gap-2 mb-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Calculator size={16} />
                <span>Formulasi Komparasi Efisiensi Waktu (Persamaan 2.16)</span>
              </div>
              <div className="rounded-lg p-3 text-center font-mono text-sm font-bold text-cream-100" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {"Speedup Ratio = T_manual / T_autofill = 120s / 32.77s = 3.66x"}
              </div>
            </motion.div>

            {/* Empirical Simulation Breakdown */}
            <motion.div variants={item} className="content-card p-4">
              <div className="flex items-center gap-2 mb-2 text-cream-300 text-xs font-semibold">
                <Clock size={16} className="text-amber-400" />
                <span>Hasil Pengukuran Durasi Rata-rata</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded bg-red-500/10 border border-red-500/20">
                  <span className="text-[0.7rem] text-red-400 uppercase font-bold block">Input Manual (T_manual)</span>
                  <span className="text-base font-mono font-bold text-cream-100">120.00 Detik</span>
                  <p className="text-[0.7rem] text-cream-300 mt-0.5">Pengetikan manual formulir oleh calon mahasiswa</p>
                </div>
                <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[0.7rem] text-emerald-400 uppercase font-bold block">Autofill OCR (T_autofill)</span>
                  <span className="text-base font-mono font-bold text-cream-100">32.77 Detik</span>
                  <p className="text-[0.7rem] text-cream-300 mt-0.5">Ekstraksi otomatis Tesseract + API latency</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
