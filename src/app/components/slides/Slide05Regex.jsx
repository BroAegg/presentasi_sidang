"use client";

import { motion } from "framer-motion";
import { Layers, ArrowDown } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const layers = [
  {
    level: "Lapis 1",
    desc: 'Cari label "NIK" → ekstrak value setelahnya.',
    color: "rgba(52, 211, 153, 0.15)",
    border: "rgba(52, 211, 153, 0.3)",
    text: "text-emerald-400",
  },
  {
    level: "Lapis 2",
    desc: "Fallback: Cari 16 digit angka absolut sebagai NIK.",
    color: "rgba(251, 191, 36, 0.15)",
    border: "rgba(251, 191, 36, 0.3)",
    text: "text-amber-400",
  },
  {
    level: "Lapis 3",
    desc: "Toleransi spasi kotor: cocokkan 16 digit dengan celah/noise.",
    color: "rgba(239, 68, 68, 0.15)",
    border: "rgba(239, 68, 68, 0.3)",
    text: "text-red-400",
  },
];

export default function Slide05Regex() {
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
        <h2 className="slide-title">Ekstraksi & Pendekatan Regex Bertingkat</h2>
        <p className="slide-subtitle mt-1">
          Tesseract OCR (Arsitektur LSTM Bidirectional) + Multi-Layered Fallback Regex
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Left: Concept + Layers */}
          <div className="flex flex-col gap-4">
            {/* Concept card */}
            <motion.div variants={fadeUp} className="content-card-gold">
              <div className="flex items-center gap-2 mb-2">
                <Layers size={16} className="text-gold-400" />
                <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider">
                  Konsep Kunci
                </p>
              </div>
              <p className="text-cream-200 text-sm leading-relaxed">
                Tidak <span className="text-gold-300 font-semibold">fail-fast</span>.
                Jika label &quot;NIK&quot; tidak terbaca akibat derau, algoritma
                turun ke lapis berikutnya hingga ditemukan kecocokan.
              </p>
            </motion.div>

            {/* Fallback Layers */}
            {layers.map((layer, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div
                  className="rounded-xl p-4 flex items-start gap-3"
                  style={{
                    background: layer.color,
                    border: `1px solid ${layer.border}`,
                  }}
                >
                  <span
                    className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap ${layer.text}`}
                  >
                    {layer.level}
                  </span>
                  <p className="text-cream-200 text-sm leading-relaxed">
                    {layer.desc}
                  </p>
                </div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center my-1 text-cream-300 opacity-40">
                    <ArrowDown size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div variants={fadeUp} className="flex items-center">
            <div className="image-placeholder w-full h-full min-h-[250px] rounded-xl">
              <img
                src="/assets/code-regex.png"
                alt="Kode Regex Bertingkat"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span class="text-cream-300 text-xs">code-regex.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
