"use client";

import { motion } from "framer-motion";
import { Gauge, Clock, Zap, CheckCircle2, Timer, ArrowDownRight } from "lucide-react";

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

      <div className="flex-1 grid grid-cols-12 gap-5 mt-3 items-stretch overflow-hidden">
        {/* Left Column: Metrics & Formula */}
        <div className="col-span-6 flex flex-col justify-between gap-3">
          {/* Main Speedup Callout */}
          <motion.div variants={item} className="content-card-gold p-4 flex items-center justify-between">
            <div>
              <span className="text-[0.68rem] text-gold-400 font-bold uppercase tracking-wider block">Efisiensi Kecepatan Pendaftaran</span>
              <p className="text-3xl font-black text-cream-100 font-mono mt-0.5">3.66× Lebih Cepat</p>
            </div>
            <div className="w-14 h-14 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-300">
              <Zap size={28} />
            </div>
          </motion.div>

          {/* Time Duration Cards */}
          <motion.div variants={item} className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20">
              <span className="text-[0.68rem] text-red-400 uppercase font-bold block">Input Manual (T_manual)</span>
              <span className="text-2xl font-mono font-bold text-cream-100">120.00 Detik</span>
              <p className="text-[0.68rem] text-cream-300 mt-1">Rata-rata pengetikan manual 2 menit</p>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-[0.68rem] text-emerald-400 uppercase font-bold block">Autofill OCR (T_autofill)</span>
              <span className="text-2xl font-mono font-bold text-cream-100">32.77 Detik</span>
              <p className="text-[0.68rem] text-cream-300 mt-1">Ekstraksi otomatis Tesseract + API</p>
            </div>
          </motion.div>

          {/* Speedup Formula Box */}
          <motion.div variants={item} className="content-card p-3 font-mono text-xs">
            <span className="text-[0.68rem] text-gold-400 uppercase font-bold block mb-1">Rumus Speedup Ratio</span>
            <div className="p-2.5 rounded bg-black/40 text-cream-100 text-center font-bold">
              {"Speedup = T_manual / T_autofill = 120.00s / 32.77s = 3.66×"}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Time Savings Breakdown (No Image Needed!) */}
        <div className="col-span-6 flex flex-col justify-between gap-3">
          <motion.div variants={item} className="content-card p-4 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400">
              <div className="flex items-center gap-2">
                <Timer size={18} />
                <h3 className="text-xs font-bold uppercase tracking-wider text-cream-100">Rincian Hemat Waktu Komputasi</h3>
              </div>
              <span className="text-[0.62rem] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Hemat 87.23 Detik
              </span>
            </div>

            <div className="space-y-2.5 my-2">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-cream-200">Processing Preprocessing OpenCV (Backend):</span>
                <span className="font-mono font-bold text-cyan-300">~0.85 detik</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-cream-200">Tesseract OCR Text Extraction:</span>
                <span className="font-mono font-bold text-cyan-300">~1.42 detik</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                <span className="text-cream-200">Network Latency &amp; Autofill Form PMB:</span>
                <span className="font-mono font-bold text-cyan-300">~30.50 detik</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <span className="text-[0.68rem] text-emerald-400 font-bold uppercase tracking-wider block">Total Penghematan Waktu</span>
                <p className="text-xs text-cream-200 mt-0.5">Pengisian formulir <strong>72.7% lebih cepat</strong> daripada ngetik manual.</p>
              </div>
              <ArrowDownRight size={24} className="text-emerald-400 flex-shrink-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
