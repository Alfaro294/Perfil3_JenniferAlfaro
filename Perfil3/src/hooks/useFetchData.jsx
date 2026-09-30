import { useCallback, useEffect, useState } from 'react';

export default function useFetchData(url, transform) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Error del servidor (${response.status})`);
        }

        const json = await response.json();
        setData(transform ? transform(json) : json);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'No se pudo cargar la información');
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    load();
    return () => controller.abort();
  }, [url, reloadKey]);

  const refetch = useCallback(() => setReloadKey((k) => k + 1), []);

  return { data, loading, error, refetch };
}
