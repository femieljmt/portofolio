# FJMT Portfolio

<p align="center">
  <img src="assets/fjmt-bird-logo.png" width="150" alt="Logo burung FJMT berwarna kuning dan hitam">
</p>

Halo, saya **Femiel Jubil M. Tambunan**. Repository ini berisi kode sumber portofolio pribadi saya—tempat saya memperkenalkan perjalanan, kemampuan, dan proyek yang saya kerjakan di bidang teknik elektro, embedded systems, programming, dan teknologi.

Saya ingin website ini terasa seperti pertemuan antara dunia teknik dan sisi kreatif saya. Karena itu, tampilannya memakai warna hitam–kuning, elemen grafis yang terinspirasi rangkaian listrik, dan animasi yang tetap ringan. Nuansa visual era *Trench* menjadi salah satu inspirasinya, tetapi isi dan identitas FJMT di dalam website ini adalah milik saya sendiri.

## Lihat versi yang sudah tayang

Website dapat dibuka di:

**[portofolio-twenty-one-pilots.femieljmt.chatgpt.site](https://portofolio-twenty-one-pilots.femieljmt.chatgpt.site/)**

## Apa yang ada di dalamnya?

- Intro interaktif dengan animasi burung FJMT dan kontrol geser untuk masuk.
- Profil singkat tentang latar belakang dan cara saya melihat proses belajar.
- Proyek pilihan di bidang sistem kelistrikan, embedded computing, dan programming.
- *Engineering toolkit* yang merangkum teknologi dan perangkat yang saya gunakan.
- Riwayat pengalaman, pendidikan, serta CV yang dapat diunduh.
- Kontak profesional melalui email, GitHub, LinkedIn, dan WhatsApp.

## Detail yang saya perhatikan

Website ini dibuat agar tetap menarik tanpa terasa terlalu ramai. Beberapa detail yang saya tambahkan antara lain:

- partikel kuning yang bergerak dan merespons interaksi pengguna;
- transisi halus saat berpindah bagian atau menggulir halaman;
- navigasi aktif dan indikator progres membaca;
- kartu proyek dengan efek interaktif yang ringan;
- tata letak responsif untuk desktop, tablet, dan ponsel;
- dukungan `prefers-reduced-motion` agar animasi dapat dikurangi sesuai pengaturan perangkat.

## Teknologi yang digunakan

Saya sengaja menjaga proyek ini tetap sederhana. Antarmukanya dibuat dengan HTML, CSS, Canvas API, dan JavaScript murni. Bagian server menggunakan JavaScript Worker berbentuk ES module tanpa framework atau dependensi produksi tambahan.

Saat proses build, foto profil, CV, dan logo diubah menjadi data URL lalu disematkan ke Worker. Hasil akhirnya dapat dijalankan sebagai satu artefak tanpa harus mengambil aset dari layanan lain.

## Struktur proyek

```text
.
├── .openai/
│   └── hosting.json
├── assets/
│   ├── femiel-jubil-tambunan-cv.pdf
│   ├── fjmt-bird-logo.png
│   └── profile.jpg
├── scripts/
│   ├── build.sh
│   ├── embed-assets.mjs
│   └── validate-artifact.mjs
├── worker/
│   └── index.js
├── .gitattributes
├── .gitignore
├── package.json
└── README.md
```

Kode utama website berada di `worker/index.js`. Seluruh aset sumber disimpan di folder `assets`, kemudian digabungkan oleh `scripts/embed-assets.mjs` saat build berlangsung.

## Menjalankan proyek

Pastikan Node.js tersedia, kemudian jalankan:

```bash
npm run build
npm run validate
```

`npm run build` membuat artefak akhir di folder `dist`, sedangkan `npm run validate` memeriksa manifest, format ES module, dan fungsi utama Worker.

## Mengubah isi portofolio

- Ubah teks, proyek, keahlian, pengalaman, atau kontak di `worker/index.js`.
- Ganti foto profil melalui `assets/profile.jpg`.
- Ganti CV melalui `assets/femiel-jubil-tambunan-cv.pdf`.
- Ganti logo melalui `assets/fjmt-bird-logo.png`.
- Jalankan kembali proses build setelah melakukan perubahan.

## Catatan

Website ini bukan situs resmi Twenty One Pilots dan tidak berafiliasi dengan band tersebut. Inspirasi *Trench* hanya menjadi titik awal untuk palet warna dan suasana visual; desain portofolio, logo FJMT, tulisan, dan implementasi kodenya dikembangkan sebagai identitas pribadi saya.

CV di dalam repository memuat informasi kontak profesional. Mohon gunakan informasi tersebut dengan wajar dan jangan menyebarkannya untuk keperluan yang tidak berkaitan dengan pekerjaan atau kolaborasi.

---

Terima kasih sudah mampir dan melihat karya saya.

**Femiel Jubil M. Tambunan**
