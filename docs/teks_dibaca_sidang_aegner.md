# 📜 NASKAH PRESENTASI SIAP BACA SIDANG SKRIPSI (VERSI BAKU AKADEMIS)

**Nama**: Aegner Billik (NIM: 220102007)  
**Pembimbing I**: Aila Gema Safitri, S.T., M.T.  
**Pembimbing II**: Firas Atqiya, S.T., M.T.  
**Dewan Penguji**: Pak Taufik Rahmat Kurniawan, S.Kom., M.T., Bu Rinanda Febriani, S.ST., M.T., Pak Nana Karyana Kurdi, S.E., M.Kom.  

---

### 📌 SLIDE 1: COVER & PEMBUKAAN
**🗣️ Teks Presentasi Lisan**:
> *"Bismillahirrahmanirrahim. Assalamu’alaikum Warahmatullahi Wabarakatuh.*  
> *Yang saya hormati Ibu Rinanda, Pak Taufik, dan Pak Nana selaku Dewan Penguji, serta Ibu Aila dan Ibu Firas selaku Dosen Pembimbing.*  
> *Perkenalkan, nama saya **Aegner Billik** (NIM 220102007) dari Program Studi Teknik Informatika Universitas Muhammadiyah Bandung.*  
> *Pada hari ini, saya akan mempresentasikan hasil penelitian skripsi saya yang berjudul **Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan OCR Tesseract pada Sistem PMB UM Bandung**."*

---

### 📌 SLIDE 2: LATAR BELAKANG & URGENSI PENELITIAN
**🗣️ Teks Presentasi Lisan**:
> *"Bapak/Ibu Penguji, proses pendaftaran mahasiswa baru pada portal PMB saat ini masih berbasis penginputan formulir secara manual. Terdapat dua permasalahan utama:*  
> 1. **Inefisiensi Waktu**: Pengisian formulir biodata secara manual memerlukan durasi rata-rata hingga 120 detik per pendaftar.  
> 2. **Risiko Kesalahan Entri (Human Error)**: Rentan terjadi kesalahan pengetikan NIK, Nama, dan Alamat yang dapat menyulitkan proses verifikasi data di PDDikti.  
> *Solusi usulan: Mengintegrasikan fitur **OCR Autofill** guna mengotomatisasi ekstraksi data identitas e-KTP secara langsung ke dalam formulir pendaftaran."*

---

### 📌 SLIDE 3: TINJAUAN PUSTAKA & KEBARUAN PENELITIAN
**🗣️ Teks Presentasi Lisan**:
> *"Berdasarkan kajian literatur (Reswan, Nashiruddin, Sofjan, Azzahra), penelitian terdahulu umumnya berfokus pada ekstraksi Kartu Mahasiswa atau verifikasi dokumen fisik.*  
> ***Kebaruan Penelitian Saya**: Spesifik menerapkan fitur autofill e-KTP pada portal PMB Web dengan inovasi **UI Constraint Kamera Sketsa (Guideline Overlay)** di sisi klien untuk menutupi kelemahan mesin OCR pada peladen."*

---

### 📌 SLIDE 4: METODOLOGI PENELITIAN (MODEL WATERFALL)
**🗣️ Teks Presentasi Lisan**:
> *"Penelitian ini mengadaptasi **Metodologi Waterfall** yang mencakup empat tahapan terstruktur:*  
> *Analisis Kebutuhan $\rightarrow$ Desain Sistem REST API & UI Kamera Sketsa $\rightarrow$ Implementasi Kode OpenCV & Tesseract $\rightarrow$ Pengujian Sistem."*

---

### 📌 SLIDE 5: PIPELINE PRAPEMROSESAN CITRA (OPENCV)
**🗣️ Teks Presentasi Lisan**:
> *"Sebelum citra e-KTP diekstraksi oleh Tesseract OCR, citra masukan diolah melalui **empat tahapan OpenCV** pada peladen:*  
> 1. **Grayscale**: Mereduksi dimensi warna RGB menjadi skala abu-abu guna menghemat alokasi memori komputasi hingga 66%.  
> 2. **CLAHE**: Meningkatkan kontras lokal pada area citra bereksposur rendah secara adaptif.  
> 3. **Gaussian Blur**: Mengeliminasi derau citra (noise) frekuensi tinggi hasil akuisisi kamera seluler.  
> 4. **Otsu Thresholding**: Memisahkan secara tegas karakter teks (foreground) dari latar belakang dokumen (background)."*

---

### 📌 SLIDE 6: EVALUASI BASELINE PELADEN (TANPA CONSTRAINT)
**🗣️ Teks Presentasi Lisan**:
> *"Bapak/Ibu Penguji, hasil pengujian awal terhadap 50 sampel citra e-KTP tanpa pembatasan orientasi dan pencahayaan menghasilkan Character Error Rate (CER) yang tinggi, yaitu NIK 70,25% dan Nama 78,65%.*  
> *Temuan kuantitatif ini **merasionalisasikan secara akademis** bahwa mesin Tesseract OCR konvensional tidak dapat berdiri sendiri tanpa adanya standarisasi citra masukan."*

---

### 📌 SLIDE 7: SOLUSI MITIGASI INOVASI KAMERA SKETSA
**🗣️ Teks Presentasi Lisan**:
> *"Sebagai langkah mitigasi, diterapkan inovasi **UI Constraint Kamera Sketsa (Guideline Overlay)** pada sisi klien.*  
> *Fitur ini **mengondisikan pendaftar** untuk menyelaraskan posisi dan orientasi e-KTP sebelum akuisisi citra dilakukan, sehingga citra yang ditransmisikan ke peladen senantiasa berada pada kondisi optimal tanpa membebani peladen dengan algoritma rotasi otomatis."*

---

### 📌 SLIDE 8: HASIL INTEGRASI FRONTEND & RESTful API
**🗣️ Teks Presentasi Lisan**:
> *"Sistem dibangun dengan arsitektur terpisah (decoupled):*  
> * Frontend PMB Web mengoperasikan Kamera Sketsa $\rightarrow$ mentransmisikan citra masukan ke RESTful API Flask $\rightarrow$ Backend menjalankan OpenCV & Tesseract $\rightarrow$ mengembalikan respons payload JSON NIK, Nama, Tanggal Lahir, & Alamat untuk mengotomatisasi pengisian formulir."*

---

### 📌 SLIDE 9: DEMONSTRASI LANGSUNG FITUR OCR AUTOFILL
**🗣️ Teks Presentasi Lisan**:
> *"Pada slide ini, Dewan Penguji dipersilakan untuk menguji coba fitur OCR Autofill secara langsung melalui tautan demo di layar: `http://localhost:8000/pmb/scan-ktp`.*  
> *Alur kerja sistem: Pendaftar menekan tombol Scan KTP, menyelaraskan e-KTP pada bingkai Kamera Sketsa, dan seluruh kolom biodata akan terisi secara otomatis dalam durasi yang singkat."*

---

### 📌 SLIDE 10: ANALISIS HASIL EVALUASI CER FINAL
**🗣️ Teks Presentasi Lisan**:
> *"Dengan diimplementasikannya UI Constraint Kamera Sketsa pada sistem final, tingkat kesalahan ekstraksi karakter (CER) pada simulasi pengisian formulir berhasil ditiadakan hingga mencapai **presisi 100% (CER 0,00%)** pada elemen NIK, Nama, dan Alamat."*

---

### 📌 SLIDE 11: EVALUASI EFISIENSI WAKTU & SPEEDUP RATIO
**🗣️ Teks Presentasi Lisan**:
> *"Berdasarkan pengukuran efisiensi durasi pemrosesan:*  
> * Penginputan formulir secara manual memerlukan durasi rata-rata **120,00 detik**.  
> * Pengisian otomatis melalui OCR Autofill hanya memerlukan **32,77 detik**.  
> * Diperoleh **Speedup Ratio 3,66×**, yang mengonfirmasi bahwa proses pendaftaran menjadi **3,66 kali lebih cepat** serta terhindar dari risiko kesalahan entri data."*

---

### 📌 SLIDE 12: KESIMPULAN & SARAN PENGEMBANGAN
**🗣️ Teks Presentasi Lisan**:
> *"Kesimpulan penelitian ini:*  
> 1. Fitur OCR Autofill terbukti meningkatkan efisiensi waktu pendaftaran hingga 3,66 kali lipat.  
> 2. UI Constraint Kamera Sketsa efektif menutupi kelemahan inheren mesin Tesseract OCR.*  
> *Saran pengembangan lanjutan: Memigrasikan peladen ke infrastruktur VPS Cloud dan mengintegrasikan modul Image Quality Assessment (IQA) untuk deteksi citra kabur secara otomatis."*

---

### 📌 SLIDE 13: PENUTUP & SESI TANYA JAWAB (Q&A)
**🗣️ Teks Presentasi Lisan**:
> *"Demikian presentasi hasil penelitian skripsi yang dapat saya sampaikan. Terima kasih atas perhatian Ibu Rinanda, Pak Taufik, Pak Nana, Ibu Aila, dan Ibu Firas.*  
> *Waktu dan tempat saya kembalikan kepada Ketua Penguji. Wassalamu’alaikum Warahmatullahi Wabarakatuh."*
