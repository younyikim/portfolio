import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import mainImg from 'assets/main_remove.png';

const MainBody = () => {
  const textRef = useRef();
  const bgRef = useRef();
  const textRef2 = useRef();
  const bgRef2 = useRef();
  const nameRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(bgRef.current, 0.3, { scaleX: 1 })
      .to(bgRef2.current, 0.3, { scaleX: 1 })
      .to(textRef.current, 0.1, { opacity: 1 }, '-=0.1')
      .to(textRef2.current, 0.2, { opacity: 1 }, '-=0.1')
      .to(bgRef.current, 0.2, { scaleX: 0 })
      .to(bgRef2.current, 0.2, { scaleX: 0 })
      .to(nameRef.current, 0.4, { opacity: 1 }, '-=0.1');
  }, []);

  return (
    <StyledWrapper>
      <StyledImgContainer>
        <img src={mainImg} alt="" />
      </StyledImgContainer>
      <StyledDesc>
        <div>
          <span ref={textRef}>Front-end</span>
          <span ref={bgRef}></span>
        </div>
        <div>
          <span ref={textRef2}>Developer</span>
          <span ref={bgRef2}></span>
        </div>
        <div>
          <span ref={nameRef}>Younyi Kim | 김연이</span>
        </div>
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
  justify-content: center;
  align-items: center;
  position: relative;
  top: -15rem;
  left: -15rem;
  font-family: 'TmonMonsori';
  font-size: 8rem;
  z-index: 10;
  color: white;
  line-height: 1.205;

  & > div:first-child {
    position: relative;

    & > span:first-child {
      opacity: 0;
    }

    & > span:last-child {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
      transform-origin: left;
      transform: scaleX(0);
      background-color: #f8df8b;
    }
  }

  & > div:nth-child(2) {
    position: relative;

    & > span:first-child {
      opacity: 0;
    }

    & > span:last-child {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 100;
      transform-origin: left;
      transform: scaleX(0);
      background-color: #090910;
    }
  }
  & > div:last-child {
    margin-top: 4rem;
    font-size: 2.8rem;

    & > span {
      opacity: 0;
      text-align: right;
    }
  }
`;

const StyledImgContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background-color: #f8df8b;

  & > img {
    position: absolute;
    top: 40%;
    left: -100px;
    width: 130%;
    z-index: 1;
  }
`;
