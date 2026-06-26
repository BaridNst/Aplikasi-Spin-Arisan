import SQLite from 'react-native-sqlite-storage';
import { Anggota, Pemenang } from '../context/ArisanContext';

// Aktifkan promise untuk API yang lebih mudah
SQLite.enablePromise(true);

const database_name = "ArisanGacor.db";

export const getDBConnection = async () => {
    return SQLite.openDatabase({
        name: database_name,
        location: 'default'
    });
};

export const createTables = async (db: SQLite.SQLiteDatabase) => {
    const queryAnggota = `CREATE TABLE IF NOT EXISTS anggota (
    id TEXT PRIMARY KEY,
    nama TEXT NOT NULL,
    sudahMenang INTEGER DEFAULT 0
  );`;

    const queryPemenang = `CREATE TABLE IF NOT EXISTS pemenang (
    id TEXT PRIMARY KEY,
    nama TEXT NOT NULL,
    tanggal TEXT NOT NULL,
    urutan INTEGER NOT NULL
  );`;

    await db.executeSql(queryAnggota);
    await db.executeSql(queryPemenang);
};

export const initDB = async () => {
    try {
        const db = await getDBConnection();
        await createTables(db);
        return db;
    } catch (error) {
        console.error("Error initializing DB:", error);
        throw error;
    }
};

export const getAnggotaFromDB = async (db: SQLite.SQLiteDatabase): Promise<Anggota[]> => {
    try {
        const anggota: Anggota[] = [];
        const results = await db.executeSql('SELECT * FROM anggota');
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                const row = result.rows.item(index);
                anggota.push({
                    id: row.id,
                    nama: row.nama,
                    sudahMenang: row.sudahMenang === 1
                });
            }
        });
        return anggota;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getPemenangFromDB = async (db: SQLite.SQLiteDatabase): Promise<Pemenang[]> => {
    try {
        const pemenang: Pemenang[] = [];
        const results = await db.executeSql('SELECT * FROM pemenang ORDER BY urutan DESC');
        results.forEach(result => {
            for (let index = 0; index < result.rows.length; index++) {
                pemenang.push(result.rows.item(index));
            }
        });
        return pemenang;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const insertAnggotaDB = async (db: SQLite.SQLiteDatabase, anggota: Anggota) => {
    const insertQuery = `INSERT INTO anggota (id, nama, sudahMenang) VALUES (?, ?, ?)`;
    return db.executeSql(insertQuery, [anggota.id, anggota.nama, anggota.sudahMenang ? 1 : 0]);
};

export const updateAnggotaMenangDB = async (db: SQLite.SQLiteDatabase, id: string) => {
    const updateQuery = `UPDATE anggota SET sudahMenang = 1 WHERE id = ?`;
    return db.executeSql(updateQuery, [id]);
};

export const insertPemenangDB = async (db: SQLite.SQLiteDatabase, pemenang: Pemenang) => {
    const insertQuery = `INSERT INTO pemenang (id, nama, tanggal, urutan) VALUES (?, ?, ?, ?)`;
    return db.executeSql(insertQuery, [pemenang.id, pemenang.nama, pemenang.tanggal, pemenang.urutan]);
};

export const resetPutaranDB = async (db: SQLite.SQLiteDatabase) => {
    const updateQuery = `UPDATE anggota SET sudahMenang = 0`;
    const deletePemenangQuery = `DELETE FROM pemenang`;
    await db.executeSql(updateQuery);
    await db.executeSql(deletePemenangQuery);
};

export const hapusSemuaDB = async (db: SQLite.SQLiteDatabase) => {
    await db.executeSql('DELETE FROM anggota');
    await db.executeSql('DELETE FROM pemenang');
};
