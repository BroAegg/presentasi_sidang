# 🎓 PANDUAN LENGKAP PERSIAPAN SIDANG SKRIPSI
**Judul Skripsi**: Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan Teknologi Optical Character Recognition (OCR) Berbasis Tesseract pada Sistem PMB Universitas Muhammadiyah Bandung  
**Penyusun**: Aegner Billik (NIM: 220102007) — Teknik Informatika UMB  
**Pembimbing I**: Aila Gema Safitri, S.T., M.T.  
**Pembimbing II**: Firas Atqiya, S.T., M.T.  

---

## 📌 BAGIAN 1: STRATEGI & KAJIAN PAPER (UNTUK DOSEN PENGUJI: BU RINANDA)

### 1.1 Daftar Paper Referensi Utama & Akses Download
Berikut 5 paper utama yang menjadi acuan matriks tinjauan pustaka skripsi Anda, beserta paper teori pendukung:

1. **Reswan et al. (2024)**
   - **Judul**: *Penerapan Algoritma OCR untuk Ekstraksi Informasi dari Citra Kartu Tanda Mahasiswa (KTM)*
   - **Jurnal**: JATI (Jurnal Mahasiswa Teknik Informatika), Vol. 8 No. 5, Hal. 11004–11009.
   - **Fokus**: OCR Template Matching pada KTM (Akurasi 88%).
   - **Cara Download**: Cari di Google Scholar dengan kata kunci `"Penerapan Algoritma OCR untuk Ekstraksi Informasi dari Citra Kartu Tanda Mahasiswa Reswan"`.

2. **Nashiruddin et al. (2025)**
   - **Judul**: *Implementasi OCR Berbasis Tesseract untuk Ekstraksi Data Kartu Mahasiswa UMKLA*
   - **Jurnal**: JKTI - Jurnal Keilmuan Teknologi Informasi, Vol. 1 No. 1, Hal. 11–14.
   - **Fokus**: Tesseract + OpenCV + Regex pada KTM UMKLA.
   - **Cara Download**: Cari di Google Scholar `"Implementasi OCR Berbasis Tesseract untuk Ekstraksi Data Kartu Mahasiswa UMKLA Nashiruddin"`.

3. **Sofjan & Soetanto (2025)**
   - **Judul**: *Implementasi Sistem Verifikasi e-KTP Berbasis OCR dan CNN untuk Administrasi Akademik*
   - **Prosiding**: 6th Seminar Nasional Mahasiswa FTI (SENAFTI) Universitas Budi Luhur, Vol. 4 No. 2, Hal. 269–278.
   - **Fokus**: Ekstraksi e-KTP dengan CNN + OCR untuk verifikasi keaslian (CER 28,85%).
   - **Cara Download**: Cari di Google Scholar `"Implementasi Sistem Verifikasi e-KTP Berbasis OCR dan CNN Sofjan Soetanto"`.

4. **Sherin et al. (2024)**
   - **Judul**: *Departmental Document Software Using OCR*
   - **Publikasi**: KAHM Unity Women's College, ISBN: 978-93-340-1632-1.
   - **Fokus**: Otomatisasi input dokumen hasil ujian ke spreadsheet.

5. **Azzahra & Nugroho (2025)**
   - **Judul**: *Sistem Informasi Persuratan Digital Berbasis Web dengan Teknologi OCR (Optical Character Recognition) untuk Pengarsipan Dokumen*
   - **Publikasi**: Skripsi DTEDI Universitas Gadjah Mada (SuratTEDI).
   - **Fokus**: Integrasi Tesseract OCR dengan framework Laravel web (CER 5,71%, WER 9,59%).

6. **Paper Teori Dasar (Smith 2007, Hochreiter 1997, Otsu 1979)**:
   - **Ray Smith (2007)**: *"An Overview of the Tesseract OCR Engine"* (Paper resmi Google mengenai Tesseract).
   - **Hochreiter & Schmidhuber (1997)**: *"Long Short-Term Memory"* (Paper fondasi arsitektur LSTM).
   - **Nobuyuki Otsu (1979)**: *"A Threshold Selection Method from Gray-Level Histograms"* (Binarisasi Otsu).

---

### 1.2 "Benang Merah" (Alur Logika & Positionality) Skripsi Aegner
Jika Bu Rinanda menanyakan **"Bagaimana posisi penelitian kamu dan apa benang merahnya dari paper-paper tersebut?"**, jelaskan dengan alur logika ini:

```
[Masalah Riil PMB] ──► [Evolusi OCR di Literatur] ──► [Celah Penelitian / Research Gap] ──► [Kebaruan Skripsi Aegner]
  Manual Input          Reswan (KTM Template)           Studi e-KTP sebelumnya hanya          Integrasi Tesseract + OpenCV +
  Human Error           Nashiruddin (KTM Tesseract)     untuk VERIFIKASI KEASLIAN,             Regex + UI CONSTRAINT KAMERA
  Inefisiensi           Sofjan (e-KTP CNN Verifikasi)   bukan AUTOFILL FORMULIR PMB.           SKETSA di sisi Client untuk
                        Azzahra (Surat Laravel Web)     Belum ada yang atasi derau             menutupi kelemahan Tesseract.
                                                        dengan UI Constraint Client.
```

#### Narasi Benang Merah (Hafalkan untuk Bu Rinanda):
1. **Titik Berangkat (Problem Statement)**: Pendaftaran PMB di UM Bandung masih manual. Berisiko *human error* dan lambat.
2. **Landasan Literatur (State-of-the-Art)**:
   - Reswan (2024) & Nashiruddin (2025) membuktikan Tesseract & OpenCV sukses membaca kartu mahasiswa (KTM), namun sistem mereka masih *standalone* dan fokus ke KTM.
   - Sofjan & Soetanto (2025) mencoba pada e-KTP menggunakan CNN, tetapi fokusnya untuk **verifikasi keaslian**, bukan untuk **autofill formulir pendaftaran**.
   - Azzahra (2025) membuktikan Tesseract dapat diintegrasikan ke web Laravel, namun objeknya adalah surat arsip yang formatnya standar dokumen cetak, bukan e-KTP fisik yang difoto via HP.
3. **Celah Penelitian (Research Gap)**:
   - Belum ada penelitian yang menerapkan autofill e-KTP khusus sistem PMB perguruan tinggi.
   - Mesin Tesseract konvensional sangat rentan terhadap *noise*, rotasi, dan pencahayaan buruk pada foto HP (terbukti dari CER server 70,25% untuk NIK dan 78,65% untuk Nama pada pengujian batch tanpa constraint).
4. **Kebaruan & Solusi Skripsi Aegner (Novelty)**:
   - Alih-alih membebaskan server dengan algoritma *auto-rotate* / *deskew* otomatis yang sangat berat dan membuat *server timeout*, Aegner menerapkan **Inovasi UI Constraint (Kamera Sketsa / Guideline Overlay)** di sisi *Frontend/Client*.
   - Kamera Sketsa memaksa pengguna menyelaraskan posisi, orientasi lanskap, dan pencahayaan secara mandiri sebelum *capture*. Solusi antarmuka ini secara empiris menutupi kelemahan inherent Tesseract OCR, menjaga Speedup Ratio pada **3,66x (32,77 detik vs 120 detik manual)**.

---

## 💻 BAGIAN 2: BEDAH KODINGAN BARIS DEMI BARIS (UNTUK DOSEN PENGUJI: PAK TAUFIK)
*Tuliskan poin-poin ini di buku catatan Anda untuk dihafalkan malam ini.*

### 2.1 Modul 1: Preprocessing Citra (`preprocess_image` & `_deskew`)

```python
def preprocess_image(image_file):
    # 1. Mengubah file bytes HTTP POST dari request upload menjadi numpy array 1D
    file_bytes = np.frombuffer(image_file.read(), np.uint8)
    
    # 2. Mendekode numpy array menjadi matriks citra BGR (3 Channel)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    if img is None:
        raise ValueError("Gagal mendekode gambar. Pastikan file berupa JPG/PNG.")

    # 3. Konversi BGR (3 channel) ke Grayscale (1 channel)
    # Rumus Luminance: Gray = 0.299*R + 0.587*G + 0.114*B
    # Tujuan: Mereduksi beban komputasi sebesar 66% (dari 3 channel ke 1 channel)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # 4. CLAHE (Contrast Limited Adaptive Histogram Equalization)
    # clipLimit=2.0 (membatasi kontras agar noise tidak terverifikasi berlebihan)
    # tileGridSize=(8,8) (membagi citra menjadi matriks ubin 8x8)
    # Tujuan: Meratakan distribusi intensitas cahaya lokal (menangani pencahayaan tidak merata/bayangan)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)

    # 5. Gaussian Blur (Filter Low-Pass)
    # Kernel (3,3) dengan standar deviasi sigma=0
    # Tujuan: Menghilangkan noise frekuensi tinggi (bintik/grain foto HP) sebelum binarisasi
    blurred = cv2.GaussianBlur(enhanced, (3, 3), 0)

    # 6. Otsu's Thresholding (Binarisasi Adaptif Auto-Threshold)
    # Memisahkan piksel menjadi 2 kelas (Foreground Teks 0 / Background 255)
    # Menghitung nilai threshold optimal t* yang memaksimalkan varians antar-kelas (between-class variance)
    _, binary = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # 7. Coreksi Kemiringan (Deskew)
    binary = _deskew(binary)
    return binary
```

#### Fungsi Pembantu `_deskew`:
```python
def _deskew(image):
    # Mengambil koordinat piksel putih (teks)
    coords = np.column_stack(np.where(image > 0))
    if len(coords) < 100: return image
    
    # Menghitung minimum bounding box berotasi dari kumpulan piksel
    angle = cv2.minAreaRect(coords)[-1]
    
    # Normalisasi sudut rotasi
    if angle < -45: angle = -(90 + angle)
    else: angle = -angle
    
    # Abaikan jika kemiringan sangat kecil (<0.5 deg) atau terlalu ekstrim (>15 deg)
    if abs(angle) < 0.5 or abs(angle) > 15: return image
    
    # Hitung matriks rotasi 2D dan transformasikan citra dengan interpolasi bicubic
    (h, w) = image.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    return cv2.warpAffine(image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
```

---

### 2.2 Modul 2: Ekstraksi Tesseract OCR (`extract_ktp_data`)

```python
def extract_ktp_data(processed_image):
    raw_text = ""
    try:
        # Panggil Tesseract OCR dengan wrapper PyTesseract
        # lang="ind+eng": Kombinasi Bahasa Indonesia dan Inggris
        # config="--psm 6": Page Segmentation Mode 6 (Assume a single uniform block of text)
        raw_text = pytesseract.image_to_string(processed_image, lang="ind+eng", config="--psm 6")
    except Exception:
        # Fallback bertingkat jika gabungan bahasa gagal
        try: raw_text = pytesseract.image_to_string(processed_image, lang="ind", config="--psm 6")
        except Exception: raw_text = pytesseract.image_to_string(processed_image, lang="eng", config="--psm 6")

    # Hitung rata-rata Confidence Score per kata
    confidence = _calc_confidence(processed_image)

    # Parsing variabel menggunakan Regular Expression bertingkat
    return {
        "nik":           _extract_nik(raw_text),
        "nama":          _extract_nama(raw_text),
        "tempat_lahir":  _extract_tempat_lahir(raw_text),
        "tanggal_lahir": _extract_tanggal_lahir(raw_text),
        "jenis_kelamin": _extract_jenis_kelamin(raw_text),
        "alamat":        _extract_alamat(raw_text),
        "raw_text":      raw_text,
        "confidence":    confidence,
    }
```

---

### 2.3 Modul 3: Logika Parsing Regex Bertingkat (Multi-Layered Fallback)

#### 1. Ekstraksi NIK (`_extract_nik`):
```python
def _extract_nik(text):
    try:
        # Layer 1 (Strict Label Matching): Cari kata "NIK" yang diikuti 16 digit angka
        m = re.search(r"NIK\s*[:\-]?\s*(\d[\d\s]{14,19}\d)", text, re.IGNORECASE)
        if m:
            d = re.sub(r"\s", "", m.group(1)) # Hapus spasi liar hasil OCR
            if len(d) >= 16: return d[:16]

        # Layer 2 (Standalone 16-Digit Regex): Cari sekuens 16 angka persis di seluruh teks
        found = re.findall(r"\b(\d{16})\b", text)
        if found: return found[0]

        # Layer 3 (Relaxed Fallback): Cari sekuens angka dengan spasi terselip akibat OCR
        relaxed = re.findall(r"(\d[\d\s]{14,19}\d)", text)
        for match in relaxed:
            clean = re.sub(r"\s", "", match)
            if len(clean) >= 16: return clean[:16]
    except Exception: pass
    return "Tidak Terbaca"
```

##### 🗣️ Skrip Cara Membaca & Menjelaskan Kode NIK di Depan Dosen:
> *"Fungsi `_extract_nik` ini dirancang menggunakan **Algoritma Multi-Layered Fallback** (3 Lapis Pencarian) agar sistem tidak gampang gagal (*fail-fast*):*  
> 1. **Lapis 1 (Strict Label Matching)**: Mencari kata `"NIK"` diikuti tanda `:` atau `-` (opsional) dan deretan angka. Spasi liar hasil OCR dibersihkan dengan `re.sub(r"\s", "")`, lalu dipastikan panjangnya 16 digit.  
> 2. **Lapis 2 (Standalone 16-Digit Regex)**: Jika kata `"NIK"` hilang/rusak, sistem mencari **16 digit angka murni berurutan** (`\b(\d{16})\b`) yang berdiri sendiri di seluruh teks.  
> 3. **Lapis 3 (Relaxed Fallback)**: Jika angka NIK terpisah spasi akibat kesalahan OCR (contoh: `3273 0102 0007 0001`), Lapis 3 menangkap deretan angka berpola spasi tersebut, menyatukannya dengan menghapus spasi, lalu mengambil 16 digit pertamanya.  
> *Jika ketiga lapis gagal, fungsi mengembalikan nilai `"Tidak Terbaca"` via blok `try-except` tanpa membuat server crash."*

##### 🔍 Tabel Bedah Simbol Regex NIK (Jika Ditanya Detail Simbol):
| Simbol Regex | Arti & Fungsi | Penjelasan Sederhana |
| :--- | :--- | :--- |
| `re.search` | Cari match pertama | Mengambil lokasi pencocokan pertama yang ditemukan |
| `re.findall` | Cari semua match | Mengambil seluruh pencocokan dalam bentuk list |
| `re.IGNORECASE` | Case-insensitive | Mengabaikan huruf besar/kecil (`NIK`, `nik`, `Nik`) |
| `\d` | Digit angka | Menyaring karakter angka 0-9 |
| `\s*` | Spasi (Whitespace) | Menangani spasi yang jumlahnya 0 atau lebih |
| `[:\-]?` | Karakter `:` atau `-` opsional | Tanda `?` artinya tanda titik dua atau strip boleh ada / boleh tidak |
| `\b` | Word Boundary | Memastikan 16 angka berdiri sendiri (tidak nyambung ke nomor lain/HP) |
| `\d{16}` | Exactly 16 digits | Wajib persis 16 digit angka berurutan |
| `re.sub(r"\s", "", x)` | Hapus Spasi | Menghapus semua spasi liar di tengah angka hasil OCR |
| `d[:16]` | Slicing Array | Mengambil 16 karakter angka pertama |

#### 2. Ekstraksi Nama (`_extract_nama`):
```python
def _extract_nama(text):
    try:
        # Layer 1 (Label-based): Cari teks setelah kata "Nama"
        m = re.search(r"(?:^|\n)\s*Nama\s*[:\-]?\s*(.+)", text, re.IGNORECASE)
        if m:
            nama = re.sub(r"[^A-Za-z\s'\.\,]", "", m.group(1)).strip()
            if len(nama) >= 2: return nama.upper()

        # Layer 2 (Heuristic Uppercase & Stopwords Filter):
        # Jika kata "Nama" hilang/salah terbaca OCR, scan seluruh baris teks:
        # Syarat: Huruf KAPITAL semua (isupper), minimal 2 kata, TANPA angka, bukan kata kunci wilayah/label KTP
        skip = ["PROVINSI","KABUPATEN","KOTA","KELAMIN","ALAMAT","AGAMA","PEKERJAAN","STATUS","KEWARGANEGARAAN","BERLAKU","NIK"]
        for line in text.split("\n"):
            c = line.strip()
            if c.isupper() and len(c.split()) >= 2 and not re.search(r"\d", c) and len(c) > 4:
                if not any(kw in c for kw in skip): 
                    return c
    except Exception: pass
    return "Tidak Terbaca"
```

#### 3. Ekstraksi Tempat & Tanggal Lahir (`_extract_tempat_lahir` & `_extract_tanggal_lahir`):
```python
def _extract_tanggal_lahir(text):
    try:
        # Layer 1: Match baris "Tempat/Tgl Lahir" dengan format tanggal DD-MM-YYYY
        m = re.search(r"[Tt]empat\s*[/\\\\]?\s*[Tt]gl\.?\s*[Ll]ahir\s*[:\-]?\s*.+?(\d{2})\s*[-/]\s*(\d{2})\s*[-/]\s*(\d{4})", text)
        if m:
            dd, mm, yyyy = m.group(1), m.group(2), m.group(3)
            # Validasi logika tanggal realistis (1 <= DD <= 31, 1 <= MM <= 12, 1900 <= YYYY <= 2026)
            if 1 <= int(dd) <= 31 and 1 <= int(mm) <= 12 and 1900 <= int(yyyy) <= 2026:
                return f"{dd}-{mm}-{yyyy}"
        
        # Layer 2: Fallback scan seluruh teks yang cocok dengan pola tanggal DD-MM-YYYY
        for dd, mm, yyyy in re.findall(r"(\d{2})\s*[-/]\s*(\d{2})\s*[-/]\s*(\d{4})", text):
            if 1 <= int(dd) <= 31 and 1 <= int(mm) <= 12 and 1900 <= int(yyyy) <= 2026:
                return f"{dd}-{mm}-{yyyy}"
    except Exception: pass
    return "Tidak Terbaca"
```

#### 4. Ekstraksi Alamat (`_extract_alamat`):
```python
def _extract_alamat(text):
    try:
        lines = text.split("\n")
        found = False
        parts = []
        # Membaca multi-line alamat dari label "Alamat" sampai bertemu label pembatas berikutnya (RT/RW, Kel, Kec, Agama)
        for line in lines:
            s = line.strip()
            if re.search(r"Alamat\s*[:\-]?", s, re.IGNORECASE):
                after = re.sub(r".*Alamat\s*[:\-]?\s*", "", s, flags=re.IGNORECASE)
                if after: parts.append(after)
                found = True
                continue
            if found:
                if re.search(r"(RT\s*/\s*RW|Kel[/.]|Kec|Agama|Status|Pekerjaan|Kewarganegaraan)", s, re.IGNORECASE):
                    break
                if s: parts.append(s)
        if parts: return " ".join(parts)
    except Exception: pass
    return "Tidak Terbaca"
```

---

### 2.4 Modul 4: Flask REST API Endpoint & Ngrok Tunneling

```python
@app.route("/api/scan-ktp", methods=["POST"])
def scan_ktp():
    # 1. Validasi keberadaan file 'ktp_image' dalam FormData HTTP request
    if "ktp_image" not in request.files:
        return jsonify({"status": "error", "message": "Field 'ktp_image' tidak ditemukan."}), 400

    file = request.files["ktp_image"]
    
    # 2. Validasi ekstensi file yang diizinkan (.jpg, .jpeg, .png)
    ext = file.filename.rsplit(".", 1)[-1].lower() if "." in file.filename else ""
    if ext not in {"jpg", "jpeg", "png"}:
        return jsonify({"status": "error", "message": f"Format '{ext}' tidak didukung."}), 400

    try:
        start = time.time()
        # 3. Jalankan Pipeline OpenCV Preprocessing
        processed = preprocess_image(file)
        # 4. Jalankan Pipeline Tesseract OCR + Regex Parsing
        result = extract_ktp_data(processed)
        # 5. Hitung Latensi Komputasi (detik)
        proc_time = round(time.time() - start, 2)

        # 6. Kembalikan respons JSON berstatus 200 OK
        return jsonify({
            "status":          "success",
            "nik":             result["nik"],
            "nama":            result["nama"],
            "tempat_lahir":    result["tempat_lahir"],
            "tanggal_lahir":   result["tanggal_lahir"],
            "jenis_kelamin":   result["jenis_kelamin"],
            "alamat":          result["alamat"],
            "raw_text":        result["raw_text"],
            "confidence":      result["confidence"],
            "processing_time": proc_time,
        }), 200

    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500
```

---

## 🎯 BAGIAN 3: PREDIKSI PERTANYAAN SIDANG & JAWABAN EMAS (UNTUK 3 DOSEN PENGUJI)

---

### 3.1 Kelompok Pertanyaan BU RINANDA (Fokus Paper, Metodologi, & Teori)

#### ❓ Pertanyaan 1: "Mengapa Anda menggunakan Tesseract OCR 5.0 (LSTM) dan bukan arsitektur Deep Learning terbaru seperti EasyOCR, PaddleOCR, atau Vision Transformer?"
* **Jawaban Emas**:
  > *"Terima kasih atas pertanyaannya Ibu Rinanda. Pemilihan Tesseract 5.0 berbasis arsitektur LSTM didasarkan pada tiga pertimbangan akademis dan praktis:*  
  > 1. **Kebutuhan Lisensi & Resource**: Tesseract bersifat *open-source*, sangat ringan, dan tidak membutuhkan infrastruktur server GPU mahal untuk *deployment* di perguruan tinggi.  
  > 2. **Kemampuan Sekuensial LSTM**: Tesseract 5.0 menggunakan *Bidirectional LSTM* dengan *CTC Decoder*, yang mampu memodelkan keterkaitan antar-karakter secara dua arah tanpa membutuhkan segmentasi karakter eksplisit.  
  > 3. **Fokus Penelitian**: Penelitian ini berfokus pada **rekayasa antarmuka (UI Constraint)** dan **pipeline preprocessing OpenCV** untuk mengatasi keterbatasan mesin OCR konvensional pada sistem PMB web, bukan pada pembuatan *model deep learning baru*. Namun, migrasi ke EasyOCR/PaddleOCR telah saya masukkan sebagai saran pengembangan di Bab V."*

#### ❓ Pertanyaan 2: "Hasil evaluasi batch Anda menunjukkan CER NIK 70,25% dan CER Nama 78,65%. Angka kesalahan ini sangat tinggi. Bagaimana Anda membenarkan hasil penelitian ini?"
* **Jawaban Emas**:
  > *"Terima kasih Bu Rinanda. Angka CER 70,25% dan 78,65% tersebut adalah hasil pengujian **mesin dasar Tesseract pada 50 dataset tanpa batasan posisi/pencahayaan** (unconstrained baseline).  
  > Justru **tingginya angka CER ini menjadi justifikasi ilmiah utama** mengapa sistem ini mewajibkan fitur **Kamera Sketsa (Guideline Overlay)** di sisi Client. Pengujian tersebut membuktikan secara empiris bahwa Tesseract *tidak bisa dilepas secara mandiri* tanpa standarisasi posisi citra.  
  > Dengan adanya UI Constraint Kamera Sketsa, pengguna dipaksa menyelaraskan posisi dan pencahayaan sebelum citra dikirim ke server. Hasilnya, pada simulasi antarmuka final, ekstraksi NIK, Nama, dan Alamat dapat diekstraksi secara presisi 100% pada formulir pendaftaran."*

#### ❓ Pertanyaan 3: "Apa bedanya penelitian Anda dengan penelitian Sofjan & Soetanto (2025) serta Azzahra (2025) yang ada di matriks Anda?"
* **Jawaban Emas**:
  > *"Perbedaannya mendasar Bu Rinanda:*  
  > - **Sofjan & Soetanto (2025)** menggunakan e-KTP dengan kombinasi CNN untuk **verifikasi keaslian dokumen kependudukan**, bukan untuk pengisian formulir otomatis (*autofill*).  
  > - **Azzahra (2025)** mengintegrasikan Tesseract pada Laravel web (SuratTEDI), namun objeknya adalah **dokumen surat digital cetak** yang kualitasnya standar (bukan e-KTP fisik yang difoto via kamera smartphone).  
  > - **Kebaruan Penelitian Saya**: Spesifik mengimplementasikan *autofill* e-KTP untuk portal PMB dengan inovasi **UI Constraint Kamera Sketsa di sisi Frontend** untuk menutupi kelemahan mesin OCR di Backend."*

---

### 3.2 Kelompok Pertanyaan PAK TAUFIK (Fokus Kodingan & Eksekusi Teknis)

#### ❓ Pertanyaan 1: "Coba jelaskan alur matematik OpenCV yang Anda tulis di fungsi `preprocess_image` dari Grayscale sampai Otsu's Thresholding!"
* **Jawaban Emas**:
  > *"Siap Pak Taufik. Alurnya terdiri dari 4 tahap matematika utama:*  
  > 1. **Grayscale**: Mengubah RGB ke 1-channel dengan rumus bobot luminansi $Y = 0.299R + 0.587G + 0.114B$. Memangkas ukuran matriks memori hingga 66%.  
  > 2. **CLAHE**: Mengukur kontras secara adaptif dalam grid $8\times8$ piksel dengan membatasi *clip limit* di angka 2.0. Ini mencegah efek *over-amplification* pada derau latar belakang KTP.  
  > 3. **Gaussian Blur**: Mengonvolusi matriks citra dengan kernel $3\times3$ berbasis fungsi Gaussian 2D untuk menyaring derau frekuensi tinggi (bintik foto HP).  
  > 4. **Otsu Thresholding**: Menghitung secara otomatis nilai *threshold* $t^*$ yang memaksimalkan varians antar-kelas ($\sigma_B^2$) antara kelas *foreground* (teks hitam) dan *background* (warna dasar KTP), menghasilkan gambar biner 0 dan 255."*

#### ❓ Pertanyaan 2: "Bagaimana logika Regex Anda bekerja jika kata label 'NIK' atau 'Nama' pada KTP terpotong atau rusak terbaca oleh OCR?"
* **Jawaban Emas**:
  > *"Terima kasih Pak Taufik. Saya merancang **Algoritma Multi-Layered Fallback** yang tidak *fail-fast*:*  
  > - **Untuk NIK**: Jika Layer 1 (Regex berbasis label `NIK: ...`) gagal, sistem otomatis loncat ke Layer 2 yang mencari sekuens **16 digit angka independen** `\b(\d{16})\b` di seluruh teks. Jika masih gagal, Layer 3 akan mencari sekuens angka yang terselip spasi liar hasil OCR dan membersihkannya dengan `re.sub(r'\s', '', match)`.  
  > - **Untuk Nama**: Jika kata label 'Nama' rusak, Layer 2 menggunakan **Filter Heuristik**: scanning baris yang seluruh karakternya huruf KAPITAL (`isupper()`), tidak memuat angka, minimal 2 kata, dan bukan merupakan kata kunci wilayah (`PROVINSI`, `KABUPATEN`, `KOTA`, `AGAMA`)."*

#### ❓ Pertanyaan 3: "Mengapa Anda menggunakan parameter `--psm 6` pada PyTesseract, dan mengapa bahasanya `ind+eng`?"
* **Jawaban Emas**:
  > *"Parameter `--psm 6` berarti **Page Segmentation Mode 6: Assume a single uniform block of text**. Mode ini sangat cocok untuk area teks e-KTP karena memperlakukan seluruh teks sebagai satu blok terstruktur tanpa mencoba memecahnya menjadi kolom-kolom majalah.  
  > Bahasa `ind+eng` digunakan karena e-KTP menggunakan bahasa Indonesia (Nama, Alamat, NIK) tetapi beberapa karakter atau angka sering terdeteksi lebih optimal menggunakan pustaka karakter bahasa Inggris."*

---

### 3.3 Kelompok Pertanyaan PAK NANA & DOSEN PENGUJI LAINNYA (Fokus Manfaat, Pengujian, & Implementasi Praktis)

#### ❓ Pertanyaan 1: "Sejauh mana sistem yang Anda bangun ini siap diimplementasikan (production grade) di PMB Universitas Muhammadiyah Bandung?"
* **Jawaban Emas**:
  > *"Terima kasih Pak Nana. Sistem yang dibangun saat ini berstatus **Prototipe Fungsional Terintegrasi (TRL 6)**.  
  > Sistem sudah berhasil menghubungkan antarmuka Kamera Sketsa Frontend dengan Backend Flask OCR via REST API JSON. Untuk siap digunakan secara *full production*, diperlukan 2 langkah migrasi yang sudah saya rekomendasikan di Bab V:*  
  > 1. Memindahkan Backend Flask dari *tunneling ngrok* gratisan ke peladen terdedikasi (VPS/Cloud) agar tidak ada interupsi koneksi.  
  > 2. Menambahkan modul *Image Quality Assessment* (IQA) berbasis JavaScript di frontend untuk menolak foto yang blur/goyang sebelum diunggah."*

#### ❓ Pertanyaan 2: "Mengapa Anda menggunakan pengujian Blackbox Testing? Apakah tidak perlu Whitebox Testing?"
* **Jawaban Emas**:
  > *"Pengujian utama fitur *autofill* difokuskan pada **Blackbox Testing** karena target penelitian adalah menguji fungsionalitas antarmuka dari sudut pandang pengguna akhir (calon mahasiswa)—yaitu memvalidasi apakah input citra KTP dapat menghasilkan *autofill* yang benar pada form.  
  > Namun, secara internal pada tahap *development*, pengujian **Whitebox Testing** tetap dilakukan secara implisit terhadap logika percabangan Regex, validasi tanggal lahir, dan penanganan exception pada setiap modul pipeline Python."*

#### ❓ Pertanyaan 3: "Bagaimana Anda mengukur efisiensi waktu (Speedup Ratio 3,66x) dan apa dampaknya bagi PMB UM Bandung?"
* **Jawaban Emas**:
  > *"Pengukuran *Speedup Ratio* dihitung menggunakan rumus $Speedup = T_{manual} / T_{autofill}$.  
  > - Pengisian manual formulir oleh calon mahasiswa membutuhkan rata-rata **120 detik** (2 menit).  
  > - Pengisian otomatis via fitur OCR Autofill membutuhkan rata-rata **32,77 detik** (termasuk *upload*, *preprocessing*, *OCR*, dan *autofill*).  
  > - $Speedup = 120 / 32,77 = 3,66\times$.  
  > **Dampaknya**: Proses pendaftaran menjadi **3,66 kali lebih cepat**, mengurangi kejenuhan calon mahasiswa saat mendaftar, serta meminimalisasi kesalahan ketik NIK/Nama yang sering merepotkan panitia PMB saat verifikasi berkas."*

#### ❓ Pertanyaan 4: "Bagaimana dengan keamanan data pribadi e-KTP calon mahasiswa saat diunggah?"
* **Jawaban Emas**:
  > *"Pada prototipe ini, data KTP hanya diproses **in-memory** di peladen backend (menggunakan buffer `np.frombuffer` tanpa disimpan permanen sebagai file fisik di disk server). Setelah ekstraksi JSON dikirimkan ke frontend, buffer memori langsung dibersihkan oleh *garbage collector* Python. Untuk tingkat produksi, seluruh transmisi API wajib menggunakan protokol terenkripsi **HTTPS (TLS/SSL)**."*

---

## 💡 TIPS MENTAL SAAT SIDANG NANTI:
1. **Tenang & Percaya Diri**: Anda adalah orang yang paling paham kodingan dan sistem yang Anda buat sendiri.
2. **Jangan Asal Menjawab**: Jika ditanya hal teknis yang belum Anda ketahui, katakan: *"Terima kasih atas masukannya Bapak/Ibu. Hal tersebut menjadi catatan evaluasi yang sangat berharga bagi saya untuk pengembangan sistem ini selanjutnya."*
3. **Pegang Teguh Kebaruan Anda**: Kunci utama skripsi Anda adalah **UI Constraint (Kamera Sketsa)** yang berhasil memotong *noise* sejak dari Frontend, menutupi kelemahan inherent Tesseract OCR!

---

## 🎙️ BAGIAN 4: NASKAH KATA-KATA PRESENTASI SIDANG (SLIDE 1 – 14)
*Gunakan naskah ini saat tampil presentasi di depan dosen penguji (Durasi: 10–12 menit).*

### 📌 SLIDE 1: COVER & PEMBUKAAN
> *"Bismillahirrahmanirrahim. Assalamu’alaikum Warahmatullahi Wabarakatuh.*  
> *Yang saya hormati Ibu Rinanda, Pak Taufik, Pak Nana, serta Bapak/Ibu Dosen Penguji Sidang Skripsi pada hari ini.*  
> *Perkenalkan, nama saya **Aegner Billik** dengan NIM 220102007 dari Program Studi Teknik Informatika Universitas Muhammadiyah Bandung.*  
> *Pada hari ini, saya akan mempresentasikan hasil penelitian skripsi saya yang berjudul:* **'Implementasi Fitur Autofill Data Calon Mahasiswa Menggunakan Teknologi Optical Character Recognition (OCR) Berbasis Tesseract pada Sistem PMB Universitas Muhammadiyah Bandung'**."*

### 📌 SLIDE 2: LATAR BELAKANG & PERMASALAHAN
> *"Bapak/Ibu Penguji, proses pendaftaran PMB saat ini masih dilakukan secara manual. Hasil observasi menunjukkan 2 masalah utama: **Inefisiensi waktu** (butuh ~2 menit hanya untuk ngetik form) dan **Human Error** (rawan salah ketik NIK/Nama).*  
> *Solusinya adalah mengintegrasikan teknologi **OCR** agar calon mahasiswa cukup foto KTP dan formulir terisi otomatis (*autofill*)."*

### 📌 SLIDE 3: TINJAUAN PUSTAKA & RESEARCH GAP (KEBARUAN)
> *"Penelitian terdahulu (Reswan, Nashiruddin, Sofjan, Azzahra) fokus pada KTM atau verifikasi keaslian dokumen. Celah yang belum diteliti adalah penerapan autofill e-KTP pada portal PMB Web.*  
> ***Kebaruan penelitian saya**: Menutupi kelemahan Tesseract OCR (yang rentan foto miring/gelap) dengan inovasi **UI Constraint Kamera Sketsa (Guideline Overlay)** di sisi Frontend."*

### 📌 SLIDE 4: LANDASAN TEORI (TESSERACT 5.0 & LSTM)
> *"Saya memilih **Tesseract OCR 5.0** berbasis arsitektur **Bidirectional LSTM**. Alasan utamanya: Tesseract bersifat *open-source*, sangat ringan, dan **tidak membutuhkan peladen GPU mahal** untuk *deployment* di kampus."*

### 📌 SLIDE 5: METODOLOGI PENELITIAN (WATERFALL MODEL)
> *"Metodologi yang digunakan adalah **Waterfall Model** yang terdiri dari 5 tahapan terstruktur: Analisis Kebutuhan $\rightarrow$ Desain Sistem $\rightarrow$ Implementasi Kode $\rightarrow$ Pengujian CER & Speedup $\rightarrow$ Pemeliharaan."*

### 📌 SLIDE 6: PIPELINE PREPROCESSING OPENCV
> *"Sebelum dibaca Tesseract, foto KTP diolah di Backend melalui 4 tahap OpenCV:*  
> 1. **Grayscale**: Hemat memori 66%.  
> 2. **CLAHE**: Meratakan kontras pencahayaan/bayangan.  
> 3. **Gaussian Blur**: Mengurangi bintik-bintik foto.  
> 4. **Otsu Thresholding**: Binarisasi tegas Hitam-Putih."*

### 📌 SLIDE 7: LOGIKA PARSING REGEX MULTI-LAYERED FALLBACK
> *"Untuk mengekstraksi teks, saya buat **Regex 3 Lapis**. Pada NIK: Lapis 1 cari kata 'NIK' + 16 angka. Lapis 2 cari 16 angka murni (`\b\d{16}\b`) jika kata 'NIK' rusak. Lapis 3 bersihkan spasi liar hasil OCR jika angkanya terpisah-pisah."*

### 📌 SLIDE 8: HASIL EVALUASI BASELINE (TANPA CONSTRAINT)
> *"Pada pengujian awal tanpa bingkai, CER NIK mencapai 70,25% dan Nama 78,65%. Angka tinggi ini membuktikan secara empiris bahwa Tesseract OCR konvensional TIDAK BISA berdiri sendiri tanpa standarisasi posisi foto."*

### 📌 SLIDE 9: INOVASI MITIGASI: KAMERA SKETSA
> *"Atas dasar temuan tersebut, saya buat inovasi **Kamera Sketsa (Guideline Overlay)** di Frontend. Fitur ini **memaksa pengguna** menyelaraskan posisi KTP sebelum difoto, sehingga memotong derau sejak awal tanpa membebani server."*

### 📌 SLIDE 10: INTEGRASI REST API FLASK & FRONTEND
> *"Sistem dibangun decoupled: Frontend Web menangkap foto via Kamera Sketsa $\rightarrow$ Backend REST API Flask memproses OpenCV & OCR $\rightarrow$ Mengembalikan JSON data KTP $\rightarrow$ Form otomatis terisi."*

### 📌 SLIDE 11: DEMO SIMULASI & HASIL AKHIR
> *"Alur pengguna: Buka Form $\rightarrow$ Scan KTP $\rightarrow$ Paskan di Kamera Sketsa $\rightarrow$ Jepret. Dalam hitungan detik seluruh kolom NIK, Nama, Tgl Lahir, dan Alamat terisi otomatis."*

### 📌 SLIDE 12: EVALUASI EFISIENSI WAKTU (SPEEDUP 3,66x)
> *"Pengisian manual butuh **120 detik** (2 menit), sedangkan via OCR Autofill cuma **32,77 detik**. Diperoleh **Speedup Ratio 3,66x** (proses pendaftaran 3,66 kali lebih cepat)."*

### 📌 SLIDE 13: KESIMPULAN & SARAN PENGEMBANGAN
> *"Kesimpulan: Fitur Autofill berhasil mempercepat pendaftaran 3,66x dan Kamera Sketsa terbukti efektif menutupi kelemahan Tesseract.*  
> *Saran: Memindahkan backend ke Cloud VPS dan menambahkan modul Image Quality Assessment (IQA) di frontend."*

### 📌 SLIDE 14: PENUTUP & SESI Q&A
> *"Demikian presentasi dari saya. Terima kasih atas perhatian Ibu Rinanda, Pak Taufik, Pak Nana, dan Dosen Penguji sekalian. Saya siap menerima masukan dan pertanyaan. Wassalamu’alaikum Warahmatullahi Wabarakatuh."*

---

**Sukses Sidangnya, Aegner Billik, S.Kom.! 🚀**

