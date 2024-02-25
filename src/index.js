import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    max-width: 100vw;
    font-size: 62.5%;

    @media (max-width: 800px){
      font-size: 55%;
    }

    @media (max-width: 550px){
      font-size: 50%;
    }
    @media (max-width: 400px){
      font-size: 40%;
    }
  }
  body {
    margin: 0;
    padding: 0;

    font-family: "Play", sans-serif;
    font-weight: 400;
    font-style: normal;


    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
        display: hidden;
    }

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    max-width: 100vw;

  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>
);
