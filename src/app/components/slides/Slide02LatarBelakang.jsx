"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Lightbulb } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.05 },
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

const points = [
  {
    icon: AlertTriangle,
    label: "Masalah",
    text: "Pengisian data identitas PMB masih manual.",
    accent: "text-red-400",
    bg: "rgba(239, 68, 68, 0.06)",
    border: "rgba(239, 68, 68, 0.15)",
  },
  {
    icon: Clock,
    label: "Dampak",
    text: "Rentan kesalahan ketik (human error) dan memakan waktu lama.",
    accent: "text-amber-400",
    bg: "rgba(251, 191, 36, 0.06)",
    border: "rgba(251, 191, 36, 0.15)",
  },
  {
    icon: Lightbulb,
    label: "Solusi",
    text: "Ekstraksi data KTP otomatis menggunakan Optical Character Recognition (OCR).",
    accent: "text-emerald-400",
    bg: "rgba(52, 211, 153, 0.06)",
    border: "rgba(52, 211, 153, 0.15)",
  },
];

export default function Slide02LatarBelakang() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Latar Belakang & Permasalahan</h2>
        <p className="slide-subtitle mt-1">
          Identifikasi masalah dan proposisi solusi
        </p>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex items-center mt-6">
        <div className="grid grid-cols-1 gap-5 w-full max-w-4xl mx-auto">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="rounded-xl p-5 flex items-start gap-5"
                style={{
                  background: p.bg,
                  border: `1px solid ${p.border}`,
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${p.accent}`}
                  style={{
                    background: p.bg,
                    border: `1px solid ${p.border}`,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${p.accent}`}>
                    {p.label}
                  </p>
                  <p className="text-cream-200 text-sm leading-relaxed">
                    {p.text}
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
