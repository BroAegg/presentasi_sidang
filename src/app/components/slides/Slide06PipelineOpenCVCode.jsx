"use client";

import { motion } from "framer-motion";
import { Code2, Sliders, Sparkles } from "lucide-react";

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

const steps = [
  { num: "01", name: "Grayscale", desc: "Gray = 0.299R + 0.587G + 0.114B" },
  { num: "02", name: "CLAHE", desc: "Equalize histogram (clipLimit=2.0)" },
  { num: "03", name: "Gaussian Blur", desc: "Low-pass filter (kernel 3x3)" },
  { num: "04", name: "Otsu Threshold", desc: "Adaptive bimodal binarization" },
  { num: "05", name: "Deskew", desc: "Rotation matrix via minAreaRect" },
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
        <h2 className="slide-title">Pipeline Pra-Pemrosesan Citra (5 Tahapan OpenCV)</h2>
        <p className="slide-subtitle mt-1">
          Kondisioning citra digital KTP sebelum ekstraksi teks Tesseract
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: 5 Steps Horizontal Process List */}
          <div className="col-span-5 flex flex-col justify-between gap-2">
            {steps.map((s, i) => (
              <motion.div key={i} variants={item} className="content-card p-2.5 flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-gold-400 bg-gold-400/10 border border-gold-400/25 rounded px-2 py-0.5">
                  {s.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-cream-100">{s.name}</h4>
                  <p className="text-[0.7rem] text-cream-300">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Live Python Code Display */}
          <motion.div variants={item} className="col-span-7 content-card p-4 font-mono text-[0.7rem] leading-relaxed flex flex-col justify-between" style={{ background: "#060b13" }}>
            <div>
              <div className="flex items-center justify-between mb-2 pb-1 border-b border-white/10 text-gold-400">
                <div className="flex items-center gap-2">
                  <Code2 size={14} />
                  <span className="font-semibold text-xs text-cream-200">preprocess_image(image_file) — OpenCV Python</span>
                </div>
                <span className="text-[0.65rem] text-cream-300">app.py / Jupyter Notebook</span>
              </div>

              <pre className="text-cream-200 overflow-x-auto">
{`def preprocess_image(image_file):
    file_bytes = np.frombuffer(image_file.read(), np.uint8)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    
    # 1. Grayscale Conversion
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # 2. CLAHE (Contrast Limited Adaptive Histogram Equalization)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)
    
    # 3. Gaussian Blur (Noise Reduction 3x3)
    blurred = cv2.GaussianBlur(enhanced, (3, 3), 0)
    
    # 4. Otsu's Binarization
    _, binary = cv2.threshold(blurred, 0, 255,
                              cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    
    # 5. Deskew (Tilt Correction)
    binary = _deskew(binary)
    return binary`}
              </pre>
            </div>

            <div className="mt-2 pt-2 border-t border-white/10 text-[0.68rem] text-gold-300">
              💡 Kombinasi ini tegas memisahkan teks hitam dari background laminasi KTP.
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
