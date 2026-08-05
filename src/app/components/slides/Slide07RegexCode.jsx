"use client";

import { motion } from "framer-motion";
import { Code2, ShieldAlert, Layers } from "lucide-react";

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

export default function Slide07RegexCode() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Logika Parsing Teks: Regex Multi-Layered Fallback</h2>
        <p className="slide-subtitle mt-1">
          Penguraian 16 digit NIK & Nama dengan toleransi noise dan fail-fast protection
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: Fallback Logic Breakdown */}
          <div className="col-span-5 flex flex-col justify-between gap-3">
            <motion.div variants={item} className="space-y-2">
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[0.7rem] font-bold text-emerald-400 uppercase tracking-wider block mb-0.5">Lapis 1: Label Keyword</span>
                <p className="text-cream-200 text-[0.72rem]">Cari label &quot;NIK&quot; lalu ekstrak 16 digit setelahnya.</p>
              </div>

              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <span className="text-[0.7rem] font-bold text-amber-400 uppercase tracking-wider block mb-0.5">Lapis 2: Absolute 16-Digit</span>
                <p className="text-cream-200 text-[0.72rem]">Fallback jika label terpotong: cari 16 digit angka berurutan (\b\d&#123;16&#125;\b).</p>
              </div>

              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                <span className="text-[0.7rem] font-bold text-red-400 uppercase tracking-wider block mb-0.5">Lapis 3: Relaxed Spaced Match</span>
                <p className="text-cream-200 text-[0.72rem]">Toleransi spasi kotor: cari 16 digit berselang spasi akibat noise scanner.</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="content-card-gold p-3">
              <span className="text-[0.7rem] font-bold text-gold-400 uppercase tracking-wider block mb-0.5">Stop-Words Filter Nama</span>
              <p className="text-cream-200 text-[0.72rem]">
                Filter heuristik <code className="text-gold-300">isupper()</code> mengabaikan teks identitas wilayah (&quot;PROVINSI&quot;, &quot;KOTA&quot;, &quot;AGAMA&quot;).
              </p>
            </motion.div>
          </div>

          {/* Right Column: Live Python Regex Code */}
          <motion.div variants={item} className="col-span-7 content-card p-4 font-mono text-[0.68rem] leading-relaxed flex flex-col justify-between" style={{ background: "#060b13" }}>
            <div>
              <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/10 text-gold-400">
                <div className="flex items-center gap-2">
                  <Code2 size={14} />
                  <span className="font-semibold text-xs text-cream-200">_extract_nik(text) — Python Regex</span>
                </div>
                <span className="text-[0.65rem] text-cream-300">Multi-Layered Fallback</span>
              </div>

              <pre className="text-cream-200 overflow-x-auto">
{`def _extract_nik(text):
    # Layer 1: Search by NIK Label Header
    m = re.search(r"NIK\\s*[:\\-]?\\s*(\\d[\\d\\s]{14,19}\\d)", text, re.IGNORECASE)
    if m:
        clean = re.sub(r"\\s", "", m.group(1))
        if len(clean) >= 16: return clean[:16]
        
    # Layer 2: Fallback — Absolute 16-Digit Match
    found = re.findall(r"\\b(\\d{16})\\b", text)
    if found: return found[0]
    
    # Layer 3: Fallback — Relaxed Spaced Match
    relaxed = re.findall(r"(\\d[\\d\\s]{14,19}\\d)", text)
    for match in relaxed:
        clean = re.sub(r"\\s", "", match)
        if len(clean) >= 16: return clean[:16]
        
    return "Tidak Terbaca"`}
              </pre>
            </div>

            <div className="mt-2 pt-2 border-t border-white/10 text-[0.68rem] text-gold-300">
              🛡️ Algoritma tidak pernah <span className="font-bold text-red-400">fail-fast</span> jika label header KTP pudar/terpotong.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
