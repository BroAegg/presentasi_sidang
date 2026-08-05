"use client";

import { motion } from "framer-motion";
import { Code2, ShieldAlert, Sparkles, Filter } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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
        <p className="slide-subtitle mt-0.5">
          Penguraian 16 digit NIK &amp; Nama dengan toleransi noise dan fail-fast protection
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-5 mt-3 items-stretch">
        {/* Left Column: Fallback Logic Breakdown - Spans Full Height */}
        <div className="col-span-6 flex flex-col justify-between gap-2.5">
          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-emerald-500/10 border-emerald-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-emerald-400 uppercase tracking-wider">Lapis 1: Label Keyword Header</span>
                <span className="font-mono text-[0.65rem] text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">Primary Match</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Mencari kata kunci header &quot;NIK&quot; lalu mengisolasi 16 digit angka pertama setelah tanda baca <code className="text-emerald-300">:</code> atau <code className="text-emerald-300">-</code>.
              </p>
            </div>
            <code className="font-mono text-[0.65rem] text-emerald-300 bg-black/40 p-1.5 rounded border border-white/5 block mt-1">
              r&quot;NIK\s*[:\-]?\s*(\d[\d\s]&#123;14,19&#125;\d)&quot;
            </code>
          </motion.div>

          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-amber-500/10 border-amber-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-amber-400 uppercase tracking-wider">Lapis 2: Fallback Absolute 16-Digit</span>
                <span className="font-mono text-[0.65rem] text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">Secondary</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Jika kata kunci header pudar: mengekstraksi deretan 16 digit angka murni berurutan tanpa memperhatikan kata kunci.
              </p>
            </div>
            <code className="font-mono text-[0.65rem] text-amber-300 bg-black/40 p-1.5 rounded border border-white/5 block mt-1">
              r&quot;\b(\d&#123;16&#125;)\b&quot;
            </code>
          </motion.div>

          <motion.div variants={item} className="content-card p-3 flex-1 flex flex-col justify-between bg-red-500/10 border-red-500/20">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-[0.7rem] font-bold text-red-400 uppercase tracking-wider">Lapis 3: Fallback Relaxed Spaced Match</span>
                <span className="font-mono text-[0.65rem] text-red-300 bg-red-500/20 px-2 py-0.5 rounded">Tertiary</span>
              </div>
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Toleransi spasi kotor: mengekstraksi 16 digit yang terpisah oleh spasi acak akibat noise scanner lalu membersihkan spasi.
              </p>
            </div>
            <code className="font-mono text-[0.65rem] text-red-300 bg-black/40 p-1.5 rounded border border-white/5 block mt-1">
              r&quot;(\d[\d\s]&#123;14,19&#125;\d)&quot;
            </code>
          </motion.div>

          <motion.div variants={item} className="content-card-gold p-2.5 flex items-center gap-2">
            <Filter size={16} className="text-gold-400 flex-shrink-0" />
            <p className="text-cream-200 text-[0.7rem] leading-snug">
              <strong className="text-gold-300">Stop-Words Filter Nama:</strong> Mengabaikan entitas wilayah (&quot;PROVINSI&quot;, &quot;KOTA&quot;, &quot;AGAMA&quot;) via heuristik <code className="text-gold-300">isupper()</code>.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Code & Image Asset - NO GAPS */}
        <motion.div
          variants={item}
          className="col-span-6 content-card p-4 flex flex-col justify-between"
          style={{ background: "#060b13" }}
        >
          <div className="flex flex-col h-full justify-between">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400">
              <div className="flex items-center gap-2">
                <Code2 size={16} />
                <span className="font-semibold text-xs text-cream-100">_extract_nik(text)</span>
              </div>
              <span className="text-[0.65rem] font-mono text-gold-300 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                Multi-Layered Fallback
              </span>
            </div>

            {/* Python Code Block */}
            <div className="my-2 p-3 rounded-lg bg-black/60 border border-white/10 font-mono text-[0.68rem] leading-relaxed overflow-x-auto">
              <pre className="text-cream-200">
{`def _extract_nik(text):
    # Layer 1: NIK Header Match
    m = re.search(r"NIK\\s*[:\\-]?\\s*(\\d[\\d\\s]{14,19}\\d)", text)
    if m:
        clean = re.sub(r"\\s", "", m.group(1))
        if len(clean) >= 16: return clean[:16]
        
    # Layer 2: Absolute 16-Digit
    found = re.findall(r"\\b(\\d{16})\\b", text)
    if found: return found[0]
    
    # Layer 3: Relaxed Spaced Match
    relaxed = re.findall(r"(\\d[\\d\\s]{14,19}\\d)", text)
    for match in relaxed:
        clean = re.sub(r"\\s", "", match)
        if len(clean) >= 16: return clean[:16]
    return "Tidak Terbaca"`}
              </pre>
            </div>

            {/* Code Image Asset */}
            <div className="relative flex-1 min-h-[110px] rounded-lg bg-black/40 border border-white/10 overflow-hidden flex items-center justify-center p-2">
              <img
                src="/assets/code-regex.png"
                alt="Regex Code"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.72rem">code-regex.png</span>';
                }}
              />
            </div>

            {/* Footer Tag */}
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[0.68rem] text-gold-300">
              <div className="flex items-center gap-1.5">
                <ShieldAlert size={14} className="text-gold-400" />
                <span>Fail-Safe: Menjamin NIK 16 digit selalu tertangkap</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
