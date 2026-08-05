"use client";

import { motion } from "framer-motion";

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
  { num: "01", name: "Grayscale", desc: "Reduksi dimensi RGB ke single-channel luminance." },
  { num: "02", name: "CLAHE", desc: "Pemerataan kontras histogram adaptif (clipLimit=2.0)." },
  { num: "03", name: "Gaussian Blur", desc: "Filter low-pass reduksi noise frekuensi tinggi (3x3)." },
  { num: "04", name: "Otsu Threshold", desc: "Binarisasi adaptif pemisahan teks gelap & background." },
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
        <p className="slide-subtitle mt-1">
          Kondisioning citra digital KTP sebelum ekstraksi teks Tesseract
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-3">
        <div className="grid grid-cols-12 gap-5 w-full items-stretch">
          {/* Left Column: 4 Main OpenCV Steps */}
          <div className="col-span-5 flex flex-col justify-between gap-3">
            {steps.map((s, i) => (
              <motion.div key={i} variants={item} className="content-card p-3 flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-gold-400 bg-gold-400/10 border border-gold-400/25 rounded px-2.5 py-1">
                  {s.num}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-cream-100">{s.name}</h4>
                  <p className="text-[0.7rem] text-cream-300 leading-snug mt-0.5">{s.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={item} className="content-card-gold p-2.5 text-center">
              <span className="text-[0.7rem] text-gold-300 font-medium">
                💡 Kombinasi ini memisahkan teks hitam secara tegas dari laminasi KTP.
              </span>
            </motion.div>
          </div>

          {/* Right Column: OpenCV Code Image Asset */}
          <motion.div variants={item} className="col-span-7 flex items-center">
            <div className="image-placeholder w-full h-full min-h-[270px] rounded-xl flex items-center justify-center p-3">
              <img
                src="/assets/code-opencv.png"
                alt="OpenCV Code"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">code-opencv.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
