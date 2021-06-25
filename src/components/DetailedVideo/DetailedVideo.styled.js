import styled from 'styled-components';

export const StyledDetailedVideo = styled.div`
  width: 100%;
`;

export const StyledVideoIframeContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 50%;
  width: 100%;
  margin: auto;
`;

export const StyledVideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  border: 0;
  margin: auto;
`;

export const StyledVideoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: semi-bold;
  margin: 0.75rem;
`;

export const StyledVideoDescription = styled.div`
  margin: 0.75rem;
`;