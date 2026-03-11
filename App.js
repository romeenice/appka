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
    backgroundColor: '#f7fafc',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#38a169',
  },
});

export default App;
