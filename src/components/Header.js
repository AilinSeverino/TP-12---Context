import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi App Expo</Text>
      {user ? (
        <Text style={styles.status}>Hola, {user.nombre}</Text>
      ) : (
        <Text style={styles.status}>Sin sesión activa</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  status: {
    color: '#fff',
    fontSize: 14,
  },
});