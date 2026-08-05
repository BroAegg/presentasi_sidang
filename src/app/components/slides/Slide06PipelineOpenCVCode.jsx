"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, CheckCircle2 } from "lucide-react";

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
      className="flex flex-col h-full overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item} className="mb-2">
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Pipeline Pra-Pemrosesan (4 Tahapan Utama OpenCV)</h2>
        <p className="slide-subtitle">
          Kondisioning citra digital KTP sebelum ekstraksi teks Tesseract
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-4 items-stretch min-h-0 overflow-hidden">
        {/* Left Column: 4 Compact OpenCV Step Cards */}
        <div className="col-span-5 flex flex-col justify-between gap-2 overflow-y-auto no-scrollbar pr-1">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              className="content-card p-2.5 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className={`font-mono text-[0.65rem] font-bold rounded px-1.5 py-0.5 border ${s.accent}`}>
                    {s.num}
                  </span>
                  <h4 className="text-[0.75rem] font-bold text-cream-100">{s.name}</h4>
                </div>
                <span className="font-mono text-[0.6rem] text-cream-300 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
                  {s.tag}
                </span>
              </div>
              <p className="text-[0.68rem] text-cream-300 leading-tight my-1">
                {s.desc}
              </p>
              <code className="text-[0.63rem] font-mono text-cyan-300 bg-black/40 px-1.5 py-0.5 rounded border border-white/5 block overflow-x-auto">
                {s.code}
              </code>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Clean Monokai Code Block (NO overlapping tall image) */}
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
                <span className="font-semibold text-xs text-cream-100">preprocess_image(image_file)</span>
              </div>
              <span className="text-[0.62rem] font-mono text-gold-300 bg-gold-400/10 px-2 py-0.5 rounded border border-gold-400/20">
                OpenCV Python Pipeline
              </span>
            </div>

            {/* Python Code Block - Fits nicely */}
            <div className="my-2 p-3 rounded-lg bg-black/70 border border-white/10 font-mono text-[0.68rem] leading-relaxed overflow-y-auto flex-1 no-scrollbar">
              <pre className="text-cream-200">
{`def preprocess_image(image_file):
    # 1. Grayscale Conversion
    file_bytes = np.frombuffer(image_file.read(), np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # 2. CLAHE (Contrast Limited Adaptive Histogram Equalization)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)
    
    # 3. Gaussian Blur (Noise Reduction 3x3 Filter)
    blurred = cv2.GaussianBlur(enhanced, (3, 3), 0)
    
    # 4. Otsu's Binarization (Adaptive Threshold)
    _, binary = cv2.threshold(blurred, 0, 255,
                              cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    
    return binary`}
              </pre>
            </div>

            {/* Footer Status Badge */}
            <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[0.68rem] text-gold-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" />
                <span>Hasil: Citra biner monokromatik terisolasi presisi tinggi</span>
              </div>
              <span className="font-mono text-[0.62rem] text-cream-300">OpenCV 4.x</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
