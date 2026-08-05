"use client";

import { motion } from "framer-motion";
import Slide01Cover from "./slides/Slide01Cover";
import Slide02LatarBelakang from "./slides/Slide02LatarBelakang";
import Slide03TujuanBatasan from "./slides/Slide03TujuanBatasan";
import Slide04MetodologiArsitektur from "./slides/Slide04MetodologiArsitektur";
import Slide05PipelineOpenCV from "./slides/Slide05PipelineOpenCV";
import Slide06Regex from "./slides/Slide06Regex";
import Slide07AnalisisKeterbatasan from "./slides/Slide07AnalisisKeterbatasan";
import Slide08MitigasiKameraSketsa from "./slides/Slide08MitigasiKameraSketsa";
import Slide09EvaluasiWaktu from "./slides/Slide09EvaluasiWaktu";
import Slide10Kesimpulan from "./slides/Slide10Kesimpulan";
import Slide11Penutup from "./slides/Slide11Penutup";

const slides = [
  Slide01Cover,
  Slide02LatarBelakang,
  Slide03TujuanBatasan,
  Slide04MetodologiArsitektur,
  Slide05PipelineOpenCV,
  Slide06Regex,
  Slide07AnalisisKeterbatasan,
  Slide08MitigasiKameraSketsa,
  Slide09EvaluasiWaktu,
  Slide10Kesimpulan,
  Slide11Penutup,
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 50 : -50,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -50 : 50,
  }),
};

const slideTransition = {
  type: "spring",
  stiffness: 220,
  damping: 26,
  mass: 0.8,
};

export default function SlideRenderer({ index, direction }) {
  const SlideComponent = slides[index];
  if (!SlideComponent) return null;

  return (
    <motion.div
      className="slide-content"
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={slideTransition}
    >
      <SlideComponent />
    </motion.div>
  );
}
