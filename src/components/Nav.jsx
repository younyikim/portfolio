import styled from 'styled-components';

const Nav = () => {
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
            <StyledSelect />
            About
          </div>
        </li>
        <li>
          <div>
            <StyledSelect />
            Projects
          </div>
        </li>
        <li>
          <div>
            <StyledSelect />
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
  width: 100%;
  background-color: #e6e5e8;
  z-index: -1;
`;
