const API = `https://youtube.googleapis.com/youtube/v3`;

const searchListByQuery = async ({ query, maxResults = '12' }) => {
  try {
    const response = await fetch(
      `${API}/search?part=snippet&maxResults=${maxResults}&q=${query}&type=video&videoType=any&key=${process.env.REACT_APP_YOUTUBE_DATA_API_KEY}`,
      // `/data.json`,
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

const searchListById = async ({ id }) => {
  try {
    const response = await fetch(
      `${API}/videos?part=snippet&type=video&id=${id}&key=${process.env.REACT_APP_YOUTUBE_DATA_API_KEY}`,
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

const searchRelatedListById = async ({ id }) => {
  try {
    const response = await fetch(
      `${API}/search?part=snippet&type=video&relatedToVideoId=${id}&key=${process.env.REACT_APP_YOUTUBE_DATA_API_KEY}`,
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

export { searchListByQuery, searchListById, searchRelatedListById };
