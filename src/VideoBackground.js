// VideoBackground.js
import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
`;

const VideoBackground = () => {
  return (
    <BackgroundWrapper>
      <BackgroundVideo autoPlay loop muted>
        <source src='/video2.mp4' type="video/mp4" />
      </BackgroundVideo>
    </BackgroundWrapper>
  );
};

export default VideoBackground;
