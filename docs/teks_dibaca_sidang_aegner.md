# 📜 TEKS SIAP BACA UNTUK SIDANG SKRIPSI (VERSI 13 SLIDE STREAMLINED)

**Nama**: Aegner Billik (NIM: 220102007)  
**Pembimbing I**: Aila Gema Safitri, S.T., M.T. (Bu Aila)  
**Pembimbing II**: Firas Atqiya, S.T., M.T. (Bu Firas)  
**Dewan Penguji**: Pak Taufik Rahmat Kurniawan, Bu Rinanda, Pak Nana  

---

### 📌 SLIDE 1: COVER & PEMBUKAAN
**🗣️ Teks Siap Baca**:
> *"Bismillahirrahmanirrahim. Assalamu’alaikum Warahmatullahi Wabarakatuh.*  
> *Yang saya hormati Ibu Rinanda, Pak Taufik, Pak Nana, serta Bapak/Ibu Dosen Penguji sekalian.*  
> *Perkenalkan, nama saya **Aegner Billik** (NIM 220102007) dari Teknik Informatika UMB, di bawah bimbingan Ibu Aila Gema Safitri dan Ibu Firas Atqiya.*  
> *Pada hari ini, saya akan mempresentasikan hasil skripsi saya tentang **Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan OCR Tesseract pada Sistem PMB UM Bandung**."*

---

### 📌 SLIDE 2: LATAR BELAKANG & RUANG LINGKUP
**🗣️ Teks Siap Baca**:
> *"Bapak/Ibu Penguji, pendaftaran PMB saat ini masih mengisi form secara manual. Ada 2 masalah utama:*  
> 1. **Lama**: Butuh waktu rata-rata 2 menit (120 detik) hanya untuk ngetik form biodata.  
> 2. **Rawan Salah Ketik (Human Error)**: Sering terjadi typo NIK/Nama yang menyulitkan panitia PMB saat verifikasi berkas.  
> *Solusinya: Mengintegrasikan fitur **OCR Autofill** agar calon mahasiswa cukup foto KTP, dan formulir otomatis terisi sendiri."*

---

### 📌 SLIDE 3: TINJAUAN PUSTAKA & KEBARUAN (RESEARCH GAP)
**🗣️ Teks Siap Baca**:
> *"Penelitian terdahulu (Reswan, Nashiruddin, Sofjan, Azzahra) berfokus pada Kartu Mahasiswa atau verifikasi keaslian dokumen.*  
> ***Kebaruan Penelitian Saya**: Spesifik menerapkan autofill e-KTP pada portal PMB Web dengan inovasi **Kamera Sketsa (Guideline Overlay)** di sisi Frontend untuk menutupi kelemahan mesin OCR di Backend."*

---

### 📌 SLIDE 4: METODOLOGI PENELITIAN (WATERFALL)
**🗣️ Teks Siap Baca**:
> *"Penelitian ini menggunakan **Metodologi Waterfall** yang terdiri dari 4 tahapan terstruktur:*  
> *Analisis Kebutuhan $\rightarrow$ Desain Sistem REST API & UI Kamera Sketsa $\rightarrow$ Implementasi Kode OpenCV & Tesseract $\rightarrow$ Pengujian Sistem."*

---

### 📌 SLIDE 5: PREPROCESSING CITRA OPENCV (4 TAHAP)
**🗣️ Teks Siap Baca**:
> *"Sebelum foto KTP diproses OCR, citra diolah di Backend melalui **4 tahap OpenCV**:*  
> 1. **Grayscale**: Mengubah foto jadi skala abu-abu biar **hemat memori 66%**.  
> 2. **CLAHE**: Meratakan kontras pencahayaan agar bagian foto yang gelap/terbayang tetap terlihat.  
> 3. **Gaussian Blur**: Mengurangi bintik-bintik foto bekas jepretan HP.  
> 4. **Otsu Thresholding**: Memisahkan secara tegas tulisan hitam dari latar belakang KTP."*

---

### 📌 SLIDE 6: HASIL EVALUASI BASELINE (TANPA CONSTRAINT)
**🗣️ Teks Siap Baca**:
> *"Bapak/Ibu Penguji, dari pengujian awal 50 foto KTP tanpa batasan posisi/pencahayaan, didapatkan hasil Character Error Rate (CER) yang tinggi: NIK 70,25% dan Nama 78,65%.*  
> *Angka tinggi ini **membuktikan secara ilmiah** bahwa Tesseract OCR konvensional TIDAK BISA berdiri sendiri tanpa standarisasi posisi foto."*

---

### 📌 SLIDE 7: INOVASI MITIGASI KAMERA SKETSA
**🗣️ Teks Siap Baca**:
> *"Oleh karena itu, saya buat inovasi **Kamera Sketsa (Guideline Overlay)** di sisi Frontend.*  
> *Fitur ini **memaksa pengguna** menyelaraskan posisi KTP sebelum difoto, sehingga foto yang dikirim ke server selalu rapi, terang, dan lurus tanpa membebani server dengan algoritma rotasi yang berat."*

---

### 📌 SLIDE 8: INTEGRASI REST API FLASK & FRONTEND PMB
**🗣️ Teks Siap Baca**:
> *"Sistem dibangun secara terpisah (decoupled):*  
> * Frontend Web menangkap foto KTP via Kamera Sketsa $\rightarrow$ mengirim data ke Backend REST API Flask $\rightarrow$ Backend menjalankan OpenCV & Tesseract $\rightarrow$ mengembalikan data JSON NIK, Nama, Tanggal Lahir, & Alamat ke Frontend untuk langsung terisi di form PMB."*

---

### 📌 SLIDE 9: DEMO SIMULASI FITUR OCR AUTOFILL
**🗣️ Teks Siap Baca**:
> *"Pada slide ini, Bapak/Ibu Dosen Penguji dipersilakan untuk menguji coba fitur OCR Autofill ini secara langsung melalui link demo yang tampil di layar: `http://localhost:8000/pmb/scan-ktp`.*  
> *Alurnya sangat ringkas: Calon mahasiswa tinggal klik Scan KTP, posisikan KTP di kamera sketsa, dan seluruh kolom formulir akan terisi otomatis dalam hitungan detik."*

---

### 📌 SLIDE 10: GRAFIK EVALUASI HASIL AKHIR (CER)
**🗣️ Teks Siap Baca**:
> *"Dengan adanya bantuan Kamera Sketsa pada sistem final, tingkat kesalahan baca (CER) pada simulasi pengisian formulir berhasil ditekan menjadi presisi 100% pada elemen NIK, Nama, dan Alamat."*

---

### 📌 SLIDE 11: EVALUASI EFISIENSI WAKTU (SPEEDUP 3,66x)
**🗣️ Teks Siap Baca**:
> *"Dari hasil pengujian efisiensi waktu:*  
> * Pengisian manual butuh rata-rata **120 detik** (2 menit).  
> * Pengisian via OCR Autofill cuma butuh **32,77 detik**.  
> * Diperoleh **Speedup Ratio 3,66x**, yang artinya pendaftaran menjadi **3,66 kali lebih cepat** dan mengurangi kesalahan ketik."*

---

### 📌 SLIDE 12: KESIMPULAN & SARAN PENGEMBANGAN
**🗣️ Teks Siap Baca**:
> *"Kesimpulannya:*  
> 1. Fitur OCR Autofill KTP berhasil mempercepat proses pengisian PMB hingga 3,66 kali lebih cepat.  
> 2. Kamera Sketsa terbukti efektif menutupi kelemahan bawaan Tesseract OCR.*  
> *Saran pengembangan: Memindahkan server backend ke Cloud VPS dan menambah fitur penolak foto blur otomatis."*

---

### 📌 SLIDE 13: PENUTUP & SESI TANYA JAWAB (Q&A)
**🗣️ Teks Siap Baca**:
> *"Demikian presentasi skripsi yang dapat saya sampaikan. Terima kasih atas perhatian Ibu Rinanda, Pak Taufik, Pak Nana, serta Bapak/Ibu Dosen sekalian. Waktu dan tempat saya kembalikan kepada Ketua Penguji. Wassalamu’alaikum Warahmatullahi Wabarakatuh."*
