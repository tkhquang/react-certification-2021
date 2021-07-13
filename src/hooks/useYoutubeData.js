import { useState, useCallback } from 'react';

import { youtube } from '../api';

const { searchListByQuery } = youtube;

export default function useYoutubeData() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const doSearch = useCallback(
    async (queries) => {
      setLoading(true);
      try {
        const data = await searchListByQuery(queries);
        setVideos(data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        setLoading(false);
      }
    },
    [setVideos]
  );

  return {
    loading,
    videos,
    search: doSearch,
  };
}
