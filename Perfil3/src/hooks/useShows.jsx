import useFetchData from './useFetchData';

const SHOWS_URL = 'https://api.tvmaze.com/shows';
const MAX_SHOWS = 50;

const stripHtml = (html) =>
  (html || 'Sin descripción disponible.')
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

const mapShows = (json) =>
  json.slice(0, MAX_SHOWS).map((show) => ({
    id: show.id,
    title: show.name,
    image: show.image?.medium || show.image?.original || null,
    description: stripHtml(show.summary),
    genres: show.genres || [],
    rating: show.rating?.average ?? null,
  }));

export default function useShows() {
  const { data, loading, error, refetch } = useFetchData(SHOWS_URL, mapShows);
  return { shows: data || [], loading, error, refetch };
}
