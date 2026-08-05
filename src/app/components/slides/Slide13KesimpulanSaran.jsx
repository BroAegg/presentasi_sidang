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
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Kesimpulan Penelitian & Saran Pengembangan</h2>
        <p className="slide-subtitle mt-1">
          Rangkuman penemuan utama Bab V dan rekomendasi penelitian lanjutan
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: 3 Conclusions */}
          <div className="col-span-6 flex flex-col justify-between gap-2.5">
            <motion.div variants={item} className="content-card p-3">
              <div className="flex items-center gap-2 mb-1 text-emerald-400">
                <CheckCircle2 size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">1. Optimalisasi Pelayanan PMB</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Sistem berhasil mengotomatisasi pengisian formulir NIK, Nama, dan Alamat. Pendekatan Kamera Sketsa (Guideline Overlay) sukses menutupi kelemahan inheren Tesseract OCR.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card p-3">
              <div className="flex items-center gap-2 mb-1 text-amber-400">
                <ShieldCheck size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">2. Validasi & Mitigasi UI Constraint</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Tingginya CER dasar peladen (70,25% NIK & 78,65% Nama) teratasi dengan mengalihkan beban standarisasi ke antarmuka pengguna (Client), menjaga presisi dan stabilitas sistem.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card p-3">
              <div className="flex items-center gap-2 mb-1 text-cyan-400">
                <Zap size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">3. Efisiensi Performa Terbukti</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Peningkatan efisiensi waktu hingga <strong className="text-emerald-400">3,66 kali lipat</strong> (120s $\rightarrow$ 32.77s) tercapai tanpa membebani memori peladen dengan rotasi citra otomatis.
              </p>
            </motion.div>
          </div>

          {/* Right Column: 3 Academic Suggestions */}
          <div className="col-span-6 flex flex-col justify-between gap-2.5">
            <motion.div variants={item} className="content-card-gold p-3">
              <div className="flex items-center gap-2 mb-1 text-gold-400">
                <Lightbulb size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">1. Migrasi ke Deep Learning</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Mengganti Tesseract dengan model modern seperti EasyOCR, PaddleOCR, atau Vision Transformer untuk ketahanan derau & pencahayaan yang lebih tinggi.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card-gold p-3">
              <div className="flex items-center gap-2 mb-1 text-gold-400">
                <Eye size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">2. Image Quality Assessment (IQA)</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Menambahkan modul deteksi blur otomatis via JavaScript di kamera frontend untuk menolak citra tidak fokus sebelum dikirim ke API backend.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card-gold p-3">
              <div className="flex items-center gap-2 mb-1 text-gold-400">
                <Server size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">3. Infrastruktur VPS Terdedikasi</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Memigrasikan Backend Python dari Ngrok tunnel ke Virtual Private Server (VPS) / Cloud untuk meminimalisasi latensi jaringan produksi.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
