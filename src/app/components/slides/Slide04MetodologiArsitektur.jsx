"use client";

import { motion } from "framer-motion";
import { GitBranch, Server, RefreshCw, Layers } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16, delayChildren: 0.05 },
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

export default function Slide04MetodologiArsitektur() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Metodologi & Arsitektur</h2>
        <p className="slide-subtitle mt-1">
          Pendekatan pengembangan sistem dan pemisahan beban komputasi
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-6">
        <div className="grid grid-cols-2 gap-6 w-full items-stretch">
          {/* Column 1: Waterfall with Feedback Loop */}
          <motion.div variants={item} className="content-card flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-gold-400" style={{ background: "rgba(212, 168, 83, 0.1)", border: "1px solid rgba(212, 168, 83, 0.25)" }}>
                  <GitBranch size={20} />
                </div>
                <h3 className="text-base font-bold text-cream-100">Metode Waterfall dengan Feedback Loop</h3>
              </div>
              <p className="text-cream-200 text-sm leading-relaxed mb-4">
                Pengembangan perangkat lunak mengadaptasi model Waterfall klasik. Modifikasi &quot;Feedback Loop&quot; memungkinkan iterasi perbaikan arsitektur berdasarkan hasil temuan pengujian skala kecil sebelum sistem difinalisasi.
              </p>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg text-gold-400 text-xs" style={{ background: "rgba(212, 168, 83, 0.06)", border: "1px solid rgba(212, 168, 83, 0.15)" }}>
              <RefreshCw size={14} className="animate-[spin_4s_linear_infinite]" />
              <span>Iteratif perbaikan berbasis evaluasi metrik skala kecil</span>
            </div>
          </motion.div>

          {/* Column 2: Client-Server Architecture */}
          <motion.div variants={item} className="content-card flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-cyan-400" style={{ background: "rgba(34, 211, 238, 0.1)", border: "1px solid rgba(34, 211, 238, 0.25)" }}>
                  <Server size={20} />
                </div>
                <h3 className="text-base font-bold text-cream-100">Arsitektur Client-Server</h3>
              </div>
              <p className="text-cream-200 text-sm leading-relaxed mb-4">
                Sistem memisahkan beban komputasi. Frontend (Laravel) mengelola interaksi antarmuka, sementara Backend (Python Flask) mengeksekusi pipeline OCR secara terdedikasi demi menjaga stabilitas memori peladen.
              </p>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-lg text-cyan-400 text-xs" style={{ background: "rgba(34, 211, 238, 0.06)", border: "1px solid rgba(34, 211, 238, 0.15)" }}>
              <Layers size={14} />
              <span>Frontend: Laravel PMB | Backend: Dedicated Python Flask OCR Engine</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
