# 👨‍💻 BEDAH KODINGAN PYTHON (VERSI SUPER MUDAH DIPAHAMI)

Dokumen ini menjelaskan **seluruh baris kodingan Python Backend** skripsimu mulai dari `import library` sampai API Flask.

---

## 🛠️ MODUL 0: IMPORT LIBRARY (Memanggil Alat-Alat Utama)

```python
import cv2
import numpy as np
import pytesseract
import re
import time
from flask import Flask, request, jsonify
from flask_cors import CORS
```

### 💡 Penjelasan Gampang Per Baris:
1. `import cv2`  
   * **Artinya**: Memanggil pustaka **OpenCV**.  
   * **Fungsi**: Ini "salon foto"-nya Python. Dipakai buat ubah warna foto (Grayscale), nerangin bayangan (CLAHE), sama ngatur kontras (Otsu).
2. `import numpy as np`  
   * **Artinya**: Memanggil pustaka **NumPy** dan disingkat nama pemanggilannya jadi `np`.  
   * **Fungsi**: Foto di komputer sebenarnya adalah kumpulan matriks angka piksel. NumPy ini alat buat ngolah angka-angka piksel foto secara cepat di RAM.
3. `import pytesseract`  
   * **Artinya**: Memanggil jembatan penghubung antara kode Python kita dengan **mesin Tesseract OCR**.  
   * **Fungsi**: Mesin pembaca tulisan di foto.
4. `import re`  
   * **Artinya**: Memanggil pustaka **Regular Expression (Regex)**.  
   * **Fungsi**: Detektif pencari kata. Tugasnya milah mana angka NIK, mana Nama, mana Tanggal Lahir dari tumpukan teks OCR.
5. `import time`  
   * **Artinya**: Memanggil stopwatch bawaan Python.  
   * **Fungsi**: Menghitung berapa detik waktu yang dibutuhkan server dari foto diunggah sampai form terisi.
6. `from flask import Flask, request, jsonify`  
   * **Artinya**: Memanggil framework **Flask** untuk membuat REST API.  
   * **Fungsi**: Kurir penghubung antara Frontend Web dengan Backend Python.
7. `from flask_cors import CORS`  
   * **Artinya**: Memanggil fitur keamanan CORS.  
   * **Fungsi**: Memberi izin agar Frontend Web (misal port 3000) bisa ngirim data foto ke Backend Flask (port 5000) tanpa diblokir browser.

---

## 🎨 MODUL 1: PREPROCESSING FOTO OPENCV (`preprocess_image`)

```python
def preprocess_image(image_file):
    # Baris A: Baca foto mentah dari HTTP Request menjadi array byte
    file_bytes = np.frombuffer(image_file.read(), np.uint8)
    
    # Baris B: Ubah array byte jadi matriks gambar warna (BGR)
    img = cv2.imdecode(file_bytes, cv2.IMREAD_COLOR)
    if img is None:
        raise ValueError("Gagal mendekode gambar.")

    # Baris C: Konversi dari Warna BGR ke Hitam-Putih Abu-abu (Grayscale)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Baris D: CLAHE (Perjelas bagian foto yang terbayang/gelap)
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)

    # Baris E: Gaussian Blur (Haluskan bintik-bintik foto HP)
    blurred = cv2.GaussianBlur(enhanced, (3, 3), 0)

    # Baris F: Otsu's Thresholding (Pisahkan tegas tulisan hitam & latar putih)
    _, binary = cv2.threshold(blurred, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return binary
```

### 💡 Penjelasan Gampang Per Langkah:
* **Baris A & B (`frombuffer` & `imdecode`)**: Foto KTP yang dikirim dari HP bentuknya masih berkas biner mentah. Kode ini mengubah berkas biner itu jadi **matriks gambar 3D yang bisa dibaca OpenCV**.
* **Baris C (`cvtColor Grayscale`)**: Foto warna diubah jadi hitam-putih skala abu-abu.  
  * *Kenapa?* Karena warna KTP (biru/kebiruan) nggak penting buat dibaca tulisan NIK-nya. Dengan diubah ke grayscale, ukuran data foto **hemat 66% memori**.
* **Baris D (`createCLAHE`)**: Penerang otomatis. Kalau foto KTP-nya ada bayangan tangan atau sinarnya nggak merata, CLAHE membagi foto jadi kotak-kotak kecil 8x8 dan nerangin bagian yang gelap aja.
* **Baris E (`GaussianBlur`)**: Menyaring bintik-bintik noise akibat kamera HP jelek/kurang cahaya biar fotonya mulus.
* **Baris F (`THRESH_OTSU`)**: Foto diubah jadi murni **Hitam (Piksel 0 = Tulisan)** dan **Putih (Piksel 255 = Latar)**. Efek abu-abu dibuang total.

---

### 📐 BEDAH FUNGSI PELURUS FOTO MIRING (`_deskew`):

```python
def _deskew(image):
    # 1. Catat koordinat lokasi piksel-piksel tulisan KTP
    coords = np.column_stack(np.where(image > 0))
    if len(coords) < 100: return image
    
    # 2. Ukur berapa derajat kemiringan kotak teks KTP
    angle = cv2.minAreaRect(coords)[-1]
    
    # 3. Rapikan hitungan sudut kemiringan
    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle
        
    # 4. Batas toleransi: abaikan jika miringnya sangat kecil (<0.5 deg) atau terlalu miring (>15 deg)
    if abs(angle) < 0.5 or abs(angle) > 15:
        return image
        
    # 5. Hitung matriks pemutaran foto & putar foto sampai tegak lurus lagi
    (h, w) = image.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    return cv2.warpAffine(image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
```

#### 💡 Penjelasan Gampang `_deskew`:
* **Apa itu Deskew?**: Deskew artinya **"meluruskan foto yang miring"** (seperti meluruskan pigura foto yang miring di dinding).
* **`np.column_stack(np.where(image > 0))`**: Mengumpulkan lokasi koordinat titik-titik teks putih di foto KTP.
* **`cv2.minAreaRect(coords)`**: Mengukur sudut kemiringan teks KTP (misal miring $3^\circ$ atau $5^\circ$).
* **`if abs(angle) < 0.5 or abs(angle) > 15`**: Batas toleransi aman. Kalau miringnya dikit banget ($<0,5^\circ$) tak perlu diputar (hemat waktu). Kalau miringnya terlalu ekstrem ($>15^\circ$) diabaikan agar gambar tidak terpotong.
* **`cv2.getRotationMatrix2D` & `cv2.warpAffine`**: Memutar matriks foto sebesar sudut kemiringan `angle` sehingga baris teks KTP kembali **sejajar horizontal sempurna**.

---

## 🔍 MODUL 2: LOGIKA NYARI TEKS REGEX (`_extract_nik` & `_extract_nama`)

```python
def _extract_nik(text):
    try:
        # Lapis 1: Cari kata "NIK" + 16 digit angka
        m = re.search(r"NIK\s*[:\-]?\s*(\d[\d\s]{14,19}\d)", text, re.IGNORECASE)
        if m:
            d = re.sub(r"\s", "", m.group(1))
            if len(d) >= 16: return d[:16]

        # Lapis 2: Cari 16 digit angka murni berurutan
        found = re.findall(r"\b(\d{16})\b", text)
        if found: return found[0]

        # Lapis 3: Cari angka yang kepisah spasi akibat OCR
        relaxed = re.findall(r"(\d[\d\s]{14,19}\d)", text)
        for match in relaxed:
            clean = re.sub(r"\s", "", match)
            if len(clean) >= 16: return clean[:16]
    except Exception: pass
    return "Tidak Terbaca"
```

### 💡 Penjelasan Gampang Logika NIK:
* **Lapis 1 (`m = re.search...`)**: Sistem nyari kata `"NIK"`. Lalu ambil angkanya. Spasi liar dibuang pakai `re.sub()`.
* **Lapis 2 (`found = re.findall...`)**: Kalau kata `"NIK"` hilang/rusak terbaca OCR, sistem nyari **16 digit angka murni** (`\b\d{16}\b`) di mana saja dalam foto.
* **Lapis 3 (`relaxed = re.findall...`)**: Kalau angkanya kepisah spasi (misal `3273 0102 0007 0001`), Lapis 3 akan menangkap angka berpola spasi tersebut, dibuang spasinya, dan diambil 16 digit pertamanya.

---

## 🌐 MODUL 3: FLASK REST API ENDPOINT (`/api/scan-ktp`)

```python
app = Flask(__name__)
CORS(app)

@app.route("/api/scan-ktp", methods=["POST"])
def scan_ktp():
    # 1. Cek apakah ada file foto KTP yang dikirim
    if "ktp_image" not in request.files:
        return jsonify({"status": "error", "message": "File tidak ada"}), 400

    file = request.files["ktp_image"]
    start_time = time.time() # Mulai stopwatch

    # 2. Jalankan Preprocessing OpenCV
    processed_img = preprocess_image(file)

    # 3. Jalankan Tesseract OCR
    raw_text = pytesseract.image_to_string(processed_img, lang="ind+eng", config="--psm 6")

    # 4. Extract data pakai Regex
    nik = _extract_nik(raw_text)
    nama = _extract_nama(raw_text)
    
    elapsed = round(time.time() - start_time, 2) # Hitung durasi

    # 5. Kirim jawaban JSON ke Frontend
    return jsonify({
        "status": "success",
        "nik": nik,
        "nama": nama,
        "processing_time": elapsed
    }), 200
```

### 💡 Penjelasan Gampang Per Baris:
1. `@app.route("/api/scan-ktp", methods=["POST"])`: Membuat pintu gerbang URL API `/api/scan-ktp` yang hanya menerima kiriman data metode **POST**.
2. `request.files["ktp_image"]`: Mengambil file foto KTP yang diunggah dari form HP.
3. `pytesseract.image_to_string(..., lang="ind+eng", config="--psm 6")`:  
   * **`image_to_string`**: Mengubah gambar biner hasil OpenCV menjadi tulisan string teks.
   * **`lang="ind+eng"`**: Menggunakan kamus bahasa Indonesia dan Inggris.
   * **`--psm 6`**: Page Segmentation Mode 6 (Memerintahkan Tesseract membaca gambar sebagai satu blok teks terstruktur KTP).
4. `jsonify({...})`: Mengemas hasil NIK, Nama, dan Waktu Pemrosesan menjadi format standar **JSON** agar bisa langsung diisi (*autofill*) ke kolom formulir di Frontend Web.
