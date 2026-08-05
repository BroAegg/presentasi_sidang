"use client";

import { motion } from "framer-motion";
import { Filter, ArrowRight, ShieldCheck, Database } from "lucide-react";

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
        <h2 className="slide-title">Logika Parsing Teks: Regex Multi-Layered Fallback</h2>
        <p className="slide-subtitle">
          Alur Fungsional Ekstraksi &amp; Pemilahan Data Identitas dari Teks Mentah OCR
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-4 items-stretch min-h-0 overflow-hidden">
        {/* Left Column: 3 Fallback Layers + Stopwords */}
        <div className="col-span-6 flex flex-col justify-between gap-2.5 overflow-y-auto no-scrollbar pr-1">
          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-emerald-500/10 border-emerald-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-emerald-400 uppercase tracking-wider">Lapis 1: Label Keyword Header</span>
                <span className="font-mono text-[0.62rem] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">Utama</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Mencari kata kunci header &quot;NIK&quot; lalu mengisolasi 16 digit angka pertama setelah tanda baca <code className="text-emerald-300">:</code> atau <code className="text-emerald-300">-</code>.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-amber-500/10 border-amber-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-amber-400 uppercase tracking-wider">Lapis 2: Fallback Absolute 16-Digit</span>
                <span className="font-mono text-[0.62rem] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">Cadangan 1</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Jika kata kunci header pudar/terpotong: mengekstraksi 16 digit angka murni berurutan di mana saja dalam teks.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-red-500/10 border-red-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-red-400 uppercase tracking-wider">Lapis 3: Fallback Relaxed Spaced Match</span>
                <span className="font-mono text-[0.62rem] text-red-300 bg-red-500/20 px-2 py-0.5 rounded">Cadangan 2</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Toleransi spasi kotor: mengekstraksi 16 digit yang terpisah oleh spasi acak akibat noise scanner lalu membuang spasi.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="content-card-gold p-2.5 flex items-center gap-2">
            <Filter size={16} className="text-gold-400 flex-shrink-0" />
            <p className="text-cream-200 text-[0.7rem] leading-snug">
              <strong className="text-gold-300">Stop-Words Filter Nama:</strong> Mengabaikan entitas wilayah (&quot;PROVINSI&quot;, &quot;KOTA&quot;, &quot;AGAMA&quot;) via heuristik kapitalisasi.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Blackbox Data Extraction Pipeline */}
        <motion.div
          variants={item}
          className="col-span-6 content-card p-4 flex flex-col justify-between"
        >
          <div className="flex flex-col h-full justify-between">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400">
              <div className="flex items-center gap-2">
                <Database size={16} />
                <span className="font-semibold text-xs text-cream-100">Alur Ekstraksi &amp; Mapping Data (Blackbox View)</span>
              </div>
              <span className="text-[0.62rem] font-mono text-cyan-300 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                Raw Text $\rightarrow$ Clean Fields
              </span>
            </div>

            {/* Step-by-Step Data Flow Visual */}
            <div className="my-2 space-y-2.5 flex-1 flex flex-col justify-center">
              {/* Step 1 */}
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/10">
                <span className="text-[0.65rem] font-bold text-amber-400 uppercase tracking-wider block mb-1">1. Tesseract Raw Text (Input Mentah)</span>
                <p className="font-mono text-[0.68rem] text-cream-300 italic">
                  &quot;PROVINSI JAWA BARAT ... NIK : 3204 0125 0698 0001 ... NAMA : UJANG SURYADI&quot;
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-gold-400">
                <ArrowRight size={18} className="rotate-90" />
              </div>

              {/* Step 2 */}
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-wider block mb-1">2. Parsed Output (Form Autofill Ready)</span>
                <div className="grid grid-cols-2 gap-2 font-mono text-[0.7rem]">
                  <div className="p-1.5 rounded bg-black/50 border border-white/10">
                    <span className="text-cream-300 block text-[0.6rem]">NIK (16 Digit):</span>
                    <span className="text-emerald-400 font-bold">3204012506980001</span>
                  </div>
                  <div className="p-1.5 rounded bg-black/50 border border-white/10">
                    <span className="text-cream-300 block text-[0.6rem]">NAMA LENGKAP:</span>
                    <span className="text-emerald-400 font-bold">UJANG SURYADI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Benefit */}
            <div className="pt-2 border-t border-white/10 flex items-center gap-2 text-xs text-gold-300">
              <ShieldCheck size={16} className="text-emerald-400 flex-shrink-0" />
              <p className="text-[0.72rem] text-cream-200 leading-tight">
                <strong>Fail-Safe Protection:</strong> Menjamin 16 digit NIK selalu terisolasi presisi tanpa tergantung format kaku.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
