# 10 Heuristik Usabilitas Nielsen: Aplikasi Pengelolaan Kost

Panduan penerapan 10 prinsip evaluasi heuristik Jakob Nielsen yang dikontekstualisasikan untuk sistem manajemen properti kost.

---

### 1. Visibility of System Status (Transparansi Status Sistem)
- **Konsep**: Pengguna harus selalu tahu apa yang sedang terjadi melalui umpan balik yang relevan dalam waktu yang wajar.
- **Penerapan Kost**: 
  - Bilah progres animasi (0%–100%) saat menyimpan puluhan unit kamar massal.
  - Badge status hunian kamar di kartu kamar ("Terisi" berlatar hijau, "Kosong" berlatar merah).
  - Penghitung dinamis jumlah unit terpilih di tabel ringkasan.

---

### 2. Match Between System and the Real World (Kesesuaian Sistem dengan Dunia Nyata)
- **Konsep**: Sistem memakai bahasa, kata, dan konsep yang akrab bagi pengguna, bukan jargon teknis pengembang.
- **Penerapan Kost**: 
  - Menggunakan istilah lokal "Kamar Mandi Dalam", "AC", "Tarif Bulanan", "Lantai Gedung", bukan atribut abstrak database seperti `facilities_array` atau `enum_type`.
  - Format penulisan rupiah natural `Rp 1.500.000` dengan pemisah titik ribuan.

---

### 3. User Control and Freedom (Kendali dan Kebebasan Pengguna)
- **Konsep**: Pengguna sering melakukan aksi keliru dan butuh "pintu darurat" keluar tanpa proses rumit.
- **Penerapan Kost**: 
  - Tombol aksi hapus baris kamar satuan pada tabel pratinjau sebelum data tersimpan permanen.
  - Tombol "Ubah Parameter di Formulir" untuk kembali ke konfigurasi awal tanpa menghilangkan data yang sudah diisi.
  - Tombol silang (X) dan "Batal" pada setiap modal dialog.

---

### 4. Consistency and Standards (Konsistensi dan Standar)
- **Konsep**: Kata, situasi, dan aksi yang sama harus memiliki arti yang sama di seluruh sistem.
- **Penerapan Kost**: 
  - Warna merah selalu menandakan bahaya/galat/kamar kosong; warna hijau selalu menandakan sukses/kamar terisi; warna biru selalu menandakan aksi navigasi/tambah.
  - Tombol primer selalu menggunakan sudut membulat konsisten (*rounded-xl*) dan kontras tegas.

---

### 5. Error Prevention (Pencegahan Kesalahan Dini)
- **Konsep**: Mencegah terjadinya galat jauh lebih baik daripada menyajikan pesan kesalahan yang bagus.
- **Penerapan Kost**: 
  - Generator penomoran otomatis mengkalkulasi rentang nomor untuk mencegah salah ketik urutan angka manual.
  - Tombol "Simpan Semua Kamar" terkunci otomatis (*disabled*) saat terdeteksi nomor kembar, sehingga tidak ada nomor bentrok yang bisa tersimpan ke sistem.

---

### 6. Recognition Rather Than Recall (Mengenali daripada Mengingat)
- **Konsep**: Buat opsi, objek, dan aksi terlihat jelas sehingga meminimalkan beban memori pengguna.
- **Penerapan Kost**: 
  - Chip fasilitas kamar dapat dipilih hanya dengan mengklik pilihan yang tampak di layar, tanpa perlu mengetik manual nama fasilitas satu per satu.
  - Kartu kamar acuan pada modal "Duplikat Kamar" menampilkan ringkasan harga dan fasilitas kamar sumber secara visual.

---

### 7. Flexibility and Efficiency of Use (Fleksibilitas dan Efisiensi Penggunaan)
- **Konsep**: Sistem mengakomodasi pengguna pemula sekaligus mempercepat kerja pengguna ahli.
- **Penerapan Kost**: 
  - Alur utama menyediakan "Tambah Kamar Massal" untuk pembuatan puluhan kamar.
  - Alur alternatif menyediakan tombol cepat "Duplikat" di tiap kartu kamar bagi pengguna yang terbiasa dengan metode *copy-paste* cepat ala spreadsheet.

---

### 8. Aesthetic and Minimalist Design (Desain Estetis dan Minimalis)
- **Konsep**: Dialog atau antarmuka tidak boleh memuat informasi yang tidak relevan atau jarang dibutuhkan.
- **Penerapan Kost**: 
  - Tabel ringkasan hanya menampilkan atribut esensial (Nomor, Lantai, Tipe, Fasilitas, Harga) tanpa kolom teknis seperti UUID atau timestamp.
  - Kartu kamar menonjolkan nomor unit dan harga bulanan dengan ukuran teks paling dominan.

---

### 9. Help Users Recognize, Diagnose, and Recover from Errors (Bantu Pengguna Mengenali dan Memperbaiki Galat)
- **Konsep**: Pesan kesalahan ditulis dalam bahasa sederhana, menyatakan masalah dengan tepat, dan menyarankan solusi konstruktif.
- **Penerapan Kost**: 
  - Pesan galat nomor kembar: `Nomor kamar "101" sudah dipakai di properti ini. Gunakan nomor lain.`
  - Disediakan tombol aksi satu-klik: `⚡ Auto-Koreksi Nomor yang Kembar` untuk menyelesaikan masalah tanpa repot.

---

### 10. Help and Documentation (Bantuan dan Panduan)
- **Konsep**: Meskipun sistem dapat digunakan tanpa dokumentasi, petunjuk kontekstual ringkas tetap sangat membantu.
- **Penerapan Kost**: 
  - Teks pemandu di bawah input generator: `Batas: 1 s.d. 50 kamar` dan `Opsional (misal: "20" untuk 201)`.
  - Penjelasan instruktif pada modal pemilihan metode mengenai skenario yang paling cocok untuk masing-masing opsi.
