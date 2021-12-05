import styled, { keyframes } from 'styled-components';

const Progress = ({ percent }) => {
  const moveProgress = (percent) => keyframes`   
        0% {
            width: 0px;
        }
        100% {
            width: ${percent}%;
        }`;
  return (
    <StyledProgressWrapper>
      <StyledProgress percent={percent} moveProgress={moveProgress}>
        <StyledLiquid />
      </StyledProgress>
      <span>{percent}%</span>
    </StyledProgressWrapper>
  );
};

export default Progress;

const StyledProgressWrapper = styled.div`
  width: 50rem;
  height: 4rem;

  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  & > span {
    font-size: 2rem;
    font-weight: bolder;
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: white;
  }
`;

const StyledProgress = styled.div`
  width: ${(props) => props.percent};
  height: 100%;
  background-color: #f8df8b;
  border-radius: 1rem;
  position: absolute;
  animation: ${(props) => props.moveProgress(props.percent)} 1000ms 1 forwards;

  @keyframes move {
    from {
      width: 0;
    }
    to {
      width: ${(prop) => prop.percent};
    }
  }
`;

const StyledLiquid = styled.div`
  width: 5rem;
  height: 5rem;
  background-color: #f8df8b;
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  border-radius: 40%;
  animation: wave 3000ms infinite cubic-bezier(0.5, 0.5, 0.5, 0.5);

  @keyframes wave {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
