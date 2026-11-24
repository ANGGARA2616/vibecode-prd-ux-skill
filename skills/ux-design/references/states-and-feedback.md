# Panduan Ragam Kondisi (States) dan Umpan Balik Antarmuka

Setiap komponen interaktif dan layar kerja wajib menangani 6 kondisi operasional secara terencana.

---

## 1. Empty State (Kondisi Kosong)
- **Kapan Digunakan**: Ketika sebuah properti kost belum memiliki kamar sama sekali (0 unit terdaftar).
- **Elemen Wajib**:
  - Kontainer bergaris batas putus-putus (`border-2 border-dashed border-slate-300`) dengan padding longgar.
  - Ikon atau ilustrasi tematik (misal: ikon ranjang/kamar).
  - Teks judul ramah: `Belum Ada Unit Kamar di Properti Ini`.
  - Teks pemandu manfaat: Menjelaskan bahwa pendaftaran massal dapat menyelesaikan input puluhan kamar dalam sekejap.
  - Tombol aksi primer yang langsung membuka formulir penambahan massal.
  - Tautan alternatif untuk memuat data contoh (*seed demo*).

---

## 2. Loading State (Kondisi Memuat)
- **Kapan Digunakan**: Saat aplikasi membaca atau menginisialisasi state dari penyimpanan lokal atau API.
- **Elemen Wajib**:
  - Penanda pemuatan non-intrusif (animasi spinner atau teks status `Memuat data kamar...`).
  - Tidak menampilkan tampilan rusak (*flash of unstyled content*).

---

## 3. Progress State (Kondisi Kemajuan Operasi Batch)
- **Kapan Digunakan**: Saat sistem mengeksekusi penyimpanan batch multi-kamar.
- **Elemen Wajib**:
  - Modal dialog terpusat dengan latar belakang buram (*backdrop blur*).
  - Indikator bilah progres animasi horizontal (*progress bar*) yang bergerak dari 0% hingga 100%.
  - Teks persentase dinamis yang diperbarui secara berkesinambungan.
  - Label aksi aktif: `Menyimpan [N] unit kamar ke sistem...`.

---

## 4. Success / Confirmation State (Kondisi Konfirmasi Hasil)
- **Kapan Digunakan**: Sesaat setelah proses penyimpanan massal selesai 100%.
- **Elemen Wajib**:
  - Ikon centang hijau besar (`CheckCircle2`) dengan lingkaran aksen hijau lembut.
  - Tajuk konfirmasi dengan angka absolut terverifikasi: `[N] Kamar Berhasil Ditambahkan!` (contoh: `12 Kamar Berhasil Ditambahkan!`).
  - Deskripsi kepastian: Menyatakan bahwa seluruh data telah aman tersimpan di sistem kost.
  - Dua tombol navigasi tindakan lanjut:
    1. **Tombol Primer**: `Lihat Daftar Kamar →` (mengarahkan kembali ke Screen 1 dengan daftar kamar terbarui).
    2. **Tombol Sekunder**: `Tambah Kamar Lain` (membuka kembali formulir untuk tipe kamar berikutnya).

---

## 5. Error State (Kondisi Galat)
- **Kapan Digunakan**: Ketika terjadi benturan nomor kembar, input kosong, atau pelanggaran aturan batas sistem.
- **Elemen Wajib**:
  - Spanduk peringatan merah mencolok dengan ikon segitiga tanda seru (`AlertTriangle`).
  - Bahasa lugas menyebutkan nomor yang bentrok.
  - Penonaktifan tombol eksekusi primer agar tidak terjadi rekaman data ganda.
  - Tombol perbaikan otomatis (*auto-correction*) di samping kemampuan edit mandiri.

---

## 6. Idle / Active State (Kondisi Siap)
- **Kapan Digunakan**: Kondisi standar saat layar siap menerima interaksi pengguna.
- **Elemen Wajib**:
  - Keterbacaan teks kontras tinggi, tombol dengan efek layang (*hover*), dan kursor yang menandakan elemen dapat diklik (*cursor-pointer*).
