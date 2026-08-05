"use client";

import { motion } from "framer-motion";
import { CheckCircle2, UserCheck, FileText, ArrowRight, ShieldCheck } from "lucide-react";

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

const extractedFields = [
  { field: "NIK (16 Digit)", status: "Terisi Otomatis", desc: "Format 16 digit angka kependudukan sah", accent: "text-emerald-400" },
  { field: "Nama Lengkap", status: "Terisi Otomatis", desc: "Ejaan kapital standar dokumen PDDikti", accent: "text-emerald-400" },
  { field: "Tempat & Tgl Lahir", status: "Terisi Otomatis", desc: "Format kota & tanggal (DD-MM-YYYY)", accent: "text-emerald-400" },
  { field: "Jenis Kelamin", status: "Terisi Otomatis", desc: "Kategori Laki-laki / Perempuan", accent: "text-emerald-400" },
  { field: "Alamat Lengkap", status: "Terisi Otomatis", desc: "Jalan, RT/RW, Kelurahan, Kecamatan", accent: "text-emerald-400" },
];

export default function Slide11GrafikCERFinal() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Hasil Simulasi &amp; Ringkasan Ekstraksi Data Autofill</h2>
        <p className="slide-subtitle mt-1">
          Keberhasilan pengisian otomatis kolom formulir PMB berbasis akuisisi Kamera Sketsa
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3 overflow-hidden">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch overflow-hidden">
          {/* Left Column: Alur Simulasi Autofill Form PMB */}
          <div className="col-span-5 flex flex-col justify-between gap-3">
            <motion.div variants={item} className="content-card p-4">
              <div className="flex items-center gap-2 mb-3 text-gold-400">
                <FileText size={18} />
                <h3 className="text-xs font-bold uppercase tracking-wider">Tahapan Alur Simulasi Autofill</h3>
              </div>
              
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-gold-300 font-bold">1. Buka Form PMB</span>
                  <span className="text-[0.68rem] text-cream-300">Akses Portal Pendaftaran</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-cyan-300 font-bold">2. Scan KTP Sketsa</span>
                  <span className="text-[0.68rem] text-cream-300">Posisikan KTP pada Bingkai</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-amber-300 font-bold">3. OCR Backend</span>
                  <span className="text-[0.68rem] text-cream-300">OpenCV &amp; Tesseract Flask API</span>
                </div>
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between">
                  <span className="text-emerald-400 font-bold">4. Autofill Instant</span>
                  <span className="text-[0.68rem] text-cream-200">Kolom Form Terisi Otomatis</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="content-card-gold p-3.5">
              <div className="flex items-center gap-2 mb-1 text-gold-400">
                <ShieldCheck size={16} />
                <h4 className="text-xs font-bold uppercase tracking-wider text-gold-300">Keunggulan Solusi Usulan</h4>
              </div>
              <p className="text-cream-200 text-xs leading-relaxed">
                Mengeliminasi risiko kesalahan pengetikan (*typo*) NIK &amp; Nama serta mempercepat proses pendaftaran secara signifikan.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Ringkasan Status Ekstraksi 5 Variabel Form PMB */}
          <div className="col-span-7 flex flex-col justify-between gap-2.5">
            <motion.div variants={item} className="content-card p-4 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400 mb-2">
                <div className="flex items-center gap-2">
                  <UserCheck size={18} />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cream-100">Status Ekstraksi Variabel Form PMB</h3>
                </div>
                <span className="text-[0.62rem] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  5 Variabel Terintegrasi
                </span>
              </div>

              <div className="space-y-2 my-1">
                {extractedFields.map((f, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-cream-100 block">{f.field}</span>
                      <span className="text-[0.65rem] text-cream-300">{f.desc}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                      <CheckCircle2 size={13} />
                      <span>{f.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center mt-2">
                <p className="text-xs text-cream-100 font-medium">
                  <strong className="text-emerald-400">Kesimpulan Simulasi:</strong> Kamera Sketsa &amp; Tesseract OCR berhasil mengotomatisasi pengisian seluruh variabel formulir pendaftaran PMB UMB.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
