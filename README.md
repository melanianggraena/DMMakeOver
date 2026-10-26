# Make Over Indonesia – Landing Page

Landing page Make Over Indonesia yang dibangun menggunakan React, Vite, TypeScript, dan Tailwind CSS. Proyek ini merupakan implementasi desain Stitch untuk tugas Pekan 4: Landing Page Development & Deployment.

---

## Deskripsi Proyek

Website landing page Make Over Indonesia menampilkan brand kosmetik premium Indonesia dengan fitur:
- Hero section dengan CTA utama
- Value proposition (Shade Finder, Virtual Try-On, Beauty Expertise)
- Galeri produk Best Sellers dengan filter kategori
- Shade Finder interaktif (demo frontend)
- Social proof: statistik, testimoni pelanggan, dan galeri komunitas
- Artikel kecantikan
- FAQ accordion
- Final CTA
- Footer dengan newsletter signup

---

## Teknologi yang Digunakan

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| React | 19.x | UI library |
| Vite | 6.x | Build tool & dev server |
| TypeScript | 5.7.x | Type safety |
| Tailwind CSS | 3.4.x | Utility-first CSS |
| Lucide React | 0.469.x | Ikon |
| PostCSS + Autoprefixer | — | CSS processing |

---

## Struktur Direktori

```
make-over-landing-page/
├── public/
│   ├── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx   # Bar pengumuman di atas header
│   │   │   ├── Header.tsx            # Navigasi utama + mobile menu
│   │   │   └── Footer.tsx            # Footer + newsletter
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       # Hero utama dengan CTA
│   │   │   ├── ValueProposition.tsx  # 3 pilar layanan unggulan
│   │   │   ├── BestSellers.tsx       # Grid produk dengan filter
│   │   │   ├── ShadeFinder.tsx       # Quiz shade finder interaktif
│   │   │   ├── SocialProof.tsx       # Statistik + testimoni + UGC
│   │   │   ├── ArticlesSection.tsx   # Artikel & tips kecantikan
│   │   │   ├── FAQSection.tsx        # FAQ accordion
│   │   │   └── FinalCTA.tsx          # CTA penutup
│   │   └── ui/
│   │       ├── Button.tsx            # Komponen button reusable
│   │       ├── ProductCard.tsx       # Kartu produk
│   │       └── SectionHeading.tsx    # Heading section reusable
│   ├── data/
│   │   ├── products.ts               # Data produk & kategori filter
│   │   ├── testimonials.ts           # Data testimoni & UGC
│   │   ├── faq.ts                    # Data FAQ
│   │   └── articles.ts               # Data artikel
│   ├── pages/
│   │   └── HomePage.tsx              # Halaman utama
│   ├── types/
│   │   └── index.ts                  # Definisi TypeScript types
│   ├── App.tsx                       # Root component
│   ├── main.tsx                      # Entry point React
│   └── index.css                     # Global styles + Tailwind imports
├── .env.example                      # Contoh environment variables
├── .gitignore
├── index.html                        # HTML template
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── vercel.json                       # Konfigurasi deployment Vercel
└── README.md
```

---

## Persyaratan Sistem

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x

---

## Instalasi

```bash
# Clone atau masuk ke direktori proyek
cd DMMakeOver

# Install dependencies
npm install
```

---

## Menjalankan Development Server

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173` secara default.

---

## Pemeriksaan Kode

```bash
# TypeScript type check
npx tsc --noEmit

# ESLint
npm run lint
```

---

## Production Build

```bash
npm run build
```

Hasil build akan tersedia di folder `dist/`.

---

## Preview Build

```bash
npm run preview
```

Jalankan server preview untuk memeriksa hasil build sebelum deployment di `http://localhost:4173`.

---

## Environment Variables

Proyek ini tidak memerlukan environment variable untuk fitur dasar (semua fitur berjalan sebagai frontend demo).

Jika ingin mengaktifkan integrasi formulir (misalnya untuk newsletter backend), salin `.env.example` menjadi `.env` dan isi nilainya:

```bash
cp .env.example .env
```

Lihat `.env.example` untuk daftar variabel yang tersedia.

> **Penting:** Jangan pernah menyimpan API key rahasia atau credential dalam file `.env` yang di-commit ke repository.

---

## Deployment ke Vercel

### Cara 1: Via Vercel CLI

```bash
# Install Vercel CLI (jika belum)
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

### Cara 2: Via Dashboard Vercel (Disarankan)

1. Push repository ke GitHub/GitLab/Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new) dan import repository.
3. Vercel akan mendeteksi proyek Vite secara otomatis.

### Pengaturan Build Vercel

| Setting | Nilai |
|---------|-------|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### Environment Variables di Vercel

Jika menggunakan integrasi formulir eksternal, tambahkan environment variables yang diperlukan melalui **Vercel Dashboard → Project → Settings → Environment Variables**.

---

## Fitur yang Berfungsi

- ✅ Header responsif dengan sticky positioning, mobile hamburger menu, search bar
- ✅ Announcement bar
- ✅ Hero section dengan visual dan CTA
- ✅ Value proposition (3 pilar layanan)
- ✅ Grid produk Best Sellers dengan filter kategori
- ✅ Tombol "Tambah ke Tas" dengan feedback visual dan counter keranjang
- ✅ Shade Finder interaktif (3-step quiz, menampilkan rekomendasi shade)
- ✅ Statistik brand, testimoni pelanggan, dan galeri komunitas
- ✅ Kartu artikel kecantikan
- ✅ FAQ accordion yang dapat dibuka/tutup
- ✅ Final CTA dengan trust badges
- ✅ Newsletter signup di footer (validasi email frontend)
- ✅ Navigasi keyboard dan aksesibilitas dasar
- ✅ Responsif: mobile 320px – desktop 1440px

---

## Fitur yang Masih Demo / Memerlukan Layanan Eksternal

| Fitur | Status | Catatan |
|-------|--------|---------|
| Pengiriman newsletter | Demo | Perlu integrasi Mailchimp/Formspree/EmailJS |
| Shade Finder AI | Demo | Logika shade berdasarkan pilihan statis, bukan AI sesungguhnya |
| Virtual Try-On | Demo (CTA saja) | Memerlukan integrasi SDK AR |
| Pencarian produk | UI saja | Perlu koneksi ke backend/search engine |
| Halaman detail produk | Belum ada | Landing page single-page |
| Proses checkout | Tidak ada | Landing page, tidak ada e-commerce backend |

---

## Konfigurasi Integrasi Formulir

Website ini menggunakan validasi frontend saja. Untuk mengaktifkan pengiriman email sesungguhnya:

### Opsi 1: Formspree

1. Daftar di [formspree.io](https://formspree.io)
2. Buat form baru dan salin endpoint URL
3. Tambahkan ke `.env`: `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID`
4. Update logika submit di komponen formulir untuk melakukan POST ke endpoint tersebut

### Opsi 2: EmailJS

1. Daftar di [emailjs.com](https://emailjs.com)
2. Buat service dan template
3. Tambahkan ke `.env`: `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`
4. Install `@emailjs/browser` dan integrasikan ke komponen formulir

---

*Dikembangkan sebagai bagian dari tugas Pekan 4: Landing Page Development & Deployment.*

