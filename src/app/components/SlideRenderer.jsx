"use client";

import { motion } from "framer-motion";
import Slide01Title from "./slides/Slide01Title";
import Slide02LatarBelakang from "./slides/Slide02LatarBelakang";
import Slide03Metodologi from "./slides/Slide03Metodologi";
import Slide04Prapemrosesan from "./slides/Slide04Prapemrosesan";
import Slide05Regex from "./slides/Slide05Regex";
import Slide06Evaluasi from "./slides/Slide06Evaluasi";
import Slide07Inovasi from "./slides/Slide07Inovasi";
import Slide08Hasil from "./slides/Slide08Hasil";
import Slide09Penutup from "./slides/Slide09Penutup";

const slides = [
  Slide01Title,
  Slide02LatarBelakang,
  Slide03Metodologi,
  Slide04Prapemrosesan,
  Slide05Regex,
  Slide06Evaluasi,
  Slide07Inovasi,
  Slide08Hasil,
  Slide09Penutup,
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
    scale: 0.96,
    filter: "blur(6px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -40 : 40,
    scale: 0.96,
    filter: "blur(4px)",
  }),
};

const slideTransition = {
  type: "spring",
  stiffness: 200,
  damping: 28,
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
