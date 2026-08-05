"use client";

import { motion } from "framer-motion";
import { AlertCircle, BarChart2, Terminal } from "lucide-react";

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

export default function Slide08EvaluasiPeladen() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Evaluasi Peladen: Keterbatasan Mesin Dasar Tesseract</h2>
        <p className="slide-subtitle mt-1">
          Pengujian Batch 50 Dataset citra e-KTP (5 KTP $\times$ 10 variasi skenario)
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: Stat Cards & Error Examples */}
          <div className="col-span-6 flex flex-col justify-between gap-3">
            {/* 4 Stat Metrics */}
            <motion.div variants={item} className="grid grid-cols-2 gap-3">
              <div className="rounded-xl p-3.5 text-center bg-red-500/10 border border-red-500/20 backdrop-blur-md">
                <p className="text-2xl font-black text-red-400 font-mono">70.25%</p>
                <p className="text-[0.7rem] font-semibold text-cream-200 mt-1 uppercase">Rata-rata CER NIK</p>
              </div>
              <div className="rounded-xl p-3.5 text-center bg-red-500/10 border border-red-500/20 backdrop-blur-md">
                <p className="text-2xl font-black text-red-400 font-mono">78.65%</p>
                <p className="text-[0.7rem] font-semibold text-cream-200 mt-1 uppercase">Rata-rata CER Nama</p>
              </div>
              <div className="rounded-xl p-3.5 text-center bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                <p className="text-2xl font-black text-emerald-400 font-mono">8% (4/50)</p>
                <p className="text-[0.7rem] font-semibold text-cream-200 mt-1 uppercase">Akurasi Sempurna NIK</p>
              </div>
              <div className="rounded-xl p-3.5 text-center bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                <p className="text-2xl font-black text-emerald-400 font-mono">14% (7/50)</p>
                <p className="text-[0.7rem] font-semibold text-cream-200 mt-1 uppercase">Akurasi Sempurna Nama</p>
              </div>
            </motion.div>

            {/* Error Examples Table */}
            <motion.div variants={item} className="content-card p-3">
              <div className="flex items-center gap-1.5 mb-2 text-red-400 text-xs font-bold uppercase tracking-wider">
                <AlertCircle size={14} />
                <span>Contoh Degradasi Tesseract pada Citra Non-Ideal</span>
              </div>
              <div className="space-y-1.5 text-[0.7rem] font-mono">
                <div className="p-2 rounded bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-cream-300">ktp1_foto06 (UJANG SURYADI)</span>
                  <span className="text-red-400 font-bold">❌ + DSSS ERS COE TRS RR |</span>
                </div>
                <div className="p-2 rounded bg-black/40 border border-white/10 flex justify-between">
                  <span className="text-cream-300">ktp1_foto10 (UJANG SURYADI)</span>
                  <span className="text-red-400 font-bold">❌ DAN RA ATK TANDA, HAK SUARA</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Terminal Output Image */}
          <motion.div variants={item} className="col-span-6 flex items-center">
            <div className="image-placeholder w-full h-full min-h-[270px] rounded-xl flex items-center justify-center p-3">
              <img
                src="/assets/batch-terminal.png"
                alt="Eksekusi Terminal Batch 50 Dataset"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">batch-terminal.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
