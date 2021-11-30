import styled from 'styled-components';
import bearImg from 'assets/bear.png';
import Fade from 'react-reveal/Fade';
import { ReactComponent as ReactLogo } from 'assets/react.svg';
import { ReactComponent as HtmlLogo } from 'assets/html.svg';
import { ReactComponent as CssLogo } from 'assets/css.svg';
import { ReactComponent as GitLogo } from 'assets/git.svg';
import { ReactComponent as JSLogo } from 'assets/js.svg';
import { ReactComponent as JavaLogo } from 'assets/java.svg';

const MainBody = () => {
  return (
    <StyledWrapper>
      <StyledLeft>
        <ReactLogo />
        <HtmlLogo />
        <CssLogo />
        <JSLogo />
        <GitLogo />
        <JavaLogo />
      </StyledLeft>
      <StyledRight>
        <StyledContent>
          <Fade bottom>
            <img src={bearImg} alt="" />
            <h3>About Me </h3>
            <h2>김 연 이 | Younyi Kim</h2>
            <h3>
              SOPT 29th YB <span>Web</span> Part
            </h3>
            <br />
            <div>
              <p>
                반갑습니다! 저는 웹 프론트엔드 개발자, 김연이입니다.
                <br />
                아무것도 없는 흰 화면에서, 퍼즐을 맞추듯 한 조각씩 나의 코드 더해가는 재미에 매료되어 개발자의 꿈을
                가지게 되었습니다. 아직 배울 것이 많은 개발자이지만, 주어지는 과제, 프로젝트 하나 하나 모두 성장을 위한
                기회로 삼고 항상 최선을 다해 노력하고 몰입하는 개발자입니다.
              </p>
            </div>
          </Fade>
        </StyledContent>
      </StyledRight>
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
  background-color: #090910;
`;

const StyledLeft = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  border: 1px solid red;

  & > svg {
    width: 10rem;
    height: 10rem;
  }
`;

const StyledRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
`;

const StyledContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid blueviolet; */
  font-size: 1.8rem;
  color: white;
  line-height: 2;

  & > h2 {
    font-size: 2.4rem;
  }

  & > h3 {
    font-size: 2.2rem;
    & > span {
      color: #f8df8b;
    }
  }
  & > img {
    width: 6rem;
    height: 6rem;
  }

  & > div {
    font-size: 1.5rem;
    width: 32rem;
  }
`;
