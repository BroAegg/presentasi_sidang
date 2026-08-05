"use client";

import { motion } from "framer-motion";
import { Calculator, ShieldCheck } from "lucide-react";

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
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Grafik & Analisis Character Error Rate (CER) Final</h2>
        <p className="slide-subtitle mt-1">
          Pengukuran berbasis Levenshtein Edit Distance terhadap 50 sampel citra e-KTP
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
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
                Tingginya rata-rata CER pada pengujian peladen (70,25% NIK & 78,65% Nama) membuktikan bahwa Tesseract memiliki akurasi mutlak yang rendah pada input bebas. Data kuantitatif ini <strong className="text-gold-300">secara sah merasionalisasikan</strong> keharusan implementasi UI Constraint Kamera Sketsa pada frontend.
              </p>
            </motion.div>
          </div>

          {/* Right Column: CER Analysis Chart Image */}
          <motion.div variants={item} className="col-span-7 flex items-center justify-center overflow-hidden">
            <div className="image-placeholder w-full h-[320px] max-h-[55vh] rounded-xl flex items-center justify-center p-2.5 bg-black/40 border border-white/10 overflow-hidden">
              <img
                src="/assets/slide10.jpeg"
                alt="Grafik Analisis CER Slide 10"
                className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-lg"
                onError={(e) => {
                  if (!e.target.dataset.triedPng) {
                    e.target.dataset.triedPng = "true";
                    e.target.src = "/assets/slide10.png";
                  } else if (!e.target.dataset.triedJpg) {
                    e.target.dataset.triedJpg = "true";
                    e.target.src = "/assets/slide10.jpg";
                  } else if (!e.target.dataset.triedOld) {
                    e.target.dataset.triedOld = "true";
                    e.target.src = "/assets/grafik-cer-final.jpeg";
                  } else {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span style="color:#ddd6c8;font-size:0.75rem">slide10.jpeg</span>';
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
