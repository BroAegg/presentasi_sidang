"use client";

import { motion } from "framer-motion";
import Slide01Cover from "./slides/Slide01Cover";
import Slide02LatarBelakang from "./slides/Slide02LatarBelakang";
import Slide03TinjauanPustaka from "./slides/Slide03TinjauanPustaka";
import Slide04TesseractLSTM from "./slides/Slide04TesseractLSTM";
import Slide05MetodologiWaterfall from "./slides/Slide05MetodologiWaterfall";
import Slide06PipelineOpenCVCode from "./slides/Slide06PipelineOpenCVCode";
import Slide07RegexCode from "./slides/Slide07RegexCode";
import Slide08EvaluasiPeladen from "./slides/Slide08EvaluasiPeladen";
import Slide09MitigasiKameraSketsa from "./slides/Slide09MitigasiKameraSketsa";
import Slide10IntegrasiFrontend from "./slides/Slide10IntegrasiFrontend";
import Slide11LiveDemo from "./slides/Slide11LiveDemo";
import Slide11GrafikCERFinal from "./slides/Slide11GrafikCERFinal";
import Slide12EvaluasiWaktuSpeedup from "./slides/Slide12EvaluasiWaktuSpeedup";
import Slide13KesimpulanSaran from "./slides/Slide13KesimpulanSaran";
import Slide14PenutupQA from "./slides/Slide14PenutupQA";

const slides = [
  Slide01Cover,
  Slide02LatarBelakang,
  Slide03TinjauanPustaka,
  Slide04TesseractLSTM,
  Slide05MetodologiWaterfall,
  Slide06PipelineOpenCVCode,
  Slide07RegexCode,
  Slide08EvaluasiPeladen,
  Slide09MitigasiKameraSketsa,
  Slide10IntegrasiFrontend,
  Slide11LiveDemo,
  Slide11GrafikCERFinal,
  Slide12EvaluasiWaktuSpeedup,
  Slide13KesimpulanSaran,
  Slide14PenutupQA,
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
