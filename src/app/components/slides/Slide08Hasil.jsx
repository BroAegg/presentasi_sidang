"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Timer, TrendingUp } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Slide08Hasil() {
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
        <h2 className="slide-title">Hasil Akhir & Kesimpulan</h2>
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center gap-6 mt-4">
        {/* Conclusion Cards */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div variants={fadeUp} className="content-card-gold">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                  Kesimpulan 1
                </p>
                <p className="text-cream-200 text-sm leading-relaxed">
                  Pendekatan UI Constraint terbukti sukses menutupi kelemahan
                  inheren arsitektur dasar Tesseract OCR.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="content-card-gold">
            <div className="flex items-start gap-3">
              <Zap size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                  Kesimpulan 2
                </p>
                <p className="text-cream-200 text-sm leading-relaxed">
                  Autofill (NIK, Nama, Alamat) tereksekusi presisi tanpa
                  membebani server.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
          <div className="content-card text-center py-6">
            <div className="flex justify-center mb-2">
              <Timer size={20} className="text-gold-400" />
            </div>
            <p className="stat-value text-gold-400" style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}>
              32,77s
            </p>
            <p className="stat-label mt-1">Waktu Komputasi</p>
          </div>

          <div className="content-card text-center py-6">
            <div className="flex justify-center mb-2">
              <TrendingUp size={20} className="text-emerald-400" />
            </div>
            <p className="stat-value text-emerald-400" style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}>
              3,66x
            </p>
            <p className="stat-label mt-1">Speedup Ratio</p>
          </div>

          <div className="content-card text-center py-6">
            <div className="flex justify-center mb-2">
              <Zap size={20} className="text-amber-400" />
            </div>
            <p className="stat-value text-amber-400" style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)" }}>
              120s → 32s
            </p>
            <p className="stat-label mt-1">Manual → Otomatis</p>
          </div>
        </motion.div>

        {/* Summary bar */}
        <motion.div variants={fadeUp}>
          <div
            className="rounded-xl p-4 text-center"
            style={{
              background: "rgba(52, 211, 153, 0.08)",
              border: "1px solid rgba(52, 211, 153, 0.2)",
            }}
          >
            <p className="text-cream-200 text-sm">
              Memangkas proses manual{" "}
              <span className="text-emerald-400 font-semibold">120 detik</span>{" "}
              menjadi otomatis{" "}
              <span className="text-emerald-400 font-semibold">32,77 detik</span>
              {" "}— peningkatan efisiensi signifikan.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
