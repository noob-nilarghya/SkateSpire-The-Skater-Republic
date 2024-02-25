import React from "react";
import styled from "styled-components";


const AboutUsWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 15rem;
  color: red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-image: url('/aboutUs.webp');

  color: white;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media (max-width: 700px) {
    padding: 15rem 8rem;
  }

  @media (max-width: 300px) {
    padding: 15rem 5rem;
  }
  
`;

const AboutUSHeader= styled.div`
    padding-top: 5rem;
    width: 80%;
    justify-self: center;
    justify-content: center;
    text-align: center;
    font-size: 4.8rem;
    letter-spacing: 1px;

    @media (max-width: 1200px) {
        width: 100%;
    }

`;

const AboutUSText= styled.div`
    width: 80%;
    justify-self: flex-start;
    justify-content: center;
    font-size: 2rem;

    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const Span= styled.span`
    color: #ffcc00;
`;


const AboutUs = React.forwardRef((props, ref) => {
    return (
        <AboutUsWrapper ref={ref}>
            <AboutUSHeader>About SkateSpire &#174;</AboutUSHeader>
            <AboutUSText>
            <p>Introducing <Span>SkateSpire</Span>, the thrilling upcoming arcade game that puts you right in the heart of a <Span>dynamic skateboarding adventure!</Span> Explore expansive skateparks, bustling cityscapes, and renowned real locations for an immersive experience like no other.</p>
            <p>Featuring <Span>intuitive controls</Span>, a sophisticated trick system, and a compelling progression framework, players will find themselves <Span>immersed</Span> in a world where every achievement feels truly gratifying. </p>
            <p>Keep an eye out as we work diligently to bring this <Span>extraordinary gaming experience</Span> to life.</p>
            </AboutUSText>
     
        </AboutUsWrapper>
    );
});

export default AboutUs;
