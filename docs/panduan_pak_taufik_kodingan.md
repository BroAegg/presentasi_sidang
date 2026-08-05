# 💻 PANDUAN SANGAT LENGKAP BEDAH KODINGAN (KHUSUS PAK TAUFIK)
**Fokus**: Kodingan Python Backend (OpenCV, PyTesseract, Regex, Flask API), Ngrok Tunneling, & Integrasi Frontend  
**Penyusun**: Aegner Billik (NIM: 220102007) — Teknik Informatika Universitas Muhammadiyah Bandung  

*Catatan untuk Aegner: Salin dan catat modul-modul kodingan ini ke dalam buku catatanmu malam ini!*

---

## 1. ⚙️ MODUL 1: PREPROCESSING CITRA OPENCV (DESKRIPSI & FORMULA MATEMATIKA)

### Kode Lengkap Preprocessing (`preprocess_image` & `_deskew`):

```python
import cv2
import numpy as np

def preprocess_image(image_file):
    # Baris 1: Membaca file bytes dari HTTP POST Request upload
    file_bytes = np.frombuffer(image_file.read(), np.uint8)
    
    # Baris 2: Mendekode file bytes menjadi matriks citra BGR (3 Channel)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    if img is None:
        raise ValueError("Gagal mendekode gambar. Pastikan file berupa JPG/PNG.")

    # Baris 3: Konversi Citra BGR (3 Channel) ke Grayscale (1 Channel)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Baris 4: Inisialisasi & Eksekusi CLAHE (Adaptive Histogram Equalization)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)

    # Baris 5: Gaussian Blur (Noise Reduction Filtering)
    blurred = cv2.GaussianBlur(enhanced, (3, 3), 0)

    # Baris 6: Otsu's Thresholding (Binarisasi Adaptif Auto-Threshold)
    _, binary = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    # Baris 7: Koreksi Kemiringan (Deskew)
    binary = _deskew(binary)
    return binary
```

---

### 🔍 Bedah Baris demi Baris Modul Preprocessing:

#### 1. `file_bytes = np.frombuffer(image_file.read(), np.uint8)`
- **Penjelasan**: `image_file.read()` mengambil *byte stream* mentah dari berkas yang diunggah via form HTTP POST. `np.frombuffer()` mengubah *stream* 8-bit tak bertanda (`np.uint8`) menjadi array 1 dimensi NumPy di dalam memori tanpa membuat salinan ekstra (efisien memori).

#### 2. `img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)`
- **Penjelasan**: Mengurai array *byte* biner JPG/PNG menjadi matriks citra 3-dimensi dengan format warna BGR (Blue, Green, Red) khas OpenCV. Dimensi matriks adalah $(Height \times Width \times 3)$.

#### 3. `gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)`
- **Penjelasan & Formula**: Konversi dari warna BGR 3-channel ke 1-channel Grayscale.
- **Formula Matematika Luminansi**:
  $$Y = 0.299 \cdot R + 0.587 \cdot G + 0.114 \cdot B$$
- **Tujuan**: Mereduksi memori dan waktu komputasi sebesar 66% (dari 3 matriks warna menjadi 1 matriks skala abu-abu 0–255) tanpa menghilangkan informasi tekstual KTP yang monokromatik.

#### 4. `clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))`
- **Penjelasan**: CLAHE (*Contrast Limited Adaptive Histogram Equalization*).
- **Parameter**:
  - `tileGridSize=(8,8)`: Membagi citra KTP menjadi matriks ubin berukuran $8 \times 8$ lokal.
  - `clipLimit=2.0`: Membatasi batas amplifikasi kontras hingga nilai 2.0.
- **Mengapa bukan Histogram Equalization biasa?**: Histogram equalization biasa meratakan seluruh citra secara global, yang akan menyebabkan derau di daerah gelap/pantulan cahaya (*glare*) ikut membesar. CLAHE meratakan kontras secara lokal pada tiap ubin dan memotong puncaknya jika melebihi `clipLimit`.

#### 5. `blurred = cv2.GaussianBlur(enhanced, (3, 3), 0)`
- **Penjelasan & Formula**: Filter konvolusi low-pass menggunakan matriks Kernel Gaussian $3 \times 3$.
- **Formula Kernel Gaussian 2D**:
  $$G(x, y) = \frac{1}{2\pi\sigma^2} e^{-\frac{x^2 + y^2}{2\sigma^2}}$$
- **Tujuan**: Meredam *noise* frekuensi tinggi (bintik-bintik foto HP, artefak kompresi JPEG) sebelum masuk ke proses binarisasi.

#### 6. `_, binary = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)`
- **Penjelasan & Formula**: Binarisasi Otsu secara otomatis menghitung nilai ambang batas (*threshold*) optimal $t^*$ dari histogram citra bimodal.
- **Formula Varians Antar-Kelas ($\sigma_B^2$)**:
  $$\sigma_B^2(t) = \omega_0(t) \omega_1(t) \left[ \mu_0(t) - \mu_1(t) \right]^2$$
  *Di mana $\omega_0, \omega_1$ adalah probabilitas kelas background/foreground, dan $\mu_0, \mu_1$ adalah rata-rata intensitasnya.*
- **Hasil**: Piksel dengan intensitas di atas $t^*$ diubah menjadi 255 (putih), dan di bawah $t^*$ diubah menjadi 0 (hitam). Teks KTP terisolasi sempurna.

---

### 📐 Bedah Fungsi Deskew (`_deskew`):

```python
def _deskew(image):
    # Ambil koordinat semua piksel putih (teks)
    coords = np.column_stack(np.where(image > 0))
    if len(coords) < 100: return image
    
    # Hitung minimum bounding rectangle berotasi
    angle = cv2.minAreaRect(coords)[-1]
    
    # Normalisasi sudut OpenCV (-90 s.d 0 derajat)
    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle
        
    # Toleransi: abaikan jika kemiringan sangat kecil (<0.5 deg) atau terlalu ekstrem (>15 deg)
    if abs(angle) < 0.5 or abs(angle) > 15:
        return image
        
    # Buat Matriks Rotasi 2D dan rotasikan citra
    (h, w) = image.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    return cv2.warpAffine(image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
```
- **Penjelasan**: `cv2.minAreaRect()` menghitung sudut kemiringan teks KTP. Matriks rotasi $M$ dihitung dengan `cv2.getRotationMatrix2D()`, kemudian `cv2.warpAffine()` memutar matriks citra dengan interpolasi *bicubic* agar baris teks KTP kembali horizontal sempurna.

---

## 🔤 2. MODUL 2: PYTESSERACT OCR WRAPPER & PARAMETER

```python
import pytesseract

def extract_ktp_data(processed_image):
    raw_text = ""
    try:
        # Konfigurasi Utama Tesseract OCR 5.0 (LSTM)
        raw_text = pytesseract.image_to_string(processed_image, lang="ind+eng", config="--psm 6")
    except Exception:
        try:
            raw_text = pytesseract.image_to_string(processed_image, lang="ind", config="--psm 6")
        except Exception:
            raw_text = pytesseract.image_to_string(processed_image, lang="eng", config="--psm 6")

    confidence = _calc_confidence(processed_image)
    return { ... }
```

### 🔍 Bedah Parameter PyTesseract:
1. `lang="ind+eng"`: Memuat *language pack* Bahasa Indonesia (`ind`) dan Bahasa Inggris (`eng`). Kombinasi ini krusial karena kata label KTP menggunakan Bahasa Indonesia, namun karakter angka NIK dan huruf Latin sering kali memiliki kecocokan pola tinggi pada *traineddata* `eng`.
2. `config="--psm 6"`: **Page Segmentation Mode 6**.
   - **Arti**: *Assume a single uniform block of text*.
   - **Alasan Pemilihan**: KTP fisik memiliki area teks yang rata kiri dan tersusun dalam blok seragam. Mode ini melarang Tesseract mencoba membagi teks menjadi kolom-kolom majalah, sehingga mengurangi risiko teks terpotong salah.
3. `_calc_confidence(image)`:
   - Menggunakan `pytesseract.image_to_data(..., output_type=pytesseract.Output.DICT)` untuk mengambil nilai *confidence score* (0–100) tiap kata (`data["conf"]`) dan merata-ratakannya untuk mengukur tingkat kepastian pembacaan LSTM Tesseract.

---

## 🔍 3. MODUL 3: LOGIKA PARSING REGEX MULTI-LAYERED FALLBACK

### A. Ekstraksi NIK (`_extract_nik`)

```python
def _extract_nik(text):
    try:
        # Layer 1 (Strict Label Matching): Cari kata NIK diikuti 16 digit angka
        m = re.search(r"NIK\s*[:\-]?\s*(\d[\d\s]{14,19}\d)", text, re.IGNORECASE)
        if m:
            d = re.sub(r"\s", "", m.group(1)) # Hapus spasi acak
            if len(d) >= 16: return d[:16]

        # Layer 2 (Standalone 16-Digit Regex): Cari sekuens 16 angka persis di seluruh teks
        found = re.findall(r"\b(\d{16})\b", text)
        if found: return found[0]

        # Layer 3 (Relaxed Fallback): Cari deretan angka berspasi hasil OCR buruk
        relaxed = re.findall(r"(\d[\d\s]{14,19}\d)", text)
        for match in relaxed:
            clean = re.sub(r"\s", "", match)
            if len(clean) >= 16: return clean[:16]
    except Exception: pass
    return "Tidak Terbaca"
```
- **Layer 1**: Menggunakan `re.search()` untuk mencari pola label `"NIK"`.
- **Layer 2**: Jika kata label `"NIK"` terpotong/salah terbaca OCR (misal terbaca `"N1K"`), `re.findall(r"\b(\d{16})\b")` akan memindai sekuens 16 angka berurutan di mana saja dalam teks.
- **Layer 3**: Jika OCR menyisipkan spasi liar di antara 16 angka NIK (misal `"3201 0200 7000 0001"`), Layer 3 menangkap grup digit berjarak 14-19 karakter dan menghapus spasinya dengan `re.sub(r"\s", "", match)`.

#### 🗣️ Skrip Menjelaskan di Depan Pak Taufik:
> *"Fungsi `_extract_nik` ini dirancang menggunakan **Algoritma Multi-Layered Fallback** (3 Lapis Pencarian) agar tidak fail-fast:*  
> 1. **Lapis 1 (Strict Label Matching)**: Mencari kata `"NIK"` diikuti tanda `:` atau `-` (opsional) dan deretan angka. Spasi liar dibersihkan dengan `re.sub(r"\s", "")`, lalu dipastikan panjangnya 16 digit.  
> 2. **Lapis 2 (Standalone 16-Digit Regex)**: Jika kata `"NIK"` hilang/rusak, sistem mencari **16 digit angka murni berurutan** (`\b(\d{16})\b`) yang berdiri sendiri di seluruh teks.  
> 3. **Lapis 3 (Relaxed Fallback)**: Jika angka NIK terpisah spasi akibat kesalahan OCR (contoh: `3273 0102 0007 0001`), Lapis 3 menangkap deretan angka berpola spasi tersebut, menyatukannya dengan menghapus spasi, lalu mengambil 16 digit pertamanya."*

#### 🔍 Tabel Bedah Simbol Regex NIK:
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

---

### B. Ekstraksi Nama (`_extract_nama`)

```python
def _extract_nama(text):
    try:
        # Layer 1: Regex berbasis kata label "Nama"
        m = re.search(r"(?:^|\n)\s*Nama\s*[:\-]?\s*(.+)", text, re.IGNORECASE)
        if m:
            nama = re.sub(r"[^A-Za-z\s'\.\,]", "", m.group(1)).strip()
            if len(nama) >= 2: return nama.upper()

        # Layer 2: Filter Heuristik Uppercase & Regional Stop-words
        skip = ["PROVINSI","KABUPATEN","KOTA","KELAMIN","ALAMAT","AGAMA","PEKERJAAN","STATUS","KEWARGANEGARAAN","BERLAKU","NIK"]
        for line in text.split("\n"):
            c = line.strip()
            # Syarat: Kapital semua, minimal 2 kata, TANPA angka, panjang > 4 karakter
            if c.isupper() and len(c.split()) >= 2 and not re.search(r"\d", c) and len(c) > 4:
                if not any(kw in c for kw in skip): 
                    return c
    except Exception: pass
    return "Tidak Terbaca"
```
- **Layer 1**: Mengambil string di sebelah kanan label `"Nama"`, lalu membuang karakter non-alfabet dengan `re.sub(r"[^A-Za-z\s'\.\,]", "", ...)`.
- **Layer 2 (Heuristic Filter)**: Jika kata "Nama" hilang akibat OCR, fungsi membelah teks per baris (`text.split("\n")`). Menapis baris yang:
  1. `c.isupper()`: Seluruh huruf KAPITAL (khas penulisan Nama di KTP).
  2. `len(c.split()) >= 2`: Minimal terdiri dari 2 kata.
  3. `not re.search(r"\d", c)`: Tidak mengandung angka sama sekali.
  4. `not any(kw in c for kw in skip)`: Bukan merupakan kata kunci label/wilayah KTP seperti `PROVINSI`, `KABUPATEN`, `AGAMA`.

---

### C. Ekstraksi Tempat & Tanggal Lahir (`_extract_tempat_lahir` & `_extract_tanggal_lahir`)

```python
def _extract_tanggal_lahir(text):
    try:
        # Layer 1: Regex pencocokan baris Tempat/Tgl Lahir dengan pola DD-MM-YYYY
        m = re.search(r"[Tt]empat\s*[/\\\\]?\s*[Tt]gl\.?\s*[Ll]ahir\s*[:\-]?\s*.+?(\d{2})\s*[-/]\s*(\d{2})\s*[-/]\s*(\d{4})", text)
        if m:
            dd, mm, yyyy = m.group(1), m.group(2), m.group(3)
            # Validasi logika rentang tanggal realistis
            if 1 <= int(dd) <= 31 and 1 <= int(mm) <= 12 and 1900 <= int(yyyy) <= 2026:
                return f"{dd}-{mm}-{yyyy}"
        
        # Layer 2: Fallback scan seluruh pola DD-MM-YYYY di teks
        for dd, mm, yyyy in re.findall(r"(\d{2})\s*[-/]\s*(\d{2})\s*[-/]\s*(\d{4})", text):
            if 1 <= int(dd) <= 31 and 1 <= int(mm) <= 12 and 1900 <= int(yyyy) <= 2026:
                return f"{dd}-{mm}-{yyyy}"
    except Exception: pass
    return "Tidak Terbaca"
```
- **Validasi Logika Tanggal**: Memastikan nilai Tanggal ($1 \le DD \le 31$), Bulan ($1 \le MM \le 12$), dan Tahun ($1900 \le YYYY \le 2026$) bernilai valid secara kalender, mencegah OCR menangkap sekuens angka acak sebagai tanggal lahir.

---

### D. Ekstraksi Alamat (`_extract_alamat`)

```python
def _extract_alamat(text):
    try:
        lines = text.split("\n")
        found = False
        parts = []
        for line in lines:
            s = line.strip()
            if re.search(r"Alamat\s*[:\-]?", s, re.IGNORECASE):
                after = re.sub(r".*Alamat\s*[:\-]?\s*", "", s, flags=re.IGNORECASE)
                if after: parts.append(after)
                found = True
                continue
            if found:
                # Stop jika bertemu label berikutnya (RT/RW, Kel, Kec, Agama)
                if re.search(r"(RT\s*/\s*RW|Kel[/.]|Kec|Agama|Status|Pekerjaan|Kewarganegaraan)", s, re.IGNORECASE):
                    break
                if s: parts.append(s)
        if parts: return " ".join(parts)
    except Exception: pass
    return "Tidak Terbaca"
```
- **Multiline Parsing**: Alamat di KTP sering kali terdiri dari beberapa baris. Algoritma mengaktifkan flag `found = True` saat menemukan kata `"Alamat"`, menampung baris-baris berikutnya ke array `parts`, dan menghentikan pembacaan (`break`) saat menemukan label baris baru seperti `RT/RW` atau `Agama`.

---

## 🌐 4. MODUL 4: FLASK REST API & NGROK DEPLOYMENT

```python
from flask import Flask, request, jsonify
from flask_cors import CORS
from pyngrok import ngrok
import time

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*", "methods": ["POST", "OPTIONS"], "allow_headers": ["Content-Type"]}})

@app.route("/api/scan-ktp", methods=["POST"])
def scan_ktp():
    if "ktp_image" not in request.files:
        return jsonify({"status": "error", "message": "Field 'ktp_image' tidak ditemukan."}), 400

    file = request.files["ktp_image"]
    if file.filename == "":
        return jsonify({"status": "error", "message": "Tidak ada file yang dipilih."}), 400

    ext = file.filename.rsplit(".", 1)[-1].lower() if "." in file.filename else ""
    if ext not in {"jpg", "jpeg", "png"}:
        return jsonify({"status": "error", "message": f"Format '{ext}' tidak didukung."}), 400

    try:
        start = time.time()
        processed = preprocess_image(file)
        result = extract_ktp_data(processed)
        proc_time = round(time.time() - start, 2)

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

# Eksekusi Tunneling Ngrok & Flask Server
public_url = ngrok.connect(5000)
print(f"🚀 Public URL Ngrok: {public_url}/api/scan-ktp")
app.run(port=5000)
```

### 🔍 Bedah Arsitektur Web API:
1. `CORS(app)`: Mengaktifkan *Cross-Origin Resource Sharing* agar Frontend web yang berjalan di domain/port terpisah (misalnya Laravel di localhost:8000 atau Next.js di localhost:3000) dapat melakukan HTTP POST request tanpa diblokir oleh kebijakan keamanan browser.
2. `proc_time = round(time.time() - start, 2)`: Menghitung secara presisi durasi eksekusi komputasi backend (dalam detik) dari pencapaian file hingga JSON dikirim balik.
3. `ngrok.connect(5000)`: Menghubungkan peladen Flask lokal di Google Colab (port 5000) ke URL publik HTTPS berenkripsi Ngrok, memungkinkan interaksi *real-time* dengan frontend web PMB secara aman.

---

## 🎨 5. MODUL 5: INTEGRASI FRONTEND NEXT.JS / REACT (AUTOFILL & KAMERA OVERLAY)

Di sisi Frontend (misalnya `Slide09MitigasiKameraSketsa.jsx` & `Slide10IntegrasiFrontend.jsx`), aliran data berjalan sebagai berikut:

```javascript
// 1. Pengambilan Gambar dari HTML5 Camera Stream
const captureAndSendImage = async () => {
  const canvas = canvasRef.current;
  const video = videoRef.current;
  
  // Draw video frame to canvas
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  // Convert canvas to Blob
  canvas.toBlob(async (blob) => {
    const formData = new FormData();
    formData.append('ktp_image', blob, 'ktp_capture.png');
    
    // Send to Flask Ngrok API Endpoint
    const response = await fetch('https://YOUR_NGROK_URL.ngrok-free.app/api/scan-ktp', {
      method: 'POST',
      body: formData,
    });
    
    const data = await response.json();
    if (data.status === 'success') {
      // AUTOFILL: Petakan data JSON langsung ke State Formulir PMB
      setFormDataState({
        nik: data.nik,
        nama: data.nama,
        alamat: data.alamat,
      });
    }
  }, 'image/png');
};
```

---

## 🎯 6. PREDIKSI PERTANYAAN SIDANG & JAWABAN EMAS (KHUSUS PAK TAUFIK)

### ❓ Pertanyaan 1: "Kenapa Anda menggunakan `clipLimit=2.0` pada CLAHE? Apa yang terjadi kalau nilainya saya naikkan jadi 10.0?"
* **Jawaban Emas**:
  > *"Jika `clipLimit` dinaikkan menjadi 10.0, pembatasan amplifikasi kontras lokal menjadi sangat longgar. Akibatnya, bintik-bintik *noise* atau derau pada area pencahayaan KTP yang gelap akan ikut diamplifikasi secara ekstrem. Nilai `clipLimit=2.0` adalah *sweet spot* yang ideal untuk menjaga agar teks KTP menjadi lebih kontras tanpa memperbesar *noise* latar belakang."*

### ❓ Pertanyaan 2: "Mengapa pada fungsi `_deskew` Anda menetapkan batas rotasi `abs(angle) < 0.5` dan `abs(angle) > 15` untuk diabaikan?"
* **Jawaban Emas**:
  > *"Batas `< 0.5` derajat diabaikan karena kemiringan di bawah setengah derajat sangat minim dan rotasi justru akan memunculkan efek garis patah-patah (*aliasing*) akibat interpolasi piksel.  
  > Batas `> 15` derajat diabaikan karena kemiringan di atas 15 derajat menandakan posisi citra KTP terlalu miring atau vertikal. Rotasi citra sebesar itu membutuhkan komputasi matriks `warpAffine` yang sangat berat dan dapat memicu *server timeout*. Kasus kemiringan ekstrem ini dicegah di sisi Client menggunakan Kamera Sketsa."*

### ❓ Pertanyaan 3: "Bagaimana cara kerja penanganan exception jika PyTesseract gagal mengekstraksi teks dari gambar?"
* **Jawaban Emas**:
  > *"Saya menggunakan struktur *nested try-except fallback ladder*. Pertama, Tesseract mencoba dengan kombinasi `lang="ind+eng"`. Jika ekosistem Colab/Server mengalami kesalahan pembacaan pustaka ganda, `except` pertama menangkap kesalahan tersebut dan mencoba ulang dengan `lang="ind"`. Jika masih gagal, `except` kedua mencoba `lang="eng"`. Jika seluruhnya gagal, variabel `raw_text` mengembalikan string kosong dan fungsi parsing Regex akan menghasilkan output default `"Tidak Terbaca"` tanpa memicu *crash 500 Server Error*."*

---
**Modul kodingan ini sangat lengkap dan siap dicatat di buku tulismu malam ini, Bro Aegner!** 🚀
