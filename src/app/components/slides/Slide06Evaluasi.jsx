"use client";

import { motion } from "framer-motion";
import { BarChart3, AlertCircle } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

export default function Slide06Evaluasi() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Evaluasi Peladen (Kelemahan Tesseract)</h2>
        <p className="slide-subtitle mt-1">
          Pengujian Batch: 50 dataset citra dummy KTP (Kondisi Ideal, Noise, Tilt)
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Left */}
          <div className="flex flex-col gap-4">
            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-2 gap-4">
              <div className="content-card text-center py-5">
                <p className="stat-value text-red-400" style={{ textShadow: "0 0 20px rgba(239,68,68,0.25)" }}>70,25%</p>
                <p className="stat-label mt-1">CER NIK</p>
              </div>
              <div className="content-card text-center py-5">
                <p className="stat-value text-red-400" style={{ textShadow: "0 0 20px rgba(239,68,68,0.25)" }}>78,65%</p>
                <p className="stat-label mt-1">CER Nama</p>
              </div>
            </motion.div>

            {/* Hasil */}
            <motion.div variants={item}>
              <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: "rgba(239,68,68,0.06)", border: "1px solid rgba(239,68,68,0.15)", backdropFilter: "blur(8px)" }}>
                <BarChart3 size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">Hasil</p>
                  <p className="text-cream-200 text-sm leading-relaxed">
                    Rata-rata kegagalan tinggi. Akurasi ekstraksi sangat rendah pada kondisi non-ideal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Analisis */}
            <motion.div variants={item}>
              <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.15)", backdropFilter: "blur(8px)" }}>
                <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">Analisis</p>
                  <p className="text-cream-200 text-sm leading-relaxed">
                    Tesseract sangat rentan terhadap variasi pencahayaan (glare) dan
                    kemiringan perspektif ekstrem. Beban rotasi otomatis (auto-rotate)
                    membuat server timeout.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Graph */}
          <motion.div variants={item} className="flex items-center">
            <div className="image-placeholder w-full h-full min-h-[250px] rounded-xl">
              <img
                src="/assets/grafik-cer.png"
                alt="Grafik CER"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">grafik-cer.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
