# Zomo Storage — Aplikasi Manajemen Gudang & Inventaris

Aplikasi manajemen inventaris berbasis **React Native** yang dirancang dengan antarmuka modern (*dark mode*) untuk memudahkan Admin Gudang dalam mengelola stok barang, melacak mutasi secara real-time, dan mengunduh laporan bulanan yang aman terenkripsi.

---

## 📱 Pratinjau Aplikasi

Berikut adalah tampilan antarmuka dari **Zomo Storage**:

| Dashboard & Analitik | Tambah Barang Baru | Log Mutasi Real-time |
| :---: | :---: | :---: |
| ![Dashboard](Screenshot%202026-06-26%20153045.png) | ![Tambah Barang](Screenshot%202026-06-26%20153100.png) | ![Mutasi Stok](Screenshot%202026-06-26%20153111.png) |

| Pusat Laporan | Profil & Keamanan |
| :---: | :---: |
| ![Reporting Center](Screenshot%202026-06-26%20153121.png) | ![Profil Admin](Screenshot%202026-06-26%20153131.png) |

---

## ✨ Fitur Utama

*   **Warehouse Analytics Dashboard:** Memantau total aset, kategori barang, mendeteksi stok menipis (*low stock*), dan melihat berkas terbaru dalam satu halaman.
*   **Master Barang (Input Fleksibel):** Mempermudah penambahan komoditas baru lengkap dengan SKU khusus, Lokasi Rak, dan Stok Awal.
*   **Live Mutation Log:** Pencatatan setiap keluar-masuk barang secara dinamis untuk transparansi data.
*   **Reporting Center (Data Terenkripsi):** Ekspor seluruh log mutasi dan data komoditas langsung ke format PDF standar akuntansi secara aman.
*   **Manajemen Profil & Notifikasi:** Pengaturan akun Admin Gudang dilengkapi tombol *Notifikasi Realtime* dan fitur *Secure Logout*.

---

## 🛠️ Teknologi yang Digunakan

*   **Framework:** React Native (TypeScript)
*   **Bundler/Dev Server:** Metro
*   **Styling:** Custom Dark-Theme UI Components
*   **State Management & Navigation:** React Navigation

---

## 🚀 Memulai (Getting Started)

> 💡 **Catatan**: Pastikan Anda telah menyelesaikan panduan [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) di situs resmi React Native sebelum melanjutkan.

### Langkah 1: Jalankan Metro Server

Buka terminal di direktori utama proyek Anda, lalu jalankan perintah berikut untuk memulai Metro dev server:

```sh
# Menggunakan npm
npm start

# ATAU menggunakan Yarn
yarn start
