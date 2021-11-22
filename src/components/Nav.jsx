import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Nav = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(boxRef.current, {
      x: -10,
      ease: 'ease',
      duration: 4,
      scrollTrigger: {
        trigger: boxRef.current,
        markers: true,
        scrub: true,
      },
    });
  }, []);

  return (
    <StyledWrapper ref={containerRef}>
      <ul>
        <li>
          <div>
            <StyledSelect ref={boxRef} />
            Home
          </div>
        </li>
        <li>
          <div>
            {/* <StyledSelect ref={boxRef2} /> */}
            About
          </div>
        </li>
        <li>
          <div>
            {/* <StyledSelect /> */}
            Projects
          </div>
        </li>
        <li>
          <div>
            {/* <StyledSelect /> */}
            Contact
          </div>
        </li>
      </ul>
    </StyledWrapper>
  );
};

export default Nav;

const StyledWrapper = styled.nav`
  position: fixed;
  top: 50%;
  right: -16rem;

  & > ul {
    display: flex;
    font-size: 2rem;
    transform: rotate(90deg);

    & > li {
      position: relative;

      & > div {
        display: flex;
        width: 100%;
        height: 100%;
      }
    }

    & > li + li {
      margin-left: 5rem;
    }
  }
`;

const StyledSelect = styled.div`
  position: absolute;
  top: 1.2rem;
  height: 1.4rem;
  width: 70px;
  background-color: #e6e5e8;
  z-index: -1;
`;
