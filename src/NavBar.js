// NavBar.js
import React from 'react';
import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 98.8%;
  max-width: 100vw;
  position: fixed;
  z-index: 999;
  font-size: 1.8rem;

  background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  @media (max-width: 950px){
    flex-direction: column;
  }

  @media (max-width: 450px){
    gap: 1rem;
  }
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 2.4rem;
  padding-left: 3rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 950px) {
    padding-left: 0rem;
    justify-content: center;
    margin-bottom: 1rem;
  }

  @media (max-width: 450px){
    gap: 1.5rem;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 2rem;
  transition: color 0.3s ease;


  &:hover {
    color: #ffcc00;
  }

  @media (max-width: 950px) {
    justify-content: center;
  }

  @media (max-width: 300px){
    margin-left: 1rem;
  }
`;

const Img= styled.img`
  width: 12%;
`;

const NavLinks= styled.div`
  padding-right: 3rem;
  text-align: center;
  @media (max-width: 950px) {
    padding-right: 0rem;
    padding-bottom: 2rem;
  }

  @media (max-width: 300px){
    padding-right: 0rem;
  }
`;

const NavBar = ({scrollToAbout, scrollToPurchase, scrollToCommunity, scrollToFooter}) => {

  const handleAboutClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    scrollToAbout();
  };
  const handleCommunityClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    scrollToCommunity();
  };
  const handlePurchaseClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    scrollToPurchase();
  };
  const handleFooterClick = (event) => {
    event.preventDefault(); // Prevent default behavior
    scrollToFooter();
  };
  
    return (
        <NavBarWrapper>
            <Logo> <Img src='/logo.webp' alt="logo"></Img> SkaterSpire &#174;</Logo>
            <NavLinks>
                <NavLink onClick={handleAboutClick} href="#">About</NavLink>
                <NavLink onClick={handleCommunityClick} href="#">Media</NavLink>
                <NavLink href="#">News</NavLink>
                <NavLink onClick={handlePurchaseClick} href="#">Purchase</NavLink>
                <NavLink onClick={handleFooterClick} href="#">Contact Us </NavLink>
            </NavLinks>
        </NavBarWrapper>
    );
};

export default NavBar;
