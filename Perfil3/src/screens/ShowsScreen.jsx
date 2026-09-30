import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Card from '../components/Card';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useShows from '../hooks/useShows';
import { colors } from '../theme/colors';

export default function ShowsScreen() {
  const { shows, loading, error, refetch } = useShows();

  if (loading) return <Loading message="Cargando series..." />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={shows}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
            genres={item.genres}
            rating={item.rating}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  list: { padding: 16 },
});
