# Zomo Storage — Aplikasi Manajemen Gudang & Inventaris

Aplikasi manajemen inventaris berbasis **React Native** yang dirancang dengan antarmuka modern (*dark mode*) untuk memudahkan Admin Gudang dalam mengelola stok barang, melacak mutasi secara real-time, dan mengunduh laporan bulanan yang aman terenkripsi.

---

## 📱 Pratinjau Aplikasi

Berikut adalah tampilan antarmuka dari **Zomo Storage**:

| Dashboard & Analitik | Tambah Barang Baru | Log Mutasi Real-time |
| :---: | :---: | :---: |
| ![Dashboard](<img width="297" height="622" alt="Screenshot 2026-06-26 153045" src="https://github.com/user-attachments/assets/f35f7619-d412-4928-a22a-99acc7f40582" />
) | ![Tambah Barang](<img width="281" height="622" alt="Screenshot 2026-06-26 153100" src="https://github.com/user-attachments/assets/56c50431-0c17-47dc-891c-2cfcc464d490" />
) | ![Mutasi Stok](<img width="290" height="618" alt="Screenshot 2026-06-26 153111" src="https://github.com/user-attachments/assets/7f52a670-ed81-443e-83c7-928b9339dbde" />
) |

| Pusat Laporan | Profil & Keamanan |
| :---: | :---: |
| ![Reporting Center](<img width="295" height="622" alt="Screenshot 2026-06-26 153121" src="https://github.com/user-attachments/assets/e55c3f97-49ef-4438-ba26-1cad83c06ade" />
) | ![Profil Admin](<img width="302" height="632" alt="Screenshot 2026-06-26 153131" src="https://github.com/user-attachments/assets/e5df8ea6-5554-4531-8415-f9d6d871b9b9" />
) |

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
