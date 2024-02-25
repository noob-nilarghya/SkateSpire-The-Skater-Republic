import React from "react";
import styled from "styled-components";

const StyledCommunity= styled.div`
    padding: 0px 3rem;
    background-image: url('/community.webp');
    background-size: cover; 
    background-position: center;
    height: 50rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;

const CommunityText= styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    text-align: center;
`;
const Button= styled.button`
    color: white;
    padding: 1rem 0px;
    background-color: black;
    display: flex;
    gap: 1rem;
    align-items: center;
    align-items: center;
    justify-content: center;
    width: 20rem;
    font-size: 2rem;
    border-radius: 0.5rem;

    cursor: pointer;
    transition: all 0.3s;

    &:hover{
        transform: scale(1.1);
    }
`;
const Img= styled.img`
    width: 10%;
`;

const H1= styled.h1`
    font-size: 4.2rem;
`;

const P= styled.p`
    font-size: 2.8rem;
`

const Community= React.forwardRef((props, ref) => { 
    return (
        <StyledCommunity ref={ref}>
            <CommunityText>
                <H1>Join the Community</H1>
                <P>The official SkateSpire. Discord server</P>
                <Button>Join <Img src="/discord.svg" alt="discord"></Img></Button>
            </CommunityText>
        </StyledCommunity>
    );
});

export default Community;
