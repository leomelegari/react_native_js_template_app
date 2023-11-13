import { ThemeProvider } from 'styled-components';

import { SafeAreaProvider } from 'react-native-safe-area-context'

import theme from './src/theme';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider
        style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_800 }}
      >
        <Routes />
      </SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  );
}
