"use client";

import { motion } from "framer-motion";
import { GitBranch, CheckCircle2, ArrowDown } from "lucide-react";

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
  { step: "Fase 1", name: "Analisis Kebutuhan", desc: "Mengidentifikasi masalah pengisian form manual & mengumpulkan dataset foto e-KTP." },
  { step: "Fase 2", name: "Desain Sistem", desc: "Merancang arsitektur REST API Flask, pipeline OpenCV, dan tampilan Kamera Sketsa." },
  { step: "Fase 3", name: "Implementasi Kode", desc: "Membangun backend OCR Python dan menghubungkannya dengan form PMB Web." },
  { step: "Fase 4", name: "Pengujian Sistem", desc: "Menguji fungsi autofill (Blackbox Testing), akurasi baca kata, dan efisiensi waktu." },
];

export default function Slide05MetodologiWaterfall() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Metodologi Penelitian: Model Waterfall</h2>
        <p className="slide-subtitle mt-1">
          Pendekatan pengembangan sistem PMB OCR yang terstruktur &amp; berurutan
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3 overflow-hidden">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch overflow-hidden">
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

            {/* Simple Evaluation Focus Box */}
            <motion.div variants={item} className="content-card-gold p-3 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[0.7rem] font-bold text-gold-300 uppercase tracking-wider mb-0.5">Fokus Pengujian</p>
                <p className="text-cream-200 text-[0.72rem] leading-tight">
                  Pengujian dilakukan untuk memastikan form PMB terisi otomatis secara presisi dan pendaftaran menjadi lebih cepat.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Slide 4 Scrollable Image Container for Long Phone Screenshots */}
          <motion.div variants={item} className="col-span-6 flex flex-col items-center justify-center overflow-hidden">
            <div className="text-[0.65rem] font-mono text-gold-400/90 mb-1 flex items-center gap-1">
              <ArrowDown size={12} className="animate-bounce" />
              <span>Gulir ke bawah untuk melihat gambar HP penuh</span>
            </div>
            <div className="image-placeholder w-full max-w-[380px] h-[340px] max-h-[55vh] rounded-xl p-2 bg-black/50 border border-gold-400/30 overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col items-center">
              <img
                src="/assets/slide4.jpeg"
                alt="Diagram Waterfall Slide 4"
                className="w-full h-auto object-contain rounded-lg shadow-xl"
                onError={(e) => {
                  if (!e.target.dataset.triedPng) {
                    e.target.dataset.triedPng = "true";
                    e.target.src = "/assets/slide4.png";
                  } else if (!e.target.dataset.triedJpg) {
                    e.target.dataset.triedJpg = "true";
                    e.target.src = "/assets/slide4.jpg";
                  } else if (!e.target.dataset.triedOld) {
                    e.target.dataset.triedOld = "true";
                    e.target.src = "/assets/waterfall-diagram.jpeg";
                  } else {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span style="color:#ddd6c8;font-size:0.75rem">slide4.jpeg</span>';
                  }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
