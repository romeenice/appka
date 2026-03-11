import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const RegisterScreen = ({ onRegister, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    setError('');
    if (!email || !password || !confirm) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    // тут поки просто "успішна реєстрація"
    onRegister(email);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirm}
          onChangeText={setConfirm}
        />

        <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
          <Text style={styles.registerBtnText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSwitchToLogin} style={styles.switchLink}>
          <Text style={styles.switchText}>
            Вже є акаунт? Увійти
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#181A20', // темний фон
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#F3F4F6', // світлий текст
    letterSpacing: 1,
  },
  errorText: {
    color: '#EF4444', // яскраво-червоний
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#23242A', // темний input
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2D3748',
    color: '#F3F4F6', // світлий текст
  },
  registerBtn: {
    backgroundColor: '#2563EB', // синя кнопка
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  registerBtnText: {
    color: '#F3F4F6',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  switchLink: {
    marginTop: 12,
    alignItems: 'center',
  },
  switchText: {
    color: '#60A5FA', // світло-синій
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});

export default RegisterScreen;
