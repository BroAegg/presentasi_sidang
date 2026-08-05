"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Download } from "lucide-react";
import SlideRenderer from "./SlideRenderer";
import Footer from "./Footer";

// Import all slides for the print/export PDF view
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
import Slide11GrafikCERFinal from "./slides/Slide11GrafikCERFinal";
import Slide12EvaluasiWaktuSpeedup from "./slides/Slide12EvaluasiWaktuSpeedup";
import Slide13KesimpulanSaran from "./slides/Slide13KesimpulanSaran";
import Slide14PenutupQA from "./slides/Slide14PenutupQA";

const allSlideComponents = [
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
  Slide11GrafikCERFinal,
  Slide12EvaluasiWaktuSpeedup,
  Slide13KesimpulanSaran,
  Slide14PenutupQA,
];

const TOTAL_SLIDES = allSlideComponents.length;

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  }, []);

  const handleDownloadPDF = useCallback(() => {
    window.print();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "p" || e.key === "P") {
        if (e.ctrlKey || e.metaKey) {
          // let default ctrl+p handle it
        } else {
          e.preventDefault();
          handleDownloadPDF();
        }
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [nextSlide, prevSlide, toggleFullscreen, handleDownloadPDF]);

  const progress = ((currentSlide + 1) / TOTAL_SLIDES) * 100;

  return (
    <>
      {/* Screen Interactive View */}
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
          title="Slide sebelumnya (Panah Kiri)"
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
          title="Slide berikutnya (Panah Kanan / Spasi)"
          aria-label="Slide berikutnya"
        >
          <ChevronRight size={16} />
        </button>

        <div className="w-[1px] h-5 bg-white/10 mx-1" />

        {/* Fullscreen Button */}
        <button
          className="nav-pill-btn"
          onClick={toggleFullscreen}
          title={isFullscreen ? "Keluar Fullscreen (F)" : "Layar Penuh / Fullscreen (F)"}
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </button>

        {/* Download PDF / Print Button */}
        <button
          className="nav-pill-btn"
          onClick={handleDownloadPDF}
          title="Cetak / Download PDF Presentasi (P)"
          aria-label="Download PDF"
        >
          <Download size={15} />
        </button>
      </motion.div>

      {/* Hidden Print Wrapper: Renders all 14 slides for window.print() PDF Export */}
      <div className="hidden print:block print-wrapper">
        {allSlideComponents.map((SlideComp, idx) => (
          <div key={idx} className="print-slide-page">
            <div className="slide-frame">
              <div className="slide-content">
                <SlideComp />
              </div>
              <Footer current={idx + 1} total={TOTAL_SLIDES} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
