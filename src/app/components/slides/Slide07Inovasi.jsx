"use client";

import { motion } from "framer-motion";
import { Undo2, Camera, ShieldCheck, ArrowRight } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const strategies = [
  {
    icon: Undo2,
    title: "Rollback Auto-Rotate",
    desc: "Menghapus algoritma rotasi otomatis di server yang menyebabkan timeout.",
  },
  {
    icon: Camera,
    title: 'Kamera Sketsa (Guideline Overlay)',
    desc: "Mengganti tombol upload konvensional dengan UI kamera yang memiliki panduan visual overlay.",
  },
  {
    icon: ShieldCheck,
    title: "Standarisasi Sisi Klien",
    desc: "Memaksa pengguna melakukan alignment posisi, orientasi lanskap, dan pencahayaan secara mandiri sebelum capture.",
  },
];

export default function Slide07Inovasi() {
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
        <h2 className="slide-title">Inovasi Solusi: UI Constraint</h2>
        <p className="slide-subtitle mt-1">
          Mengalihkan standarisasi citra dari server ke sisi klien
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Left: Strategy Steps */}
          <div className="flex flex-col gap-4">
            {strategies.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp}>
                  <div className="content-card flex items-start gap-4">
                    <div className="bullet-number">
                      <Icon size={14} />
                    </div>
                    <div>
                      <p className="text-cream-100 font-semibold text-sm">
                        {item.title}
                      </p>
                      <p className="text-cream-300 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {i < strategies.length - 1 && (
                    <div className="flex justify-center my-1 text-gold-400 opacity-50">
                      <ArrowRight size={14} className="rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Impact card */}
            <motion.div variants={fadeUp} className="content-card-gold">
              <p className="text-xs font-semibold text-gold-400 uppercase tracking-wider mb-1">
                Dampak
              </p>
              <p className="text-cream-200 text-sm leading-relaxed">
                Memaksa pengguna melakukan alignment posisi, orientasi lanskap, dan
                pencahayaan secara mandiri sebelum menekan tombol capture.
              </p>
            </motion.div>
          </div>

          {/* Right: Camera UI Image */}
          <motion.div variants={fadeUp} className="flex items-center">
            <div className="image-placeholder w-full h-full min-h-[250px] rounded-xl">
              <img
                src="/assets/ui-kamera.png"
                alt="UI Kamera Sketsa"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span class="text-cream-300 text-xs">ui-kamera.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
