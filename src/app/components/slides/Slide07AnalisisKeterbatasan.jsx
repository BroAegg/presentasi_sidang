"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
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

const stats = [
  {
    label: "Rata-rata CER NIK",
    value: "70.25%",
    color: "text-red-400",
    shadow: "0 0 20px rgba(239, 68, 68, 0.25)",
    bg: "rgba(239, 68, 68, 0.06)",
    border: "rgba(239, 68, 68, 0.2)",
  },
  {
    label: "Rata-rata CER Nama",
    value: "78.65%",
    color: "text-red-400",
    shadow: "0 0 20px rgba(239, 68, 68, 0.25)",
    bg: "rgba(239, 68, 68, 0.06)",
    border: "rgba(239, 68, 68, 0.2)",
  },
  {
    label: "Akurasi Sempurna NIK",
    value: "8.00%",
    color: "text-emerald-400",
    shadow: "0 0 20px rgba(52, 211, 153, 0.25)",
    bg: "rgba(52, 211, 153, 0.06)",
    border: "rgba(52, 211, 153, 0.2)",
  },
  {
    label: "Akurasi Sempurna Nama",
    value: "14.00%",
    color: "text-emerald-400",
    shadow: "0 0 20px rgba(52, 211, 153, 0.25)",
    bg: "rgba(52, 211, 153, 0.06)",
    border: "rgba(52, 211, 153, 0.2)",
  },
];

export default function Slide07AnalisisKeterbatasan() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Analisis Keterbatasan (Evaluasi 50 Dataset)</h2>
        <p className="slide-subtitle mt-1">Uji empiris kondisi tanpa standarisasi pengambilan gambar</p>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center gap-6 mt-4">
        {/* 4 Stats Grid */}
        <motion.div variants={item} className="grid grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-5 text-center flex flex-col justify-center"
              style={{
                background: s.bg,
                border: `1px solid ${s.border}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <p className={`stat-value font-bold ${s.color}`} style={{ textShadow: s.shadow }}>
                {s.value}
              </p>
              <p className="stat-label mt-2 font-medium text-cream-200">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Summary Text Box */}
        <motion.div variants={item}>
          <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: "rgba(251, 191, 36, 0.06)", border: "1px solid rgba(251, 191, 36, 0.2)", backdropFilter: "blur(8px)" }}>
            <AlertCircle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="text-cream-200 text-sm leading-relaxed">
              Evaluasi membuktikan mesin dasar OCR sangat rentan terhadap variasi pencahayaan. Metrik kegagalan (CER) tinggi inilah yang menjustifikasi keharusan implementasi UI Constraint Kamera Sketsa.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
