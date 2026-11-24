# Panduan Aksi Massal dan Tabel Data Ringkasan

Standar perancangan manipulasi data batch, verifikasi pra-simpan, dan manipulasi baris data di tempat (*in-place actions*).

---

## 1. Prinsip Aksi Massal (Bulk Operations)
1. **Dua Fase Terpisah**: Pisahkan fase pengisian spesifikasi dasar (konfigurasi) dengan fase peninjauan hasil (verifikasi). Hal ini meminimalkan kecemasan pengguna sebelum data disimpan permanen.
2. **Kalkulasi Akumulatif Instan**: Setiap modifikasi pada generator penomoran harus langsung mengkalkulasi rentang nomor dan chip pratinjau secara visual.
3. **Konfirmasi Terukur**: Sistem harus selalu menampilkan jumlah data pasti yang akan diproses (misal: "Simpan Semua Kamar (6)").

---

## 2. Anatomi Tabel Ringkasan Pra-Simpan (Summary Table)

| Kolom Tabel | Peran Komponen | Perilaku Interaktif |
|---|---|---|
| **No Urut** | Indeks baris | Terpenomori otomatis 1 s.d. N. |
| **Nomor Kamar** | Pengenal unit kamar | Menggunakan sel input inline aktif. Pengguna dapat langsung mengetikkan nomor baru di tempat jika ingin menyesuaikan urutan. |
| **Lantai** | Lokasi fisik | Label teks statis (misal: `Lt. 2`). |
| **Tipe Kamar** | Klasifikasi unit | Badge berwarna sesuai hierarki tipe (`STANDARD`, `DELUXE`, `VIP`, `EXCLUSIVE`). |
| **Fasilitas Kamar** | Rincian kelengkapan | Tag/chip ringkas memuat fasilitas yang diaktifkan seragam. |
| **Tarif Bulanan** | Beban sewa per unit | Rata kanan (*right-aligned*), tebal, berformat Rupiah (`Rp 1.500.000`). |
| **Aksi Satuan** | Tindakan eliminasi | Tombol ikon tempat sampah (`Trash2`) berwarna abu-abu yang berubah merah saat dihover, untuk menghapus baris tanpa konfirmasi berbelit. |

---

## 3. Bilah Total Ringkasan (Bottom Total Bar)
Diletakkan di bagian bawah kontainer tabel dengan kontras pembeda:
- Menampilkan metrik **Total Kamar Siap Dibuat** (misal: `6 Unit Kamar`).
- Menampilkan metrik **Estimasi Potensi Sewa** (misal: `Rp 9.000.000/bln`) yang terkalkulasi otomatis dari akumulasi tarif baris yang aktif.
- Menyediakan tombol sekunder `Ubah Parameter` untuk kembali ke formulir.
- Menyediakan tombol primer `Simpan Semua Kamar ([N])`.

---

## 4. Mekanisme Koreksi di Tempat (In-Place Inline Correction)
- Saat sistem mendeteksi galat nomor kembar, pengguna **TIDAK BOLEH** dipaksa mengulang pengisian formulir dari awal.
- Input nomor kamar pada baris yang salah langsung diubah statusnya menjadi bidang teks interaktif bergaris merah.
- Pengguna dapat mengetikkan nomor pengganti langsung di sel tersebut. Validasi akan memeriksa ulang secara instan setiap kali karakter diketikkan.
- Jika pengguna menginginkan kecepatan, sediakan tombol `⚡ Auto-Koreksi Nomor yang Kembar` yang otomatis mencari nomor kosong berikutnya dan membersihkan seluruh penanda galat dalam 1 klik.
