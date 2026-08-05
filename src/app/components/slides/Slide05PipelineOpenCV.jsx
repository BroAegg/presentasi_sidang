"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sliders, Eye, EyeOff, Sparkles } from "lucide-react";

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

const steps = [
  { num: "01", name: "Grayscale", desc: "Konversi RGB ke single-channel", icon: Eye },
  { num: "02", name: "CLAHE", desc: "Ekualisasi histogram adaptif kontras", icon: Sliders },
  { num: "03", name: "Gaussian Blur", desc: "Reduksi noise frekuensi tinggi", icon: EyeOff },
  { num: "04", name: "Otsu Thresholding", desc: "Binarisasi adaptif teks vs background", icon: Sparkles },
];

export default function Slide05PipelineOpenCV() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Pipeline Pra-Pemrosesan (4 Tahapan OpenCV)</h2>
        <p className="slide-subtitle mt-1">Kondisioning Citra Digital</p>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center gap-6 mt-4">
        {/* Main Content Paragraph */}
        <motion.div variants={item} className="content-card-gold">
          <p className="text-cream-200 text-sm leading-relaxed">
            Proses pra-pemrosesan citra merupakan prasyarat mutlak sebelum Tesseract bekerja. Sistem menerapkan konversi Grayscale, Ekualisasi Histogram (CLAHE), reduksi derau (Gaussian Blur), dan binarisasi adaptif (Otsu). Kombinasi ini sukses memisahkan teks gelap secara tegas dari latar belakang terang laminasi KTP.
          </p>
        </motion.div>

        {/* 4-Step Horizontal Process Bar */}
        <motion.div variants={item} className="grid grid-cols-4 gap-3 items-center">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex items-center gap-2">
                <div className="content-card flex-1 p-4 text-left relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gold-400 font-mono">{step.num}</span>
                    <Icon size={16} className="text-cream-300 opacity-60" />
                  </div>
                  <h4 className="text-sm font-bold text-cream-100 mb-1">{step.name}</h4>
                  <p className="text-[0.75rem] text-cream-300 leading-snug">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight size={16} className="text-gold-400 opacity-60 flex-shrink-0" />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
}
