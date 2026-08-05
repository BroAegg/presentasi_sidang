"use client";

import { motion } from "framer-motion";
import { Layers, CheckCircle2, Eye } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

const steps = [
  {
    num: "01",
    name: "Grayscale Conversion",
    desc: "Mengubah citra RGB 3-channel menjadi 1-channel skala abu-abu untuk mereduksi beban komputasi.",
    tag: "Luminance Weighting",
    accent: "text-gold-400 border-gold-400/30 bg-gold-400/10",
  },
  {
    num: "02",
    name: "CLAHE Equalization",
    desc: "Meningkatkan kontras lokal secara adaptif untuk memperjelas karakter teks yang pudar.",
    tag: "clipLimit = 2.0",
    accent: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    num: "03",
    name: "Gaussian Blur Filter",
    desc: "Filtering frekuensi tinggi untuk meredam noise sensor kamera dan bintik pantulan cahaya.",
    tag: "Kernel 3x3",
    accent: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    num: "04",
    name: "Otsu's Binarization",
    desc: "Segmentasi threshold bimodal otomatis memisahkan piksel teks hitam dari latar belakang KTP.",
    tag: "THRESH_OTSU",
    accent: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  },
];

export default function Slide06PipelineOpenCVCode() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item} className="mb-2">
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Pipeline Pra-Pemrosesan (4 Tahapan Utama OpenCV)</h2>
        <p className="slide-subtitle">
          Alur Blackbox Kondisioning Citra KTP dari Foto Mentah hingga Citra Biner Siap OCR
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-4 items-stretch min-h-0 overflow-hidden">
        {/* Left Column: 4 Step Functional Cards */}
        <div className="col-span-6 flex flex-col justify-between gap-2 overflow-y-auto no-scrollbar pr-1">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="content-card p-3 flex-1 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs font-bold rounded px-2 py-0.5 border ${s.accent}`}>
                    {s.num}
                  </span>
                  <h4 className="text-xs font-bold text-cream-100">{s.name}</h4>
                </div>
                <span className="font-mono text-[0.62rem] text-cream-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {s.tag}
                </span>
              </div>
              <p className="text-[0.72rem] text-cream-300 leading-snug my-1">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Visual Blackbox Transformation Flow */}
        <motion.div
          variants={item}
          className="col-span-6 content-card p-4 flex flex-col justify-between"
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400">
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span className="font-semibold text-xs text-cream-100">Visual Transformasi Citra (Blackbox View)</span>
              </div>
              <span className="text-[0.62rem] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Input → Preprocessed
              </span>
            </div>

            {/* Blackbox Transformation Visual Box */}
            <div className="my-3 grid grid-cols-2 gap-3 items-center flex-1">
              <div className="p-3 rounded-lg bg-black/40 border border-white/10 flex flex-col items-center justify-center text-center h-full">
                <span className="text-[0.68rem] font-bold text-red-400 uppercase tracking-wider mb-2">Citra Tangkapan Mentah</span>
                <div className="w-16 h-10 rounded border border-red-500/30 bg-red-500/10 flex items-center justify-center text-[0.65rem] font-mono text-cream-200">
                  e-KTP Foto
                </div>
                <p className="text-[0.68rem] text-cream-300 mt-2 leading-tight">
                  Mengandung glare, pencahayaan tidak merata &amp; bayangan
                </p>
              </div>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex flex-col items-center justify-center text-center h-full">
                <span className="text-[0.68rem] font-bold text-emerald-400 uppercase tracking-wider mb-2">Citra Biner Hasil OpenCV</span>
                <div className="w-16 h-10 rounded border border-emerald-500/40 bg-black flex items-center justify-center text-[0.65rem] font-mono text-white font-bold tracking-widest">
                  TEKS BINER
                </div>
                <p className="text-[0.68rem] text-cream-300 mt-2 leading-tight">
                  Teks hitam terisolasi kontras tinggi siap dibaca Tesseract
                </p>
              </div>
            </div>

            {/* Benefit Footer */}
            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-gold-300">
              <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
              <p className="text-[0.72rem] text-cream-200 leading-tight">
                <strong>Blackbox Benefit:</strong> Memastikan Tesseract menerima citra bersih sehingga meminimalisasi kesalahan baca karakter.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
