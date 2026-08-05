"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Lightbulb } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const points = [
  {
    icon: AlertTriangle,
    label: "Masalah",
    text: "Pengisian data identitas PMB masih manual.",
    accent: "text-red-400",
    bg: "rgba(239, 68, 68, 0.08)",
    border: "rgba(239, 68, 68, 0.2)",
  },
  {
    icon: Clock,
    label: "Dampak",
    text: "Rentan kesalahan ketik (human error) dan memakan waktu lama.",
    accent: "text-amber-400",
    bg: "rgba(251, 191, 36, 0.08)",
    border: "rgba(251, 191, 36, 0.2)",
  },
  {
    icon: Lightbulb,
    label: "Solusi",
    text: "Ekstraksi data KTP otomatis menggunakan Optical Character Recognition (OCR).",
    accent: "text-emerald-400",
    bg: "rgba(52, 211, 153, 0.08)",
    border: "rgba(52, 211, 153, 0.2)",
  },
];

export default function Slide02LatarBelakang() {
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
        <h2 className="slide-title">Latar Belakang & Permasalahan</h2>
        <p className="slide-subtitle mt-1">
          Identifikasi masalah dan proposisi solusi
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex items-center mt-6">
        <div className="grid grid-cols-1 gap-5 w-full max-w-4xl mx-auto">
          {points.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-xl p-5 flex items-start gap-5"
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                }}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${item.accent}`}
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider mb-1 ${item.accent}`}
                  >
                    {item.label}
                  </p>
                  <p className="text-cream-200 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
