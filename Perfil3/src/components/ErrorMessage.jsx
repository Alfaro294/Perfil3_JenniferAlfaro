import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import { colors } from '../theme/colors';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ocurrió un problema</Text>
      <Text style={styles.message}>{message}</Text>
      {onRetry && <Button title="Reintentar" onPress={onRetry} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 12 },
  title: { color: colors.danger, fontSize: 20, fontWeight: '700' },
  message: { color: colors.muted, textAlign: 'center', marginBottom: 8 },
});
