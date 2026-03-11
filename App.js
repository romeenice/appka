import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const MainScreen = ({ email }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.welcomeText}>Привіт, {email}!</Text>
    </View>
  );
};

const App = () => {
  const [email, setEmail] = useState(null);
  const [mode, setMode] = useState('login'); // 'login' або 'register'

  const handleLogin = (userEmail) => {
    setEmail(userEmail);
  };

  const handleRegister = (userEmail) => {
    // тут можна буде додати збереження юзера в базу
    setEmail(userEmail);
  };

  if (!email) {
    if (mode === 'login') {
      return (
        <LoginScreen
          onLogin={handleLogin}
          onSwitchToRegister={() => setMode('register')}
        />
      );
    }
    return (
      <RegisterScreen
        onRegister={handleRegister}
        onSwitchToLogin={() => setMode('login')}
      />
    );
  }

  return <MainScreen email={email} />;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181A20', // темний фон
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F3F4F6', // світлий текст
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default App;
