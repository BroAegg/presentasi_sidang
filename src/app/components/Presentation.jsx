"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SlideRenderer from "./SlideRenderer";
import ProgressBar from "./ProgressBar";
import Footer from "./Footer";

const TOTAL_SLIDES = 9;

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback(
    (index) => {
      if (index < 0 || index >= TOTAL_SLIDES) return;
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide]
  );

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

  // Keyboard navigation
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

  return (
    <>
      {/* Progress Bar */}
      <ProgressBar current={currentSlide} total={TOTAL_SLIDES} />

      {/* Presentation Viewport */}
      <div className="presentation-viewport">
        {/* Slide Frame */}
        <div className="slide-frame">
          <AnimatePresence mode="wait" custom={direction}>
            <SlideRenderer
              key={currentSlide}
              index={currentSlide}
              direction={direction}
            />
          </AnimatePresence>

          {/* Footer */}
          <Footer current={currentSlide + 1} total={TOTAL_SLIDES} />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className="nav-button nav-prev"
        onClick={prevSlide}
        disabled={currentSlide === 0}
        aria-label="Slide sebelumnya"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="nav-button nav-next"
        onClick={nextSlide}
        disabled={currentSlide === TOTAL_SLIDES - 1}
        aria-label="Slide berikutnya"
      >
        <ChevronRight size={20} />
      </button>
    </>
  );
}
