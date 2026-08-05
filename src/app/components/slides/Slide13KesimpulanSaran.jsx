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
        <h2 className="slide-title">Kesimpulan Penelitian &amp; Saran Pengembangan</h2>
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
                <h4 className="text-xs font-bold uppercase tracking-wider">2. Validasi &amp; Mitigasi UI Constraint</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Tingginya CER dasar peladen (70,25% NIK &amp; 78,65% Nama) teratasi dengan mengalihkan beban standarisasi ke antarmuka pengguna (Client), menjaga presisi dan stabilitas sistem.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card p-3">
              <div className="flex items-center gap-2 mb-1 text-cyan-400">
                <Zap size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider">3. Efisiensi Performa Terbukti</h4>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Peningkatan efisiensi waktu hingga <strong className="text-emerald-400">3,66 kali lipat</strong> (120s → 32.77s) tercapai tanpa membebani memori peladen dengan rotasi citra otomatis.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Slide 12 Image (Primary: slide12.jpeg) or Suggestions */}
          <motion.div variants={item} className="col-span-6 flex flex-col justify-between gap-2.5">
            <div className="image-placeholder w-full h-full min-h-[260px] rounded-xl flex items-center justify-center p-2">
              <img
                src="/assets/slide12.jpeg"
                alt="Kesimpulan &amp; Saran Slide 12"
                className="w-full h-full object-contain"
                onError={(e) => {
                  if (!e.target.dataset.triedPng) {
                    e.target.dataset.triedPng = "true";
                    e.target.src = "/assets/slide12.png";
                  } else if (!e.target.dataset.triedJpg) {
                    e.target.dataset.triedJpg = "true";
                    e.target.src = "/assets/slide12.jpg";
                  } else if (!e.target.dataset.triedOld) {
                    e.target.dataset.triedOld = "true";
                    e.target.src = "/assets/kesimpulan.jpeg";
                  } else {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `
                      <div className="space-y-2.5 w-full">
                        <div className="content-card-gold p-3">
                          <div className="flex items-center gap-2 mb-1 text-gold-400">
                            <span className="text-xs font-bold uppercase tracking-wider">1. Migrasi ke Deep Learning</span>
                          </div>
                          <p className="text-cream-200 text-[0.72rem] leading-snug">Mengganti Tesseract dengan model modern EasyOCR / PaddleOCR.</p>
                        </div>
                        <div className="content-card-gold p-3">
                          <div className="flex items-center gap-2 mb-1 text-gold-400">
                            <span className="text-xs font-bold uppercase tracking-wider">2. Image Quality Assessment (IQA)</span>
                          </div>
                          <p className="text-cream-200 text-[0.72rem] leading-snug">Menambahkan modul deteksi blur otomatis via JavaScript.</p>
                        </div>
                        <div className="content-card-gold p-3">
                          <div className="flex items-center gap-2 mb-1 text-gold-400">
                            <span className="text-xs font-bold uppercase tracking-wider">3. Infrastruktur VPS Terdedikasi</span>
                          </div>
                          <p className="text-cream-200 text-[0.72rem] leading-snug">Memigrasikan Backend Python ke VPS Cloud produksi.</p>
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
