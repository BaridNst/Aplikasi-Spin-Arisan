import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { ArisanProvider } from './src/context/ArisanContext';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <ArisanProvider>
        <StatusBar backgroundColor="#6C5CE7" barStyle="light-content" />
        <AppNavigator />
      </ArisanProvider>
    </SafeAreaProvider>
  );
};

export default App;
