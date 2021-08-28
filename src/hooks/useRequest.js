import { useCallback, useState } from 'react';

export default function useRequest({ request }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (queries) => {
      setIsLoading(true);
      try {
        const response = await request(queries);
        setData(response);
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    },
    [request]
  );

  return { data, isLoading, error, fetchData };
}
