"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Lightbulb, Server, Eye } from "lucide-react";

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

export default function Slide13KesimpulanSaran() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Kesimpulan Penelitian &amp; Saran Pengembangan</h2>
        <p className="slide-subtitle mt-1">
          Rangkuman penemuan utama Bab V dan rekomendasi penelitian lanjutan
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3 overflow-hidden">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch overflow-hidden">
          {/* Left Column: 3 Conclusions */}
          <div className="col-span-6 flex flex-col justify-between gap-2.5">
            <motion.div variants={item} className="content-card p-3.5">
              <div className="flex items-center gap-2 mb-1 text-emerald-400">
                <CheckCircle2 size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">1. Optimalisasi Pelayanan PMB</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-relaxed">
                Sistem berhasil mengotomatisasi pengisian formulir NIK, Nama, dan Alamat. Pendekatan Kamera Sketsa (Guideline Overlay) sukses menutupi kelemahan inheren Tesseract OCR.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card p-3.5">
              <div className="flex items-center gap-2 mb-1 text-amber-400">
                <ShieldCheck size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">2. Validasi &amp; Mitigasi UI Constraint</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-relaxed">
                Tingginya CER dasar peladen (70,25% NIK &amp; 78,65% Nama) teratasi dengan mengalihkan beban standarisasi ke antarmuka pengguna (Client), menjaga presisi dan stabilitas sistem.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card p-3.5">
              <div className="flex items-center gap-2 mb-1 text-cyan-400">
                <Zap size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">3. Efisiensi Performa Terbukti</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-relaxed">
                Peningkatan efisiensi waktu hingga <strong className="text-emerald-400">3,66 kali lipat</strong> (120,00s → 32,77s) tercapai tanpa membebani memori peladen dengan rotasi citra otomatis.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 3 Academic Suggestions Cards (Clean & Pure UI!) */}
          <div className="col-span-6 flex flex-col justify-between gap-2.5">
            <motion.div variants={item} className="content-card-gold p-3.5">
              <div className="flex items-center gap-2 mb-1 text-gold-400">
                <Lightbulb size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">1. Migrasi ke Deep Learning OCR</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-relaxed">
                Mengganti mesin Tesseract konvensional dengan model berbasis Deep Learning modern seperti EasyOCR atau PaddleOCR guna menangani variasi font yang non-standar.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card-gold p-3.5">
              <div className="flex items-center gap-2 mb-1 text-gold-400">
                <Eye size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">2. Modul Image Quality Assessment (IQA)</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-relaxed">
                Mengintegrasikan algoritma deteksi blur dan pencahayaan otomatis (IQA) pada sisi JavaScript browser untuk memberi peringatan dini sebelum foto diunggah pendaftar.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card-gold p-3.5">
              <div className="flex items-center gap-2 mb-1 text-gold-400">
                <Server size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">3. Infrastruktur Peladen VPS Terdedikasi</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-relaxed">
                Memigrasikan layanan REST API Flask dari lingkungan pengujian Colab ke infrastruktur Cloud VPS terdedikasi (Docker containerized) untuk skalabilitas portal PMB UMB.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
