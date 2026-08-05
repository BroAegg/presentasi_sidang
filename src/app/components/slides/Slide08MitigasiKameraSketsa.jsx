"use client";

import { motion } from "framer-motion";
import { Upload, Camera, CheckCircle } from "lucide-react";

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
  {
    step: "Tahap 1",
    title: "Upload Konvensional",
    desc: "Awalnya gagal karena input bebas pengguna sangat rentan distorsi kemiringan.",
    icon: Upload,
    accent: "text-red-400",
  },
  {
    step: "Tahap 2",
    title: "Guideline Overlay",
    desc: "Memaksa standarisasi orientasi KTP secara mandiri (pendekatan UI Constraint).",
    icon: Camera,
    accent: "text-amber-400",
  },
  {
    step: "Tahap 3",
    title: "Autofill Akurat",
    desc: "Mengatasi limitasi Tesseract dan berhasil mengisi form PMB secara instan.",
    icon: CheckCircle,
    accent: "text-emerald-400",
  },
];

export default function Slide08MitigasiKameraSketsa() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Mitigasi: Kamera Sketsa</h2>
        <p className="slide-subtitle mt-1">Rekayasa antarmuka pengguna sebagai pendukung akurasi OCR</p>
      </motion.div>

      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-12 gap-6 w-full items-stretch">
          {/* Left Column: 3 Steps */}
          <div className="col-span-7 flex flex-col justify-center gap-3">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} variants={item} className="content-card flex items-start gap-4 p-4">
                  <div className="bullet-number">
                    <Icon size={14} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[0.7rem] font-semibold uppercase tracking-wider ${s.accent}`}>{s.step}</span>
                      <h4 className="text-sm font-bold text-cream-100">— {s.title}</h4>
                    </div>
                    <p className="text-cream-200 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Image Placeholder */}
          <motion.div variants={item} className="col-span-5 flex items-center">
            <div className="image-placeholder w-full h-full min-h-[260px] rounded-xl flex items-center justify-center p-4">
              <img
                src="/assets/ui-kamera.png"
                alt="UI Kamera Sketsa Overlay"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem;font-weight:500">/assets/ui-kamera.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
