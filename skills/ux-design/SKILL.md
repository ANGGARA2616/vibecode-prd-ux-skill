---
name: ux-design
description: Gunakan skill ini setiap kali merancang, memodifikasi, mengevaluasi antarmuka, komponen, formulir, atau alur pengguna (user flow) pada aplikasi web untuk memastikan standar kualitas desain, ergonomi interaksi, dan aksesibilitas terpenuhi secara konsisten.
---

# UX Design Skill

Skill ini adalah panduan standar kualitas interaksi dan antarmuka untuk perancangan produk digital. Panduan ini berfungsi sebagai instrumen verifikasi konkret (berbasis kriteria ya/tidak) agar setiap layar yang dibangun memiliki kejelasan kognitif, keandalan fungsional, dan ketahanan terhadap kesalahan pengguna.

---

## 1. Tujuan
Memastikan seluruh antarmuka yang dikembangkan memenuhi 7 pilar arsitektur kawat (*wireframe*), 10 heuristik Nielsen, penanganan kondisi formulir dan galat yang solutif, serta aksesibilitas universal tanpa menyisakan ambiguitas bagi pengguna operasional.

---

## 2. Alur Kerja Wajib (Mandatory Workflow)

Setiap pengerjaan atau modifikasi antarmuka wajib melalui 4 tahapan berurutan:

```
[1. Baca PRD] ───> [2. Petakan Layar & State] ───> [3. Bangun Komponen] ───> [4. Verifikasi Checklist]
```

1. **Baca PRD**: Ekstraksi kebutuhan fungsional (FR) dan kebutuhan UX (UXR) yang menjadi dasar setiap elemen visual. Jangan mengarang fitur di luar spesifikasi PRD.
2. **Petakan Layar & State**: Sebelum menulis kode, tentukan seluruh state yang mungkin muncul: *Empty State*, *Default/Idle State*, *Loading/Progress State*, *Error State*, dan *Success/Confirmation State*.
3. **Bangun Komponen**: Terapkan hierarki visual yang tegas, kontras yang memadai, label eksplisit, dan kendali input yang mudah dimanipulasi.
4. **Verifikasi Checklist**: Jalankan *UX Self-Review* sebelum menyatakan tugas selesai menggunakan kriteria pada berkas referensi.

---

## 3. Prinsip Inti Antarmuka Operasional

1. **Efisiensi Kognitif**: Reduksi beban memori kerja pengguna. Pengguna tidak boleh dipaksa mengingat informasi dari layar sebelumnya.
2. **Pencegahan Galat Dini (*Error Prevention*)**: Desain sistem yang mencegah kesalahan ketik atau benturan data sebelum pengguna menekan tombol eksekusi final.
3. **Kejelasan Umpan Balik (*Immediate Feedback*)**: Setiap aksi pengguna (klik, ketik, pilih) harus menghasilkan respon visual langsung (indikator progres, chip pratinjau, atau penanda status).
4. **Aksi Langsung di Tempat (*In-place Action*)**: Koreksi kesalahan atau pembatalan data pada layar ringkasan harus dapat diselesaikan langsung tanpa alur navigasi memutar.

---

## 4. Aturan Keras (Do and Don't)

| Kategori | Wajib Dilakukan (DO) | Dilarang Keras (DON'T) |
|---|---|---|
| **Formulir & Input** | Tampilkan format mata uang otomatis (IDR) dan validasi instan saat nilai diubah. | Menampilkan nilai mentah tanpa pemisah ribuan atau membiarkan tombol simpan aktif saat ada benturan data. |
| **Pesan Galat** | Sebutkan nomor/kolom yang salah secara spesifik dan jelaskan cara memperbaikinya. | Menampilkan pesan generik seperti "Terjadi kesalahan" atau "Input tidak valid" tanpa menyebutkan nomor yang bermasalah. |
| **Hierarki Visual** | Gunakan perbedaan ukuran font, kontras warna, dan bobot teks untuk membedakan judul, label, dan isi data. | Menggunakan ukuran teks yang seragam sehingga membingungkan mata pengguna dalam membaca data tabel. |
| **Aksi Massal** | Selalu sediakan pratinjau tabel pra-simpan dengan rincian akumulasi total sebelum komit ke penyimpanan. | Langsung menyimpan puluhan data tanpa memberikan kesempatan bagi pengguna untuk meninjau dan mengoreksi data. |
| **Umpan Balik** | Tampilkan dialog konfirmasi hasil dengan angka pasti (contoh: "12 Kamar Berhasil Ditambahkan"). | Hanya menutup modal tanpa notifikasi atau menyajikan umpan balik yang tidak menyebutkan jumlah unit yang tersimpan. |

---

## 5. Berkas Referensi Teknis

Rincian kriteria evaluasi tersimpan pada folder `references/`:
- [references/wireframe-checklist.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/wireframe-checklist.md) — 7 kriteria lulus uji arsitektur layar.
- [references/heuristics.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/heuristics.md) — 10 Heuristik Nielsen dengan konteks pengelolaan kost.
- [references/forms-and-validation.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/forms-and-validation.md) — Desain form, validasi inline, dan pesan error solutif.
- [references/states-and-feedback.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/states-and-feedback.md) — Penanganan kondisi empty, loading, progres, sukses, dan error.
- [references/bulk-and-data-tables.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/bulk-and-data-tables.md) — Pola manipulasi batch data dan tabel ringkasan.
- [references/accessibility-responsive.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/accessibility-responsive.md) — Standar kontras WCAG, target sentuh, dan adaptasi layout.

---

## 6. Format UX Self-Review (Wajib Sebelum Selesai)

Setiap kali menyelesaikan modul antarmuka, cantumkan format ulasan mandiri berikut ke dalam `CHANGELOG.md`:

```markdown
### UX Review
- **Navigation**: [Ya/Tidak] Alur perpindahan antarlayar konsisten dan remah roti (breadcrumb) berfungsi.
- **Hierarchy**: [Ya/Tidak] Bobot tipografi membedakan judul utama, subjudul, dan nilai metrik.
- **CTA**: [Ya/Tidak] Tombol primer menonjol secara visual dibanding tombol sekunder/batal.
- **Content**: [Ya/Tidak] Istilah, fasilitas, dan format harga selaras dengan terminologi PRD.
- **Feedback**: [Ya/Tidak] Generator penomoran dan bar progres memberikan respon visual seketika.
- **Error State**: [Ya/Tidak] Nomor kembar ditandai dengan batas merah, spanduk deskriptif, dan tombol auto-koreksi.
- **Empty State**: [Ya/Tidak] Properti 0 kamar menampilkan ilustrasi pemandu dan tombol langsung ke formulir massal.
- **Accessibility**: [Ya/Tidak] Kontras teks memenuhi rasio minimal 4.5:1 dan elemen interaktif dapat diakses via keyboard.
```
