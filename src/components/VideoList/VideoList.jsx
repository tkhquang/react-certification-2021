import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Video from './Video';

const StyledVideoList = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem;

  @media only screen and (min-width: 480px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (min-width: 720px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media only screen and (min-width: 960px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export default function VideoList() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch('/data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const json = await response.json();
    setData(json.items);
    return Promise.resolve(json.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledVideoList>
      {data.map(({ etag, snippet }) => {
        return <Video key={etag} {...snippet} />;
      })}
    </StyledVideoList>
  );
}
