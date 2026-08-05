"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
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

export default function Slide01Title() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center gap-5"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* University Logo */}
      <motion.div variants={item}>
        <div className="image-placeholder w-28 h-28 rounded-full mx-auto" style={{ border: "1px solid rgba(212, 168, 83, 0.2)" }}>
          <img
            src="/assets/logo-umb.png"
            alt="Logo Universitas Muhammadiyah Bandung"
            className="w-full h-full object-contain p-2"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<span style="color:#ddd6c8;font-size:0.7rem">logo-umb.png</span>';
            }}
          />
        </div>
      </motion.div>

      {/* Gold Divider */}
      <motion.div variants={item}>
        <div className="slide-heading-accent mx-auto" />
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={item}
        className="slide-title max-w-4xl"
        style={{ fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)" }}
      >
        IMPLEMENTASI FITUR AUTOFILL DATA CALON MAHASISWA MENGGUNAKAN
        TEKNOLOGI OCR BERBASIS TESSERACT PADA SISTEM PMB
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={item}
        className="slide-subtitle tracking-widest uppercase text-sm"
      >
        Universitas Muhammadiyah Bandung
      </motion.p>

      {/* Presenter Info Card */}
      <motion.div variants={item} className="mt-3">
        <div className="content-card-gold px-8 py-3 inline-block">
          <p className="text-cream-100 font-medium text-base tracking-wide">
            Aegner Billik
          </p>
          <p className="glow-text-gold text-sm mt-0.5 font-mono">
            220102007
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
