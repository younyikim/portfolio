import styled from 'styled-components';

const Nav = ({ scrollIndex }) => {
  return (
    <StyledWrapper>
      <ul>
        <li>
          <Dot num={1} scrollIndex={scrollIndex}>
            Home
          </Dot>
        </li>
        <li>
          <Dot num={2} scrollIndex={scrollIndex}>
            About
          </Dot>
        </li>
        <li>
          <Dot num={3} scrollIndex={scrollIndex}>
            Projects
          </Dot>
        </li>
        <li>
          <Dot num={4} scrollIndex={scrollIndex}>
            Contact
          </Dot>
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

const Dot = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  color: ${(props) => (props.scrollIndex === props.num ? '#f8df8b' : 'white')};
`;
