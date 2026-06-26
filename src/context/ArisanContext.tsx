import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { 
  initDB, 
  getAnggotaFromDB, 
  getPemenangFromDB, 
  insertAnggotaDB, 
  updateAnggotaMenangDB, 
  insertPemenangDB, 
  resetPutaranDB, 
  hapusSemuaDB 
} from '../database/storage';
import SQLite from 'react-native-sqlite-storage';

export interface Anggota {
  id: string;
  nama: string;
  sudahMenang: boolean;
}

export interface Pemenang {
  id: string;
  nama: string;
  tanggal: string;
  urutan: number;
}

interface ArisanContextType {
  anggota: Anggota[];
  pemenang: Pemenang[];
  tambahAnggota: (nama: string) => void;
  setWinner: (id: string) => void;
  resetPutaran: () => void;
  hapusSemua: () => void;
  isDbReady: boolean;
}

export const ArisanContext = createContext<ArisanContextType>({} as ArisanContextType);

export const ArisanProvider = ({ children }: { children: ReactNode }) => {
  const [anggota, setAnggota] = useState<Anggota[]>([]);
  const [pemenang, setPemenang] = useState<Pemenang[]>([]);
  const [db, setDb] = useState<SQLite.SQLiteDatabase | null>(null);
  const [isDbReady, setIsDbReady] = useState(false);

  useEffect(() => {
    const setupDB = async () => {
      try {
        const dbInstance = await initDB();
        setDb(dbInstance);
        const anggotaData = await getAnggotaFromDB(dbInstance);
        const pemenangData = await getPemenangFromDB(dbInstance);
        setAnggota(anggotaData);
        setPemenang(pemenangData);
        setIsDbReady(true);
      } catch (error) {
        console.error("Gagal load DB:", error);
      }
    };
    setupDB();
  }, []);

  const tambahAnggota = async (nama: string) => {
    const newAnggota = {
      id: Date.now().toString(),
      nama,
      sudahMenang: false,
    };
    
    // Update local state pertama untuk respons UI cepat
    setAnggota(prev => [...prev, newAnggota]);

    // Simpan ke DB
    if (db) {
      await insertAnggotaDB(db, newAnggota).catch(err => console.error("Insert error:", err));
    }
  };

  const setWinner = async (id: string) => {
    const winner = anggota.find((a) => a.id === id);
    if (winner) {
      const newPemenang: Pemenang = {
        id: Date.now().toString(), // Pastikan ID pemenang unik meskipun orang yang sama
        nama: winner.nama,
        tanggal: new Date().toLocaleDateString('id-ID'),
        urutan: pemenang.length + 1,
      };

      // Update UI
      setPemenang(prev => [newPemenang, ...prev]);
      setAnggota(prev => prev.map((a) => (a.id === id ? { ...a, sudahMenang: true } : a)));

      // Update DB
      if (db) {
        await updateAnggotaMenangDB(db, id).catch(err => console.error(err));
        await insertPemenangDB(db, newPemenang).catch(err => console.error(err));
      }
    }
  };

  const resetPutaran = async () => {
    setAnggota(prev => prev.map((a) => ({ ...a, sudahMenang: false })));
    setPemenang([]);
    
    if (db) {
      await resetPutaranDB(db).catch(err => console.error(err));
    }
  };

  const hapusSemua = async () => {
    setAnggota([]);
    setPemenang([]);

    if (db) {
      await hapusSemuaDB(db).catch(err => console.error(err));
    }
  };

  return (
    <ArisanContext.Provider value={{ anggota, pemenang, tambahAnggota, setWinner, resetPutaran, hapusSemua, isDbReady }}>
      {children}
    </ArisanContext.Provider>
  );
};
