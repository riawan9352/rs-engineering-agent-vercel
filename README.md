# 🏥 RS Engineering Agent

Asisten Teknik Komisaris Utama untuk Analisis Gambar & Estimasi Biaya Proyek Rumah Sakit.

---

## Cara Deploy ke Vercel (5 menit)

### Opsi A — Via Dashboard Vercel (Paling Mudah, No Coding)

1. **Zip seluruh folder ini** (rs-agent.zip)
2. Buka [vercel.com](https://vercel.com) → Login dengan Google
3. Klik **"Add New Project"**
4. Pilih **"Upload"** → drag & drop file zip
5. Klik **Deploy**
6. Dalam 2-3 menit, dapat link permanen seperti:
   `https://rs-engineering-agent.vercel.app`

### Opsi B — Via GitHub (Disarankan untuk Update Mudah)

1. Upload folder ini ke repository GitHub (github.com)
2. Di Vercel, klik **"Import Git Repository"**
3. Pilih repo → Deploy otomatis
4. Setiap kali ada update di GitHub, Vercel auto-redeploy

---

## Cara Jalankan di Komputer Lokal

Pastikan Node.js sudah terinstall (nodejs.org)

```bash
# Install dependencies
npm install

# Jalankan mode development
npm run dev

# Build untuk production
npm run build
```

---

## Fitur Utama

- 💬 **Chat Agent** — Tanya jawab seputar proyek & renovasi RS
- 📊 **Data AHSP** — Analisa Harga Satuan Pekerjaan dengan harga lokasi adaptif
- 🗺️ **Koefisien Lokasi** — 42 kota/kabupaten seluruh Indonesia
- 📎 **Upload Gambar** — Analisis gambar teknik langsung di chat
- 🏥 **Standar RS** — Berbasis Permenkes 24/2016 & SNARS

---

## Update AHSP Tahunan

Buka file `src/App.jsx`, cari array `AHSP_DEFAULT`, update harga sesuai
data AHSP terbaru dari Kementerian PUPR atau INKINDO setempat.

Untuk update koefisien lokasi, cari object `LOKASI_DATA` di file yang sama.

---

*Dibuat untuk RS Shanti Graha — Buleleng, Bali*
