import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CardAnggotaProps {
  nama: string;
  sudahMenang?: boolean;
}

const CardAnggota: React.FC<CardAnggotaProps> = ({ nama, sudahMenang = false }) => {
  return (
    <View style={styles.card}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{nama.charAt(0).toUpperCase()}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.nama}>{nama}</Text>
        {sudahMenang ? (
          <Text style={styles.badgeMenang}>Sudah Menang</Text>
        ) : (
          <Text style={styles.badgeAktif}>Belum Menang</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginVertical: 6,
    borderRadius: 16,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#2D3436',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#E0DBFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C5CE7',
  },
  info: {
    flex: 1,
  },
  nama: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3436',
    marginBottom: 4,
  },
  badgeMenang: {
    fontSize: 12,
    color: '#00b894',
    fontWeight: '600',
  },
  badgeAktif: {
    fontSize: 12,
    color: '#fdcb6e',
    fontWeight: '600',
  },
});

export default CardAnggota;
