"use client";

import { motion } from "framer-motion";
import { ScanFace, MonitorPlay, ExternalLink } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
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
  return (
    <motion.div
      className="flex flex-col items-center justify-between h-full text-center py-4 px-4"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={item}>
        <div className="slide-heading-accent mx-auto mb-2" />
        <h2 className="slide-title">Live Demonstration</h2>
        <p className="slide-subtitle mt-1">
          Simulasi Real-Time Ekstraksi e-KTP pada Sistem PMB UMB
        </p>
      </motion.div>

      {/* Center Visual: Large Glowing Pulse Animation */}
      <motion.div variants={item} className="flex flex-col items-center justify-center my-auto">
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Rings */}
          <div className="absolute w-44 h-44 rounded-full bg-gold-400/10 border border-gold-400/20 animate-ping opacity-75" />
          <div className="absolute w-36 h-36 rounded-full bg-cyan-400/15 border border-cyan-400/30 animate-pulse" />
          
          {/* Glass Circle Container */}
          <div className="relative w-28 h-28 rounded-full glass-card border border-gold-400/40 flex items-center justify-center shadow-2xl backdrop-blur-2xl" style={{ boxShadow: "0 0 50px rgba(212, 168, 83, 0.25)" }}>
            <ScanFace size={52} className="text-gold-300" style={{ filter: "drop-shadow(0 0 12px rgba(212, 168, 83, 0.5))" }} />
          </div>
        </div>

        {/* Action Text with Subtle Pulse */}
        <motion.div variants={item} className="mt-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card border border-gold-400/30 text-gold-300 text-sm font-semibold tracking-wider uppercase animate-pulse">
            <MonitorPlay size={18} />
            <span>Switching to Web Application...</span>
          </div>
          <p className="text-cream-300 text-xs tracking-wide">
            [Tekan <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[0.7rem] text-gold-400">Esc</kbd> untuk minimize &amp; buka aplikasi Laravel PMB]
          </p>
        </motion.div>
      </motion.div>

      {/* Footer Banner */}
      <motion.div variants={item} className="w-full max-w-2xl">
        <div className="content-card-gold p-3 flex items-center justify-center gap-3">
          <ExternalLink size={16} className="text-gold-400 flex-shrink-0" />
          <p className="text-cream-200 text-xs">
            <strong className="text-cream-100">Live Testing:</strong> Pengujian kamera sketsa, ekstraksi OCR, dan autofill data secara langsung.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
