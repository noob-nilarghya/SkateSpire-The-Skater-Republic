// LandingPage.js
import React from 'react';
import NavBar from './NavBar';
import VideoBackground from './VideoBackground';
import styled from 'styled-components';
import HeroText from './HeroText';

const ContentWrapper = styled.div`
  position: relative;
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LandingPage = ({scrollToAbout, scrollToPurchase, scrollToCommunity, scrollToFooter}) => {
  return (
    <ContentWrapper>
      <NavBar 
        scrollToAbout={scrollToAbout} 
        scrollToPurchase={scrollToPurchase} 
        scrollToCommunity={scrollToCommunity} 
        scrollToFooter={scrollToFooter}
      />
      <VideoBackground />
      <HeroText scrollToAbout={scrollToAbout}></HeroText>
    </ContentWrapper>
  );
};

export default LandingPage;
