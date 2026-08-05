"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 180, damping: 22 },
  },
};

const steps = [
  { num: "1", title: "Grayscale", desc: "Reduksi dimensi RGB ke single-channel luminance." },
  { num: "2", title: "CLAHE", desc: "Pemerataan kontras histogram adaptif (Contrast Limited Adaptive Histogram Equalization)." },
  { num: "3", title: "Gaussian Blur", desc: "Filter low-pass untuk reduksi noise frekuensi tinggi." },
  { num: "4", title: "Otsu's Thresholding", desc: "Binarisasi adaptif pemisahan teks & background." },
];

export default function Slide04Prapemrosesan() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Prapemrosesan Citra (OpenCV)</h2>
        <p className="slide-subtitle mt-1">
          Empat tahap krusial mitigasi derau (noise) sebelum ekstraksi Tesseract
        </p>
      </motion.div>

      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Steps */}
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <motion.div key={i} variants={item} className="content-card flex items-start gap-4">
                <div className="bullet-number">{step.num}</div>
                <div>
                  <p className="text-cream-100 font-semibold text-sm">{step.title}</p>
                  <p className="text-cream-300 text-xs mt-0.5 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div variants={item} className="flex items-center">
            <div className="image-placeholder w-full h-full min-h-[250px] rounded-xl">
              <img
                src="/assets/code-opencv.png"
                alt="Kode OpenCV Prapemrosesan"
                className="w-full h-full object-contain p-4"
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
