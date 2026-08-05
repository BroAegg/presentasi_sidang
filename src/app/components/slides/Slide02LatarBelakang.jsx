"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, UserX, ShieldCheck, ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
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

const bullets = [
  {
    icon: UserX,
    label: "Kondisi Eksisting",
    text: "Pengisian data diri PMB di Universitas Muhammadiyah Bandung masih dilakukan secara manual oleh calon mahasiswa.",
    accent: "text-red-400",
    bg: "rgba(239, 68, 68, 0.06)",
    border: "rgba(239, 68, 68, 0.18)",
  },
  {
    icon: AlertTriangle,
    label: "Risiko Human Error",
    text: "Pendekatan manual sangat rentan terhadap kesalahan ketik (typo) NIK dan Nama serta ketidaksesuaian dokumen kependudukan.",
    accent: "text-amber-400",
    bg: "rgba(251, 191, 36, 0.06)",
    border: "rgba(251, 191, 36, 0.18)",
  },
  {
    icon: Clock,
    label: "Inefisiensi Waktu",
    text: "Membutuhkan waktu pemrosesan lama (rata-rata 120 detik per formulir), menciptakan hambatan efisiensi administrasi.",
    accent: "text-cyan-400",
    bg: "rgba(34, 211, 238, 0.06)",
    border: "rgba(34, 211, 238, 0.18)",
  },
  {
    icon: ShieldCheck,
    label: "Proposisi Solusi",
    text: "Diperlukan integrasi sistem ekstraksi data presisi dari dokumen identitas (e-KTP) berbasis OCR untuk mengotomatisasi proses input.",
    accent: "text-emerald-400",
    bg: "rgba(52, 211, 153, 0.06)",
    border: "rgba(52, 211, 153, 0.18)",
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
        <h2 className="slide-title">Latar Belakang & Urgensi Penelitian</h2>
        <p className="slide-subtitle mt-1">
          Tantangan administrasi registrasi calon mahasiswa PMB UMB
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: 4 Bullets */}
          <div className="col-span-7 flex flex-col justify-center gap-3">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  variants={item}
                  className="rounded-xl p-3.5 flex items-start gap-3.5"
                  style={{
                    background: b.bg,
                    border: `1px solid ${b.border}`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${b.accent}`} style={{ background: b.bg, border: `1px solid ${b.border}` }}>
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

          {/* Right Column: Comparative Transformation Card */}
          <motion.div variants={item} className="col-span-5 flex flex-col justify-between content-card-gold p-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-3">
                Transformasi Alur Pendaftaran
              </p>
              
              {/* Process Comparison */}
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-red-400">Sistem Berjalan (Manual)</span>
                    <span className="text-xs font-mono text-red-400 font-bold">120 Detik</span>
                  </div>
                  <p className="text-[0.75rem] text-cream-300">Pengisian manual NIK, Nama, Alamat $\rightarrow$ Verifikasi fisik ulang $\rightarrow$ Rentan typo</p>
                </div>

                <div className="flex justify-center text-gold-400">
                  <ArrowRight size={20} className="rotate-90" />
                </div>

                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-emerald-400">Sistem Usulan (OCR Autofill)</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">32.77 Detik</span>
                  </div>
                  <p className="text-[0.75rem] text-cream-300">Scan KTP via Kamera Sketsa $\rightarrow$ Extracted NIK, Nama, Alamat $\rightarrow$ Auto-populates Form</p>
                </div>
              </div>
            </div>

            <div className="mt-4 p-2.5 rounded bg-black/30 border border-white/10 text-center">
              <span className="text-[0.72rem] text-gold-300 font-medium">
                🎯 Target: Efisiensi waktu komputasi & presisi data kependudukan PDDikti
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
