import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function UserProfile() {
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    login({
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      rol: 'Estudiante',
    });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Perfil de Usuario</Text>

      {user ? (
        <View>
          <Text style={styles.text}><Text style={styles.label}>Nombre:</Text> {user.nombre}</Text>
          <Text style={styles.text}><Text style={styles.label}>Email:</Text> {user.email}</Text>
          <Text style={styles.text}><Text style={styles.label}>Rol:</Text> {user.rol}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Cerrar Sesión" color="#FF3B30" onPress={logout} />
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.text}>No has iniciado sesión actualmente.</Text>
          <View style={styles.buttonContainer}>
            <Button title="Iniciar Sesión" color="#34C759" onPress={handleLogin} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 15,
  },
});