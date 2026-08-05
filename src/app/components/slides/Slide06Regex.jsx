"use client";

import { motion } from "framer-motion";
import { Code2, ShieldAlert } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

export default function Slide06Regex() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Strategi Parsing Regex (Multi-Layered Fallback)</h2>
        <p className="slide-subtitle mt-1">Ekstraksi teks presisi dengan toleransi noise tinggi</p>
      </motion.div>

      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-12 gap-6 w-full items-stretch">
          {/* Left Column: Concept & Description */}
          <div className="col-span-7 flex flex-col justify-center gap-4">
            <motion.div variants={item} className="content-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <Code2 size={20} className="text-gold-400" />
                <h3 className="text-base font-bold text-cream-100">Prinsip Multi-Layered Fallback</h3>
              </div>
              <p className="text-cream-200 text-sm leading-relaxed">
                Pola Regular Expression (Regex) bertingkat digunakan untuk mengisolasi 16 digit NIK. Algoritma dirancang tangguh agar tidak gagal instan (fail-fast). Jika kata kunci tidak terdeteksi, mesin menelusuri paksa deret angka absolut, mengabaikan derau dan spasi berlebih pada teks raw.
              </p>
            </motion.div>

            <motion.div variants={item} className="content-card-gold p-4 flex items-start gap-3">
              <ShieldAlert size={18} className="text-gold-400 flex-shrink-0 mt-0.5" />
              <p className="text-cream-200 text-xs leading-relaxed">
                <strong className="text-gold-300">Toleransi Noise:</strong> Lapisan fallback tetap sanggup menguji kecocokan 16 digit NIK bahkan saat label header &quot;NIK&quot; terpotong atau tertutup bayangan.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Code Image Placeholder */}
          <motion.div variants={item} className="col-span-5 flex items-center">
            <div className="image-placeholder w-full h-full min-h-[260px] rounded-xl flex items-center justify-center p-4">
              <img
                src="/assets/regex-code.png"
                alt="Kode Parsing Regex Bertingkat"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem;font-weight:500">/assets/regex-code.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
