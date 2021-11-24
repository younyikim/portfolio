import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import mainImg from 'assets/main_remove.png';

const MainBody = () => {
  const textRef = useRef();

  useEffect(() => {});

  return (
    <StyledWrapper>
      <StyledImgContainer>
        <img src={mainImg} alt="" />
      </StyledImgContainer>
      <StyledDesc ref={textRef}>
        <span>Front-end</span>
        <span>Developer</span>
        <span>Younyi Kim | 김연이</span>
      </StyledDesc>
    </StyledWrapper>
  );
};

export default MainBody;

const StyledWrapper = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -15rem;
  left: -15rem;
  font-family: 'TmonMonsori';
  font-size: 8rem;
  z-index: 10;
  color: white;

  & > span:last-child {
    margin-top: 4rem;
    font-size: 2.5rem;
    text-align: right;
  }
`;

const StyledImgContainer = styled.div`
  position: relative;
  width: 570px;
  height: 100%;
  z-index: 1;
  background-color: #f8df8b;

  & > img {
    position: absolute;
    top: 50%;
    left: -100px;
    width: 130%;
    z-index: 1;
  }
`;
