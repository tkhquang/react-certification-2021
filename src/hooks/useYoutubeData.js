import { useState, useCallback } from 'react';

import { youtube } from '../api';

const { searchListByQuery } = youtube;

export default function useYoutubeData() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const doSearch = useCallback(
    async (queries) => {
      setIsLoading(true);
      try {
        const data = await searchListByQuery(queries);
        setVideos(data);
      } catch (error) {
        return Promise.reject(error);
      } finally {
        setIsLoading(false);
      }
    },
    [setVideos]
  );

  return {
    isLoading,
    videos,
    search: doSearch,
  };
}
