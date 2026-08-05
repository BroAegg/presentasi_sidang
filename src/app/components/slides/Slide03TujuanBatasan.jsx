"use client";

import { motion } from "framer-motion";
import { Zap, Database, BarChart2 } from "lucide-react";

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

const cards = [
  {
    icon: Zap,
    title: "Optimalisasi",
    subtitle: "Tujuan Utama",
    desc: "Meningkatkan kecepatan pelayanan PMB melalui otomatisasi pengisian formulir dengan integrasi teknologi Tesseract OCR dan OpenCV.",
    accent: "text-amber-400",
    badgeBg: "rgba(251, 191, 36, 0.1)",
    badgeBorder: "rgba(251, 191, 36, 0.25)",
  },
  {
    icon: Database,
    title: "Batasan Variabel",
    subtitle: "Primary Key",
    desc: "Memfokuskan ekstraksi teks khusus pada tiga variabel (Primary Key) terpenting dari citra e-KTP: NIK, Nama Lengkap, dan Alamat.",
    accent: "text-emerald-400",
    badgeBg: "rgba(52, 211, 153, 0.1)",
    badgeBorder: "rgba(52, 211, 153, 0.25)",
  },
  {
    icon: BarChart2,
    title: "Validasi Metrik",
    subtitle: "Evaluasi Performa",
    desc: "Mengukur tingkat kegagalan karakter (CER), akurasi kata (WER), serta komparasi efisiensi waktu komputasi (Speedup Ratio).",
    accent: "text-cyan-400",
    badgeBg: "rgba(34, 211, 238, 0.1)",
    badgeBorder: "rgba(34, 211, 238, 0.25)",
  },
];

export default function Slide03TujuanBatasan() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Tujuan & Batasan</h2>
        <p className="slide-subtitle mt-1">
          Fokus penelitian dan pilar evaluasi sistem
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-6">
        <div className="grid grid-cols-3 gap-6 w-full">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div key={i} variants={item} className="content-card flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.accent}`}
                      style={{ background: c.badgeBg, border: `1px solid ${c.badgeBorder}` }}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="text-[0.7rem] uppercase tracking-wider px-2.5 py-1 rounded-full text-cream-300" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      {c.subtitle}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${c.accent}`}>{c.title}</h3>
                  <p className="text-cream-200 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
