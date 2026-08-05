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
                <h3 className="text-xs font-bold uppercase tracking-wider">Rasionalisasi Akademis</h3>
              </div>
              <p className="text-cream-200 text-xs leading-relaxed">
                Tingginya rata-rata CER pada pengujian peladen baseline (70,25% NIK &amp; 78,65% Nama) membuktikan bahwa Tesseract rentan terhadap variasi rotasi. Data kuantitatif ini <strong className="text-gold-300">secara sah merasionalisasikan</strong> keharusan inovasi UI Constraint Kamera Sketsa pada sisi antarmuka pengguna.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Baseline vs Final Academic UI Card */}
          <div className="col-span-7 flex flex-col justify-between gap-3">
            <motion.div variants={item} className="content-card p-4 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400">
                <div className="flex items-center gap-2">
                  <TrendingDown size={18} />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cream-100">Perbandingan Performa CER (Baseline vs Sistem Final)</h3>
                </div>
                <span className="text-[0.62rem] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Akurasi Optimal Final
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 my-2">
                {/* Baseline Box */}
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-red-400 mb-2">
                    <AlertOctagon size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Baseline (Tanpa Constraint)</span>
                  </div>
                  <div className="space-y-2 font-mono">
                    <div>
                      <span className="text-[0.68rem] text-cream-300 block">Rata-rata CER NIK:</span>
                      <span className="text-base font-bold text-red-400">70.25% (Degradasi Tinggi)</span>
                    </div>
                    <div>
                      <span className="text-[0.68rem] text-cream-300 block">Rata-rata CER Nama:</span>
                      <span className="text-base font-bold text-red-400">78.65% (Degradasi Tinggi)</span>
                    </div>
                  </div>
                  <p className="text-[0.65rem] text-cream-300 mt-2 border-t border-red-500/20 pt-1">
                    *Tenggelam oleh variasi rotasi &amp; bayangan citra masukan.
                  </p>
                </div>

                {/* Final System Box */}
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 mb-2">
                    <CheckCircle2 size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider">Sistem Final (Kamera Sketsa)</span>
                  </div>
                  <div className="space-y-2 font-mono">
                    <div>
                      <span className="text-[0.68rem] text-cream-300 block">Akurasi Ekstraksi NIK:</span>
                      <span className="text-base font-bold text-emerald-400">100.00% (CER 0,00%)</span>
                    </div>
                    <div>
                      <span className="text-[0.68rem] text-cream-300 block">Akurasi Ekstraksi Nama:</span>
                      <span className="text-base font-bold text-emerald-400">95.00% (CER ~1,25%)</span>
                    </div>
                  </div>
                  <p className="text-[0.65rem] text-cream-300 mt-2 border-t border-emerald-500/20 pt-1">
                    *UI Constraint menstabilkan orientasi citra pada posisi presisi.
                  </p>
                </div>
              </div>

              {/* Academic Conclusion Badge */}
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                <p className="text-xs text-cream-100 font-medium leading-relaxed">
                  <strong className="text-emerald-400">Kesimpulan Evaluasi:</strong> Penerapan UI Constraint Kamera Sketsa terbukti secara signifikan mereduksi Character Error Rate (CER) dan meningkatkan akurasi ekstraksi data hingga <strong>95% - 100%</strong> pada simulasi pendaftaran.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
