"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const steps = [
  {
    num: "1",
    title: "Grayscale",
    desc: "Reduksi dimensi RGB ke single-channel luminance.",
  },
  {
    num: "2",
    title: "CLAHE",
    desc: "Pemerataan kontras histogram adaptif (Contrast Limited Adaptive Histogram Equalization).",
  },
  {
    num: "3",
    title: "Gaussian Blur",
    desc: "Filter low-pass untuk reduksi noise frekuensi tinggi.",
  },
  {
    num: "4",
    title: "Otsu's Thresholding",
    desc: "Binarisasi adaptif pemisahan teks & background.",
  },
];

export default function Slide04Prapemrosesan() {
  return (
    <motion.div
      className="flex flex-col h-full"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={fadeUp}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Prapemrosesan Citra (OpenCV)</h2>
        <p className="slide-subtitle mt-1">
          Empat tahap krusial mitigasi derau (noise) sebelum ekstraksi Tesseract
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex-1 flex items-center mt-4">
        <div className="grid grid-cols-2 gap-6 w-full">
          {/* Left: Steps */}
          <div className="flex flex-col gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="content-card flex items-start gap-4"
              >
                <div className="bullet-number">{step.num}</div>
                <div>
                  <p className="text-cream-100 font-semibold text-sm">
                    {step.title}
                  </p>
                  <p className="text-cream-300 text-xs mt-0.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Image */}
          <motion.div variants={fadeUp} className="flex items-center">
            <div className="image-placeholder w-full h-full min-h-[250px] rounded-xl">
              <img
                src="/assets/code-opencv.png"
                alt="Kode OpenCV Prapemrosesan"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span class="text-cream-300 text-xs">code-opencv.png</span>';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
