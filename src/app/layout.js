import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Sidang Skripsi — Aegner Billik | Implementasi OCR Tesseract pada Sistem PMB",
  description:
    "Presentasi Sidang Skripsi: Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan Teknologi OCR Berbasis Tesseract pada Sistem PMB — Universitas Muhammadiyah Bandung",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
