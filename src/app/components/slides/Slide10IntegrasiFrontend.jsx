"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";

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

export default function Slide10IntegrasiFrontend() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Logika Ekstraksi Regex Multi-Layered Fallback</h2>
        <p className="slide-subtitle mt-1">
          Algoritma pemrosesan teks hasil OCR berbasis Regular Expression berlapis (Fail-Safe Strategy)
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-5 mt-3 items-stretch overflow-hidden">
        {/* Left Column: Regex Multi-Layer Strategy */}
        <div className="col-span-5 flex flex-col justify-between gap-3 overflow-y-auto custom-scrollbar pr-1">
          {/* Architecture Concept */}
          <motion.div variants={item} className="content-card p-3.5">
            <div className="flex items-center gap-2 mb-1 text-gold-400">
              <Cpu size={16} />
              <h3 className="text-xs font-bold uppercase tracking-wider">Konsep Algoritma Fallback</h3>
            </div>
            <p className="text-cream-200 text-xs leading-relaxed">
              Tesseract sering kali merusak kata label seperti <code className="text-gold-300">"NIK"</code> menjadi <code className="text-red-400">"N1K"</code> atau memberi spasi pada angka. Algoritma 3-Lapis ini menjamin data NIK tetap terekstraksi presisi.
            </p>
          </motion.div>

          {/* 3 Regex Layers for NIK */}
          <motion.div variants={item} className="space-y-2">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between text-[0.68rem] mb-1">
                <span className="font-bold text-gold-300">Lapis 1: Direct Label Match</span>
                <span className="font-mono text-cream-300">NIK + 16 Digit</span>
              </div>
              <code className="text-[0.65rem] font-mono text-cyan-300 bg-black/40 px-2 py-0.5 rounded block">
                r"NIK\s*[:\.-]?\s*(\d{16})"
              </code>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between text-[0.68rem] mb-1">
                <span className="font-bold text-cyan-300">Lapis 2: Pure 16-Digit Sequence</span>
                <span className="font-mono text-cream-300">Label NIK Rusak</span>
              </div>
              <code className="text-[0.65rem] font-mono text-cyan-300 bg-black/40 px-2 py-0.5 rounded block">
                r"\b\d{16}\b"
              </code>
            </div>

            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between text-[0.68rem] mb-1">
                <span className="font-bold text-emerald-400">Lapis 3: Spaced Digit Normalization</span>
                <span className="font-mono text-cream-300">Angka Terpisah Spasi</span>
              </div>
              <code className="text-[0.65rem] font-mono text-cyan-300 bg-black/40 px-2 py-0.5 rounded block">
                r"\b(?:\d\s*){16}\b"
              </code>
            </div>
          </motion.div>

          {/* Benefit Badge */}
          <motion.div variants={item} className="content-card-gold p-3">
            <div className="flex items-center gap-1.5 text-gold-400 mb-0.5">
              <ShieldCheck size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Garansi Keandalan (Fail-Safe)</span>
            </div>
            <p className="text-[0.7rem] text-cream-200">
              Jika Lapis 1 gagal akibat noise OCR, Lapis 2 &amp; 3 otomatis mengambil alih pemindaian.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Code Window & Python Function Implementation */}
        <motion.div variants={item} className="col-span-7 content-card p-3 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400 mb-2">
            <div className="flex items-center gap-2">
              <Code2 size={16} />
              <span className="font-semibold text-xs text-cream-100">Implementasi Python regex_parser.py</span>
            </div>
            <span className="text-[0.62rem] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Backend Flask Module
            </span>
          </div>

          {/* Python Code Window */}
          <div className="w-full flex-1 rounded-xl p-3 bg-[#060b13] border border-white/10 overflow-x-auto font-mono text-[0.68rem] leading-relaxed my-1">
            <pre className="text-cream-200">
              <span className="text-purple-400">import</span> re{"\n\n"}
              <span className="text-blue-400">def</span> <span className="text-yellow-300">extract_nik</span>(ocr_text):{"\n"}
              {"    "}<span className="text-cream-300"># Lapis 1: Cari kata NIK + 16 digit</span>{"\n"}
              {"    "}match = re.search(<span className="text-emerald-300">r"NIK\s*[:\.-]?\s*(\d{16})"</span>, ocr_text, re.IGNORECASE){"\n"}
              {"    "}<span className="text-purple-400">if</span> match: <span className="text-purple-400">return</span> match.group(<span className="text-cyan-300">1</span>){"\n\n"}
              {"    "}<span className="text-cream-300"># Lapis 2: Fallback 16 digit murni</span>{"\n"}
              {"    "}match = re.search(<span className="text-emerald-300">r"\b\d{16}\b"</span>, ocr_text){"\n"}
              {"    "}<span className="text-purple-400">if</span> match: <span className="text-purple-400">return</span> match.group(<span className="text-cyan-300">0</span>){"\n\n"}
              {"    "}<span className="text-cream-300"># Lapis 3: Fallback angka terpisah spasi</span>{"\n"}
              {"    "}raw_digits = re.sub(<span className="text-emerald-300">r"\D"</span>, <span className="text-emerald-300">""</span>, ocr_text){"\n"}
              {"    "}<span className="text-purple-400">if</span> len(raw_digits) &gt;= <span className="text-cyan-300">16</span>: <span className="text-purple-400">return</span> raw_digits[:<span className="text-cyan-300">16</span>]{"\n\n"}
              {"    "}<span className="text-purple-400">return</span> <span className="text-red-400">None</span>
            </pre>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-xs mt-1">
            <span className="text-cream-200">Output Hasil Extraction:</span>
            <span className="font-mono font-bold text-emerald-400">"3204012506980001" (NIK Sah)</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
