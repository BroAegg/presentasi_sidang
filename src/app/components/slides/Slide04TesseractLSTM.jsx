"use client";

import { motion } from "framer-motion";
import { Cpu, Network } from "lucide-react";

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
        <h2 className="slide-title">Landasan Teori: Arsitektur Tesseract 5.0 (LSTM)</h2>
        <p className="slide-subtitle mt-1">
          Pemodelan sekuensial dua arah (Bidirectional LSTM) tanpa segmentasi karakter eksplisit
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: Pipeline Architecture */}
          <div className="col-span-5 flex flex-col justify-between gap-3">
            <motion.div variants={item} className="content-card p-4">
              <div className="flex items-center gap-2 mb-2 text-cyan-400">
                <Network size={18} />
                <h3 className="text-xs font-bold uppercase tracking-wider">Pipeline Deep Learning Tesseract</h3>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                  <span className="font-mono font-bold text-gold-400">1. CNN Layer</span>
                  <span className="text-cream-300 text-[0.72rem]">Ekstraksi fitur visual garis teks</span>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                  <span className="font-mono font-bold text-cyan-400">2. Bi-LSTM</span>
                  <span className="text-cream-300 text-[0.72rem]">Pemodelan konteks sekuensial 2 arah</span>
                </div>
                <div className="p-2 rounded bg-white/5 border border-white/10 flex items-center gap-2">
                  <span className="font-mono font-bold text-emerald-400">3. CTC Decoder</span>
                  <span className="text-cream-300 text-[0.72rem]">Alignment & dekode string karakter</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="content-card-gold p-4">
              <p className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-1">Keunggulan LSTM</p>
              <p className="text-cream-200 text-xs leading-relaxed">
                Memproses baris teks secara utuh tanpa segmentasi karakter individual, sehingga lebih tangguh terhadap variasi spasi dan huruf bersambung.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Mathematical Equations Box */}
          <motion.div variants={item} className="col-span-7 content-card p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-gold-400">
                <Cpu size={18} />
                <h3 className="text-xs font-bold uppercase tracking-wider">Formulasi Matematis Gating Unit LSTM</h3>
              </div>

              {/* Math Equations Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded bg-black/40 border border-white/10">
                  <span className="text-[0.7rem] text-gold-300 uppercase block mb-1">Forget Gate (f_t)</span>
                  <div className="text-cream-100 text-center font-bold py-1">
                    {"f_t = σ(W_f · [h_{t-1}, x_t] + b_f)"}
                  </div>
                </div>

                <div className="p-3 rounded bg-black/40 border border-white/10">
                  <span className="text-[0.7rem] text-cyan-300 uppercase block mb-1">Input Gate (i_t)</span>
                  <div className="text-cream-100 text-center font-bold py-1">
                    {"i_t = σ(W_i · [h_{t-1}, x_t] + b_i)"}
                  </div>
                </div>

                <div className="p-3 rounded bg-black/40 border border-white/10">
                  <span className="text-[0.7rem] text-emerald-300 uppercase block mb-1">Cell State Update (C_t)</span>
                  <div className="text-cream-100 text-center font-bold py-1">
                    {"C_t = f_t ⊙ C_{t-1} + i_t ⊙ C~_t"}
                  </div>
                </div>

                <div className="p-3 rounded bg-black/40 border border-white/10">
                  <span className="text-[0.7rem] text-amber-300 uppercase block mb-1">Output Gate (o_t & h_t)</span>
                  <div className="text-cream-100 text-center font-bold py-1">
                    {"h_t = o_t ⊙ tanh(C_t)"}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[0.72rem] text-cream-300 italic mt-3 text-center">
              *Di mana σ adalah fungsi sigmoid, W dan b adalah matriks bobot dan bias, serta ⊙ adalah Hadamard product.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
