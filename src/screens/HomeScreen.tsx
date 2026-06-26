import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { ArisanContext } from '../context/ArisanContext';
import CardAnggota from '../components/CardAnggota';
import Button from '../components/Button';

const HomeScreen = ({ navigation }: any) => {
  const { anggota, resetPutaran, hapusSemua } = useContext(ArisanContext);
  const belumMenang = anggota.filter((a) => !a.sudahMenang).length;

  const handleResetPutaran = () => {
    Alert.alert(
      "Mulai Putaran Baru?",
      "Riwayat pemenang akan dikosongkan dan semua orang bisa memenangkan arisan lagi. (Daftar anggota tidak terhapus)",
      [
        { text: "Batal", style: "cancel" },
        { text: "Ya, Mulai Baru", style: "destructive", onPress: resetPutaran }
      ]
    );
  };

  const handleHapusSemua = () => {
    Alert.alert(
      "Hapus Semua Data?",
      "Tindakan ini akan menghapus semua anggota dan riwayat pemenang secara permanen!",
      [
        { text: "Batal", style: "cancel" },
        { text: "Hapus Semua", style: "destructive", onPress: hapusSemua }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Total Peserta Arisan</Text>
        <View style={styles.countContainer}>
          <Text style={styles.summaryCount}>{anggota.length}</Text>
          <Text style={styles.summaryCountLabel}>Orang</Text>
        </View>
        <View style={styles.badgeContainer}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🟢 {belumMenang} Aktif</Text>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>🏆 {anggota.length - belumMenang} Menang</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionContainer}>
        <Button 
          title="🎲 Kocok Sekarang" 
          onPress={() => navigation.navigate('KocokArisan')} 
          style={styles.actionButtonPrimary}
        />
        <Button 
          title="➕ Tambah" 
          variant="outline"
          onPress={() => navigation.navigate('TambahAnggota')} 
          style={styles.actionButtonSecondary}
        />
      </View>

      <Text style={styles.listTitle}>Daftar Peserta 📋</Text>
      {anggota.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyEmoji}>👥</Text>
          <Text style={styles.emptyText}>Belum ada peserta arisan.</Text>
          <Text style={styles.emptySubtext}>Yuk, tambah anggota pertamamu sekarang!</Text>
        </View>
      ) : (
        <FlatList
          data={anggota}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardAnggota nama={item.nama} sudahMenang={item.sudahMenang} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListFooterComponent={() => (
            <View style={styles.footerContainer}>
              <Button 
                title="🔄 Mulai Putaran Baru" 
                variant="outline" 
                onPress={handleResetPutaran} 
                style={styles.footerButton} 
              />
              <Button 
                title="🗑️ Hapus Semua Data" 
                variant="outline" 
                onPress={handleHapusSemua} 
                style={[styles.footerButton, { borderColor: '#ff7675' }]} 
              />
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9', // Lebih cerah dan modern
    padding: 20,
  },
  summaryCard: {
    backgroundColor: '#6C5CE7',
    borderRadius: 24,
    padding: 28,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 8,
    shadowColor: '#6C5CE7',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  summaryTitle: {
    color: '#E0DBFF',
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginVertical: 12,
  },
  summaryCount: {
    color: '#FFFFFF',
    fontSize: 56,
    fontWeight: '900',
  },
  summaryCountLabel: {
    color: '#E0DBFF',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  badge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
    gap: 16,
  },
  actionButtonPrimary: {
    flex: 2,
    paddingVertical: 16,
  },
  actionButtonSecondary: {
    flex: 1,
    paddingVertical: 16,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#2D3436',
    marginBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3436',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#b2bec3',
    marginTop: 8,
    textAlign: 'center',
  },
  footerContainer: {
    marginTop: 20,
    gap: 12,
  },
  footerButton: {
    width: '100%',
  }
});

export default HomeScreen;
