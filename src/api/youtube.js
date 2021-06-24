const search = async ({ query, maxResults = '12' }) => {
  try {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxResults}&q=${query}&type=video&videoType=any&key=${process.env.REACT_APP_YOUTUBE_DATA_API_KEY}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    const json = await response.json();
    return Promise.resolve(json.items);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { search };
