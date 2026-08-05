"use client";

import { motion } from "framer-motion";
import { AlertCircle, UserX, Clock, ShieldCheck } from "lucide-react";

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
    icon: UserX,
    text: "Pengisian data diri PMB di Universitas Muhammadiyah Bandung masih dilakukan secara manual.",
  },
  {
    icon: AlertCircle,
    text: "Pendekatan ini rentan terhadap kesalahan ketik (human error) dan ketidaksesuaian validasi dokumen.",
  },
  {
    icon: Clock,
    text: "Membutuhkan waktu pemrosesan yang lama, menciptakan hambatan efisiensi administrasi.",
  },
  {
    icon: ShieldCheck,
    text: "Diperlukan integrasi sistem ekstraksi data presisi dari dokumen identitas (e-KTP) untuk mengotomatisasi proses input.",
  },
];

export default function Slide02LatarBelakang() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Latar Belakang & Masalah</h2>
        <p className="slide-subtitle mt-1">
          Tantangan administrasi registrasi calon mahasiswa
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-12 gap-6 w-full items-stretch">
          {/* Left Column: 4 Bullets */}
          <div className="col-span-7 flex flex-col justify-center gap-3">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={i} variants={item} className="content-card flex items-start gap-4">
                  <div className="bullet-number">
                    <Icon size={14} />
                  </div>
                  <p className="text-cream-200 text-sm leading-relaxed">{b.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Image Placeholder */}
          <motion.div variants={item} className="col-span-5 flex items-center">
            <div className="image-placeholder w-full h-full min-h-[280px] rounded-xl flex flex-col items-center justify-center p-6 text-center">
              <UserX size={48} className="text-cream-300 opacity-40 mb-3" />
              <span className="text-cream-300 text-sm font-medium">Frustrated Admin Illustration</span>
              <span className="text-cream-300 text-xs opacity-60 mt-1">Placeholder asset: /assets/admin-frustrated.png</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
