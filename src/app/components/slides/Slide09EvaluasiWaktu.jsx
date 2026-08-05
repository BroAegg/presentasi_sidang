"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Calculator } from "lucide-react";

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

export default function Slide09EvaluasiWaktu() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Evaluasi Waktu Komputasi</h2>
        <p className="slide-subtitle mt-1">Pemangkasan Inefisiensi Pendaftaran</p>
      </motion.div>

      <div className="flex-1 flex flex-col justify-center gap-6 mt-4">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* Glowing Metric Card */}
          <motion.div variants={item} className="col-span-5 content-card-gold flex flex-col justify-center items-center text-center p-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-emerald-400 mb-3" style={{ background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.25)" }}>
              <Zap size={24} />
            </div>
            <p className="text-xs uppercase tracking-widest text-cream-300 font-semibold mb-1">Speedup Ratio</p>
            <h3 className="text-5xl font-black text-emerald-400 my-2" style={{ textShadow: "0 0 30px rgba(52, 211, 153, 0.4)" }}>
              3.66x
            </h3>
            <p className="text-sm font-semibold text-cream-100 mt-1">Lebih Cepat</p>
          </motion.div>

          {/* Math Formula Block & Simulation Details */}
          <div className="col-span-7 flex flex-col justify-between gap-4">
            {/* Math Formula */}
            <motion.div variants={item} className="content-card p-5">
              <div className="flex items-center gap-2 mb-3 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                <Calculator size={16} />
                <span>Formulasi Komparasi Efisiensi</span>
              </div>
              <div className="rounded-lg p-4 text-center font-mono text-base font-bold text-cream-100" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)" }}>
                {"T_manual / T_autofill = 120s / 32.77s = 3.66"}
              </div>
            </motion.div>

            {/* Explanation Content */}
            <motion.div variants={item} className="content-card p-5">
              <div className="flex items-center gap-2 mb-2 text-cream-300 text-xs font-semibold">
                <Clock size={16} className="text-amber-400" />
                <span>Hasil Simulasi Empiris</span>
              </div>
              <p className="text-cream-200 text-sm leading-relaxed">
                Simulasi membuktikan performa unggul otomasi sistem. Entri data manual menghabiskan rata-rata 120 detik, sedangkan waktu komputasi Autofill stabil di 32.77 detik.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
