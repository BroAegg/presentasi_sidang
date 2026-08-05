# 📖 PANDUAN KHUSUS BU RINANDA (DOSEN PENGUJI 1)
**Fokus**: Paper, Tinjauan Pustaka, Matriks Penelitian Terkait, Research Gap, dan Benang Merah Skripsi  
**Penyusun**: Aegner Billik (NIM: 220102007) — Teknik Informatika Universitas Muhammadiyah Bandung  

---

## 1. 📚 DAFTAR PAPER REFERENSI UTAMA & CARA MENDAPATKANNYA

Berikut adalah rincian 5 paper yang ada pada Matriks Tinjauan Pustaka (Bab II & Slide 3) beserta 4 paper pendukung teori fondasi.

### A. 5 Paper Matriks Tinjauan Pustaka

#### 1. Reswan et al. (2024)
- **Judul Lengkap**: *Penerapan Algoritma OCR untuk Ekstraksi Informasi dari Citra Kartu Tanda Mahasiswa (KTM)*
- **Peneliti**: Yudi Reswan, Raffles, Anton Wijaya, & Yulis Apridiansyah.
- **Publikasi**: JATI (Jurnal Mahasiswa Teknik Informatika), Vol. 8 No. 5, Hal. 11004–11009 (2024).
- **Objek & Metode**: Kartu Tanda Mahasiswa (KTM) | OCR Template Matching Correlation.
- **Hasil Utama**: Precision 88%, Recall 100%, Accuracy 88%. Data diekstraksi ke dokumen MS Word.
- **Perbedaan dengan Skripsi Aegner**: Sistem bersifat *standalone* (belum terintegrasi portal web PMB) dan objeknya adalah KTM, bukan e-KTP.
- **Cara Akses/Download**: Search di Google Scholar: `"Penerapan algoritma OCR untuk ekstraksi informasi dari citra Kartu Tanda Mahasiswa Yudi Reswan"`.

#### 2. Nashiruddin et al. (2025)
- **Judul Lengkap**: *Implementasi OCR Berbasis Tesseract untuk Ekstraksi Data Kartu Mahasiswa UMKLA*
- **Peneliti**: M. Nashiruddin, F. D. N. Praditya, A. F. Mufazzal, & Ardiansyah.
- **Publikasi**: JKTI - Jurnal Keilmuan Teknologi Informasi, Vol. 1 No. 1, Hal. 11–14 (2025).
- **Objek & Metode**: KTM Universitas Muhammadiyah Klaten (UMKLA) | Tesseract OCR, OpenCV (Grayscale & Otsu), Regex.
- **Hasil Utama**: Ekstraksi Nama, NIM, dan Prodi berhasil dengan baik; menegaskan bahwa kualitas *preprocessing* menentukan akurasi OCR.
- **Perbedaan dengan Skripsi Aegner**: Objek berupa KTM dan belum diintegrasikan ke portal web PMB online.
- **Cara Akses/Download**: Search di Google Scholar: `"Implementasi OCR berbasis Tesseract untuk ekstraksi data kartu mahasiswa UMKLA Nashiruddin"`.

#### 3. Sofjan & Soetanto (2025)
- **Judul Lengkap**: *Implementasi Sistem Verifikasi e-KTP Berbasis OCR dan CNN untuk Administrasi Akademik*
- **Peneliti**: M. Z. Z. Sofjan & H. Soetanto.
- **Publikasi**: 6th Seminar Nasional Mahasiswa Fakultas Teknologi Informasi (SENAFTI) Universitas Budi Luhur, Vol. 4 No. 2, Hal. 269–278 (2025).
- **Objek & Metode**: Kartu Tanda Penduduk Elektronik (e-KTP) | OCR & Convolutional Neural Network (CNN).
- **Hasil Utama**: Akurasi klasifikasi CNN 80%, Character Error Rate (CER) OCR sebesar 28,85%.
- **Perbedaan dengan Skripsi Aegner**: Berfokus pada **verifikasi keaslian dokumen e-KTP**, bukan otomatisasi pengisian formulir (*autofill*) pendaftaran.
- **Cara Akses/Download**: Search di Google Scholar: `"Implementasi sistem verifikasi e-KTP berbasis OCR dan CNN Sofjan Soetanto"`.

#### 4. Sherin et al. (2024)
- **Judul Lengkap**: *Departmental Document Software Using OCR*
- **Peneliti**: C. N. Sherin, P. Shahana, R. B. Yousuf, V. Rushda, & S. M. Haq.
- **Publikasi**: KAHM Unity Women's College, ISBN: 978-93-340-1632-1 (2024).
- **Objek & Metode**: Dokumen Ujian / Administrasi | OCR General.
- **Hasil Utama**: Berhasil mengekstraksi nilai ujian ke format spreadsheet secara otomatis.
- **Perbedaan dengan Skripsi Aegner**: Konteks administrasi umum departemen kampus, bukan pendaftaran mahasiswa baru.
- **Cara Akses/Download**: Search Google: `"Departmental document software using OCR Sherin KAHM Unity"`.

#### 5. Azzahra & Nugroho (2025)
- **Judul Lengkap**: *Sistem Informasi Persuratan Digital Berbasis Web dengan Teknologi OCR (Optical Character Recognition) untuk Pengarsipan Dokumen (SuratTEDI)*
- **Peneliti**: Laila Nabila Azzahra & Danang Nugroho P.
- **Publikasi**: Skripsi Program Studi Departemen Teknik Elektro dan Informatika (DTEDI), Universitas Gadjah Mada (2025).
- **Objek & Metode**: Dokumen Surat Digital Arsip | Tesseract OCR + PyTesseract + Framework Laravel Web.
- **Hasil Utama**: CER 5,71%, WER 9,59%, User Acceptance Testing (UAT) 94,29%.
- **Perbedaan dengan Skripsi Aegner**: Objek berupa surat resmi berbasis teks cetak standar, bukan dokumen fisik e-KTP yang diambil menggunakan kamera smartphone.
- **Cara Akses/Download**: Akses ETD UGM Repository: `http://etd.repository.ugm.ac.id/` dengan pencarian `"Sistem informasi persuratan digital berbasis web dengan teknologi OCR Azzahra"`.

---

### B. 4 Paper Fondasi Teori Dasar

1. **Smith, R. (2007)** — *"An Overview of the Tesseract OCR Engine"*. Ninth International Conference on Document Analysis and Recognition (ICDAR 2007).  
   *Fungsi di Skripsi*: Dasar penjelasan sejarah, arsitektur *line-finding*, dan transformasi Tesseract ke LSTM oleh Google.
2. **Hochreiter, S., & Schmidhuber, J. (1997)** — *"Long Short-Term Memory"*. Neural Computation, 9(8), 1735–1780.  
   *Fungsi di Skripsi*: Formula matematika gating LSTM (Forget gate, Input gate, Cell state, Output gate) pada Bab II Sub-bab 2.4.
3. **Otsu, N. (1979)** — *"A Threshold Selection Method from Gray-Level Histograms"*. IEEE Transactions on Systems, Man, and Cybernetics, 9(1), 62–66.  
   *Fungsi di Skripsi*: Formula binarisasi citra berbasis maksimasi varians antar-kelas ($\sigma_B^2$) pada Bab II Sub-bab 2.5.
4. **Bradski, G. (2000)** — *"The OpenCV Library"*. Dr. Dobb's Journal of Software Tools, 25(11), 120–123.  
   *Fungsi di Skripsi*: Referensi pustaka pemrosesan citra komputer (OpenCV).

---

## 2. 🔗 BENANG MERAH (ALUR LOGIKA & NOVELTY PENELITIAN)

Jika Bu Rinanda meminta Anda menjelaskan **"Apa benang merah penelitian Anda dan posisi akademik skripsi ini dibanding penelitian terdahulu?"**, sampaikan dengan narasi 4 struktur berikut:

```
[1. PROBLEM] ───► [2. LITERATURE REVIEW] ───► [3. RESEARCH GAP] ───► [4. NOVELTY AEGNER]
Input manual PMB    Reswan & Nashiruddin:        Belum ada OCR e-KTP       Kombinasi Tesseract + OpenCV
berisiko human      OCR KTM terbukti sukses.     khusus AUTOFILL FORM      + Regex + UI CONSTRAINT
error & inefisien.  Sofjan: OCR e-KTP untuk      PMB. Belum ada mitigasi   KAMERA SKETSA di Frontend
                    verifikasi keaslian.         noise kamera HP via UI    untuk atasi kelemahan
                    Azzahra: OCR web Laravel.    Constraint Client-side.   Tesseract.
```

### Script Percakapan untuk Bu Rinanda:
> *"Ibu Rinanda yang saya hormati, benang merah penelitian saya dibangun dari keterkaitan 4 poin utama:*
>
> 1. **Titik Masalah (Real World Problem)**: Proses pendaftaran PMB di Universitas Muhammadiyah Bandung selama ini mewajibkan calon mahasiswa menginput data identitas (NIK, Nama, Alamat) secara manual, yang rentan terhadap *human error* dan lambat.
> 2. **Landasan Literatur (State-of-the-Art)**: 
>    - Reswan (2024) dan Nashiruddin (2025) membuktikan bahwa Tesseract OCR dan OpenCV berhasil mengekstraksi data identitas mahasiswa (KTM).
>    - Sofjan & Soetanto (2025) membuktikan OCR dapat membaca e-KTP, tetapi fokus mereka adalah **verifikasi keaslian dokumen**.
>    - Azzahra (2025) membuktikan Tesseract OCR dapat diintegrasikan secara efektif ke dalam framework web (Laravel).
> 3. **Celah Penelitian (Research Gap)**: 
>    - Belum ada penelitian yang menerapkan autofill data e-KTP khusus untuk sistem Penerimaan Mahasiswa Baru (PMB).
>    - Pembacaan citra e-KTP hasil foto smartphone memiliki variasi pencahayaan (*glare*, bayangan) dan kemiringan yang membuat akurasi mesin Tesseract dasar anjlok (terbukti dari hasil uji batch server kami dengan CER NIK 70,25% dan CER Nama 78,65%).
> 4. **Kebaruan Penelitian Saya (Novelty & Positionality)**:
>    - Saya menghadirkan solusi **UI Constraint berupa Kamera Sketsa (Guideline Overlay) di sisi Frontend Client**.
>    - Alih-alih membebaskan server dengan algoritma *auto-rotate* atau *deskew* yang sangat berat dan memicu *server timeout*, antarmuka Kamera Sketsa memaksa calon mahasiswa menyelaraskan posisi, orientasi lanskap, dan pencahayaan secara mandiri sebelum *capture*.
>    - Inovasi antarmuka ini terbukti secara empiris menutupi kelemahan inheren Tesseract OCR, menstabilkan proses ekstraksi, dan mencapai efisiensi waktu **Speedup Ratio 3,66x** (32,77 detik vs 120 detik manual)."*

---

## 🎯 3. PREDIKSI PERTANYAAN & JAWABAN EMAS (KHUSUS BU RINANDA)

### ❓ Pertanyaan 1: "Mengapa Anda memilih Tesseract OCR versi 5.0 berbasis LSTM dan tidak menggunakan arsitektur Deep Learning modern seperti EasyOCR, PaddleOCR, atau Vision Transformer?"
* **Jawaban Emas**:
  > *"Terima kasih Bu Rinanda. Alasan pemilihan Tesseract 5.0 berbasis LSTM adalah:*
  > 1. **Efisiensi Sumber Daya**: Tesseract bersifat *open-source*, sangat ringan, dan tidak membutuhkan spesifikasi peladen GPU tingkat tinggi yang mahal untuk diimplementasikan di lingkungan perguruan tinggi.
  > 2. **Pemodelan Sekuensial LSTM**: Arsitektur *Bidirectional LSTM* pada Tesseract 5.0 mampu memahami konteks sekuensial antar-karakter secara dua arah tanpa memerlukan segmentasi karakter eksplisit.
  > 3. **Fokus Kontribusi Penelitian**: Kontribusi utama skripsi ini terletak pada **rekayasa antarmuka (UI Constraint)** dan **kombinasi pipeline preprocessing OpenCV + Regex**, bukan pada pembuatan arsitektur jaringan saraf baru. Namun, penggunaan EasyOCR/PaddleOCR telah saya sertakan sebagai saran pengembangan pada Bab V."*

### ❓ Pertanyaan 2: "Pada Bab IV, CER NIK mencapai 70,25% dan CER Nama 78,65%. Bagaimana Anda membenarkan nilai kesalahan yang sangat tinggi ini secara akademis?"
* **Jawaban Emas**:
  > *"Terima kasih Bu Rinanda. Pengujian 50 dataset dengan CER 70,25% dan 78,65% tersebut dilakukan untuk menguji **kapabilitas mesin dasar Tesseract pada skenario tanpa batasan (unconstrained server-side evaluation)**.
  > Angka kesalahan yang tinggi ini justru **memberikan justifikasi akademis yang sangat kuat** mengenai perlunya penerapan **UI Constraint (Kamera Sketsa)** pada Frontend. Tingginya CER membuktikan secara empiris bahwa mesin OCR konvensional memiliki akurasi mutlak yang rendah jika dihadapkan pada foto bebas. Oleh karena itu, antarmuka Kamera Sketsa wajib diterapkan untuk memaksa pengguna melakukan standarisasi posisi citra sejak dari sisi Client."*

### ❓ Pertanyaan 3: "Mengapa Anda menggunakan metode Levenshtein Distance untuk menghitung Character Error Rate (CER)?"
* **Jawaban Emas**:
  > *"Levenshtein Distance merupakan standar baku internasional dalam evaluasi OCR karena mengukur jumlah minimum operasi penyisipan (*insertion* $I$), penghapusan (*deletion* $D$), dan penggantian (*substitution* $S$) yang diperlukan untuk mengubah string hasil OCR menjadi string referensi (*ground truth* $N$). Rumusnya adalah $CER = \frac{S + D + I}{N}$."*

### ❓ Pertanyaan 4: "Apa batasan masalah paling krusial dalam skripsi Anda yang perlu diperhatikan?"
* **Jawaban Emas**:
  > *"Batasan masalah paling krusial meliputi: (1) Objek ekstraksi dibatasi pada 3 variabel utama e-KTP yaitu NIK, Nama, dan Alamat; (2) Data KTP yang digunakan dalam pengujian bersifat *dummy* untuk menjaga privasi dan perlindungan data pribadi (UU PDP); serta (3) Sistem yang dihasilkan berada pada tahap prototipe terintegrasi (TRL 6) dan belum di-deploy secara permanen pada server resmi UM Bandung."*

---
**Dokumen ini siap dipelajari untuk menghadapi sesi tanya-jawab dengan Bu Rinanda.** 🚀
