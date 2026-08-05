# 🎙️ NASKAH PRESENTASI SIDANG SKRIPSI (WORD-FOR-WORD SCRIPT)

**Judul Skripsi**: Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan Teknologi Optical Character Recognition (OCR) Berbasis Tesseract pada Sistem PMB Universitas Muhammadiyah Bandung  
**Presenter**: Aegner Billik (NIM: 220102007) — Teknik Informatika UMB  
**Pembimbing I**: Aila Gema Safitri, S.T., M.T.  
**Pembimbing II**: Firas Atqiya, M.Si., M.Sc.  
**Estimasi Waktu**: 10 – 12 Menit  

---

### 📌 SLIDE 1: COVER & PEMBUKAAN
*(Tampilan: Slide Judul Skripsi, Nama, NIM, UMB)*

**🗣️ Kata-Kata Presentasi**:
> *"Bismillahirrahmanirrahim. Assalamu’alaikum Warahmatullahi Wabarakatuh.*
>
> *Yang saya hormati Ibu Rinanda, Pak Taufik, Pak Nana, serta Bapak/Ibu Dosen Penguji Sidang Skripsi pada hari ini.*
>
> *Perkenalkan, nama saya **Aegner Billik** dengan NIM 220102007 dari Program Studi Teknik Informatika Universitas Muhammadiyah Bandung.*
>
> *Pada hari ini, saya akan mempresentasikan hasil penelitian skripsi saya yang berjudul:*  
> **'Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan Teknologi Optical Character Recognition (OCR) Berbasis Tesseract pada Sistem PMB Universitas Muhammadiyah Bandung'**."*

---

### 📌 SLIDE 2: LATAR BELAKANG & PERMASALAHAN
*(Tampilan: Masalah Pengisian Form Manual vs Solusi OCR)*

**🗣️ Kata-Kata Presentasi**:
> *"Bapak/Ibu Penguji, proses Penerimaan Mahasiswa Baru (PMB) merupakan gerbang utama pendaftaran perguruan tinggi. Namun, saat ini pengisian formulir biodata pendaftar masih dilakukan secara **manual**.*
>
> *Dari hasil observasi dan pengujian awal, pengisian manual ini memiliki 2 masalah utama:*  
> 1. **Inefisiensi Waktu**: Membutuhkan waktu rata-rata 2 menit (120 detik) hanya untuk mengetik NIK, Nama, Tanggal Lahir, dan Alamat.  
> 2. **Human Error**: Rawan terjadi kesalahan ketik (*typo*) pada 16 digit NIK atau ejaan Nama yang merepotkan panitia saat verifikasi berkas.  
>
> *Solusinya adalah mengintegrasikan teknologi **Optical Character Recognition (OCR)** agar calon mahasiswa cukup mengunggah foto KTP, dan formulir akan terisi secara otomatis (*autofill*)."*

---

### 📌 SLIDE 3: TINJAUAN PUSTAKA & CELEAH PENELITIAN (RESEARCH GAP)
*(Tampilan: Matriks Peneliti Sebelumnya & Novelty Aegner)*

**🗣️ Kata-Kata Presentasi**:
> *"Penelitian ini melanjutkan dan menutup celah dari beberapa penelitian terdahulu:*  
> * *Reswan (2024)* & *Nashiruddin (2025)* membuktikan Tesseract mampu membaca Kartu Mahasiswa, namun aplikasinya masih bersifat *standalone* dan terbatas pada KTM.  
> * *Sofjan & Soetanto (2025)* meneliti e-KTP dengan CNN, tetapi fokusnya untuk **verifikasi keaslian dokumen**, bukan untuk *autofill* pendaftaran.  
> * *Azzahra (2025)* mengintegrasikan Tesseract pada Laravel web, namun objeknya adalah surat cetak yang kualitasnya standar dokumen.  
>
> **Celah & Kebaruan Penelitian Saya**:  
> *Belum ada penelitian yang menerapkan autofill e-KTP khusus portal PMB web. Mesin Tesseract konvensional sangat rentan terhadap foto miring dan pencahayaan buruk dari HP. Oleh karena itu, kebaruan penelitian ini terletak pada inovasi **UI Constraint Kamera Sketsa (Guideline Overlay)** di sisi Client untuk menutupi kelemahan mesin OCR di Backend."*

---

### 📌 SLIDE 4: LANDASAN TEORI (TESSERACT 5.0 & ARSITEKTUR LSTM)
*(Tampilan: Arsitektur Tesseract 5.0 & Model Sequential LSTM)*

**🗣️ Kata-Kata Presentasi**:
> *"Dalam penelitian ini, saya memilih **Tesseract OCR 5.0** berbasis arsitektur **Bidirectional LSTM (Long Short-Term Memory)**.*  
> 
> *Alasan utamanya:*  
> 1. Tesseract bersifat *open-source*, sangat ringan, dan **tidak membutuhkan peladen GPU mahal** untuk *deployment* di kampus.  
> 2. LSTM mampu memodelkan keterkaitan antar-karakter secara sekuensial dua arah, sehingga sangat presisi dalam mengenali sekuens teks pada e-KTP."*

---

### 📌 SLIDE 5: METODOLOGI PENELITIAN (WATERFALL MODEL)
*(Tampilan: Diagram Alur Metodologi Waterfall)*

**🗣️ Kata-Kata Presentasi**:
> *"Metodologi yang digunakan adalah **Waterfall Model** yang terdiri dari 5 tahapan terstruktur:*  
> 1. **Analisis Kebutuhan**: Mengidentifikasi variabel data KTP yang dibutuhkan form PMB.  
> 2. **Desain Sistem**: Merancang arsitektur REST API Flask dan UI Kamera Sketsa.  
> 3. **Implementasi Kode**: Membangun modul *Preprocessing* OpenCV, *Engine* Tesseract, dan *Parsing* Regex.  
> 4. **Pengujian**: Menguji CER (*Character Error Rate*) dan *Speedup Ratio* pengisian formulir.  
> 5. **Pemeliharaan**: Dokumentasi dan persiapan repositori sistem."*

---

### 📌 SLIDE 6: PIPELINE PREPROCESSING OPENCV
*(Tampilan: Potongan Kode Python OpenCV Preprocessing & Diagram Tahapan)*

**🗣️ Kata-Kata Presentasi**:
> *"Sebelum citra KTP dibaca oleh Tesseract, citra wajib melalui 4 tahapan **Preprocessing OpenCV** di Backend:*  
> 1. **Grayscale**: Mengubah warna BGR 3-channel ke 1-channel skala abu-abu menggunakan rumus luminansi $Y = 0.299R + 0.587G + 0.114B$. Memangkas ukuran memori sebesar 66%.  
> 2. **CLAHE**: Meratakan distribusi kontras secara adaptif dalam grid 8x8 piksel untuk mereduksi bayangan pada foto KTP.  
> 3. **Gaussian Blur**: Menyaring derau frekuensi tinggi (bintik foto HP) menggunakan kernel 3x3.  
> 4. **Otsu Thresholding**: Binarisasi otomatis untuk memisahkan teks hitam secara tegas dari warna latar KTP."*

---

### 📌 SLIDE 7: LOGIKA PARSING REGEX MULTI-LAYERED FALLBACK
*(Tampilan: Potongan Kode Python Regex Berlapis NIK & Nama)*

**🗣️ Kata-Kata Presentasi**:
> *"Untuk mengekstraksi data dari teks hasil OCR, saya merancang **Algoritma Multi-Layered Fallback** yang tidak gampang gagal (*fail-safe*).*  
>
> *Contoh pada ekstraksi NIK:*  
> * **Lapis 1**: Mencari kata `"NIK"` yang diikuti 16 digit angka.  
> * **Lapis 2**: Jika kata `"NIK"` rusak/terpotong, sistem mencari sekuens **16 digit angka murni** (`\b\d{16}\b`) di seluruh teks.  
> * **Lapis 3**: Jika angkanya terpisah spasi akibat kesalahan OCR, sistem menangkap angka berpola spasi, menghapus spasinya, lalu mengambil 16 digit pertama."*

---

### 📌 SLIDE 8: HASIL EVALUASI BASELINE SERVER (TANPA CONSTRAINT)
*(Tampilan: Grafik CER NIK 70,25% & CER Nama 78,65%)*

**🗣️ Kata-Kata Presentasi**:
> *"Bapak/Ibu Penguji, pada pengujian *baseline* menggunakan 50 foto KTP tanpa batasan posisi/pencahayaan, didapatkan hasil **Character Error Rate (CER)** yang tinggi: NIK sebesar 70,25% dan Nama sebesar 78,65%.*  
> 
> *Tingginya angka error ini **membuktikan secara empiris** bahwa mesin Tesseract OCR konvensional TIDAK BISA dilepas secara mandiri jika posisi dan pencahayaan foto KTP bervariasi."*

---

### 📌 SLIDE 9: INOVASI MITIGASI: KAMERA SKETSA (GUIDELINE OVERLAY)
*(Tampilan: Mockup Antarmuka Kamera Sketsa di HP/Frontend)*

**🗣️ Kata-Kata Presentasi**:
> *"Atas dasar temuan tersebut, saya menerapkan **Inovasi UI Constraint Kamera Sketsa (Guideline Overlay)** di sisi Frontend.*  
> 
> *Alih-alih membebaskan server dengan algoritma rotasi otomatis yang sangat berat dan memicu *server timeout*, Kamera Sketsa ini **memaksa pengguna** menyelaraskan posisi KTP, orientasi lanskap, dan pencahayaan sebelum citra dikirim ke server.  
> Solusi antarmuka ini sukses memotong derau sejak awal dan menjaga akurasi ekstraksi pada sistem final."*

---

### 📌 SLIDE 10: INTEGRASI REST API FLASK & FRONTEND PMB
*(Tampilan: Arsitektur Client-Server & JSON Data Transfer)*

**🗣️ Kata-Kata Presentasi**:
> *"Arsitektur sistem dibangun secara decoupled:*  
> * **Frontend**: Menggunakan antarmuka Web yang menangkap foto KTP via Kamera Sketsa dan mengirimikannya dalam format `FormData` HTTP POST.  
> * **Backend**: REST API berbasis Flask Python yang memproses pre-processing, OCR, dan mengembalikan respon JSON berisi NIK, Nama, Tempat/Tgl Lahir, dan Alamat ke Frontend untuk langsung di-autofill ke elemen form."*

---

### 📌 SLIDE 11: DEMO SIMULASI & GRAFIK HASIL AKHIR
*(Tampilan: Demo Alur Autofill Form PMB & Grafik Evaluasi Final)*

**🗣️ Kata-Kata Presentasi**:
> *"Berikut adalah alur simulasi pengisian formulir:*  
> *Calon mahasiswa membuka form PMB $\rightarrow$ Klik 'Scan KTP' $\rightarrow$ Posisikan KTP pas di dalam bingkai Kamera Sketsa $\rightarrow$ Klik Jepret.*  
> *Dalam hitungan detik, seluruh kolom NIK, Nama, Tanggal Lahir, Jenis Kelamin, dan Alamat terisi secara otomatis tanpa perlu mengetik manual."*

---

### 📌 SLIDE 12: EVALUASI EFISIENSI WAKTU & SPEEDUP RATIO
*(Tampilan: Tabel Komparasi Waktu Manual vs OCR Autofill & Speedup 3,66x)*

**🗣️ Kata-Kata Presentasi**:
> *"Dari hasil pengujian efisiensi waktu:*  
> * Pengisian formulir secara **Manual** membutuhkan rata-rata **120 detik** (2 menit).  
> * Pengisian formulir via **OCR Autofill** membutuhkan rata-rata **32,77 detik** (termasuk upload, OCR backend, dan autofill).  
> * **Speedup Ratio** yang diperoleh adalah $120 / 32,77 = \mathbf{3,66\times}$.  
> *Artinya, proses pendaftaran menjadi **3,66 kali lebih cepat**, mengurangi kejenuhan calon mahasiswa serta meminimalisasi kesalahan ketik saat pendaftaran."*

---

### 📌 SLIDE 13: KESIMPULAN & SARAN PENGEMBANGAN
*(Tampilan: Poin Kesimpulan Utama & 2 Saran)*

**🗣️ Kata-Kata Presentasi**:
> *"Berdasarkan hasil penelitian ini, dapat disimpulkan bahwa:*  
> 1. Fitur Autofill KTP berbasis Tesseract OCR berhasil diintegrasikan pada portal PMB dengan tingkat efisiensi waktu 3,66 kali lebih cepat.  
> 2. Kelemahan bawaan Tesseract OCR berhasil dimitigasi secara efektif menggunakan inovasi Kamera Sketsa di sisi Client.  
> 
> **Saran Pengembangan**:  
> 1. Memindahkan peladen backend ke Cloud VPS terdedikasi agar transmisi REST API semakin cepat.  
> 2. Menambahkan modul *Image Quality Assessment* (IQA) berbasis JavaScript di frontend untuk menolak foto yang blur secara otomatis sebelum diunggah."*

---

### 📌 SLIDE 14: PENUTUP & SESI TANYA JAWAB (Q&A)
*(Tampilan: Ucapan Terima Kasih & Q&A Slide)*

**🗣️ Kata-Kata Presentasi**:
> *"Demikian presentasi skripsi yang dapat saya sampaikan. Terima kasih banyak atas perhatian Ibu Rinanda, Pak Taufik, Pak Nana, dan Bapak/Ibu Dosen Penguji sekalian.*  
> 
> *Waktu dan tempat selanjutnya saya kembalikan kepada Ketua Penguji. Saya siap menerima masukan, saran, dan pertanyaan dari Bapak/Ibu Dosen.*  
> 
> *Wabillahi taufiq wal hidayah, Wassalamu’alaikum Warahmatullahi Wabarakatuh."*
