"use client";

import { motion } from "framer-motion";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Slide01Title() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full text-center gap-6"
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* University Logo */}
      <motion.div variants={fadeUp} className="mb-2">
        <div className="image-placeholder w-28 h-28 rounded-full mx-auto">
          <img
            src="/assets/logo-umb.png"
            alt="Logo Universitas Muhammadiyah Bandung"
            className="w-full h-full object-contain p-2"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML =
                '<span class="text-cream-300 text-xs">logo-umb.png</span>';
            }}
          />
        </div>
      </motion.div>

      {/* Gold Divider */}
      <motion.div variants={fadeUp}>
        <div className="slide-heading-accent mx-auto" />
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={fadeUp}
        className="slide-title max-w-4xl"
        style={{ fontSize: "clamp(1.3rem, 2.8vw, 2.2rem)" }}
      >
        IMPLEMENTASI FITUR AUTOFILL DATA CALON MAHASISWA MENGGUNAKAN
        TEKNOLOGI OCR BERBASIS TESSERACT PADA SISTEM PMB
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        className="slide-subtitle tracking-widest uppercase text-sm"
      >
        Universitas Muhammadiyah Bandung
      </motion.p>

      {/* Presenter Info Card */}
      <motion.div variants={fadeUp} className="mt-4">
        <div className="content-card-gold px-8 py-3 inline-block">
          <p className="text-cream-100 font-medium text-base tracking-wide">
            Aegner Billik
          </p>
          <p className="text-gold-400 text-sm mt-0.5 font-mono">
            220102007
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
