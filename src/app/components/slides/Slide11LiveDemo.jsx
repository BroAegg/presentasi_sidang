"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScanFace, ExternalLink, Globe, Sparkles, CheckCircle2, QrCode } from "lucide-react";

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
  const [demoUrl, setDemoUrl] = useState("http://localhost:8000/pmb/scan-ktp");

  return (
    <motion.div
      className="flex flex-col items-center justify-between h-full text-center py-3 px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={item}>
        <div className="slide-heading-accent mx-auto mb-1.5" />
        <h2 className="slide-title">Live Demonstration Fitur OCR Autofill</h2>
        <p className="slide-subtitle mt-0.5">
          Uji Coba Real-Time Antarmuka Kamera Sketsa &amp; Ekstraksi Data KTP pada Sistem PMB UMB
        </p>
      </motion.div>

      {/* Main Interactive Demo Card */}
      <motion.div variants={item} className="w-full max-w-3xl glass-card p-5 border border-gold-400/40 rounded-2xl shadow-2xl relative overflow-hidden my-auto">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <QrCode size={120} className="text-gold-300" />
        </div>

        <div className="flex flex-col items-center space-y-4 relative z-10">
          {/* Glowing Icon */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-24 h-24 rounded-full bg-gold-400/10 animate-ping opacity-75" />
            <div className="w-16 h-16 rounded-full glass-card border border-gold-400/50 flex items-center justify-center shadow-lg bg-gold-400/10">
              <ScanFace size={36} className="text-gold-300" />
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-bold text-cream-100 flex items-center justify-center gap-2">
              <Sparkles size={18} className="text-gold-400" />
              <span>Sesi Pengujian Langsung Dosen Penguji</span>
            </h3>
            <p className="text-cream-300 text-xs max-w-xl mx-auto">
              Bapak/Ibu Dosen Penguji dipersilakan untuk mencoba secara langsung fitur pengungahan KTP &amp; kamera sketsa melalui tautan di bawah ini:
            </p>
          </div>

          {/* Prominent Demo URL Box */}
          <div className="w-full max-w-xl bg-black/40 border border-gold-400/30 rounded-xl p-2.5 flex items-center justify-between gap-3 shadow-inner">
            <div className="flex items-center gap-2.5 px-2 overflow-hidden">
              <Globe size={18} className="text-cyan-400 flex-shrink-0" />
              <input
                type="text"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                className="bg-transparent text-cream-100 font-mono text-xs w-full focus:outline-none tracking-wide"
              />
            </div>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="content-card-gold px-4 py-2 text-xs font-bold text-cream-100 flex items-center gap-2 shadow-md hover:scale-105 transition-all flex-shrink-0"
            >
              <span>Buka Demo</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* 3 Step Demo Steps */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-xl text-left pt-2">
            <div className="glass-card p-2.5 rounded-lg border border-white/10 text-center">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold-400 block mb-0.5">Langkah 1</span>
              <p className="text-[0.72rem] text-cream-200">Akses Portal PMB &amp; Klik Scan KTP</p>
            </div>
            <div className="glass-card p-2.5 rounded-lg border border-white/10 text-center">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-cyan-400 block mb-0.5">Langkah 2</span>
              <p className="text-[0.72rem] text-cream-200">Posisikan KTP di Kamera Sketsa</p>
            </div>
            <div className="glass-card p-2.5 rounded-lg border border-white/10 text-center">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">Langkah 3</span>
              <p className="text-[0.72rem] text-cream-200">Form Autofill Terisi Otomatis</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer Instructions */}
      <motion.div variants={item} className="w-full max-w-2xl">
        <div className="content-card p-2.5 flex items-center justify-center gap-2">
          <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
          <p className="text-cream-300 text-[0.75rem]">
            Sistem REST API Flask &amp; Laravel PMB siap diuji secara lokal maupun melalui tunnel ngrok.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
