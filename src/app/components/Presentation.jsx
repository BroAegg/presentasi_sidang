"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, Download, BookOpen, X, Sparkles } from "lucide-react";
import SlideRenderer from "./SlideRenderer";
import Footer from "./Footer";

// Import all slide components
import Slide01Cover from "./slides/Slide01Cover";
import Slide02LatarBelakang from "./slides/Slide02LatarBelakang";
import Slide03TinjauanPustaka from "./slides/Slide03TinjauanPustaka";
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

const allSlideComponents = [
  Slide01Cover,
  Slide02LatarBelakang,
  Slide03TinjauanPustaka,
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

const TOTAL_SLIDES = allSlideComponents.length;

// Word-for-word speaker notes array matching each active slide index (0 to 13)
const speakerNotes = [
  // Slide 1: Cover
  "Bismillahirrahmanirrahim. Assalamu’alaikum Warahmatullahi Wabarakatuh. Yang saya hormati Ibu Rinanda, Pak Taufik, Pak Nana, serta Bapak/Ibu Dosen Penguji sekalian. Perkenalkan, nama saya Aegner Billik (NIM 220102007) dari Teknik Informatika UMB, di bawah bimbingan Ibu Aila Gema Safitri dan Ibu Firas Atqiya. Pada hari ini, saya mempresentasikan skripsi saya tentang Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan OCR Tesseract pada Sistem PMB UM Bandung.",
  
  // Slide 2: Latar Belakang
  "Bapak/Ibu Penguji, pendaftaran PMB saat ini masih mengisi form secara manual. Ada 2 masalah utama: 1. LAMA (butuh rata-rata 2 menit per form), dan 2. RAWAN SALAH KETIK (human error NIK/Nama yang menyulitkan verifikasi). Solusinya: Mengintegrasikan fitur OCR Autofill agar calon mahasiswa cukup foto KTP dan formulir otomatis terisi sendiri.",
  
  // Slide 3: Tinjauan Pustaka
  "Penelitian terdahulu (Reswan, Nashiruddin, Sofjan, Azzahra) berfokus pada Kartu Mahasiswa atau verifikasi keaslian dokumen. KEBARUAN PENELITIAN SAYA: Spesifik menerapkan autofill e-KTP pada portal PMB Web dengan inovasi Kamera Sketsa (Guideline Overlay) di sisi Frontend untuk menutupi kelemahan mesin OCR di Backend.",
  
  // Slide 4: Metodologi Waterfall
  "Penelitian ini menggunakan Metodologi Waterfall yang terdiri dari 4 tahapan terstruktur: Analisis Kebutuhan ➔ Desain Sistem REST API & UI Kamera Sketsa ➔ Implementasi Kode OpenCV & Tesseract ➔ Pengujian Sistem.",
  
  // Slide 5: OpenCV Preprocessing
  "Sebelum foto KTP diproses OCR, citra diolah di Backend melalui 4 tahap OpenCV: 1. Grayscale (mengubah foto ke abu-abu biar hemat memori 66%), 2. CLAHE (penerang otomatis bagian foto yang gelap/terbayang), 3. Gaussian Blur (menghaluskan bintik foto HP), dan 4. Otsu Thresholding (memisahkan tegas tulisan hitam dari latar belakang KTP).",
  
  // Slide 6: Regex Multi-Layer
  "Untuk membaca data KTP dari teks OCR, saya buat Regex 3 Lapis agar tidak gampang gagal: Lapis 1 (Plan A: Cari kata NIK + 16 angka), Lapis 2 (Plan B: Cari 16 angka murni jika kata NIK rusak), Lapis 3 (Plan C: Bersihkan spasi liar hasil OCR jika angkanya terpisah).",
  
  // Slide 7: Baseline CER Error
  "Bapak/Ibu Penguji, dari pengujian awal 50 foto KTP tanpa batasan posisi, didapatkan hasil Character Error Rate (CER) yang tinggi: NIK 70,25% dan Nama 78,65%. Angka tinggi ini membuktikan secara ilmiah bahwa Tesseract OCR konvensional TIDAK BISA berdiri sendiri tanpa standarisasi posisi foto.",
  
  // Slide 8: Inovasi Kamera Sketsa
  "Oleh karena itu, saya buat inovasi Kamera Sketsa (Guideline Overlay) di sisi Frontend. Fitur ini memaksa pengguna menyelaraskan posisi KTP sebelum difoto, sehingga foto yang dikirim ke server selalu rapi, terang, dan lurus tanpa membebani server dengan algoritma rotasi yang berat.",
  
  // Slide 9: Integrasi REST API Flask
  "Sistem dibangun secara terpisah (decoupled): Frontend Web menangkap foto KTP via Kamera Sketsa ➔ mengirim data ke Backend REST API Flask ➔ Backend menjalankan OpenCV & Tesseract ➔ mengembalikan data JSON NIK, Nama, Tanggal Lahir, & Alamat ke Frontend untuk langsung terisi di form PMB.",
  
  // Slide 10: Live Demonstration
  "Pada slide ini, Bapak/Ibu Dosen Penguji dipersilakan untuk menguji coba fitur OCR Autofill ini secara langsung melalui link demo yang tampil di layar: http://localhost:8000/pmb/scan-ktp. Alurnya sangat ringkas: Calon mahasiswa tinggal klik Scan KTP, posisikan KTP di kamera sketsa, dan seluruh kolom formulir akan terisi otomatis dalam hitungan detik.",
  
  // Slide 11: Grafik CER Final
  "Dengan adanya bantuan Kamera Sketsa pada sistem final, tingkat kesalahan baca (CER) pada simulasi pengisian formulir berhasil ditekan menjadi presisi 100% pada elemen NIK, Nama, dan Alamat.",
  
  // Slide 12: Speedup Ratio 3.66x
  "Dari hasil pengujian efisiensi waktu: Pengisian manual membutuhkan rata-rata 120 detik (2 menit), sedangkan pengisian via OCR Autofill hanya butuh 32,77 detik. Diperoleh Speedup Ratio 3,66x, yang artinya proses pendaftaran menjadi 3,66 kali lebih cepat.",
  
  // Slide 13: Kesimpulan & Saran
  "Kesimpulannya: 1. Fitur OCR Autofill KTP berhasil mempercepat proses pengisian PMB hingga 3,66 kali lebih cepat. 2. Kamera Sketsa terbukti efektif menutupi kelemahan bawaan Tesseract OCR. Saran pengembangan: Memindahkan server backend ke Cloud VPS dan menambah fitur penolak foto blur otomatis.",
  
  // Slide 14: Penutup & Q&A
  "Demikian presentasi skripsi yang dapat saya sampaikan. Terima kasih atas perhatian Ibu Rinanda, Pak Taufik, Pak Nana, Bu Aila, Bu Firas, serta Bapak/Ibu Dosen sekalian. Waktu dan tempat saya kembalikan kepada Ketua Penguji. Wassalamu’alaikum Warahmatullahi Wabarakatuh."
];

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

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

  const toggleNotes = useCallback(() => {
    setShowNotes((prev) => !prev);
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
      } else if (e.key === "n" || e.key === "N") {
        e.preventDefault();
        toggleNotes();
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
  }, [nextSlide, prevSlide, toggleFullscreen, toggleNotes, handleDownloadPDF]);

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

      {/* Floating Interactive Speaker Notes Drawer Modal */}
      <AnimatePresence>
        {showNotes && (
          <motion.div
            className="fixed top-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] glass-card p-4 border border-gold-400/50 rounded-2xl shadow-2xl backdrop-blur-2xl text-left"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            style={{ boxShadow: "0 10px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(212, 168, 83, 0.2)" }}
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gold-400/30 text-gold-400">
              <div className="flex items-center gap-2">
                <BookOpen size={16} />
                <span className="font-bold text-xs uppercase tracking-wider text-cream-100">
                  Naskah Bicara Slide {currentSlide + 1} / {TOTAL_SLIDES}
                </span>
              </div>
              <button
                onClick={() => setShowNotes(false)}
                className="p-1 rounded-full hover:bg-white/10 text-cream-300 hover:text-cream-100 transition-all"
                title="Tutup Catatan (N)"
              >
                <X size={16} />
              </button>
            </div>

            <div className="text-xs text-cream-100 leading-relaxed font-sans max-h-[60vh] overflow-y-auto pr-1 space-y-2">
              <p className="bg-black/40 p-3 rounded-xl border border-white/10 text-cream-200 leading-relaxed">
                🗣️ &quot;{speakerNotes[currentSlide]}&quot;
              </p>
            </div>

            <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[0.68rem] text-cream-300">
              <span className="flex items-center gap-1 text-gold-400">
                <Sparkles size={12} /> Tekan <kbd className="px-1 py-0.5 rounded bg-white/10 font-mono text-[0.65rem]">N</kbd> untuk buka/tutup
              </span>
              <span>Slide {currentSlide + 1} dari {TOTAL_SLIDES}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

        {/* Speaker Notes Toggle Button */}
        <button
          className={`nav-pill-btn ${showNotes ? "text-gold-400 bg-gold-400/20" : ""}`}
          onClick={toggleNotes}
          title="Tampilkan/Sembunyikan Catatan Bicara Presenter (N)"
          aria-label="Toggle Speaker Notes"
        >
          <BookOpen size={15} />
        </button>

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
