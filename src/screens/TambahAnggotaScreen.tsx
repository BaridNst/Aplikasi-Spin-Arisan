import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { ArisanContext } from '../context/ArisanContext';
import Button from '../components/Button';

const TambahAnggotaScreen = ({ navigation }: any) => {
  const [nama, setNama] = useState('');
  const { tambahAnggota } = useContext(ArisanContext);

  const handleSimpan = () => {
    if (!nama.trim()) {
      Alert.alert('Error', 'Nama anggota tidak boleh kosong!');
      return;
    }
    tambahAnggota(nama.trim());
    setNama('');
    Alert.alert('Sukses', 'Anggota berhasil ditambahkan!', [
      { text: 'OK', onPress: () => navigation.navigate('Home') }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tambah Peserta Baru</Text>
        <Text style={styles.subtitle}>Masukkan nama peserta yang akan diikutkan dalam kocokan arisan.</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <TextInput
            style={styles.input}
            placeholder="Ketik nama di sini..."
            placeholderTextColor="#b2bec3"
            value={nama}
            onChangeText={setNama}
            autoCapitalize="words"
          />
        </View>

        <Button title="Simpan Anggota" onPress={handleSimpan} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    elevation: 4,
    shadowColor: '#2D3436',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#636e72',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3436',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F1F2F6',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#2D3436',
    borderWidth: 1,
    borderColor: '#E0DBFF',
  },
});

export default TambahAnggotaScreen;
