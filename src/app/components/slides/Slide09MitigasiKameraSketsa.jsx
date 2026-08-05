"use client";

import { motion } from "framer-motion";
import { Undo2, Camera, ShieldCheck, Sparkles } from "lucide-react";

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

const strategies = [
  {
    icon: Undo2,
    step: "Langkah 1: Eliminasi Komputasi Rotasi Peladen",
    desc: "Mencegah alokasi komputasi rotasi otomatis yang berat di backend peladen guna menghindari latensi tinggi dan server timeout.",
    accent: "text-red-400",
  },
  {
    icon: Camera,
    step: "Langkah 2: Implementasi Bingkai Sketsa (Guideline Overlay)",
    desc: "Menampilkan panduan garis tepi e-KTP pada antarmuka perangkat pengguna untuk menyelaraskan posisi dan orientasi KTP secara langsung.",
    accent: "text-amber-400",
  },
  {
    icon: ShieldCheck,
    step: "Langkah 3: Standarisasi Mutu Citra di Sisi Klien",
    desc: "Memastikan foto e-KTP yang dikirim ke peladen dalam kondisi lurus, jelas, dan berorientasi presisi sebelum diekstraksi oleh Tesseract OCR.",
    accent: "text-emerald-400",
  },
];

export default function Slide09MitigasiKameraSketsa() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Solusi Mitigasi: Inovasi UI Constraint Kamera Sketsa</h2>
        <p className="slide-subtitle mt-1">
          Standarisasi mutu citra e-KTP pada sisi antarmuka pengguna sebelum dikirim ke peladen
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-5 mt-3 items-center overflow-hidden">
        {/* Left Column: Fixed 6 Columns for 3 Steps (ALWAYS 100% VISIBLE!) */}
        <div className="col-span-6 flex flex-col justify-between gap-3 h-full overflow-y-auto custom-scrollbar pr-1">
          {strategies.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} variants={item} className="content-card p-3.5 flex items-start gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${s.accent}`}
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <h4 className={`text-xs font-bold ${s.accent}`}>{s.step}</h4>
                  <p className="text-cream-200 text-[0.72rem] leading-relaxed mt-0.5">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={item} className="content-card-gold p-3 flex items-center gap-2 mt-auto">
            <Sparkles size={18} className="text-gold-400 flex-shrink-0" />
            <span className="text-[0.72rem] text-gold-300 font-medium">
              Citra terstandar $\rightarrow$ Ekstraksi Tesseract presisi 100% $\rightarrow$ Performa peladen efisien.
            </span>
          </motion.div>
        </div>

        {/* Right Column: Clean Bounded Image Frame */}
        <motion.div variants={item} className="col-span-6 flex items-center justify-center h-full overflow-hidden">
          <div className="w-full h-full max-h-[380px] rounded-2xl p-2 bg-black/60 border border-gold-400/30 overflow-hidden flex items-center justify-center">
            <img
              src="/assets/slide7.jpeg"
              alt="Kamera Sketsa UI Slide 7"
              className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl shadow-2xl block"
              onError={(e) => {
                if (!e.target.dataset.triedPng) {
                  e.target.dataset.triedPng = "true";
                  e.target.src = "/assets/slide7.png";
                } else if (!e.target.dataset.triedJpg) {
                  e.target.dataset.triedJpg = "true";
                  e.target.src = "/assets/slide7.jpg";
                } else if (!e.target.dataset.triedOld) {
                  e.target.dataset.triedOld = "true";
                  e.target.src = "/assets/ui-kamera.jpeg";
                } else {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">slide7.jpeg</span>';
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
