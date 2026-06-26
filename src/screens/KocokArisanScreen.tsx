import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, Animated } from 'react-native';
import { ArisanContext, Anggota } from '../context/ArisanContext';
import Button from '../components/Button';
import { pilihPemenang } from '../utils/kocokHelper';

const KocokArisanScreen = () => {
  const { anggota, setWinner } = useContext(ArisanContext);
  const [isRolling, setIsRolling] = useState(false);
  const [currentName, setCurrentName] = useState('?');
  const [showModal, setShowModal] = useState(false);
  const [pemenang, setPemenangState] = useState<Anggota | null>(null);

  const scaleValue = new Animated.Value(0);

  const anggotaBelumMenang = anggota.filter(a => !a.sudahMenang);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRolling && anggotaBelumMenang.length > 0) {
      interval = setInterval(() => {
        const randomPemenang = pilihPemenang(anggotaBelumMenang);
        if (randomPemenang) setCurrentName(randomPemenang.nama);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRolling, anggotaBelumMenang]);

  const handleKocok = () => {
    if (anggotaBelumMenang.length === 0) return;

    setIsRolling(true);
    setShowModal(false);
    
    setTimeout(() => {
      setIsRolling(false);
      const winner = pilihPemenang(anggotaBelumMenang);
      if (winner) {
        setCurrentName(winner.nama);
        setPemenangState(winner);
        setWinner(winner.id);
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          friction: 5,
          useNativeDriver: true,
        }).start();
      }
    }, 3000);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentName('?');
    scaleValue.setValue(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Kocok Pemenang</Text>
        <Text style={styles.subtitle}>
          Peserta tersedia: {anggotaBelumMenang.length} orang
        </Text>

        <View style={styles.rollerContainer}>
          <Text style={[styles.rollerText, isRolling && styles.rollingActive]}>
            {currentName}
          </Text>
        </View>

        <Button 
          title={isRolling ? "Sedang Mengocok..." : "Mulai Kocok 🎲"} 
          onPress={handleKocok} 
          disabled={isRolling || anggotaBelumMenang.length === 0}
          style={isRolling || anggotaBelumMenang.length === 0 ? styles.disabledButton : undefined}
        />
        {anggotaBelumMenang.length === 0 && anggota.length > 0 && (
          <Text style={styles.warningText}>Semua peserta sudah menang!</Text>
        )}
      </View>

      <Modal 
        transparent 
        visible={showModal} 
        animationType="fade"
        onRequestClose={closeModal} // Memungkinkan tutup pakai tombol Back Android
      >
        <View style={styles.modalBackground}>
          <Animated.View style={[styles.modalContent, { transform: [{ scale: scaleValue }] }]}>
            <Text style={styles.modalCongrats}>✨ YEAAAY! ✨</Text>
            <Text style={styles.modalSubtext}>Pemenang Arisan Kali Ini Adalah:</Text>
            <Text style={styles.modalWinnerName}>{pemenang?.nama}</Text>
            
            <Button 
              title="Kembali & Simpan 🏆" 
              onPress={closeModal} 
              variant="secondary" 
              style={{ width: '100%', marginTop: 24, paddingVertical: 16 }} 
            />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#6C5CE7',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 32,
  },
  rollerContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#F1F2F6',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    borderWidth: 2,
    borderColor: '#E0DBFF',
  },
  rollerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6C5CE7',
  },
  rollingActive: {
    color: '#A29BFE',
    opacity: 0.8,
  },
  disabledButton: {
    backgroundColor: '#b2bec3',
  },
  warningText: {
    marginTop: 16,
    color: '#e74c3c',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(45, 52, 54, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#6C5CE7',
    borderRadius: 24,
    padding: 32,
    width: '100%',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  modalCongrats: {
    color: '#fdcb6e',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalWinnerName: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtext: {
    color: '#E0DBFF',
    fontSize: 16,
    marginBottom: 16,
  },
});

export default KocokArisanScreen;
