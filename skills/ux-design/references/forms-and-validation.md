# Panduan Desain Formulir dan Validasi

Standar perancangan input formulir, validasi data, dan penanganan galat yang solutif untuk modul operasional.

---

## 1. Struktur Tata Letak Formulir
- **Grup Berdasarkan Hubungan Logis**: Pisahkan seksi spesifikasi seragam kamar dengan seksi parameter generator penomoran menggunakan kontainer kartu terpisah.
- **Label di Atas Kolom (*Top-aligned Labels*)**: Tempatkan label di atas bidang input agar alur pemindaian mata pengguna bergerak vertikal secara natural.
- **Tanda Wajib Diisi yang Konsisten**: Gunakan tanda bintang merah (`*`) pada label bidang yang bersifat wajib (*mandatory*), seperti Tipe Kamar, Lantai, Jumlah Kamar, dan Harga.

---

## 2. Standar Validasi Data Input

| Bidang Input | Aturan Validasi | Tindakan / Respon Sistem |
|---|---|---|
| **Jumlah Kamar** | Bilangan bulat positif, minimum 1, maksimum 50. | Jika `< 1` atau `> 50`, muncul peringatan `Jumlah kamar yang ditambahkan harus antara 1 sampai 50 unit.` |
| **Tarif Bulanan** | Wajib bilangan positif `> 0`, pemisah ribuan otomatis. | Menampilkan format IDR real-time di bawah input. Jika kosong/nol, muncul galat `Harga sewa bulanan wajib diisi.` |
| **Awalan Nomor (Prefix)** | Maksimal 10 karakter alfanumerik. | Otomatis memperbarui label rentang nomor dan chip pratinjau. |
| **Nomor Kamar Satuan** | Wajib terisi dan unik per kost. | Dicek langsung terhadap database properti dan terhadap sesama baris dalam batch. |

---

## 3. Anatomi Pesan Galat yang Berkualitas (Actionable Error Message)

Pesan kesalahan harus memenuhi rumus 3 unsur:
1. **Apa yang terjadi**: Sebutkan objek dan nilai yang salah secara eksplisit.
2. **Kenapa itu salah**: Jelaskan alasan penolakan sistem.
3. **Bagaimana solusinya**: Berikan instruksi penyelesaian yang konkret.

### Contoh Perbandingan
- ❌ **Pesan Buruk (Generik & Menyalahkan)**:
  `Error: Invalid input data.` atau `Terjadi kesalahan validasi nomor.`
- ✅ **Pesan Baik (Solutif & Informatif)**:
  `Nomor kamar "101" sudah dipakai di properti ini. Gunakan nomor lain atau tekan tombol Auto-Koreksi.`

---

## 4. Penanda Visual Galat (Visual Error Indicators)
1. **Garis Batas Merah (*Red Border*)**: Input atau sel tabel yang bentrok diberi garis batas merah (`border-red-500`) dan bayangan cincin fokus merah muda (`ring-red-400/30`).
2. **Latar Belakang Kontras (*Row Tint*)**: Seluruh baris tabel yang bermasalah disorot dengan latar merah muda transparan (`bg-red-50`).
3. **Teks Galat Inline**: Teks pesan galat berwarna merah (`text-red-600`) diletakkan tepat di bawah kolom input bersangkutan dengan ikon peringatan kecil.
4. **Spanduk Induk (*Error Banner*)**: Spanduk peringatan merah di bagian atas merangkum seluruh nomor yang bentrok agar pengguna langsung sadar adanya masalah sebelum menggulir tabel.
