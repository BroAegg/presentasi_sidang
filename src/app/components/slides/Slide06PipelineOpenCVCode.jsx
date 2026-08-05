"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, SlidersHorizontal } from "lucide-react";

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

const steps = [
  {
    num: "01",
    name: "Grayscale Conversion",
    desc: "Reduksi dimensi dari RGB 3-channel ke 1-channel skala abu-abu.",
    code: "cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)",
    tag: "BGR2GRAY",
    accent: "text-gold-400 border-gold-400/30 bg-gold-400/10",
  },
  {
    num: "02",
    name: "CLAHE Equalization",
    desc: "Pemerataan kontras adaptif untuk memperjelas batas karakter.",
    code: "cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))",
    tag: "clipLimit=2.0",
    accent: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
  },
  {
    num: "03",
    name: "Gaussian Blur Filter",
    desc: "Filter low-pass untuk meredam noise sensor & bintik pencahayaan.",
    code: "cv2.GaussianBlur(enhanced, (3, 3), 0)",
    tag: "Kernel 3x3",
    accent: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  },
  {
    num: "04",
    name: "Otsu's Binarization",
    desc: "Segmentasi threshold bimodal pemisahan teks hitam & background.",
    code: "cv2.threshold(..., THRESH_BINARY + THRESH_OTSU)",
    tag: "THRESH_OTSU",
    accent: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  },
];

export default function Slide06PipelineOpenCVCode() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Pipeline Pra-Pemrosesan (4 Tahapan Utama OpenCV)</h2>
        <p className="slide-subtitle mt-0.5">
          Kondisioning citra digital KTP sebelum ekstraksi teks Tesseract
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-5 mt-3 items-stretch">
        {/* Left Column: 4 OpenCV Steps - Distributed vertically with NO gaps */}
        <div className="col-span-6 flex flex-col justify-between gap-2.5">
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
                <span className="font-mono text-[0.65rem] text-cream-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                  {s.tag}
                </span>
              </div>
              <p className="text-[0.72rem] text-cream-300 leading-snug my-1">
                {s.desc}
              </p>
              <code className="text-[0.68rem] font-mono text-cyan-300 bg-black/40 px-2 py-1 rounded border border-white/5 block">
                {s.code}
              </code>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Code & Image Box Combo - NO gaps */}
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
                <span className="font-semibold text-xs text-cream-100">preprocess_image(image_file)</span>
              </div>
              <span className="text-[0.65rem] font-mono text-gold-300 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                Python OpenCV
              </span>
            </div>

            {/* Python Code Block */}
            <div className="my-2 p-3 rounded-lg bg-black/60 border border-white/10 font-mono text-[0.68rem] leading-relaxed overflow-x-auto">
              <pre className="text-cream-200">
{`def preprocess_image(image_file):
    # 1. Grayscale
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # 2. CLAHE Contrast Equalization
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))
    enhanced = clahe.apply(gray)
    
    # 3. Gaussian Blur (Noise Filter 3x3)
    blurred = cv2.GaussianBlur(enhanced, (3, 3), 0)
    
    # 4. Otsu's Binarization
    _, binary = cv2.threshold(blurred, 0, 255,
                              cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return binary`}
              </pre>
            </div>

            {/* Code Image Asset Section */}
            <div className="relative flex-1 min-h-[110px] rounded-lg bg-black/40 border border-white/10 overflow-hidden flex items-center justify-center p-2">
              <img
                src="/assets/code-opencv.png"
                alt="OpenCV Code"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.72rem">code-opencv.png</span>';
                }}
              />
            </div>

            {/* Footer Tag */}
            <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[0.68rem] text-gold-300">
              <div className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-gold-400" />
                <span>Hasil: Citra biner terisolasi sempurna untuk Tesseract</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
