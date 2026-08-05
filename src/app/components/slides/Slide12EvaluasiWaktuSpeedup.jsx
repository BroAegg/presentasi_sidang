"use client";

import { motion } from "framer-motion";
import { Gauge, Clock, Zap, CheckCircle2 } from "lucide-react";

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
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Evaluasi Efisiensi Waktu &amp; Speedup Ratio</h2>
        <p className="slide-subtitle mt-0.5">
          Perbandingan kuantitatif durasi pengisian formulir manual vs sistem OCR Autofill
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-4 mt-2 items-stretch min-h-0 overflow-hidden">
        {/* Left Column: Metrics & Formula */}
        <div className="col-span-6 flex flex-col justify-between gap-2.5">
          {/* Main Speedup Callout */}
          <motion.div variants={item} className="content-card-gold p-3.5 flex items-center justify-between">
            <div>
              <span className="text-[0.68rem] text-gold-400 font-bold uppercase tracking-wider block">Efisiensi Kecepatan Pendaftaran</span>
              <p className="text-2xl font-black text-cream-100 font-mono mt-0.5">3.66× Lebih Cepat</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
              <Zap size={24} />
            </div>
          </motion.div>

          {/* Time Duration Cards */}
          <motion.div variants={item} className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
              <span className="text-[0.68rem] text-red-400 uppercase font-bold block">Input Manual</span>
              <span className="text-xl font-mono font-bold text-cream-100">120.00 Detik</span>
              <p className="text-[0.68rem] text-cream-300 mt-0.5">Rata-rata ngetik manual 2 menit</p>
            </div>
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[0.68rem] text-emerald-400 uppercase font-bold block">Autofill OCR</span>
              <span className="text-xl font-mono font-bold text-cream-100">32.77 Detik</span>
              <p className="text-[0.68rem] text-cream-300 mt-0.5">Ekstraksi otomatis Tesseract</p>
            </div>
          </motion.div>

          {/* Speedup Formula Box */}
          <motion.div variants={item} className="content-card p-3 font-mono text-xs">
            <span className="text-[0.68rem] text-gold-400 uppercase font-bold block mb-1">Rumus Speedup Ratio</span>
            <div className="p-2 rounded bg-black/40 text-cream-100 text-center font-bold">
              Speedup = T_manual / T_autofill = 120.00 / 32.77 = 3.66×
            </div>
          </motion.div>
        </div>

        {/* Right Column: Speedup Image Asset (Auto-supports .jpeg, .png, .jpg) */}
        <motion.div variants={item} className="col-span-6 flex items-center justify-center overflow-hidden">
          <div className="image-placeholder w-full h-[320px] max-h-[55vh] rounded-xl flex items-center justify-center p-2.5 bg-black/40 border border-white/10 overflow-hidden">
            <img
              src="/assets/slide11.jpeg"
              alt="Tabel Speedup Ratio Slide 11"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
              onError={(e) => {
                if (!e.target.dataset.triedPng) {
                  e.target.dataset.triedPng = "true";
                  e.target.src = "/assets/slide11.png";
                } else if (!e.target.dataset.triedJpg) {
                  e.target.dataset.triedJpg = "true";
                  e.target.src = "/assets/slide11.jpg";
                } else if (!e.target.dataset.triedOld) {
                  e.target.dataset.triedOld = "true";
                  e.target.src = "/assets/tabel-speedup.jpeg";
                } else {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">slide11.jpeg</span>';
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
