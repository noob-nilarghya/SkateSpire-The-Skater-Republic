import styled from "styled-components";

const HeroTextStyles= styled.div`
    color: white;
    position: absolute;
    top: 15vw;
    left: 5vw;
    font-size: 4rem;
    line-height: 4.8rem;
    font-weight: 300;
    color: #fff;
    letter-spacing: 2px;

    text-shadow: 3px 3px 20px #474342,
    -2px 1px 30px #ffcc00;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 950px) {
        top: 20vw;
    }

    @media (max-width: 700px) {
        top: 30vw
    }

    @media (max-width: 450px) {
        top: 50vw
    }

    @media (max-width: 300px) {
        top: 75vw
    }

`;

const Button= styled.button`
    border-width: 2px;
    border-style: solid;
    border-color: initial;
    background-color: #ffcc00;
    font-size: 2.4rem;
    color: black;
    padding: 1rem 3rem;
    width: fit-content;
    border-radius: 5px;
    font-weight: 300;

    text-shadow: 3px 3px 20px #474342,
    -2px 1px 30px #ffcc50;

    cursor: pointer;
`;

function HeroText({scrollToAbout}) {
    return (
        <HeroTextStyles>
            <p>
            Built by gamers. <br></br>
            For gamers. <br></br>
            With fair terms for all. <br></br>
            Let's play incredibles together.
            </p>

            <Button onClick={scrollToAbout}>Learn More</Button>
        </HeroTextStyles>
        
    );
}

export default HeroText;
