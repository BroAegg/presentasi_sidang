"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileCheck, ArrowDown } from "lucide-react";

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

const bulletPoints = [
  {
    icon: Clock,
    label: "Inefisiensi Waktu Penginputan Formulir",
    text: "Proses entri biodata calon mahasiswa secara manual memerlukan durasi rata-rata hingga 120 detik per pendaftar.",
    accent: "text-amber-400",
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: AlertTriangle,
    label: "Risiko Kesalahan Entri Karakter (Human Error)",
    text: "Potensi kesalahan pengetikan NIK, Nama, dan Alamat yang dapat berdampak pada proses verifikasi di PDDikti.",
    accent: "text-red-400",
    bg: "rgba(239, 68, 68, 0.08)",
    border: "rgba(239, 68, 68, 0.2)",
  },
  {
    icon: FileCheck,
    label: "Solusi Otomatisasi OCR Tesseract",
    text: "Mengintegrasikan teknologi OCR guna mengotomatisasi ekstraksi data identitas e-KTP secara langsung ke dalam formulir PMB.",
    accent: "text-emerald-400",
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.2)",
  },
];

export default function Slide02LatarBelakang() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Latar Belakang &amp; Urgensi Penelitian</h2>
        <p className="slide-subtitle mt-1">
          Permasalahan utama dalam proses pendaftaran mahasiswa baru secara manual &amp; solusi OCR
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3 overflow-hidden">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch overflow-hidden">
          {/* Left Column: Problem Points */}
          <div className="col-span-6 flex flex-col justify-between gap-2.5">
            {bulletPoints.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="content-card p-3 flex items-start gap-3"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${b.accent}`}
                    style={{ background: b.bg, border: `1px solid ${b.border}` }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className={`text-[0.7rem] font-bold uppercase tracking-wider mb-0.5 ${b.accent}`}>
                      {b.label}
                    </p>
                    <p className="text-cream-200 text-xs leading-relaxed">{b.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Slide 2 Scrollable Image Container for Long Phone Screenshots */}
          <motion.div variants={item} className="col-span-6 flex flex-col items-center justify-center overflow-hidden">
            <div className="text-[0.65rem] font-mono text-gold-400/90 mb-1 flex items-center gap-1">
              <ArrowDown size={12} className="animate-bounce" />
              <span>Gulir ke bawah untuk melihat gambar HP penuh</span>
            </div>
            <div className="image-placeholder w-full h-[340px] max-h-[55vh] rounded-xl p-2 bg-black/50 border border-gold-400/30 overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col items-center">
              <img
                src="/assets/slide2.jpeg"
                alt="Latar Belakang Slide 2"
                className="w-full h-auto object-contain rounded-lg shadow-xl"
                onError={(e) => {
                  if (!e.target.dataset.triedPng) {
                    e.target.dataset.triedPng = "true";
                    e.target.src = "/assets/slide2.png";
                  } else if (!e.target.dataset.triedJpg) {
                    e.target.dataset.triedJpg = "true";
                    e.target.src = "/assets/slide2.jpg";
                  } else if (!e.target.dataset.triedOld) {
                    e.target.dataset.triedOld = "true";
                    e.target.src = "/assets/latar-belakang.jpeg";
                  } else {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div className="p-4 text-center space-y-3 w-full">
                        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">Transformasi Alur Pendaftaran</span>
                        <div className="p-2.5 rounded bg-red-500/10 border border-red-500/20 text-left">
                          <span className="text-xs font-bold text-red-400 block">Sistem Berjalan (Manual) — 120.00s</span>
                          <span className="text-[0.7rem] text-cream-300">Penginputan manual NIK, Nama, Alamat → Rentan Human Error</span>
                        </div>
                        <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-left">
                          <span className="text-xs font-bold text-emerald-400 block">Sistem Usulan (OCR Autofill) — 32.77s</span>
                          <span className="text-[0.7rem] text-cream-300">Akuisisi KTP via UI Constraint → Ekstraksi Otomatis Formulir</span>
                        </div>
                      </div>
                    `;
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
