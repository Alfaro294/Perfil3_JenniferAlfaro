import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

// Tarjeta reutilizable. Recibe todos los datos.
export default function Card({ title, image, description, genres = [], rating }) {
  return (
    <View style={styles.card}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>Sin imagen</Text>
        </View>
      )}

      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
          {rating !== null && rating !== undefined && (
            <Text style={styles.rating}>★ {rating}</Text>
          )}
        </View>

        {genres.length > 0 && (
          <Text style={styles.genres} numberOfLines={1}>{genres.join(' · ')}</Text>
        )}

        <Text style={styles.description} numberOfLines={5}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: 'hidden',
    marginBottom: 14,
  },
  image: { width: 105, minHeight: 150 },
  placeholder: {
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: { color: colors.muted, fontSize: 12 },
  content: { flex: 1, padding: 12 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  title: { flex: 1, color: colors.text, fontSize: 17, fontWeight: '700' },
  rating: { color: colors.primary, fontWeight: '700' },
  genres: { color: colors.primary, fontSize: 12, marginTop: 4 },
  description: { color: colors.muted, fontSize: 13, lineHeight: 18, marginTop: 8 },
});
