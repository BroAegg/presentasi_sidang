"use client";

import { motion } from "framer-motion";
import { Calculator, ShieldCheck, CheckCircle2, AlertOctagon, TrendingDown } from "lucide-react";

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
        <h2 className="slide-title">Grafik &amp; Analisis Character Error Rate (CER) Final</h2>
        <p className="slide-subtitle mt-1">
          Pengukuran berbasis Levenshtein Edit Distance terhadap 50 sampel citra e-KTP
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3 overflow-hidden">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch overflow-hidden">
          {/* Left Column: CER Formula & Academic Justification */}
          <div className="col-span-5 flex flex-col justify-between gap-3">
            {/* Math Formula Card */}
            <motion.div variants={item} className="content-card p-4">
              <div className="flex items-center gap-2 mb-2 text-gold-400">
                <Calculator size={16} />
                <h3 className="text-xs font-bold uppercase tracking-wider">Formulasi Metrik CER</h3>
              </div>
              <div className="p-3 rounded bg-black/40 border border-white/10 font-mono text-center text-xs font-bold text-cream-100">
                {"CER = (S + D + I) / N = Levenshtein(pred, ref) / N"}
              </div>
              <p className="text-[0.7rem] text-cream-300 mt-2">
                *Di mana S = Substitusi, D = Deletions, I = Insertions, dan N = Total karakter referensi.
              </p>
            </motion.div>

            {/* Academic Justification Card */}
            <motion.div variants={item} className="content-card-gold p-4">
              <div className="flex items-center gap-2 mb-1.5 text-gold-400">
                <ShieldCheck size={18} />
                <h3 className="text-xs font-bold uppercase tracking-wider">Justifikasi Akademis</h3>
              </div>
              <p className="text-cream-200 text-xs leading-relaxed">
                Tingginya rata-rata CER pada pengujian peladen (70,25% NIK &amp; 78,65% Nama) membuktikan bahwa Tesseract memiliki akurasi rendah pada foto miring. Data ini <strong className="text-gold-300">secara sah merasionalisasikan</strong> keharusan inovasi UI Constraint Kamera Sketsa.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Direct UI Comparison Card (No Image Needed!) */}
          <div className="col-span-7 flex flex-col justify-between gap-3">
            {/* Baseline vs Final Comparison Card */}
            <motion.div variants={item} className="content-card p-4 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400">
                <div className="flex items-center gap-2">
                  <TrendingDown size={18} />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cream-100">Perbandingan Performa CER (Sebelum vs Sesudah)</h3>
                </div>
                <span className="text-[0.62rem] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Akurasi 100% Final
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 my-2">
                {/* Baseline Box */}
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-red-400 mb-2">
                    <AlertOctagon size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Tanpa Kamera Sketsa</span>
                  </div>
                  <div className="space-y-2 font-mono">
                    <div>
                      <span className="text-[0.68rem] text-cream-300 block">CER NIK:</span>
                      <span className="text-lg font-bold text-red-400">70.25% (Error)</span>
                    </div>
                    <div>
                      <span className="text-[0.68rem] text-cream-300 block">CER Nama:</span>
                      <span className="text-lg font-bold text-red-400">78.65% (Error)</span>
                    </div>
                  </div>
                </div>

                {/* Final System Box */}
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Dengan Kamera Sketsa</span>
                  </div>
                  <div className="space-y-2 font-mono">
                    <div>
                      <span className="text-[0.68rem] text-cream-300 block">CER NIK:</span>
                      <span className="text-lg font-bold text-emerald-400">0.00% (Presisi 100%)</span>
                    </div>
                    <div>
                      <span className="text-[0.68rem] text-cream-300 block">CER Nama:</span>
                      <span className="text-lg font-bold text-emerald-400">0.00% (Presisi 100%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion Badge */}
              <div className="p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-center">
                <p className="text-xs text-cream-100 font-medium">
                  🎉 <strong className="text-emerald-400">Hasil:</strong> Kamera Sketsa berhasil menekan Error Rate hingga 0.00% pada simulasi pengisian formulir PMB.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
