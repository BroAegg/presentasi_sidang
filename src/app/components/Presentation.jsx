"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideRenderer from "./SlideRenderer";
import Footer from "./Footer";

const TOTAL_SLIDES = 11;

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  const progress = ((currentSlide + 1) / TOTAL_SLIDES) * 100;

  return (
    <>
      {/* Mesh Background */}
      <div className="presentation-viewport">
        {/* Ambient orbs */}
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />

        {/* Glass Slide Frame */}
        <div className="slide-frame">
          <AnimatePresence mode="wait" custom={direction}>
            <SlideRenderer
              key={currentSlide}
              index={currentSlide}
              direction={direction}
            />
          </AnimatePresence>
          <Footer current={currentSlide + 1} total={TOTAL_SLIDES} />
        </div>
      </div>

      {/* Floating Navigation Pill */}
      <motion.div
        className="nav-pill"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        <button
          className="nav-pill-btn"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          aria-label="Slide sebelumnya"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="nav-pill-progress">
          <div
            className="nav-pill-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="nav-pill-counter">
          {currentSlide + 1} / {TOTAL_SLIDES}
        </span>

        <button
          className="nav-pill-btn"
          onClick={nextSlide}
          disabled={currentSlide === TOTAL_SLIDES - 1}
          aria-label="Slide berikutnya"
        >
          <ChevronRight size={16} />
        </button>
      </motion.div>
    </>
  );
}
