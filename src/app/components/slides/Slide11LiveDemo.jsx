"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScanFace, ExternalLink, Globe, Sparkles, QrCode } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.05 },
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

export default function Slide11LiveDemo() {
  const [demoUrl, setDemoUrl] = useState("https://ocr-pmb-umbandung.vercel.app/");

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center py-4 px-4 overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={item} className="mb-4">
        <div className="slide-heading-accent mx-auto mb-2" />
        <h2 className="slide-title">Live Demonstration Fitur OCR Autofill</h2>
        <p className="slide-subtitle mt-1">
          Uji Coba Real-Time Antarmuka Kamera Sketsa &amp; Ekstraksi Data KTP pada Sistem PMB UMB
        </p>
      </motion.div>

      {/* Ultra Clean & Prominent Vercel Domain Card */}
      <motion.div variants={item} className="w-full max-w-2xl glass-card p-8 border border-gold-400/50 rounded-3xl shadow-2xl relative overflow-hidden my-auto">
        <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
          <QrCode size={140} className="text-gold-300" />
        </div>

        <div className="flex flex-col items-center space-y-6 relative z-10">
          {/* Glowing Icon */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-28 h-28 rounded-full bg-gold-400/15 animate-ping opacity-75" />
            <div className="w-20 h-20 rounded-2xl glass-card border border-gold-400/60 flex items-center justify-center shadow-xl bg-gold-400/10">
              <ScanFace size={44} className="text-gold-300" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-bold text-cream-100 flex items-center justify-center gap-2">
              <Sparkles size={20} className="text-gold-400" />
              <span>Sesi Pengujian Langsung Dosen Penguji</span>
            </h3>
            <p className="text-cream-300 text-xs max-w-md mx-auto leading-relaxed mt-1">
              Bapak/Ibu Dosen Penguji dipersilakan mengakses domain produksi via smartphone/laptop untuk mensimulasikan pengujian langsung:
            </p>
          </div>

          {/* Prominent Vercel Domain URL Box */}
          <div className="w-full bg-black/60 border-2 border-gold-400/50 rounded-2xl p-3.5 flex items-center justify-between gap-3 shadow-inner hover:border-gold-400 transition-all">
            <div className="flex items-center gap-3 px-3 overflow-hidden flex-1">
              <Globe size={24} className="text-cyan-400 flex-shrink-0" />
              <input
                type="text"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                className="bg-transparent text-gold-300 font-mono text-sm md:text-base font-bold w-full focus:outline-none tracking-wide"
              />
            </div>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card-gold px-5 py-2.5 text-xs font-bold text-cream-100 flex items-center gap-2 shadow-lg hover:scale-105 transition-all flex-shrink-0"
            >
              <span>Buka Live App</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
