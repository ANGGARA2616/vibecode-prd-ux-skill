# Changelog

Semua perubahan penting pada proyek ini didokumentasikan dalam berkas ini.
Format penulisan berpedoman pada [Keep a Changelog](https://keepachangelog.com/id-ID/1.0.0/), dan proyek ini mengadopsi [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [1.1.0] - 2026-11-24

### Added
- Pembuatan paket **UX Skill** lengkap pada direktori `/skills/ux-design/` berisi:
  - `SKILL.md`: Frontmatter, tujuan, alur kerja wajib (PRD → State Mapping → Build → Checklist), prinsip inti, do/don't, dan format review mandiri.
  - `references/wireframe-checklist.md`: 7 pilar kelulusan (Navigation, Hierarchy, CTA, Content, Feedback, Error State, Empty State).
  - `references/heuristics.md`: 10 Heuristik Nielsen terkontekstualisasi untuk pengelolaan kost.
  - `references/forms-and-validation.md`: Desain form, validasi inline, dan pesan error solutif.
  - `references/states-and-feedback.md`: Standar 6 state (empty, loading, progress, success, error, idle).
  - `references/bulk-and-data-tables.md`: Pola operasi massal dan tabel ringkasan pra-simpan.
  - `references/accessibility-responsive.md`: Standar WCAG 2.1 AA, ukuran target sentuh, dan layout responsif.
- Pembuatan panduan kerja agen AI pada `AGENTS.md` dan berkas impor `CLAUDE.md`.
- Pembuatan dan sinkronisasi repositori GitHub baru: [https://github.com/ANGGARA2616/vibecode-prd-ux-skill](https://github.com/ANGGARA2616/vibecode-prd-ux-skill).

### UX Review
- **Navigation**: [Ya] Remah roti (`Properti / Kost Griya Amartha / ...`), bilah samping, dan tombol kembali/batal konsisten di seluruh layar.
- **Hierarchy**: [Ya] Tipografi berjenjang jelas dari judul (20px bold), penomoran kamar (24px bold), hingga label metrik (11px).
- **CTA**: [Ya] Tombol aksi primer ("Simpan Semua Kamar", "+ Tambah Beberapa Kamar") menggunakan kontras gelap/biru tegas yang dominan.
- **Content**: [Ya] Menggunakan istilah baku Ngekost: Tipe Kamar, Tarif Bulanan, 8 fasilitas standar, dan format IDR terstandardisasi.
- **Feedback**: [Ya] Chip pratinjau nomor kamar terhitung instan dan bilah progres animasi 0% s.d. 100% saat penyimpanan batch.
- **Error State**: [Ya] Nomor kembar memicu spanduk merah informatif, baris bersangkutan disorot merah, dan tombol auto-koreksi berfungsi 100%.
- **Empty State**: [Ya] Kondisi 0 kamar ditangani kontainer putus-putus ramah dengan tombol langsung ke formulir massal.
- **Accessibility**: [Ya] Kontras teks melebihi standar WCAG AA (rasio > 4.5:1), fokus ring keyboard jelas pada setiap elemen interaktif.

---

## [1.0.0] - 2026-11-24

### Added
- Deployment publik aktif melalui tunneling Cloudflare publik SSL yang dapat diakses langsung tanpa autentikasi login: `https://shot-paperback-pens-week.trycloudflare.com`.
- Skrip verifikasi deployment publik (`test-public-deployment.js`) yang menguji 7 langkah alur utama (Daftar Kamar, Modal Metode, Form Massal, Generator Penomoran, Tabel Ringkasan, Penyimpanan Batch, dan Pembaruan Daftar) dengan hasil 100% lulus dan 0 galat konsol.
- Konfigurasi Vercel monorepo (`vercel.json` dan `apps/web/vercel.json`) dengan target `apps/web` untuk kemudahan impor 1-klik di dasbor Vercel.

### Changed
- Pembaruan `README.md` pada seksi tautan deployment dengan alamat publik aktif dan panduan impor Vercel.

### UX Review
- **Navigation**: [Ya] Alur navigasi modal dan layar utama terverifikasi bebas *dead-end*.
- **Hierarchy**: [Ya] Informasi tarif dan nomor kamar kartu mudah dipindai pengelola dalam hitungan detik.
- **CTA**: [Ya] Posisi tombol aksi konsisten di kanan bawah.
- **Content**: [Ya] Seluruh data fiktif mencerminkan operasional kost nyata.
- **Feedback**: [Ya] Dialog konfirmasi hasil tegas: "10 Kamar Berhasil Ditambahkan!".
- **Error State**: [Ya] Tombol simpan terkunci saat terdeteksi nomor kembar.
- **Empty State**: [Ya] Empty state menyediakan tombol pemulihan data bawaan.
- **Accessibility**: [Ya] Desain adaptif dari desktop hingga perangkat bergerak.

### Assumptions
- **Penyimpanan Lokal untuk Prototipe MVP**: Seluruh penambahan, penghapusan, dan duplikasi kamar dipersistensikan secara client-side via `localStorage` pada peramban per sesi pengujian.
- **Keseragaman Spesifikasi dalam Satu Batch**: Parameter tipe, fasilitas, lantai dasar, dan harga sewa diterapkan merata pada setiap kamar dalam batch yang sama; penyesuaian khusus diselesaikan langsung di tabel ringkasan pra-simpan.
- **Validasi Keunikan Nomor Kamar**: Penomoran kamar wajib unik dalam cakupan properti yang sama, baik terhadap unit kamar eksisting maupun antar baris dalam daftar input batch saat ini.
- **Deployment Publik**: Menggunakan reverse tunnel terenkripsi SSL dengan domain publik Cloudflare (`.trycloudflare.com`) untuk akses instan tanpa pembatasan login, berdampingan dengan konfigurasi Vercel App Router untuk deployment permanen.

---

## [0.5.0] - 2026-11-24

### Added
- Penambahan skrip pengujian end-to-end terotomatisasi (`test-app-e2e.js`) menggunakan Playwright untuk memverifikasi 8 layar antarmuka secara end-to-end.
- Verifikasi hasil pengujian: 100% alur berhasil dilalui tanpa galat konsol (0 error).
- Penambahan aset ikon favicon `apps/web/src/app/icon.svg` untuk mencegah galat 404 pada pemanggilan browser.
- Peningkatan reaktivitas pada `DuplicateModal` dengan kalkulasi otomatis nomor urut kamar tanpa bentrok.

### UX Review
- **Navigation**: [Ya] Perpindahan form massal ke tabel pratinjau berjalan mulus.
- **Hierarchy**: [Ya] Kartu kamar menampilkan lencana tipe dan status dengan warna kontras terpisah.
- **CTA**: [Ya] Tombol duplikat di kartu kamar mudah diakses.
- **Content**: [Ya] Masking harga otomatis mempermudah pengetikan jutaan rupiah.
- **Feedback**: [Ya] Modal progres memberikan kepastian simpan.
- **Error State**: [Ya] In-place inline edit memungkinkan koreksi nomor di sel tabel langsung.
- **Empty State**: [Ya] Teks ajakan bertindak persuasif.
- **Accessibility**: [Ya] Target tombol sentuh memenuhi ukuran minimum 42px.

---

## [0.4.0] - 2026-11-24

### Added
- Implementasi penuh 8 layar antarmuka sesuai arsitektur wireframe Worksheet 12 dan PRD:
  - **Screen 1**: Daftar Kamar dengan hero stats properti, grid kartu kamar, badge status terisi/kosong, dan tombol aksi "Duplikat".
  - **Screen 2**: Empty State edukatif untuk properti 0 kamar dengan tombol CTA primer langsung ke penambahan massal.
  - **Screen 3**: Modal dialog "Pilih Cara Menambah Kamar" (Tambah Kamar Massal, Duplikat dari Kamar Eksisting, Tambah Satu Kamar).
  - **Screen 4**: Form Tambah Kamar Massal dengan 2 kolom (spesifikasi seragam tipe/lantai/8 fasilitas/harga, dan generator penomoran otomatis dengan rentang serta chip pratinjau dinamis).
  - **Screen 5**: Pratinjau & Ringkasan dalam wujud tabel data interaktif dengan fitur in-place inline edit nomor kamar dan hapus baris satuan.
  - **Screen 6**: Error State deteksi nomor kembar dengan spanduk peringatan deskriptif, sorotan merah pada baris bentrok, penonaktifan tombol simpan, dan tombol auto-koreksi.
  - **Screen 7**: Modal progres simpan animasi (7A: progress bar 0% s.d. 100%) dan modal konfirmasi sukses (7B: tajuk jumlah kamar berhasil ditambahkan).
  - **Screen 8**: Modal "Duplikat Kamar" dari kartu kamar acuan dengan kisi nomor kamar baru yang dapat langsung disunting.
- Bilah kontrol pengujian prototipe pada hero properti (Simulasi Empty State, Uji Error Nomor Kembar, Reset Data Bawaan).

### UX Review
- **Navigation**: [Ya] Alur terpadu 8 layar wireframe Worksheet 12 terhubung secara kohesif.
- **Hierarchy**: [Ya] Pembedaan panel konfigurasi dan panel generator nomor jelas.
- **CTA**: [Ya] Tombol 'Lanjut ke Pratinjau & Ringkasan' mengarahkan fokus ke langkah berikutnya.
- **Content**: [Ya] 8 Fasilitas baku Ngekost tersedia dalam bentuk chip interaktif.
- **Feedback**: [Ya] Angka total kamar dan potensi sewa dihitung dinamis.
- **Error State**: [Ya] Baris error disorot latar merah dengan teks galat spesifik.
- **Empty State**: [Ya] Ilustrasi ranjang dan kontainer putus-putus membimbing pengguna baru.
- **Accessibility**: [Ya] Teks label kontras dan elemen formulir terstruktur.

---

## [0.3.0] - 2026-11-24

### Added
- Model data TypeScript (`Room`, `Property`, `MassGeneratorParams`, `RoomDraft`, `DuplicateParams`).
- Konstanta 8 fasilitas standar Ngekost (`AC`, `Kamar Mandi Dalam`, `Wifi`, `Lemari`, `Kasur`, `Meja Belajar`, `TV`, `Dapur`) dan 4 tipe kamar (`STANDARD`, `DELUXE`, `VIP`, `EXCLUSIVE`).
- Generator penomoran otomatis dengan penghitungan rentang nomor dan chip pratinjau dinamis (FR-02, FR-03).
- Validasi keunikan nomor kamar terhadap data properti lokal dan batch input (FR-04).
- Algoritma auto-koreksi nomor kamar yang bentrok (FR-05).
- Modul persistensi data berbasis `localStorage` dengan *mock seed data* 4 kamar awal dan opsi *clear/reset* (FR-08).

---

## [0.2.0] - 2026-11-24

### Added
- Konfigurasi monorepo dengan root `package.json` workspaces (`apps/*`).
- Inisialisasi proyek Next.js 14 (App Router) + TypeScript + Tailwind CSS pada direktori `apps/web`.
- Instalasi dependensi: Next.js, React, Tailwind CSS, Lucide React, clsx, tailwind-merge.

---

## [0.1.0] - 2026-11-24

### Added
- Inisialisasi dokumentasi PRD ke `README.md` yang memuat seluruh spesifikasi fungsional (FR-01 s.d. FR-10) dan UX (UX-01 s.d. UX-07) berdasarkan Worksheet 8 dan Worksheet 12.
- Inisialisasi `CHANGELOG.md` dengan format *Keep a Changelog*.
- Penentuan konfigurasi monorepo dengan root workspace mengarah ke `apps/*`.

### Assumptions
- Seluruh kebutuhan teknis berpedoman tunggal pada `README.md` (bekas `PRD.md`) tanpa penambahan pustaka/dokumen instruksi di luar PRD.
- Penyimpanan data pada tingkat MVP menggunakan `localStorage` dengan *fallback* *seed mock data* realistis saat pertama kali aplikasi dibuka.
- Format penomoran kamar menggunakan kombinasi string alfanumerik (awalan/prefix + nomor urut).
