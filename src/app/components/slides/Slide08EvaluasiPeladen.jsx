"use client";

import { motion } from "framer-motion";
import { AlertCircle, Clock, ArrowDown } from "lucide-react";

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
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Evaluasi Performa Peladen Baseline: Keterbatasan Tesseract OCR</h2>
        <p className="slide-subtitle mt-0.5">
          Pengujian Batch 50 Sampel Dataset Citra e-KTP (5 Sampel × 10 Variasi Skenario)
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-5 mt-3 items-stretch overflow-hidden">
        {/* Left Column: Stat Cards & Error Examples */}
        <div className="col-span-6 flex flex-col justify-between gap-3">
          {/* 4 Stat Metrics */}
          <motion.div variants={item} className="grid grid-cols-2 gap-3">
            <div className="rounded-xl p-3 text-center bg-red-500/10 border border-red-500/20 backdrop-blur-md flex flex-col justify-center">
              <p className="text-2xl font-black text-red-400 font-mono">70.25%</p>
              <p className="text-[0.68rem] font-semibold text-cream-200 uppercase mt-0.5">Rata-rata CER NIK</p>
            </div>
            <div className="rounded-xl p-3 text-center bg-red-500/10 border border-red-500/20 backdrop-blur-md flex flex-col justify-center">
              <p className="text-2xl font-black text-red-400 font-mono">78.65%</p>
              <p className="text-[0.68rem] font-semibold text-cream-200 uppercase mt-0.5">Rata-rata CER Nama</p>
            </div>
            <div className="rounded-xl p-3 text-center bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex flex-col justify-center">
              <p className="text-2xl font-black text-emerald-400 font-mono">8% (4/50)</p>
              <p className="text-[0.68rem] font-semibold text-cream-200 uppercase mt-0.5">Presisi Sempurna NIK</p>
            </div>
            <div className="rounded-xl p-3 text-center bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md flex flex-col justify-center">
              <p className="text-2xl font-black text-emerald-400 font-mono">14% (7/50)</p>
              <p className="text-[0.68rem] font-semibold text-cream-200 uppercase mt-0.5">Presisi Sempurna Nama</p>
            </div>
          </motion.div>

          {/* Error Examples Table */}
          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-1.5 text-red-400 text-xs font-bold uppercase tracking-wider">
              <AlertCircle size={14} />
              <span>Contoh Kegagalan Ekstraksi Karakter pada Citra Non-Standar</span>
            </div>
            <div className="space-y-1.5 text-[0.68rem] font-mono">
              <div className="p-2 rounded bg-black/40 border border-white/10 flex justify-between items-center">
                <span className="text-cream-300">ktp1_foto06 (UJANG SURYADI)</span>
                <span className="text-red-400 font-bold">❌ + DSSS ERS COE TRS RR |</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/10 flex justify-between items-center">
                <span className="text-cream-300">ktp2_foto07 (SITI AMINAH)</span>
                <span className="text-red-400 font-bold">❌ WT AMINAH FA HC RS AA...</span>
              </div>
              <div className="p-2 rounded bg-black/40 border border-white/10 flex justify-between items-center">
                <span className="text-cream-300">ktp1_foto10 (UJANG SURYADI)</span>
                <span className="text-red-400 font-bold">❌ DAN RA ATK TANDA, HAK SUARA</span>
              </div>
            </div>
          </motion.div>

          {/* Batch Summary Card */}
          <motion.div variants={item} className="content-card-gold p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-gold-400" />
              <span className="text-xs text-cream-100 font-semibold">Total Durasi Komputasi Batch:</span>
            </div>
            <span className="font-mono text-xs font-bold text-gold-300">1638.39 Detik (32.77s / citra)</span>
          </motion.div>
        </div>

        {/* Right Column: Slide 6 Scrollable Image Container for Long Phone Screenshots */}
        <motion.div variants={item} className="col-span-6 flex flex-col items-center justify-center overflow-hidden">
          <div className="text-[0.65rem] font-mono text-gold-400/90 mb-1 flex items-center gap-1">
            <ArrowDown size={12} className="animate-bounce" />
            <span>Gulir ke bawah untuk melihat gambar HP penuh</span>
          </div>
          <div className="image-placeholder w-full h-[340px] max-h-[55vh] rounded-xl p-2 bg-black/50 border border-gold-400/30 overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col items-center">
            <img
              src="/assets/slide6.jpeg"
              alt="Colab Terminal CER Slide 6"
              className="w-full h-auto object-contain rounded-lg shadow-xl"
              onError={(e) => {
                if (!e.target.dataset.triedPng) {
                  e.target.dataset.triedPng = "true";
                  e.target.src = "/assets/slide6.png";
                } else if (!e.target.dataset.triedJpg) {
                  e.target.dataset.triedJpg = "true";
                  e.target.src = "/assets/slide6.jpg";
                } else if (!e.target.dataset.triedOld) {
                  e.target.dataset.triedOld = "true";
                  e.target.src = "/assets/terminal-colab.jpeg";
                } else {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">slide6.jpeg</span>';
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
