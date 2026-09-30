import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import InfoRow from '../components/InfoRow';
import useStudent from '../hooks/useStudent';
import { colors } from '../theme/colors';

export default function StudentScreen({ navigation }) {
  const { items } = useStudent();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.badge}>Instituto Técnico Ricaldone</Text>
        <Text style={styles.title}>Información del estudiante</Text>
      </View>

      <View style={styles.card}>
        {items.map((item) => (
          <InfoRow key={item.label} label={item.label} value={item.value} />
        ))}
      </View>

      <Button title="Ver series de TV" onPress={() => navigation.navigate('Shows')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: 'center', gap: 24 },
  header: { gap: 6 },
  badge: { color: colors.primary, fontSize: 13, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  title: { color: colors.text, fontSize: 30, fontWeight: '800' },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
});
