import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import Header from './src/components/Header';
import UserProfile from './src/components/UserProfile';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.content}>
          <UserProfile />
        </View>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
});