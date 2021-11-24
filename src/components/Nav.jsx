import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Nav = () => {
  useEffect(() => {}, []);

  return (
    <StyledWrapper>
      <ul>
        <li>
          <div>
            <StyledSelect />
            Home
          </div>
        </li>
        <li>
          <div>
            {/* <StyledSelect /> */}
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
  color: white;

  & > ul {
    display: flex;
    font-size: 2rem;
    font-weight: bolder;
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
  top: 1.1rem;
  left: -0.5rem;
  height: 1.4rem;
  width: 70px;
  background-color: #f8df8b;
  z-index: -1;
`;
