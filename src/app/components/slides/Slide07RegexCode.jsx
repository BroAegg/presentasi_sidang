"use client";

import { motion } from "framer-motion";
import { Code2, ShieldCheck, Filter } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
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
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item} className="mb-2">
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Logika Parsing Teks: Regex Multi-Layered Fallback</h2>
        <p className="slide-subtitle">
          Penguraian 16 digit NIK &amp; Nama dengan toleransi noise dan fail-fast protection
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-4 items-stretch min-h-0 overflow-hidden">
        {/* Left Column: Fallback Logic Breakdown */}
        <div className="col-span-5 flex flex-col justify-between gap-2 overflow-y-auto no-scrollbar pr-1">
          <motion.div variants={item} className="content-card p-2.5 flex-1 flex flex-col justify-between bg-emerald-500/10 border-emerald-500/20">
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[0.68rem] font-bold text-emerald-400 uppercase tracking-wider">Lapis 1: Label Keyword Header</span>
                <span className="font-mono text-[0.6rem] text-emerald-300 bg-emerald-500/20 px-1.5 py-0.5 rounded">Primary</span>
              </div>
              <p className="text-cream-200 text-[0.68rem] leading-snug">
                Mencari kata kunci header &quot;NIK&quot; lalu mengisolasi 16 digit angka pertama setelah tanda baca <code className="text-emerald-300">:</code> atau <code className="text-emerald-300">-</code>.
              </p>
            </div>
            <code className="font-mono text-[0.62rem] text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded border border-white/5 block mt-1">
              r&quot;NIK\s*[:\-]?\s*(\d[\d\s]&#123;14,19&#125;\d)&quot;
            </code>
          </motion.div>

          <motion.div variants={item} className="content-card p-2.5 flex-1 flex flex-col justify-between bg-amber-500/10 border-amber-500/20">
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[0.68rem] font-bold text-amber-400 uppercase tracking-wider">Lapis 2: Absolute 16-Digit</span>
                <span className="font-mono text-[0.6rem] text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded">Secondary</span>
              </div>
              <p className="text-cream-200 text-[0.68rem] leading-snug">
                Fallback jika kata kunci pudar: mengekstraksi 16 digit angka berurutan tanpa kata kunci header.
              </p>
            </div>
            <code className="font-mono text-[0.62rem] text-amber-300 bg-black/40 px-1.5 py-0.5 rounded border border-white/5 block mt-1">
              r&quot;\b(\d&#123;16&#125;)\b&quot;
            </code>
          </motion.div>

          <motion.div variants={item} className="content-card p-2.5 flex-1 flex flex-col justify-between bg-red-500/10 border-red-500/20">
            <div>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[0.68rem] font-bold text-red-400 uppercase tracking-wider">Lapis 3: Relaxed Spaced Match</span>
                <span className="font-mono text-[0.6rem] text-red-300 bg-red-500/20 px-1.5 py-0.5 rounded">Tertiary</span>
              </div>
              <p className="text-cream-200 text-[0.68rem] leading-snug">
                Toleransi spasi kotor: mengekstraksi 16 digit yang terpisah spasi acak lalu membersihkan spasi.
              </p>
            </div>
            <code className="font-mono text-[0.62rem] text-red-300 bg-black/40 px-1.5 py-0.5 rounded border border-white/5 block mt-1">
              r&quot;(\d[\d\s]&#123;14,19&#125;\d)&quot;
            </code>
          </motion.div>

          <motion.div variants={item} className="content-card-gold p-2 flex items-center gap-1.5">
            <Filter size={14} className="text-gold-400 flex-shrink-0" />
            <p className="text-cream-200 text-[0.66rem] leading-tight">
              <strong className="text-gold-300">Stop-Words Filter:</strong> Mengabaikan entitas wilayah (&quot;PROVINSI&quot;, &quot;KOTA&quot;, &quot;AGAMA&quot;) via heuristik <code className="text-gold-300">isupper()</code>.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Code Block Section */}
        <motion.div
          variants={item}
          className="col-span-7 content-card p-3.5 flex flex-col justify-between overflow-hidden"
          style={{ background: "#060b13" }}
        >
          <div className="flex flex-col h-full justify-between overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-gold-400">
              <div className="flex items-center gap-1.5">
                <Code2 size={15} />
                <span className="font-semibold text-xs text-cream-100">_extract_nik(raw_text)</span>
              </div>
              <span className="text-[0.62rem] font-mono text-gold-300 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                Regex Python Pipeline
              </span>
            </div>

            {/* Python Code Block */}
            <div className="my-2 p-3 rounded-lg bg-black/70 border border-white/10 font-mono text-[0.67rem] leading-relaxed overflow-y-auto flex-1 no-scrollbar">
              <pre className="text-cream-200">
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

            {/* Footer Tag */}
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[0.68rem] text-gold-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Fail-Safe Protection: Menjamin 16 digit NIK selalu tertangkap</span>
              </div>
              <span className="font-mono text-[0.62rem] text-cream-300">Python re module</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
