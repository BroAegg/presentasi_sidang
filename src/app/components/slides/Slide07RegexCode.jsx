"use client";

import { motion } from "framer-motion";
import { Filter, ArrowRight, ShieldCheck, Database, Sparkles } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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

export default function Slide07RegexCode() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item} className="mb-2">
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Logika Parsing Regex (3 Lapis Pencarian)</h2>
        <p className="slide-subtitle">
          Strategi pencarian berlapis agar sistem tidak gampang gagal membaca data KTP
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-4 items-stretch min-h-0 overflow-hidden">
        {/* Left Column: 3 Fallback Layers + Stopwords */}
        <div className="col-span-6 flex flex-col justify-between gap-2.5 overflow-y-auto no-scrollbar pr-1">
          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-emerald-500/10 border-emerald-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-emerald-400 uppercase tracking-wider">Lapis 1: Cari Kata Label &quot;NIK&quot;</span>
                <span className="font-mono text-[0.62rem] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">Plan A</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Mencari kata tulisan &quot;NIK&quot; di KTP lalu mengambil 16 digit angka di sebelah kanannya.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-amber-500/10 border-amber-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-amber-400 uppercase tracking-wider">Lapis 2: Cari 16 Angka Murni</span>
                <span className="font-mono text-[0.62rem] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">Plan B</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Jika kata &quot;NIK&quot; terpotong/rusak, sistem mencari sekuens **16 digit angka murni** di mana saja dalam teks.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-cyan-500/10 border-cyan-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-cyan-400 uppercase tracking-wider">Lapis 3: Bersihkan Spasi Liar</span>
                <span className="font-mono text-[0.62rem] text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded">Plan C</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Jika angkanya terpisah spasi akibat OCR (contoh: <code className="text-cyan-300">3273 0102...</code>), sistem menyatukan angkanya dan membuang spasinya.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="content-card-gold p-2.5 flex items-center gap-2">
            <Filter size={16} className="text-gold-400 flex-shrink-0" />
            <p className="text-cream-200 text-[0.7rem] leading-snug">
              <strong className="text-gold-300">Penyaring Nama:</strong> Mengabaikan kata nama kota/agama (&quot;PROVINSI&quot;, &quot;KOTA&quot;, &quot;AGAMA&quot;) agar tidak keliru sebagai Nama.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Visual Explanation Card */}
        <motion.div
          variants={item}
          className="col-span-6 content-card p-4 flex flex-col justify-between"
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400">
              <div className="flex items-center gap-2">
                <Database size={16} />
                <span className="font-semibold text-xs text-cream-100">Hasil Parsing Data KTP</span>
              </div>
              <span className="text-[0.62rem] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Data Terisolasi Sempurna
              </span>
            </div>

            <div className="space-y-2.5 my-auto">
              <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gold-400 font-bold">1. NIK</span>
                <span className="text-xs font-mono text-cream-100 bg-white/5 px-2 py-0.5 rounded">16 Digit Angka Murni</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 font-bold">2. Nama Lengkap</span>
                <span className="text-xs font-mono text-cream-100 bg-white/5 px-2 py-0.5 rounded">Teks Huruf Kapital</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 font-bold">3. Tanggal Lahir</span>
                <span className="text-xs font-mono text-cream-100 bg-white/5 px-2 py-0.5 rounded">Format DD-MM-YYYY</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-amber-400 font-bold">4. Alamat</span>
                <span className="text-xs font-mono text-cream-100 bg-white/5 px-2 py-0.5 rounded">Teks Lokasi &amp; RT/RW</span>
              </div>
            </div>

            <div className="p-2.5 rounded bg-gold-400/10 border border-gold-400/20 text-[0.72rem] text-cream-200 flex items-center gap-2">
              <Sparkles size={16} className="text-gold-400 flex-shrink-0" />
              <span>Sistem otomatis mengisi 4 data ini ke formulir PMB dalam hitungan detik.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
