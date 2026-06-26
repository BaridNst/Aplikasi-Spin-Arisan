import { Anggota } from '../context/ArisanContext';

/**
 * Mengacak urutan elemen dalam array (Fisher-Yates Shuffle)
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Memilih satu pemenang secara acak dari daftar anggota (yang belum menang)
 */
export const pilihPemenang = (anggota: Anggota[]): Anggota | null => {
  if (anggota.length === 0) return null;
  // Acak array terlebih dahulu
  const shuffled = shuffleArray(anggota);
  // Ambil elemen pertama
  return shuffled[0];
};
