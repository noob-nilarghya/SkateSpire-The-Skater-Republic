// App.js
import React, { useEffect, useRef, useState } from 'react';
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import styled from 'styled-components';
import GamePurchasePage from './GamePurchasePage';
import Community from './Community';
import BlackDivider from './BlackDivider';
import Footer from './Footer';
import Spinner from './Spinner';
import LazyLoad from 'react-lazy-load';

const AppWrapper= styled.div`
  overflow: hidden;
`;

const SpinnerWrapper= styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

function App() {

  const refAbout= useRef(null);
  const refGamePurchase= useRef(null);
  const refCommunity= useRef(null);
  const refFooter= useRef(null);

  const scrollToRef= function(ref) {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const [isLoading, setIsLoading] = useState(true);
  // const [videoRendered, setVideoRendered] = useState(false);

  // useEffect(() => {
  //   window.onload = () => {
  //     setVideoRendered(true);
  //   };

  //   // Cleanup
  //   return () => {
  //     window.onload = null;
  //   };
  // }, []);

  useEffect(() => {
    // Simulate loading delay with setTimeout
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Change the delay time as needed

    return () => clearTimeout(timeout);
  }, []);

  if(isLoading) { 
    return(
      <SpinnerWrapper>
        <Spinner></Spinner>
      </SpinnerWrapper>
    );
  }

  return (
    <AppWrapper>
      <LazyLoad>
        <LandingPage 
          scrollToAbout={() => scrollToRef(refAbout)} 
          scrollToPurchase={() => scrollToRef(refGamePurchase)} 
          scrollToCommunity={() => scrollToRef(refCommunity)}
          scrollToFooter={() => scrollToRef(refFooter)}
        />
      </LazyLoad>
      <AboutUs ref={refAbout}></AboutUs>
      <GamePurchasePage ref={refGamePurchase}></GamePurchasePage>
      <BlackDivider></BlackDivider>
      <Community ref={refCommunity}></Community>
      <Footer ref={refFooter}></Footer>
    </AppWrapper>
  );
}

export default App;