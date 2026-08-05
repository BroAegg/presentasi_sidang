"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
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

export default function Slide01Cover() {
  return (
    <motion.div
      className="flex flex-col items-center justify-between h-full text-center py-2 px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Top Header Row: Logo & Tag */}
      <motion.div variants={item} className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full p-1.5 glass-card border border-gold-400/30 flex items-center justify-center">
          <img
            src="/assets/logo.png"
            alt="Logo UMB"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = '<span className="text-[10px] text-gold-400">UMB</span>';
            }}
          />
        </div>
        <div className="text-left">
          <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Sidang Skripsi Sarjana</p>
          <p className="text-xs text-cream-300">Teknik Informatika — Universitas Muhammadiyah Bandung</p>
        </div>
      </motion.div>

      {/* Main Title Block */}
      <motion.div variants={item} className="max-w-4xl my-2">
        <div className="slide-heading-accent mx-auto mb-2" />
        <h1
          className="slide-title leading-tight"
          style={{ fontSize: "clamp(1.3rem, 2.6vw, 2.1rem)" }}
        >
          IMPLEMENTASI FITUR AUTOFILL DATA CALON MAHASISWA MENGGUNAKAN TEKNOLOGI OPTICAL CHARACTER RECOGNITION (OCR) BERBASIS TESSERACT PADA SISTEM PMB UNIVERSITAS MUHAMMADIYAH BANDUNG
        </h1>
      </motion.div>

      {/* Author & Committee Information Grid */}
      <motion.div variants={item} className="grid grid-cols-3 gap-4 w-full max-w-5xl text-left">
        {/* Author Card */}
        <div className="content-card-gold p-4 flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-2 text-gold-400">
            <GraduationCap size={18} />
            <span className="text-xs font-semibold uppercase tracking-wider">Peneliti / Penyusun</span>
          </div>
          <div>
            <p className="text-base font-bold text-cream-100">Aegner Billik</p>
            <p className="text-xs font-mono text-gold-300 mt-0.5">NIM: 220102007</p>
            <p className="text-[0.75rem] text-cream-300 mt-1">Program Studi Teknik Informatika</p>
          </div>
        </div>

        {/* Advisors Card */}
        <div className="content-card p-4">
          <div className="flex items-center gap-2 mb-2 text-cyan-400">
            <Users size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">Dosen Pembimbing</span>
          </div>
          <div className="space-y-1 text-xs">
            <p className="text-cream-200">
              <strong className="text-cream-100">Pembimbing I:</strong> Aila Gema Safitri, S.T., M.T.
            </p>
            <p className="text-cream-200">
              <strong className="text-cream-100">Pembimbing II:</strong> Firas Atqiya, M.Si., M.Sc.
            </p>
          </div>
        </div>

        {/* Examiners Card */}
        <div className="content-card p-4">
          <div className="flex items-center gap-2 mb-1.5 text-amber-400">
            <Users size={16} />
            <span className="text-xs font-semibold uppercase tracking-wider">Dewan Penguji</span>
          </div>
          <div className="space-y-0.5 text-[0.72rem] text-cream-300">
            <p>1. Ririn Suharsih, S.Pd., M.T. (Ketua)</p>
            <p>2. Ahmad Suryan, S.T., M.T. (Sekretaris)</p>
            <p>3. Nana Karyana Kurdi, S.E., M.Kom.</p>
            <p>4. Taufik Rahmat Kurniawan, S.Kom., M.T.</p>
            <p>5. Rinanda Febriani, S.ST., M.T.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
