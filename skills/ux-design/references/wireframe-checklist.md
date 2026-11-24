# Wireframe Checklist: 7 Kriteria Lulus Antarmuka

Dokumen ini memuat tolok ukur verifikasi visual dan fungsional untuk memastikan rancangan antarmuka siap produksi. Setiap kriteria dinilai dengan standar biner (**Ya / Tidak**).

---

## 1. Navigation (Navigasi)
- [ ] **Tautan Induk & Remah Roti**: Tersedia jalur remah roti (*breadcrumb*) yang menunjukkan posisi hierarki aktif (contoh: `Properti / Kost Griya Amartha / Kamar`).
- [ ] **Bilah Samping Konsisten**: Bilah navigasi samping (*sidebar*) tetap terlihat dan menandai menu aktif secara visual (kontras latar belakang berbeda).
- [ ] **Akses Pembatalan yang Aman**: Tersedia tombol "Batal" atau "Kembali" pada setiap modal dialog dan layar formulir tanpa kehilangan state data yang sudah diketik sebelumnya.
- **Kriteria Lulus**: Pengguna dapat berpindah antarlevel navigasi tanpa tombol *back* browser dan selalu mengetahui posisinya di dalam sistem.

---

## 2. Hierarchy (Hierarki Visual)
- [ ] **Skala Tipografi**: Judul halaman menggunakan font ukuran terbesar (≥ 20px, bold), diikuti judul seksi (14–16px, semibold), dan label kolom (11–13px, medium).
- [ ] **Penekanan Nilai Kunci**: Angka metrik atau nomor kamar kartu ditampilkan dengan kontras tebal dan ukuran besar (`text-2xl` atau 22px bold).
- [ ] **Pengelompokan Logis**: Elemen input dikelompokkan ke dalam kartu-kartu panel terpisah berdasarkan fungsinya (misal: Spesifikasi Kamar vs Generator Penomoran).
- **Kriteria Lulus**: Pengguna dapat membedakan informasi primer dan sekunder dalam pemindaian visual selama kurang dari 3 detik.

---

## 3. CTA (Call to Action)
- [ ] **Pembedaan Tombol Primer vs Sekunder**: Tombol aksi utama (misal: "Simpan Semua Kamar", "Tambah Beberapa Kamar") menggunakan warna tegas dan kontras tinggi (slate/biru), sedangkan tombol aksi sekunder menggunakan gaya outline atau teks netral.
- [ ] **Posisi CTA Konsisten**: Tombol aksi penentu diletakkan di sudut kanan bawah kontainer formulir atau ringkasan.
- [ ] **Status Nonaktif Dinamis**: Tombol eksekusi dinonaktifkan (*disabled*) secara visual saat kondisi prasyarat belum terpenuhi (contoh: tombol simpan terkunci saat terdeteksi nomor kembar).
- **Kriteria Lulus**: Aksi penentu keberhasilan alur tampak paling dominan dan tidak membingungkan pengguna.

---

## 4. Content (Konten & Terminologi)
- [ ] **Terminologi Otentik**: Menggunakan istilah industri pengelolaan kost Indonesia yang baku (misal: "Tipe Kamar", "Tarif Sewa Bulanan", "Fasilitas Kamar", "Kamar Kosong", "Kamar Terisi").
- [ ] **Format Mata Uang Terstandarisasi**: Tarif uang selalu memuat simbol `Rp` dan pemisah ribuan titik (contoh: `Rp 1.500.000/bln`).
- [ ] **Instruksi Ringkas**: Kolom input dilengkapi teks pemandu (*helper text*) atau placeholder realistis, bukan teks umum tanpa konteks.
- **Kriteria Lulus**: Tidak ditemukan istilah teknis pemrograman atau teks *dummy* (*lorem ipsum*) pada antarmuka.

---

## 5. Feedback (Umpan Balik Sistem)
- [ ] **Pratinjau Instan (*Real-Time Preview*)**: Perubahan input jumlah atau prefix nomor langsung memperbarui daftar chip pratinjau nomor kamar tanpa klik perantara.
- [ ] **Penghitung Dinamis**: Akumulasi total kamar dan total nilai sewa terhitung seketika saat baris kamar ditambah atau dihapus.
- [ ] **Indikator Progres Operasi Batch**: Proses simpan massal menampilkan animasi bilah kemajuan (*progress bar*) dengan persentase 0% hingga 100%.
- **Kriteria Lulus**: Sistem senantiasa memberitahukan status operasi yang sedang berlangsung dalam waktu respon di bawah 200 ms.

---

## 6. Error State (Penanganan Galat)
- [ ] **Spanduk Galat Deskriptif**: Muncul spanduk merah di atas tabel yang merinci nomor kamar yang bermasalah secara eksplisit.
- [ ] **Penanda Visual Lapangan**: Kolom input yang bermasalah ditandai garis batas merah tegas dan pesan galat inline di bawahnya.
- [ ] **Koreksi Langsung di Tempat**: Tersedia tombol otomatisasi (misal: "Auto-Koreksi Nomor yang Kembar") serta kemampuan mengedit langsung pada sel tabel.
- **Kriteria Lulus**: Pengguna memahami apa yang salah dan tahu langkah pasti untuk memperbaikinya tanpa mengulang dari awal.

---

## 7. Empty State (Kondisi Kosong)
- [ ] **Penjelasan Informatif**: Layar properti tanpa kamar menampilkan ilustrasi tematik dan penjelasan ramah bahwa belum ada kamar terdaftar.
- [ ] **Tindakan Lanjutan Jelas**: Disediakan tombol Call to Action primer yang langsung membawa pengguna ke formulir pendaftaran massal.
- [ ] **Tautan Pemulihan Contoh**: Disediakan opsi untuk memuat data simulasi awal guna memudahkan eksplorasi.
- **Kriteria Lulus**: Halaman kosong tidak tampak seperti sistem yang rusak (*blank screen*), melainkan memandu tindakan produktif berikutnya.
