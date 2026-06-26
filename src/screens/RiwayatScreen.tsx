import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ArisanContext } from '../context/ArisanContext';

const RiwayatScreen = () => {
  const { pemenang } = useContext(ArisanContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Pemenang</Text>
      
      {pemenang.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Belum ada riwayat pemenang.</Text>
        </View>
      ) : (
        <FlatList
          data={pemenang}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.urutanBadge}>
                <Text style={styles.urutanText}>#{item.urutan}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.nama}>{item.nama}</Text>
                <Text style={styles.tanggal}>{item.tanggal}</Text>
              </View>
              <Text style={styles.trophy}>🏆</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 16,
  },
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
  urutanBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6C5CE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  urutanText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 4,
  },
  tanggal: {
    fontSize: 12,
    color: '#636e72',
  },
  trophy: {
    fontSize: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#b2bec3',
  },
});

export default RiwayatScreen;
