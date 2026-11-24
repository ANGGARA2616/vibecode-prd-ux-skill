# Petunjuk Agen AI (AGENTS.md)
# Proyek Ngekost — Modul Tambah Kamar Massal & Duplikat Kamar

Dokumen ini memuat panduan kerja, konvensi teknis, dan aturan operasional wajib bagi seluruh agen kecerdasan buatan (AI Agents) yang berkontribusi pada repositori ini.

---

## 1. Konteks Proyek
Aplikasi web ini adalah modul pengelolaan kamar kost modern untuk mendaftarkan klaster unit kamar sejenis secara massal serta menduplikasi konfigurasi kamar eksisting tanpa pengulangan data manual.
- **Basis Riset**: Diturunkan langsung dari temuan nyata pada **Worksheet 8** (kebutuhan responden R1, R2, R3) dan arsitektur 8 layar **Worksheet 12**.
- **Dokumen Sumber Kebutuhan Tunggal**: Spesifikasi pada berkas [README.md](file:///d:/sites/prototype-ngekos/README.md) adalah satu-satunya sumber kebenaran (*single source of truth*) untuk kebutuhan produk dan fungsionalitas. Dilarang menambah atau mengurangi fitur di luar cakupan PRD pada `README.md`.

---

## 2. Struktur Repositori Monorepo
Repositori dikelola dengan arsitektur monorepo berbasis NPM Workspaces:
```text
vibecode-prd-ux-skill/
├── apps/
│   └── web/            # Aplikasi utama Next.js 14+ (App Router) + TypeScript + Tailwind CSS
├── skills/
│   └── ux-design/      # UX Skill: Panduan standar desain & instrumen evaluasi antarmuka
├── CHANGELOG.md        # Catatan rilis format Keep a Changelog + UX Self-Review
├── README.md           # PRD resmi & panduan menjalankan lokal
├── AGENTS.md           # Aturan kerja & panduan agen AI
└── CLAUDE.md           # Referensi impor untuk Claude Code
```

---

## 3. Perintah Utama Proyek (Commands)

Jalankan seluruh perintah dari *root* direktori repositori:

| Perintah | Deskripsi |
|---|---|
| `npm install` | Memasang seluruh dependensi monorepo dan modul `apps/web`. |
| `npm run dev` | Menjalankan server pengembangan lokal Next.js di `http://localhost:3000`. |
| `npm run build` | Menjalankan build produksi Next.js dengan static export. |
| `npm run lint` | Memeriksa kepatuhan kode dan linting TypeScript. |
| `node test-app-e2e.js` | Menjalankan pengujian otomatis end-to-end Playwright untuk seluruh 8 layar. |
| `node test-public-deployment.js` | Memverifikasi ketersediaan dan integritas URL deployment publik. |

---

## 4. Konvensi Kode & Standar Komit

1. **TypeScript Ketat (*Strict Typing*)**:
   - Seluruh model data harus merujuk ke antarmuka tipe baku di `apps/web/src/types/room.ts`.
   - Dilarang keras menggunakan tipe `any`.
2. **Pola Desain Komponen**:
   - Komponen antarmuka harus bersifat modular, dideklarasikan dengan direktif `'use client'` jika memerlukan interaktivitas, dan mengikuti palet warna standar Ngekost (`slate-900`, `blue-600`, `emerald-600`, `rose-600`).
3. **Konvensi Komit (Conventional Commits)**:
   - Gunakan format komit terstruktur:
     - `feat(...)`: Fitur atau layar antarmuka baru.
     - `fix(...)`: Perbaikan bug atau penyesuaian validasi.
     - `docs(...)`: Pembaruan PRD, README, atau CHANGELOG.
     - `test(...)`: Penambahan atau pembaruan skrip pengujian Playwright.
     - `chore(...)`: Konfigurasi dependensi atau pengaturan monorepo.

---

## 5. Kewajiban Penggunaan UX Skill (`skills/ux-design/`)

Setiap kali agen merancang, menambah, atau mengubah layar, komponen, formulir, atau alur antarmuka:
1. **Wajib Membaca Panduan UX Skill**:
   - Terapkan 7 kriteria kelulusan pada [references/wireframe-checklist.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/wireframe-checklist.md).
   - Terapkan prinsip penanganan galat dan pencegahan kesalahan pada [references/forms-and-validation.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/forms-and-validation.md).
   - Terapkan pola aksi massal dan tabel verifikasi pada [references/bulk-and-data-tables.md](file:///d:/sites/prototype-ngekos/skills/ux-design/references/bulk-and-data-tables.md).
2. **Wajib Menjalankan UX Self-Review**:
   - Sebelum tugas diselesaikan, lakukan evaluasi mandiri (*UX self-review*) terhadap seluruh 8 aspek: Navigation, Hierarchy, CTA, Content, Feedback, Error State, Empty State, dan Accessibility.
   - Cantumkan hasil evaluasi mandiri tersebut pada catatan rilis di [CHANGELOG.md](file:///d:/sites/prototype-ngekos/CHANGELOG.md).
