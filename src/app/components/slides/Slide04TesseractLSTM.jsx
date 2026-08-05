"use client";

import { motion } from "framer-motion";
import { Cpu, Network, CheckCircle2, ShieldCheck } from "lucide-react";

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

export default function Slide04TesseractLSTM() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Landasan Teori: Mesin Tesseract OCR 5.0 (LSTM)</h2>
        <p className="slide-subtitle mt-1">
          Teknologi pengenalan teks berbasis arsitektur sekuensial Bidirectional LSTM
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: Core Architecture */}
          <div className="col-span-6 flex flex-col justify-between gap-3">
            <motion.div variants={item} className="content-card p-4">
              <div className="flex items-center gap-2 mb-3 text-cyan-400">
                <Network size={18} />
                <h3 className="text-xs font-bold uppercase tracking-wider">3 Alur Pengolahan Tesseract 5.0</h3>
              </div>
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-gold-400/20 text-gold-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <strong className="text-gold-300 block text-xs mb-0.5">Ekstraksi Fitur Citra (CNN Layer)</strong>
                    <p className="text-cream-300 text-[0.72rem]">Menganalisis pola visual garis teks dan membentuk fitur karakter dari citra KTP.</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-400/20 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <strong className="text-cyan-300 block text-xs mb-0.5">Pemodelan Sekuensial (Bi-LSTM)</strong>
                    <p className="text-cream-300 text-[0.72rem]">Mengingat urutan karakter dua arah (kiri ke kanan &amp; kanan ke kiri) tanpa perlu memotong huruf satu per satu.</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-400/20 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <strong className="text-emerald-300 block text-xs mb-0.5">Penerjemahan Karakter (CTC Decoder)</strong>
                    <p className="text-cream-300 text-[0.72rem]">Mengonversi sekuens menjadi hasil teks digital (string NIK, Nama, Tanggal Lahir, dan Alamat).</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Key Advantages for Campus Deployment */}
          <div className="col-span-6 flex flex-col justify-between gap-3">
            <motion.div variants={item} className="content-card-gold p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3 text-gold-400">
                  <Cpu size={18} />
                  <h3 className="text-xs font-bold uppercase tracking-wider">Mengapa Memilih Tesseract OCR 5.0?</h3>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cream-100 block">Open-Source &amp; Sangat Ringan</strong>
                      <span className="text-cream-300 text-[0.72rem]">Dapat berjalan lancar di server CPU standar tanpa memerlukan infrastruktur GPU yang mahal.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cream-100 block">Tanpa Segmentasi Karakter Eksplisit</strong>
                      <span className="text-cream-300 text-[0.72rem]">Arsitektur LSTM mampu membaca sekuens teks utuh sehingga lebih tangguh terhadap variasi spasi KTP.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-gold-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-cream-100 block">Konfigurasi Presisi (--psm 6 -l ind+eng)</strong>
                      <span className="text-cream-300 text-[0.72rem]">Mode PSM 6 memperlakukan area KTP sebagai satu blok teks terstruktur dengan gabungan bahasa Indonesia &amp; Inggris.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2.5 rounded bg-black/30 border border-gold-400/20 text-[0.72rem] text-cream-200 flex items-center gap-2">
                <ShieldCheck size={16} className="text-gold-400 flex-shrink-0" />
                <span>Kelemahan Tesseract pada foto miring ditutupi oleh inovasi Kamera Sketsa di Frontend.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
