import Header from 'commons/Header';
import MainBody from 'components/MainBody';
import Nav from 'components/Nav';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <StyledWrapper>
      <MainBody />
      <MainBody />
      <MainBody />
      <MainBody />
      <Nav />
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #090910;
`;
