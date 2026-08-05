# PROJECT GUIDELINE — Presentasi Sidang Skripsi (14 Slides Master Edition)

## Project Goal
Build a world-class, highly professional, interactive web-based presentation application for the Informatics Engineering Thesis Defense (Sidang Skripsi) of **Aegner Billik (220102007)** at Universitas Muhammadiyah Bandung.

Topic: **"IMPLEMENTASI FITUR AUTOFILL DATA CALON MAHASISWA MENGGUNAKAN TEKNOLOGI OPTICAL CHARACTER RECOGNITION (OCR) BERBASIS TESSERACT PADA SISTEM PMB UNIVERSITAS MUHAMMADIYAH BANDUNG"**

---

## Academic Credentials & Committees
- **Presenter**: Aegner Billik (NIM: 220102007)
- **Institution**: Program Studi Teknik Informatika, Fakultas Sains dan Teknologi, Universitas Muhammadiyah Bandung
- **Dosen Pembimbing**:
  1. Firas Atqiya, M.Si., M.Sc. (Pembimbing II)
  2. Aila Gema Safitri, S.T., M.T. (Pembimbing II)
- **Dewan Penguji**:
  1. Ririn Suharsih, S.Pd., M.T. (Ketua Penguji / Kaprodi)
  2. Ahmad Suryan, S.T., M.T. (Sekretaris)
  3. Nana Karyana Kurdi, S.E., M.Kom. (Anggota)
  4. Dianti Eka Aprilia, S.Kom., M.T. (Anggota)
  5. Rinanda Febriani, S.ST., M.T. (Anggota)

---

## Tech Stack
| Technology     | Purpose                                  |
|----------------|------------------------------------------|
| Next.js (App Router) | Core Presentation Framework        |
| Tailwind CSS v4| Utility-first styling & layout           |
| Framer Motion  | Spring physics & sequential stagger anims|
| lucide-react   | Academic & technical icon set            |
| Google Fonts   | Serif (Playfair Display) + Sans (Inter)  |

---

## Design System (Academic Tech Theme)
- **Concept**: "Glassmorphism meets Academic Rigor".
- **Color Palette**: Deep Navy Blue (`#0B1120`), Cream/White text, Gold, Teal, Emerald, Amber, and Red glowing status badges.
- **Typography**: Playfair Display (Serif) for headings; Inter (Sans-serif) for body text; JetBrains Mono for code & formulas.
- **Aspect Ratio**: 16:9 centered presentation frame with backdrop blur (`backdrop-blur-xl`) and 3 ambient glowing light orbs.
- **Controls**: Floating pill navigation at bottom center + Arrow key keyboard shortcuts.
- **Sticky Footer**: `"Aegner Billik (220102007) | Universitas Muhammadiyah Bandung"` on the left, `"Slide X/14"` on the right.

---

## 14-Slide Master Structure

1. **Cover / Judul & Informasi Sidang** (Logo UMB, Thesis Title, Author, Advisors, Examiners)
2. **Latar Belakang & Masalah** (Manual registration vs e-KTP OCR autofill)
3. **Tinjauan Pustaka & Kebaruan** (Literature Matrix: 5 related studies comparison)
4. **Landasan Teori: Tesseract OCR & LSTM Architecture** (Bidirectional LSTM equations & CTC decoder)
5. **Metodologi: Waterfall dengan Feedback Loop** (4 Phases, Diagram, The Feedback Event)
6. **Pipeline Pra-Pemrosesan Citra (OpenCV)** (5 Steps: Grayscale, CLAHE, Blur, Otsu, Deskew + Python Code)
7. **Logika Parsing Teks: Regex Multi-Layered Fallback** (3 Fallback Layers + Heuristic Stopwords + Code)
8. **Evaluasi Peladen: Keterbatasan Mesin Dasar Tesseract** (50 Dataset, CER 70.25% & 78.65%, Terminal Output)
9. **Solusi Mitigasi: Inovasi UI Constraint & Kamera Sketsa** (Rollback auto-rotate, Client-side Guideline Overlay)
10. **Hasil Integrasi Frontend & Simulasi Autofill** (Laravel ↔ Ngrok ↔ Flask API JSON response)
11. **Grafik & Analisis CER Final** (Levenshtein CER Formula + CER Chart Visual Analysis)
12. **Evaluasi Performa Waktu & Speedup Ratio** (120s vs 32.77s = 3.66x Speedup Ratio Math Formula)
13. **Kesimpulan Penelitian & Saran Pengembangan** (3 Kesimpulan + 3 Academic Suggestions)
14. **Penutup & Sesi Tanya Jawab** (Terima Kasih & Discussion Invitation)
