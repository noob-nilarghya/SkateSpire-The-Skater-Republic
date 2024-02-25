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

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
    };

    // Cleanup
    return () => {
      window.onload = null;
    };
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
      <LandingPage 
        scrollToAbout={() => scrollToRef(refAbout)} 
        scrollToPurchase={() => scrollToRef(refGamePurchase)} 
        scrollToCommunity={() => scrollToRef(refCommunity)}
        scrollToFooter={() => scrollToRef(refFooter)}
      />
      <AboutUs ref={refAbout}></AboutUs>
      <GamePurchasePage ref={refGamePurchase}></GamePurchasePage>
      <BlackDivider></BlackDivider>
      <Community ref={refCommunity}></Community>
      <Footer ref={refFooter}></Footer>
    </AppWrapper>
  );
}

export default App;