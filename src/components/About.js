import { useRef } from "react";

import styled from "styled-components";
import banner from "../assets/images/banner.png";

export default function About({ resultRef }) {
  const myRef = useRef(null);

  const executeScroll = () =>
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <AboutDiv>
        <AboutStyle>
          <AboutInfo>
            <p>Just Dropped</p>
            <h1>
              Get <br />
              Yourself <br />A New Disc{" "}
            </h1>
            <button onClick={executeScroll}>Shop Now</button>
          </AboutInfo>
          <AboutImg>
            <img src={banner.src} alt="discgolf" />
          </AboutImg>
        </AboutStyle>
      </AboutDiv>
      <Description>
        <h2>What We Do</h2>
        <p>
          We offer a wide selection of high-quality disc golf equipment,
          <br />
          apparel, and accessories to help you improve your game
          <br /> and enjoy the sport even more.
        </p>
      </Description>
    </>
  );
}
export const AboutDiv = styled.div`
  font-family: "Raleway", sans-serif;
  display: flex;
  height: 50vh;
  mask: radial-gradient(circle 30px at top left, #0000 98%, #000) top left,
    radial-gradient(circle 30px at top right, #0000 98%, #000) top right,
    radial-gradient(circle 30px at bottom left, #0000 98%, #000) bottom left,
    radial-gradient(circle 30px at bottom right, #0000 98%, #000) bottom right;
  mask-size: 51% 51%;
  mask-repeat: no-repeat;
  -webkit-mask: radial-gradient(circle 50px at top left, #0000 98%, #000) top
      left,
    radial-gradient(circle 0px at top right, #0000 98%, #000) top right,
    radial-gradient(circle 0px at bottom left, #0000 98%, #000) bottom left,
    radial-gradient(circle 50px at bottom right, #0000 98%, #000) bottom right;
  -webkit-mask-size: 51% 51%;
  -webkit-mask-repeat: no-repeat;
`;
export const AboutStyle = styled.div`
  display: flex;
  width: 100%;
`;
export const AboutInfo = styled.div`
  flex: 1;
  padding: 3rem;
  background-color: #d8e2eb;
  color: #2a2b2b;
  h1 {
    font-size: 3.25rem;
    font-weight: normal;
    padding: 2rem 0 2rem 0;
  }
  p {
    font-size: 1.25rem;
  }
  button {
    background-color: #222;
    border-style: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.5;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 9px 20px 8px;
    position: relative;
    text-align: center;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 30%;
    &:hover,
    &:focus {
      opacity: 0.75;
    }
  }
`;
export const AboutImg = styled.div`
  flex: 1;
  padding: 3rem;
  background-color: #f2f5f7;
  background-image: url(./images/bannerbg.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: grid;
  place-content: center;
  img {
    width: 100%;
  }
`;

export const Description = styled.div`
  text-align: center;
  height: 40vh;
  padding: 4rem;
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.25rem;
    margin-top: 1rem;
  }
`;
