"use client";

import { motion } from "framer-motion";
import { Sparkles, FileText, Target, ShieldAlert } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

const papers = [
  {
    no: "1",
    author: "Reswan et al. (2024)",
    objek: "KTM",
    teknologi: "OCR Template Matching",
    hasil: "Akurasi 88,00%",
    beda: "Aplikasi standalone; belum terintegrasi portal PMB web",
  },
  {
    no: "2",
    author: "Nashiruddin et al. (2025)",
    objek: "KTM UMKLA",
    teknologi: "Tesseract, OpenCV, Regex",
    hasil: "Ekstraksi Berhasil Baik",
    beda: "Objek Kartu Mahasiswa; belum terintegrasi portal PMB web",
  },
  {
    no: "3",
    author: "Sofjan & Soetanto (2025)",
    objek: "e-KTP",
    teknologi: "OCR & CNN",
    hasil: "CER 28,85%",
    beda: "Fokus verifikasi keaslian fisik, bukan autofill formulir",
  },
  {
    no: "4",
    author: "Sherin et al. (2024)",
    objek: "Dokumen Ujian",
    teknologi: "OCR",
    hasil: "Efektif Otomatisasi Input",
    beda: "Konteks administrasi umum, bukan formulir PMB web",
  },
  {
    no: "5",
    author: "Azzahra & Nugroho (2025)",
    objek: "Surat Digital",
    teknologi: "Tesseract, Laravel",
    hasil: "CER 5,71%, WER 9,59%",
    beda: "Objek surat cetak arsip; bukan dokumen identitas e-KTP",
  },
];

const researchGaps = [
  {
    icon: FileText,
    title: "Spesifikasi Objek e-KTP",
    desc: "Studi terdahulu berfokus pada KTM dan dokumen arsip, belum menerapkan otomatisasi ekstraksi biodata e-KTP.",
  },
  {
    icon: Target,
    title: "Fokus Otomasi Autofill PMB",
    desc: "Penelitian e-KTP terdahulu berfokus pada verifikasi keaslian dokumen, bukan untuk pengisian otomatis formulir PMB.",
  },
  {
    icon: ShieldAlert,
    title: "Mitigasi UI Constraint",
    desc: "Belum ada yang menerapkan Kamera Sketsa sisi Klien untuk menutupi kelemahan Tesseract.",
  },
];

export default function Slide03TinjauanPustaka() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item} className="mb-2">
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Tinjauan Pustaka &amp; Kebaruan Penelitian</h2>
        <p className="slide-subtitle">
          Matriks perbandingan 5 penelitian terkait dan identifikasi celah penelitian (*research gap*)
        </p>
      </motion.div>

      <div className="flex-1 flex flex-col justify-between min-h-0 overflow-hidden gap-2.5">
        {/* Table Matrix - Exactly 5 Rows */}
        <motion.div variants={item} className="content-card p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-white/5 text-gold-400 border-b border-white/10 uppercase tracking-wider font-semibold">
                  <th className="py-2.5 px-3">No</th>
                  <th className="py-2.5 px-3">Peneliti &amp; Tahun</th>
                  <th className="py-2.5 px-3">Objek</th>
                  <th className="py-2.5 px-3">Teknologi</th>
                  <th className="py-2.5 px-3">Hasil Utama</th>
                  <th className="py-2.5 px-3">Perbedaan / Celah Penelitian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-cream-200">
                {papers.map((p, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-2 px-3 font-mono text-gold-300 font-bold">{p.no}</td>
                    <td className="py-2 px-3 font-semibold text-cream-100">{p.author}</td>
                    <td className="py-2 px-3">{p.objek}</td>
                    <td className="py-2 px-3 font-mono text-[0.68rem] text-cyan-300">{p.teknologi}</td>
                    <td className="py-2 px-3 font-bold text-amber-300">{p.hasil}</td>
                    <td className="py-2 px-3 text-cream-300 text-[0.7rem]">{p.beda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 3 Research Gap Summary Cards */}
        <motion.div variants={item} className="grid grid-cols-3 gap-3">
          {researchGaps.map((g, i) => {
            const Icon = g.icon;
            return (
              <div key={i} className="content-card p-2.5 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gold-400/10 border border-gold-400/25 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                  <Icon size={14} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gold-300 mb-0.5">{g.title}</h4>
                  <p className="text-cream-200 text-[0.68rem] leading-snug">{g.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Highlighted Golden Novelty Summary Badge */}
        <motion.div variants={item} className="content-card-gold p-2.5 flex items-center gap-2">
          <Sparkles size={16} className="text-gold-400 flex-shrink-0" />
          <p className="text-[0.7rem] text-cream-100">
            <strong className="text-gold-300">Kebaruan Penelitian (Novelty):</strong> Penggunaan Kamera Sketsa sisi Klien sebagai pembatasan antarmuka (UI Constraint) untuk menutupi kelemahan inheren Tesseract OCR pada peladen.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
