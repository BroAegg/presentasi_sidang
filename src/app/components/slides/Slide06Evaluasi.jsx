"use client";

import { motion } from "framer-motion";
import { BarChart3, AlertCircle } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Slide06Evaluasi() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={fadeUp}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Evaluasi Peladen (Kelemahan Tesseract)</h2>
        <p className="slide-subtitle mt-1">
          Pengujian Batch: 50 dataset citra dummy KTP (Kondisi Ideal, Noise, Tilt)
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Left: Stats + Analysis */}
          <div className="flex flex-col gap-4">
            {/* Stats Row */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
              <div className="content-card text-center py-5">
                <p className="stat-value text-red-400">70,25%</p>
                <p className="stat-label mt-1">CER NIK</p>
              </div>
              <div className="content-card text-center py-5">
                <p className="stat-value text-red-400">78,65%</p>
                <p className="stat-label mt-1">CER Nama</p>
              </div>
            </motion.div>

            {/* Hasil */}
            <motion.div variants={fadeUp}>
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                }}
              >
                <BarChart3 size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                    Hasil
                  </p>
                  <p className="text-cream-200 text-sm leading-relaxed">
                    Rata-rata kegagalan tinggi. Akurasi ekstraksi sangat rendah
                    pada kondisi non-ideal.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Analisis */}
            <motion.div variants={fadeUp}>
              <div
                className="rounded-xl p-4 flex items-start gap-3"
                style={{
                  background: "rgba(251, 191, 36, 0.08)",
                  border: "1px solid rgba(251, 191, 36, 0.2)",
                }}
              >
                <AlertCircle size={18} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    Analisis
                  </p>
                  <p className="text-cream-200 text-sm leading-relaxed">
                    Tesseract sangat rentan terhadap variasi pencahayaan (glare) dan
                    kemiringan perspektif ekstrem. Beban rotasi otomatis (auto-rotate)
                    membuat server timeout.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Graph Image */}
          <motion.div variants={fadeUp} className="flex items-center">
            <div className="image-placeholder w-full h-full min-h-[250px] rounded-xl">
              <img
                src="/assets/grafik-cer.png"
                alt="Grafik CER"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span class="text-cream-300 text-xs">grafik-cer.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
