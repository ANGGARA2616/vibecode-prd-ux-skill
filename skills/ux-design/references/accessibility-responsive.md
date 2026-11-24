# Panduan Aksesibilitas dan Desain Responsif

Standar pemenuhan WCAG 2.1 Level AA dan adaptabilitas tata letak pada berbagai ukuran peramban.

---

## 1. Standar Aksesibilitas (WCAG 2.1 AA)

| Aspek | Standar Minimum | Implementasi pada Modul |
|---|---|---|
| **Rasio Kontras Teks Normal** | Minimum 4.5:1 terhadap latar belakang. | Teks utama menggunakan Slate-900 (`#0F172A`) di atas putih/Slate-50 (rasio > 12:1). Teks sekunder menggunakan Slate-500 (`#64748B`) dengan rasio > 4.6:1. |
| **Rasio Kontras Teks Besar / Badge** | Minimum 3.0:1. | Badge tipe kamar menggunakan teks tebal dengan latar pastel kontras tinggi (misal: teks biru tua di atas biru muda). |
| **Navigasi Keyboard (*Focus Ring*)** | Seluruh elemen interaktif dapat dijangkau via tombol `Tab`. | Setiap input dan tombol memiliki outline cincin fokus jelas (`focus:ring-2 focus:ring-blue-500/20`). |
| **Ukuran Target Sentuh (*Touch Target*)** | Minimum 44 x 44 piksel pada perangkat layar sentuh. | Tombol primer memiliki padding vertikal minimal 10px dan tinggi total ≥ 42px dengan area klik luas. |
| **Label Bidang Formulir** | Setiap input wajib memiliki elemen `<label>` yang terhubung atau label visual eksplisit. | Tidak ada input yang hanya mengandalkan placeholder. |

---

## 2. Adaptasi Tata Letak Responsif

1. **Struktur Grid Kartu Kamar**:
   - Desktop lebar (≥ 1280px): 4 kolom kartu.
   - Laptop / Tablet Landscape (≥ 1024px): 3 kolom kartu.
   - Tablet Portrait (≥ 640px): 2 kolom kartu.
   - Layar Ponsel (< 640px): 1 kolom kartu vertikal penuh.

2. **Formulir 2 Kolom**:
   - Desktop (≥ 1024px): 2 kolom sejajar (Spesifikasi Seragam di kiri, Generator Nomor di kanan).
   - Layar Kecil (< 1024px): Menumpuk vertikal berurutan (Seksi 1 di atas, Seksi 2 di bawah).

3. **Tabel Ringkasan**:
   - Memiliki pembungkus `overflow-x-auto` agar tabel tetap dapat digeser horizontal dengan rapi saat dibuka pada resolusi sempit tanpa merusak tata letak bilah samping dan header.
