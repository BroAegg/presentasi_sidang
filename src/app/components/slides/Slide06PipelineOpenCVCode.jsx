"use client";

import { motion } from "framer-motion";
import { Layers, CheckCircle2, Eye, Sparkles } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
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

const steps = [
  {
    num: "01",
    name: "Konversi Grayscale",
    desc: "Mengubah foto warna (RGB) menjadi skala abu-abu untuk menghemat penggunaan memori server hingga 66%.",
    tag: "Hemat Memori 66%",
    accent: "text-gold-400 border-gold-400/30 bg-gold-400/10",
  },
  {
    num: "02",
    name: "Pemerataan Kontras (CLAHE)",
    desc: "Meratakan pencahayaan secara otomatis agar bagian foto KTP yang gelap atau terbayang tetap terlihat jelas.",
    tag: "Penerang Bayangan",
    accent: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    num: "03",
    name: "Penghalus Bintik (Gaussian Blur)",
    desc: "Menyaring bintik-bintik foto (noise kamera HP) agar gambar KTP menjadi lebih halus sebelum dibaca OCR.",
    tag: "Filter Noise HP",
    accent: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    num: "04",
    name: "Binarisasi Tegas (Otsu Thresholding)",
    desc: "Memisahkan tulisan KTP menjadi Hitam Murni (teks) dan Putih Murni (background) tanpa warna abu-abu.",
    tag: "Hitam-Putih Murni",
    accent: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  },
];

export default function Slide06PipelineOpenCVCode() {
  return (
    <motion.div
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item} className="mb-2">
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Pipeline Pra-Pemrosesan Citra (4 Tahap OpenCV)</h2>
        <p className="slide-subtitle">
          Alur penyiapan foto KTP dari jepretan kamera HP hingga menjadi gambar biner siap dibaca OCR
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-4 items-stretch min-h-0 overflow-hidden">
        {/* Left Column: 4 Step Functional Cards */}
        <div className="col-span-6 flex flex-col justify-between gap-2 overflow-y-auto no-scrollbar pr-1">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="content-card p-3 flex-1 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs font-bold rounded px-2 py-0.5 border ${s.accent}`}>
                    {s.num}
                  </span>
                  <h4 className="text-xs font-bold text-cream-100">{s.name}</h4>
                </div>
                <span className="font-mono text-[0.62rem] text-cream-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {s.tag}
                </span>
              </div>
              <p className="text-[0.72rem] text-cream-300 leading-snug my-1">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Simple Visual Card */}
        <motion.div
          variants={item}
          className="col-span-6 content-card p-4 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400">
            <div className="flex items-center gap-2">
              <Layers size={16} />
              <span className="font-semibold text-xs text-cream-100">Hasil Akhir Pengolahan Foto</span>
            </div>
            <span className="text-[0.62rem] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Foto Mentah → Citra Biner
            </span>
          </div>

          <div className="my-auto space-y-3">
            <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-center">
              <span className="text-[0.68rem] text-gold-400 font-bold uppercase tracking-wider block mb-1">Tujuan 4 Tahapan OpenCV</span>
              <p className="text-cream-200 text-xs leading-relaxed">
                Memastikan bahwa tulisan NIK, Nama, Tanggal Lahir, dan Alamat pada KTP menjadi **sangat kontras dan jelas** sehingga mesin Tesseract OCR dapat membacanya tanpa salah huruf.
              </p>
            </div>

            <div className="p-3 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center gap-3">
              <Sparkles size={20} className="text-gold-400 flex-shrink-0" />
              <p className="text-cream-200 text-[0.72rem] leading-snug">
                Proses preprocessing ini berjalan cepat di RAM server (hanya hitungan milidetik per foto).
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
