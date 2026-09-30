import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function InfoRow({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: colors.border },
  label: { color: colors.muted, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1 },
  value: { color: colors.text, fontSize: 18, fontWeight: '600', marginTop: 2 },
});
