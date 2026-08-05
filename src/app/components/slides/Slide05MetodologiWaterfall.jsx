"use client";

import { motion } from "framer-motion";
import { GitBranch, RefreshCw, AlertTriangle, ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

const phases = [
  { step: "Fase 1", name: "Analisis Kebutuhan", desc: "Observasi PMB, wawancara stakeholder & dataset 50 e-KTP." },
  { step: "Fase 2", name: "Desain Sistem", desc: "Blueprint Client-Server, DFD, arsitektur API & pipeline OCR." },
  { step: "Fase 3", name: "Implementasi", desc: "Laravel Frontend, Python Flask OCR Backend, OpenCV & PyTesseract." },
  { step: "Fase 4", name: "Pengujian", desc: "Blackbox Testing, evaluasi metrik CER, WER & Speedup Ratio." },
];

export default function Slide05MetodologiWaterfall() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Metodologi Penelitian: Waterfall dengan Feedback Loop</h2>
        <p className="slide-subtitle mt-1">
          Pendekatan pengembangan sistem sekuensial dengan iterasi umpan balik
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: 4 Phases Grid */}
          <div className="col-span-6 flex flex-col justify-between gap-2.5">
            {phases.map((p, i) => (
              <motion.div key={i} variants={item} className="content-card p-3 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-gold-400/10 border border-gold-400/30 flex items-center justify-center font-mono text-gold-400 font-bold text-xs flex-shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.68rem] text-gold-400 uppercase tracking-wider font-semibold">{p.step}</span>
                    <h4 className="text-xs font-bold text-cream-100">— {p.name}</h4>
                  </div>
                  <p className="text-cream-300 text-[0.72rem] leading-snug mt-0.5">{p.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Feedback Trigger Box */}
            <motion.div variants={item} className="content-card-gold p-3 flex items-start gap-3">
              <RefreshCw size={18} className="text-gold-400 animate-[spin_4s_linear_infinite] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[0.7rem] font-bold text-gold-300 uppercase tracking-wider mb-0.5">Mekanisme Feedback Loop</p>
                <p className="text-cream-200 text-[0.72rem] leading-tight">
                  Jika pengujian iterasi 1 menemukan CER &gt; 10% atau server timeout, feedback loop diaktifkan untuk tuning parameter OpenCV & revisi UI Constraint Kamera.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Waterfall Diagram Image */}
          <motion.div variants={item} className="col-span-6 flex items-center">
            <div className="image-placeholder w-full h-full min-h-[270px] rounded-xl flex items-center justify-center p-3">
              <img
                src="/assets/waterfall-diagram.png"
                alt="Diagram Waterfall dengan Feedback Loop"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">waterfall-diagram.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
