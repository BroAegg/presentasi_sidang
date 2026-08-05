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
    step: "Langkah 1: Hindari Rotasi Server Berat",
    desc: "Nggak perlu lagi muter foto miring secara otomatis di server yang bikin lemot & server timeout.",
    accent: "text-red-400",
  },
  {
    icon: Camera,
    step: "Langkah 2: Inovasi Kamera Sketsa di HP",
    desc: "Memasang bingkai panduan berbentuk kotak KTP pada layar HP/Web calon mahasiswa.",
    accent: "text-amber-400",
  },
  {
    icon: ShieldCheck,
    step: "Langkah 3: Foto Pas & Lurus",
    desc: "Pengguna dipaksa menyelaraskan posisi KTP ke dalam bingkai sebelum menekan tombol jepret.",
    accent: "text-emerald-400",
  },
];

export default function Slide09MitigasiKameraSketsa() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Solusi Mitigasi: Inovasi Kamera Sketsa (Bingkai KTP)</h2>
        <p className="slide-subtitle mt-1">
          Menjaga kerapian foto KTP sejak awal dari layar HP pengguna sebelum dikirim ke server
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: 3 Strategic Mitigation Steps */}
          <div className="col-span-6 flex flex-col justify-between gap-3">
            {strategies.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={i} variants={item} className="content-card p-3.5 flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${s.accent}`} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold ${s.accent}`}>{s.step}</h4>
                    <p className="text-cream-200 text-[0.72rem] leading-relaxed mt-0.5">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div variants={item} className="content-card-gold p-3 flex items-center gap-2">
              <Sparkles size={18} className="text-gold-400 flex-shrink-0" />
              <span className="text-[0.72rem] text-gold-300 font-medium">
                Foto KTP selalu lurus &amp; terang $\rightarrow$ OCR Tesseract sukses 100% $\rightarrow$ Server tetap ringan.
              </span>
            </motion.div>
          </div>

          {/* Right Column: MUST use ui-kamera.png Image Asset */}
          <motion.div variants={item} className="col-span-6 flex items-center">
            <div className="image-placeholder w-full h-full min-h-[270px] rounded-xl flex items-center justify-center p-3">
              <img
                src="/assets/ui-kamera.png"
                alt="Kamera Sketsa UI"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">ui-kamera.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
