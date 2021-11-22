import styled from 'styled-components';

const MainBody = () => {
  return (
    <StyledWrapper>
      <div></div>
      <StyledDesc>
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

  & > div:first-child {
    position: relative;
    border: 1px solid black;
    width: 800px;
    height: 440px;
    z-index: 1;
  }
`;

const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -2rem;
  left: -15rem;
  font-family: 'TmonMonsori';
  font-size: 8rem;
  /* border: 1px solid black; */

  & > span:last-child {
    margin-top: 4rem;
    font-size: 2.5rem;
    text-align: right;
  }
`;
