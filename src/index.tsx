/* eslint-disable react/style-prop-object */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';

import Routes from './routes';
import defaultTheme from './styles/theme/default';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <StatusBar style="auto" translucent />
        <AppProvider>
          <View style={{ backgroundColor: '#312e38', flex: 1 }}>
            <Routes />
          </View>
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
