"use client";

import { motion } from "framer-motion";
import { Sliders, Sparkles, Layers, ArrowDown } from "lucide-react";

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
  {
    num: "01",
    name: "Grayscale (Skala Abu-abu)",
    desc: "Konversi ruang warna RGB 3-kanal menjadi skala abu-abu 1-kanal guna mereduksi alokasi memori komputasi peladen hingga 66%.",
    tag: "cv2.cvtColor",
    accent: "text-cyan-400 border-cyan-400/30",
  },
  {
    num: "02",
    name: "CLAHE (Ekualisasi Kontras Adaptif)",
    desc: "Meningkatkan distribusi kontras lokal pada area citra bereksposur rendah tanpa mengamplikasi derau (noise).",
    tag: "cv2.createCLAHE",
    accent: "text-gold-400 border-gold-400/30",
  },
  {
    num: "03",
    name: "Gaussian Blur (Reduksi Derau Spasial)",
    desc: "Mengaplikasikan filter spasial Gaussian untuk mereduksi derau citra frekuensi tinggi hasil akuisisi perangkat seluler.",
    tag: "cv2.GaussianBlur",
    accent: "text-blue-400 border-blue-400/30",
  },
  {
    num: "04",
    name: "Otsu Thresholding (Segmentasi Biner)",
    desc: "Segmentasi citra secara otomatis untuk memisahkan objek karakter teks (foreground) secara tegas dari latar belakang (background).",
    tag: "cv2.threshold (Otsu)",
    accent: "text-emerald-400 border-emerald-400/30",
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
      <motion.div variants={item}>
        <div className="slide-heading-accent" />
        <h2 className="slide-title">Pipeline Pra-Pemrosesan Citra (OpenCV)</h2>
        <p className="slide-subtitle mt-1">
          4 Tahap perbaikan mutu citra e-KTP pada peladen sebelum diekstraksi oleh mesin Tesseract OCR
        </p>
      </motion.div>

      <div className="flex-1 grid grid-cols-12 gap-5 mt-3 items-stretch overflow-hidden">
        {/* Left Column: 4 Step List */}
        <div className="col-span-6 flex flex-col justify-between gap-2.5">
          {steps.map((s, i) => (
            <motion.div key={i} variants={item} className="content-card p-3">
              <div className="flex items-center justify-between mb-1">
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

        {/* Right Column: Slide 5 Scrollable Image Container for Long Phone Screenshots */}
        <motion.div
          variants={item}
          className="col-span-6 content-card p-3 flex flex-col justify-between overflow-hidden"
        >
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gold-400 mb-1">
            <div className="flex items-center gap-2">
              <Layers size={16} />
              <span className="font-semibold text-xs text-cream-100">Visualisasi Tahapan Prapemrosesan</span>
            </div>
            <span className="text-[0.62rem] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              OpenCV Pipeline
            </span>
          </div>

          <div className="text-[0.65rem] font-mono text-gold-400/90 mb-1 flex items-center justify-center gap-1">
            <ArrowDown size={12} className="animate-bounce" />
            <span>Gulir ke bawah untuk melihat gambar HP penuh</span>
          </div>

          <div className="image-placeholder w-full h-[250px] max-h-[48vh] rounded-xl p-2 bg-black/50 border border-gold-400/30 overflow-y-auto overflow-x-hidden custom-scrollbar flex flex-col items-center">
            <img
              src="/assets/slide5.jpeg"
              alt="Visualisasi Preprocessing Slide 5"
              className="w-full h-auto object-contain rounded-lg shadow-xl"
              onError={(e) => {
                if (!e.target.dataset.triedPng) {
                  e.target.dataset.triedPng = "true";
                  e.target.src = "/assets/slide5.png";
                } else if (!e.target.dataset.triedJpg) {
                  e.target.dataset.triedJpg = "true";
                  e.target.src = "/assets/slide5.jpg";
                } else if (!e.target.dataset.triedOld) {
                  e.target.dataset.triedOld = "true";
                  e.target.src = "/assets/preprocessing-opencv.jpeg";
                } else {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<span style="color:#ddd6c8;font-size:0.75rem">slide5.jpeg</span>';
                }
              }}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
