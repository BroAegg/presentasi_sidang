"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, TestTube, ArrowRight, RefreshCw } from "lucide-react";

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

const steps = [
  { icon: Search, label: "Analisis\nKebutuhan" },
  { icon: PenTool, label: "Desain\nSistem" },
  { icon: Code, label: "Implementasi" },
  { icon: TestTube, label: "Pengujian" },
];

export default function Slide03Metodologi() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Metodologi Penelitian</h2>
        <p className="slide-subtitle mt-1">Waterfall dengan Feedback Loop</p>
      </motion.div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        {/* Flow Steps */}
        <motion.div variants={item} className="flex items-center gap-3 flex-wrap justify-center">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="content-card flex flex-col items-center gap-2 px-6 py-4 min-w-[120px]">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center text-gold-400" style={{ background: "rgba(212, 168, 83, 0.1)", border: "1px solid rgba(212, 168, 83, 0.15)" }}>
                    <Icon size={20} />
                  </div>
                  <p className="text-cream-200 text-xs text-center whitespace-pre-line font-medium">
                    {step.label}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div className="flow-arrow">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>

        {/* Feedback Loop */}
        <motion.div variants={item} className="flex items-center gap-3 text-gold-400">
          <RefreshCw size={16} className="animate-[spin_4s_linear_infinite]" />
          <span className="text-xs tracking-wider uppercase text-cream-300">
            Feedback Loop — Iterasi perbaikan arsitektur & Regex
          </span>
        </motion.div>

        {/* Keunggulan */}
        <motion.div variants={item} className="max-w-2xl w-full">
          <div className="content-card-gold">
            <p className="text-xs font-semibold glow-text-gold uppercase tracking-wider mb-2">
              Keunggulan Metode
            </p>
            <p className="text-cream-200 text-sm leading-relaxed">
              Memungkinkan iterasi perbaikan arsitektur dan Regex berdasarkan
              hasil evaluasi metrik skala kecil. Setiap fase dapat ditinjau ulang
              sebelum melanjutkan ke tahap berikutnya.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
