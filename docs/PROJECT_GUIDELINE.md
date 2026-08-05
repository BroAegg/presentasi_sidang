# PROJECT GUIDELINE — Presentasi Sidang Skripsi

## Project Goal
Build a modern, interactive, web-based presentation application for the Informatics Engineering Thesis Defense (Sidang Skripsi) of **Aegner Billik (220102007)** at Universitas Muhammadiyah Bandung.

The topic is: **"Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan Teknologi OCR Berbasis Tesseract pada Sistem PMB"**

---

## Tech Stack
| Technology     | Purpose                                  |
|----------------|------------------------------------------|
| Next.js (App Router) | Framework, file-based routing       |
| Tailwind CSS   | Utility-first CSS styling                |
| Framer Motion  | Slide transitions & micro-animations     |
| lucide-react   | Icon library                              |
| Google Fonts   | Typography (Merriweather/Playfair Display + Inter/DM Sans) |

---

## Design System

### Color Palette
| Token           | Hex/Value                        | Usage                           |
|-----------------|----------------------------------|---------------------------------|
| `--navy-900`    | `#0a1628`                       | Primary background (darkest)    |
| `--navy-800`    | `#111d35`                       | Card/section backgrounds        |
| `--navy-700`    | `#1a2a4a`                       | Borders, subtle elements        |
| `--cream-100`   | `#faf8f5`                       | Primary text                    |
| `--cream-200`   | `#f0ece4`                       | Secondary text                  |
| `--cream-300`   | `#ddd6c8`                       | Muted text                      |
| `--gold-400`    | `#d4a853`                       | Primary accent                  |
| `--gold-500`    | `#c9952e`                       | Accent hover                    |
| `--gold-300`    | `#e8c675`                       | Accent light / highlights       |

### Typography
- **Headings**: `"Playfair Display", serif` — gives formal, academic gravitas.
- **Body**: `"Inter", sans-serif` — clean, modern readability.
- Heading sizes follow a modular scale (clamp-based for responsive sizing).

### Layout
- 16:9 aspect ratio container, centered on screen.
- Persistent footer on every slide: 
  - Bottom-left: `Aegner Billik - 220102007`
  - Bottom-right: `Slide X/Y`
- Progress bar at the very top of the viewport.

### Anti-AI Aesthetic Notes
- Avoid generic gradients, rainbow colors, or "AI template" patterns.
- Use restrained, minimal gold accents sparingly.
- Card/content blocks use `--navy-800` with subtle border and shadow.
- Overall feel: a clean academic document, not a startup landing page.

---

## Core Functionalities
1. **Full-screen 16:9 aspect ratio** presentation container.
2. **Keyboard navigation**: ArrowRight (next), ArrowLeft (prev).
3. **On-screen buttons**: Prev / Next with icons.
4. **Top progress bar**: thin bar showing current position.
5. **Framer Motion transitions**: fade-in + slide-up for each slide.
6. **9 slides total** (see PROGRESS.md for content details).

---

## Image Placeholders
All image assets are expected at `/public/assets/`:
- `logo-umb.png` — University logo (Slide 1)
- `code-opencv.png` — OpenCV code screenshot (Slide 4)
- `code-regex.png` — Regex code screenshot (Slide 5)
- `grafik-cer.png` — CER graph/chart (Slide 6)
- `ui-kamera.png` — Camera UI screenshot (Slide 7)

> The user will manually replace these placeholder images with real screenshots.

---

## Folder Structure
```
presentasi_skripsi/
├── docs/
│   ├── PROJECT_GUIDELINE.md    # This file
│   └── PROGRESS.md             # Task tracker
├── public/
│   └── assets/                 # Image placeholders
├── src/
│   └── app/
│       ├── layout.js           # Root layout (fonts, metadata)
│       ├── page.js             # Main presentation page
│       ├── globals.css         # Tailwind + custom CSS
│       └── components/
│           ├── Presentation.jsx   # Main presentation container & navigation
│           ├── SlideRenderer.jsx  # Renders individual slide by index
│           ├── Footer.jsx         # Persistent footer
│           ├── ProgressBar.jsx    # Top progress bar
│           └── slides/
│               ├── Slide01Title.jsx
│               ├── Slide02LatarBelakang.jsx
│               ├── Slide03Metodologi.jsx
│               ├── Slide04Prapemrosesan.jsx
│               ├── Slide05Regex.jsx
│               ├── Slide06Evaluasi.jsx
│               ├── Slide07Inovasi.jsx
│               ├── Slide08Hasil.jsx
│               └── Slide09Penutup.jsx
```
