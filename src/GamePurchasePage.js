// GamePurchasePage.js
import React from 'react';
import styled from 'styled-components';

const PurchasePageWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-image: url('/purchasePage.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;
const PurchaseMenu= styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 5rem;

    background-image: url('/purchaseBG.webp');
`;
const Button= styled.button`
    padding: 0px 3rem;
    background-image: url('/Purchasebanner.webp');
    background-size: cover; 
    background-position: center;

    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const Img= styled.img`
    width: 2rem;
`;
const P= styled.p`
    font-size: 1.8rem;
`
const ButtonPurchase= styled.button`
    margin-top: 1rem;
    padding: 1rem 3rem;
    background-image: url('/purchase.webp');
    background-size: cover; 
    background-position: center;
    color: #202020;

    font-size: 2.8rem;
    font-weight: 600;
    cursor: pointer;

    transition: all 0.3s;

    &:hover{
        transform: scale(1.2);
    }
`

const GamePurchasePage = React.forwardRef((props, ref) => {
  return (
    <PurchasePageWrapper ref={ref}>
      <ContentContainer>
        <PurchaseMenu>
            <Button><P>INDIA</P> <Img src='/downArrow.svg' alt="downArrow"></Img></Button>
            <Button><P>NINTENDO SWITCH</P> <Img src='/downArrow.svg' alt="downArrow"></Img></Button>
            <Button><P>DIGITAL DELUXE EDITION</P> <Img src='/downArrow.svg' alt="downArrow"></Img></Button>
            <ButtonPurchase>PURCHASE</ButtonPurchase>
        </PurchaseMenu>
      </ContentContainer>
    </PurchasePageWrapper>
  );
});

export default GamePurchasePage;
