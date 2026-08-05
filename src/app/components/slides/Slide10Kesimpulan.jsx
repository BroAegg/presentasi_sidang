"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Lightbulb } from "lucide-react";

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

const bullets = [
  {
    title: "Optimalisasi Tercapai",
    desc: "Sistem berhasil mengotomatisasi pengisian formulir NIK, Nama, dan Alamat, sehingga meminimalisasi human error pada PMB.",
    icon: CheckCircle2,
    accent: "text-emerald-400",
  },
  {
    title: "Inovasi UI Constraint",
    desc: "Fitur Kamera Sketsa terbukti menjadi solusi mitigasi vital yang menutupi kelemahan inheren Tesseract OCR terhadap distorsi gambar.",
    icon: ShieldCheck,
    accent: "text-amber-400",
  },
  {
    title: "Efisiensi Terbukti",
    desc: "Pemangkasan durasi pendaftaran hingga 3.66 kali lipat berhasil dicapai dengan meniadakan beban algoritma rotasi citra otomatis pada peladen.",
    icon: Zap,
    accent: "text-cyan-400",
  },
  {
    title: "Saran Pengembangan",
    desc: "Memigrasikan arsitektur ekstraksi teks menuju model Deep Learning modern (seperti EasyOCR) untuk ketahanan derau yang lebih baik.",
    icon: Lightbulb,
    accent: "text-gold-400",
  },
];

export default function Slide10Kesimpulan() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Kesimpulan Penelitian</h2>
        <p className="slide-subtitle mt-1">Rangkuman capaian dan panduan pengembangan lanjutan</p>
      </motion.div>

      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-2 gap-4 w-full">
          {bullets.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={i} variants={item} className="content-card flex items-start gap-4 p-5">
                <div className="bullet-number">
                  <Icon size={14} />
                </div>
                <div>
                  <h4 className={`text-sm font-bold mb-1 ${b.accent}`}>{b.title}</h4>
                  <p className="text-cream-200 text-xs leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
