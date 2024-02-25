import styled, { keyframes } from "styled-components";

const l111 = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const Anime = styled.div`
  margin: 0 auto;
  width: 5vw;
  height: 5vw; /* Added height to ensure the aspect ratio works */
  border-radius: 50%;
  background: #ffcc00;
  -webkit-mask: radial-gradient(circle closest-side at 50% 40%, #0000 94%, #000);
  transform-origin: center; /* Adjusted transform-origin */
  animation: ${l111} 1s infinite linear;
`;

const anime2 = keyframes`
  to{opacity: 0}
`;

const Loader = styled.div`
  margin-top: 7rem;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;
  font-size: 20px;
  color: #5d5900;
  animation: ${anime2} 0.5s linear infinite alternate;

  &:before {
    content: "SkaterSpire - The Skater Republic";
  }

  @media (max-width:300px){
    font-size: 12px;
  }
`;

const StyledSpinner = styled.div`
  margin: 4.8rem auto;
  padding-bottom: 10vh;
`;

function Spinner() {
  return (
    <StyledSpinner>
      <Anime />
      <Loader />
    </StyledSpinner>
  );
}

export default Spinner;
