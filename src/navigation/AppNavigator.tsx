import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import TambahAnggotaScreen from '../screens/TambahAnggotaScreen';
import KocokArisanScreen from '../screens/KocokArisanScreen';
import RiwayatScreen from '../screens/RiwayatScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6C5CE7',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#6C5CE7',
          tabBarInactiveTintColor: '#A29BFE',
          tabBarStyle: {
            paddingBottom: 8,
            paddingTop: 8,
            height: 60,
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#f1f2f6',
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '600',
          },
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon',
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            title: 'Beranda',
            tabBarLabel: '🏠 Home'
          }} 
        />
        <Tab.Screen 
          name="TambahAnggota" 
          component={TambahAnggotaScreen} 
          options={{ 
            title: 'Tambah',
            tabBarLabel: '➕ Tambah'
          }} 
        />
        <Tab.Screen 
          name="KocokArisan" 
          component={KocokArisanScreen} 
          options={{ 
            title: 'Kocok Arisan',
            tabBarLabel: '🎲 Kocok'
          }} 
        />
        <Tab.Screen 
          name="Riwayat" 
          component={RiwayatScreen} 
          options={{ 
            title: 'Riwayat',
            tabBarLabel: '📜 Riwayat'
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
