import styled from 'styled-components';

export const StyledVideoDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem;

  @media only screen and (min-width: 720px) {
    grid-template-columns: 60% minmax(0, 1fr);
  }

  @media only screen and (min-width: 960px) {
    grid-template-columns: 70% minmax(0, 1fr);
  }
`;
