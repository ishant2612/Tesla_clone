import React from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Section({ title, description, lftBtntext, rgtBtntext, bgImg }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrap bgi={bgImg}>
      <ItemText>
        <h1 data-aos="fade-up">{title}</h1>
        <p data-aos="fade-up" data-aos-delay="500">
          {description}
        </p>
      </ItemText>
      <Buttons>
        <ButtonGroup data-aos="fade-up" data-aos-delay="500">
          <LeftButton className="LeftButton">{lftBtntext}</LeftButton>
          {rgtBtntext && (
            <RightButton className="RightButton">{rgtBtntext}</RightButton>
          )}
        </ButtonGroup>
        <DonwArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-image: url("images/model-s.jpg");
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgi}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: White;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: rgba(23, 26, 32, 0.8);
  opacity: 0.65;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DonwArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
const Buttons = styled.div``;
