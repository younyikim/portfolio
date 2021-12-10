import styled from 'styled-components';

const WarningPage = () => {
  return <StyledWarning>모바일 노노</StyledWarning>;
};

export default WarningPage;

const StyledWarning = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: tomato;
  z-index: 100;
  overflow-y: hidden;
`;
