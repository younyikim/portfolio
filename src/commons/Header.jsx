import styled from 'styled-components';

const Header = () => {
  return (
    <StyledWrapper>
      <span></span>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto&family=Roboto+Mono:ital,wght@0,400;0,700;1,700&display=swap');

  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  font-family: 'Roboto Mono', monospace;

  & > span {
    margin-top: 0.7rem;
    margin-left: 1rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 2.3rem;
    font-style: italic;
  }
`;
