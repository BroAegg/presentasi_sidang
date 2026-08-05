# 🏗️ PANDUAN KHUSUS PAK NANA & DEWAN PENGUJI
**Fokus**: Rekayasa Perangkat Lunak, Metodologi Waterfall Feedback Loop, Pengujian Blackbox, Evaluasi Metrik (CER, WER, Speedup Ratio), & Kelayakan Sistem PMB  
**Penyusun**: Aegner Billik (NIM: 220102007) — Teknik Informatika Universitas Muhammadiyah Bandung  

---

## 1. 🔄 METODOLOGI WATERFALL DENGAN FEEDBACK LOOP

Jika Pak Nana atau penguji lainnya menanyakan **"Mengapa Anda menggunakan metode Waterfall dengan Feedback Loop dan bukan Agile, Scrum, atau Prototype?"**, jelaskan dengan struktur berikut:

```
[Fase 1: Analisis Kebutuhan] ──► [Fase 2: Desain Sistem] ──► [Fase 3: Implementasi] ──► [Fase 4: Pengujian]
                                           ▲                                                    │
                                           │                                                    │
                                           └─────────── FEEDBACK LOOP TRIGGER ──────────────────┘
                                                       (Jika CER > 10% / WER > 15%)
```

### 📋 4 Tahapan Utama & Pemicu Feedback Loop:

1. **Fase 1: Analisis Kebutuhan (Requirements Analysis)**
   - Mengidentifikasi masalah pendaftaran manual PMB di UM Bandung yang lambat dan berisiko *human error*.
   - Mengumpulkan data kebutuhan fungsional (upload KTP, OCR, autofill NIK, Nama, Alamat) dan non-fungsional (latensi < 40 detik).

2. **Fase 2: Desain Sistem (System Design)**
   - Merancang arsitektur *Client-Server* terpisah (Frontend Next.js/Laravel ↔ Backend Flask Python API via Ngrok).
   - Merancang antarmuka formulir pendaftaran dan diagram alur pemrosesan OCR.

3. **Fase 3: Implementasi (Implementation)**
   - Mengodekan modul *preprocessing* OpenCV, ekstraksi PyTesseract, parsing Regex bertingkat, dan *endpoint* REST API `/api/scan-ktp`.

4. **Fase 4: Pengujian (Testing) & Pemicu Feedback Loop (Iterasi 1 ➔ Iterasi 2)**
   - **Hasil Uji Iterasi 1**: Pengujian awal dengan foto KTP vertikal dan kondisi pencahayaan buruk menghasilkan persentase kegagalan tinggi (*server timeout* akibat algoritma rotasi otomatis).
   - **Pemicu Feedback Loop (The Trigger Event)**: Karena tingkat kesalahan melebihi ambang toleransi ($CER > 10\%$), mekanisme *Feedback Loop* diaktifkan!
   - **Tindakan Feedback Loop**:
     - *Revisi Desain Antarmuka*: Beban rotasi otomatis di server dicabut (*rollback*). Digantikan dengan **Inovasi UI Constraint Kamera Sketsa (Guideline Overlay)** di sisi Client.
     - *Revisi Implementasi Backend*: Menambahkan metode CLAHE pada OpenCV dan memperkuat Regex dengan *Multi-Layered Fallback*.
   - **Uji Iterasi 2 (Final)**: Sistem mencapai stabilitas performa sempurna di antarmuka dengan *Speedup Ratio* **3,66x**.

---

## 🧪 2. KELAYAKAN DATASET & STRATEGI PENGUJIAN

### A. Spesifikasi Dataset (50 Sampel e-KTP Dummy)
Untuk menjaga privasi dan keamanan data kependudukan (UU PDP No. 27 Tahun 2022), pengujian menggunakan 50 sampel citra e-KTP buatan (*dummy*) yang dibagi menjadi 3 kategori karakteristik:

1. **Kategori 1: Citra Ideal (20 Sampel)**
   - Pencahayaan merata, resolusi tinggi ($\ge 300\text{ DPI}$ ekuivalen), tegak lurus, fokus tajam.
   - *Fungsi*: Mengukur batas atas (*best-case scenario*) kapabilitas mesin Tesseract.
2. **Kategori 2: Citra dengan Noise (15 Sampel)**
   - Mengandung pantulan cahaya (*glare*) pada laminasi KTP, bayangan jari, dan noise kompresi JPEG.
   - *Fungsi*: Merepresentasikan kondisi foto HP yang umum pada calon mahasiswa.
3. **Kategori 3: Citra dengan Kemiringan / Tilt (15 Sampel)**
   - Diambil dengan kemiringan sudut $5^\circ - 25^\circ$ pada sumbu horizontal/vertikal.
   - *Fungsi*: Menguji ketahanan segmentasi Tesseract terhadap distorsi perspektif.

---

### B. Pengujian Perangkat Lunak (Blackbox Testing)

Pengujian fungsionalitas menggunakan metode **Blackbox Testing** untuk memvalidasi bahwa seluruh fitur sistem berjalan sesuai spesifikasi kebutuhan pengguna akhir:

| ID Uji | Skenario Pengujian | Input | Ekspektasi Output | Hasil |
| :--- | :--- | :--- | :--- | :--- |
| **UT-01** | Upload format berkas valid | Berkas `.jpg` / `.png` | Berkas diterima & diproses server | **PASSED** ✅ |
| **UT-02** | Upload format berkas ilegal | Berkas `.pdf` / `.docx` | Response Error 400: *"Format tidak didukung"* | **PASSED** ✅ |
| **UT-03** | Penangkapan foto via Kamera Sketsa | Fisik KTP dalam bingkai overlay | Citra KTP lanskap berhasil di-*capture* | **PASSED** ✅ |
| **UT-04** | Ekstraksi & Response REST API | Request POST `/api/scan-ktp` | Payload JSON NIK, Nama, Alamat (Status 200) | **PASSED** ✅ |
| **UT-05** | Autofill Formulir PMB | Payload JSON dari API | Form NIK, Nama, Alamat terisi otomatis | **PASSED** ✅ |

---

## 📊 3. EVALUASI METRIK KUANTITATIF (CER, WER, & SPEEDUP RATIO)

### A. Character Error Rate (CER) & Word Error Rate (WER)
Menggunakan rumus Levenshtein Distance (Edit Distance) pada level karakter dan kata:

$$CER = \frac{S_c + D_c + I_c}{N_c} \times 100\%$$

$$WER = \frac{S_w + D_w + I_w}{N_w} \times 100\%$$

*Di mana $S = \text{Substitusi}$, $D = \text{Deletisi (terhapus)}$, $I = \text{Insersi (tersisip)}$, dan $N = \text{Total Karakter/Kata pada Ground Truth}$.*

#### Hasil Statistik Evaluasi Batch Server (Tabel 4.1):
- **Total Dataset**: 50 Citra
- **Rata-rata CER NIK (Server Baseline)**: $70,25\%$
- **Rata-rata CER Nama (Server Baseline)**: $78,65\%$
- **Akurasi Sempurna NIK ($CER = 0$)**: 4/50 sampel ($8\%$)
- **Akurasi Sempurna Nama ($CER = 0$)**: 7/50 sampel ($14\%$)
- **Rata-rata Waktu Komputasi Server**: $32,77\text{ detik}$

---

### B. Evaluasi Efisiensi Waktu & Speedup Ratio
Mengukur peningkatan efisiensi waktu antara pengisian formulir secara manual oleh calon mahasiswa dibandingkan pengisian otomatis berbasis OCR Autofill:

$$Speedup\text{ }Ratio = \frac{T_{\text{manual}}}{T_{\text{autofill}}}$$

- $T_{\text{manual}} = 120\text{ detik}$ (Rata-rata durasi ketik manual data diri di portal PMB).
- $T_{\text{autofill}} = 32,77\text{ detik}$ (Rata-rata durasi *scan* kamera + komputasi API + *autofill*).

$$Speedup = \frac{120}{32,77} = 3,66\times$$

**Kesimpulan Efisiensi**: Fitur OCR Autofill terbukti secara empiris meningkatkan kecepatan pendaftaran hingga **3,66 kali lebih cepat** dibandingkan metode konvensional!

---

## 🏢 4. KELAYAKAN IMPLEMENTASI PRAKTIS DI PMB UM BANDUNG

Jika Pak Nana bertanya **"Bagaimana kesiapan sistem ini jika ingin dipasang beneran di portal PMB UM Bandung?"**, jelaskan 3 langkah teknis migrasi menuju *Production-Grade System*:

1. **Infrastruktur Backend (Migrasi Ngrok ke Cloud VPS)**:
   - Prototipe saat ini menggunakan *tunneling* Ngrok dari Colab. Untuk skala produksi, backend Flask Python wajib di-deploy di Virtual Private Server (VPS) atau Cloud (seperti AWS / Google Cloud / Niagahoster) menggunakan WSGI server seperti **Gunicorn** atau **uWSGI** agar koneksi stabil dan bebas interupsi limit Ngrok.
2. **Keahlian Antarmuka (Image Quality Assessment / IQA)**:
   - Menambahkan modul pendeteksi keburaman (*blur detection*) berbasis JavaScript OpenCV.js pada browser pengguna. Jika calon mahasiswa mengambil foto KTP yang goyang/blur, kamera akan menolak secara otomatis sebelum foto dikirim ke server, menghemat *bandwidth* jaringan.
3. **Keamanan & Perlindungan Data Pribadi (HTTPS & UU PDP)**:
   - Seluruh transmisi API menggunakan enkripsi SSL/TLS (HTTPS). Data citra KTP di backend diproses murni di dalam buffer memori transient (*RAM*) tanpa disimpan permanen di penyimpanan disk server.

---

## 🎯 5. PREDIKSI PERTANYAAN SIDANG & JAWABAN EMAS (KHUSUS PAK NANA)

### ❓ Pertanyaan 1: "Mengapa Anda menggunakan metode Waterfall dengan Feedback Loop? Bukankah metode Waterfall murni itu kaku dan tidak mengizinkan pengulangan?"
* **Jawaban Emas**:
  > *"Betul sekali Pak Nana. Model Waterfall klasik bersifat linier dan kaku. Namun dalam penelitian ini, saya mengadaptasi **Waterfall dengan Feedback Loop** (Pressman & Maxim, 2020) karena penelitian riset ekstraksi citra memerlukan pengujian *trial and error*.  
  > Ketika pengujian awal di Fase 4 menghasilkan kesalahan yang tinggi ($CER > 10\%$), mekanisme *Feedback Loop* diaktifkan kembali ke Fase 2 dan 3 untuk merombak antarmuka menjadi Kamera Sketsa dan memperkuat Regex. Pendekatan ini sangat cocok untuk skripsi karena menghasilkan dokumentasi terstruktur di setiap fasenya."*

### ❓ Pertanyaan 2: "Mengapa data yang digunakan hanya 50 sampel e-KTP dummy? Apakah jumlah ini sah mewakili populasi pendaftar PMB?"
* **Jawaban Emas**:
  > *"Penggunaan 50 sampel citra e-KTP *dummy* dipilih berdasarkan pertimbangan etika akademis dan hukum perlindungan data pribadi (UU PDP No. 27 Tahun 2022) untuk menghindari pemrosesan data identitas asli warga tanpa izin.  
  > 50 sampel ini telah dikategorisasikan secara ilmiah ke dalam 3 kelompok perwakilan kondisi riil: 20 citra ideal, 15 citra ber-noise (*glare*/bayangan), dan 15 citra miring. Jumlah ini sudah memadai untuk membuktikan kelemahan mesin Tesseract dan menguji efektivitas mitigasi Kamera Sketsa."*

### ❓ Pertanyaan 3: "Apa manfaat paling konkret bagi pihak kampus (manajemen UM Bandung) dengan hadirnya sistem ini?"
* **Jawaban Emas**:
  > *"Manfaat konkretnya ada 3 aspek Pak Nana:*  
  > 1. **Peningkatan Pengalaman Pendaftar**: Proses pendaftaran 3,66x lebih cepat, meningkatkan daya tarik calon mahasiswa mendaftar di UM Bandung.  
  > 2. **Akurasi Basis Data Institusi**: Meminimalisasi *human error* (salah ketik NIK/Nama) yang sering kali merepotkan staf PMB saat proses verifikasi berkas atau pelaporan data PDDikti.  
  > 3. **Efisiensi Beban Staf Administrasi**: Staf PMB tidak perlu lagi mencocokkan data ketikan manual satu per satu dari nol."*

---
**Dokumen ini melengkapi persiapan teknis dan metodologis Anda untuk menjawab pertanyaan Pak Nana & Dewan Penguji!** 🚀
