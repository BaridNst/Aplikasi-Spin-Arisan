# Aplikasi Spin Arisan 🎡

Aplikasi **Spin Arisan** berbasis **React Native** yang dirancang dengan antarmuka modern, interaktif, dan seru untuk mengocok atau mengundi pemenang arisan secara digital. Tidak perlu lagi gulungan kertas, cukup sekali *spin* untuk menentukan siapa yang beruntung!

---

## 📱 Pratinjau Aplikasi

Berikut adalah tampilan antarmuka dari **Aplikasi Spin Arisan**:

| Halaman Utama / Input | Roda Acak (Spin Wheel) | Pemenang Arisan |
| :---: | :---: | :---: |
| <img src="GANTI_DENGAN_LINK_GAMBAR_1" width="220" alt="Input Anggota" /> | <img src="GANTI_DENGAN_LINK_GAMBAR_2" width="220" alt="Spin Wheel" /> | <img src="GANTI_DENGAN_LINK_GAMBAR_3" width="220" alt="Pemenang" /> |

| Riwayat Pemenang | Pengaturan Arisan |
| :---: | :---: |
| <img src="GANTI_DENGAN_LINK_GAMBAR_4" width="220" alt="Riwayat" /> | <img src="GANTI_DENGAN_LINK_GAMBAR_5" width="220" alt="Pengaturan" /> |

> *💡 **Tips:** Untuk memasukkan gambar di atas, cukup drag-and-drop tangkapan layar aplikasi arisan Anda ke kolom komentar/isu GitHub, lalu salin link-nya ke teks `GANTI_DENGAN_LINK_GAMBAR` di atas.*

---

## ✨ Fitur Utama

* 👥 **Manajemen Anggota:** Tambah, edit, atau hapus nama peserta arisan dengan mudah dan cepat.
* 🎡 **Roda Keberuntungan (Lucky Spin Wheel):** Animasi roda berputar yang interaktif, seru, dan adil untuk mengocok nama pemenang.
* 🏆 **Riwayat Pemenang (History):** Mencatat daftar peserta yang sudah menang agar tidak keluar lagi di kocokan periode berikutnya.
* 🎵 **Efek Suara & Animasi:** Dilengkapi dengan efek visual perayaan (seperti konfeti) dan suara seru saat roda berputar dan pemenang terpilih.
* 💾 **Simpan Grup Arisan:** Mendukung penyimpanan multi-grup arisan (misal: Arisan Keluarga, Arisan Kantor, RT).

---

## 🛠️ Teknologi yang Digunakan

* **Framework:** React Native (TypeScript / JavaScript)
* **Bundler/Dev Server:** Metro
* **Animasi:** React Native Reanimated / Canvas (untuk efek roda berputar)
* **Penyimpanan Lokal:** AsyncStorage (untuk menyimpan daftar nama dan riwayat)

---

## 🚀 Memulai (Getting Started)

> 💡 **Catatan**: Pastikan Anda telah menyelesaikan panduan [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) di situs resmi React Native sebelum menjalankan proyek ini.

### Langkah 1: Jalankan Metro Server

Buka terminal di direktori utama proyek Anda, lalu jalankan perintah berikut untuk memulai Metro dev server:

```sh
# Menggunakan npm
npm start

# ATAU menggunakan Yarn
yarn start
