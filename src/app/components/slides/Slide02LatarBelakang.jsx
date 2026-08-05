"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileCheck, ArrowRight } from "lucide-react";

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
    label: "Inefisiensi Waktu Waktu Pendaftaran",
    text: "Proses pengisian formulir biodata secara manual memerlukan durasi rata-rata hingga 2 menit (120 detik) per calon mahasiswa.",
    accent: "text-amber-400",
    bg: "rgba(245, 158, 11, 0.08)",
    border: "rgba(245, 158, 11, 0.2)",
  },
  {
    icon: AlertTriangle,
    label: "Risiko Kesalahan Ketik (Human Error)",
    text: "Potensi kesalahan entri data NIK, Nama, dan Alamat yang berdampak pada validasi dokumen PMB di PDDikti.",
    accent: "text-red-400",
    bg: "rgba(239, 68, 68, 0.08)",
    border: "rgba(239, 68, 68, 0.2)",
  },
  {
    icon: FileCheck,
    label: "Solusi Otomatisasi OCR Tesseract",
    text: "Mengintegrasikan teknologi OCR untuk ekstraksi otomatis data identitas e-KTP langsung ke dalam kolom formulir.",
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

          {/* Right Column: Slide 2 Image Asset (Primary: slide2.jpeg with auto-fit) */}
          <motion.div variants={item} className="col-span-6 flex items-center justify-center overflow-hidden">
            <div className="image-placeholder w-full h-[320px] max-h-[55vh] rounded-xl flex items-center justify-center p-2.5 bg-black/40 border border-white/10 overflow-hidden">
              <img
                src="/assets/slide2.jpeg"
                alt="Latar Belakang Slide 2"
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
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
                          <span className="text-xs font-bold text-red-400 block">Sistem Berjalan (Manual) — 120s</span>
                          <span className="text-[0.7rem] text-cream-300">Pengisian manual NIK, Nama, Alamat → Rentan typo</span>
                        </div>
                        <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-left">
                          <span className="text-xs font-bold text-emerald-400 block">Sistem Usulan (OCR Autofill) — 32.77s</span>
                          <span className="text-[0.7rem] text-cream-300">Scan KTP via Kamera Sketsa → Auto-populates Form</span>
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
