import styled from 'styled-components';

export const StyledVideoList = styled.section`
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
