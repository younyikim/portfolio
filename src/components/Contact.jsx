import styled from 'styled-components';
import Profile from 'assets/contact.png';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { VscGithubAlt } from 'react-icons/vsc';

const Contact = () => {
  const paperArr = ['#63CEE5', '#799EFF', '#7CDDBA', '#9C5FFF', '#F36BFF', '#FF8484', '#FF9A84', '#FFAA5C', '#FFE486'];

  const flakeElArr = [];
  const randomPaperFlakes = () => {
    for (let i = 0; i < 20; i++) {
      const idx = Math.floor(Math.random() * 9);
      const imgSrc = paperArr[idx];
      flakeElArr.push(<Flake key={i} color={imgSrc} />);
    }

    return flakeElArr;
  };

  return (
    <StyledContactWrapper>
      <StyledDecoration>{randomPaperFlakes()}</StyledDecoration>
      <StyledLeft>
        <img src={Profile} alt="" />
      </StyledLeft>
      <StyledRight>
        <StyledContact>
          <h1>김 연 이</h1>
          <p>
            <em>SOPT 29기 웹잼에서 즐겁게 함께할 팀을 찾고 있습니다! </em>
            <br /> 웹잼을 통해 개인적인 성장도 중요하게 생각하지만, 그보다는 서로가 서로에게 긍정적 영향을 주는 팀원들과
            함께하고 싶습니다. 궁금하신 점이 있다면, 아래의 연락처로 편하게 연락주세요.
          </p>
          <StyledContactInfo>
            <div>
              <BsPhone />
              <span>010-9568-1042</span>
            </div>
            <div>
              <AiOutlineMail />
              <span>rlakuku1221@gmail.com</span>
            </div>
            <div>
              <BsInstagram />
              <span>yenoexiste</span>
            </div>

            <div>
              <VscGithubAlt />
              <span>younyikim</span>
            </div>
          </StyledContactInfo>
        </StyledContact>
      </StyledRight>
    </StyledContactWrapper>
  );
};

export default Contact;

const StyledContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const StyledLeft = styled.div`
  position: relative;
  top: 0rem;
  left: -39rem;
  width: 120%;
  height: 200%;
  border-radius: 50%;
  background-color: #f8df8b;

  & > img {
    width: 130%;
    position: relative;
    bottom: -5rem;
    left: 3rem;
    z-index: 1;
  }
`;

const StyledRight = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  line-height: 1.8;
`;

const StyledContact = styled.div`
  position: relative;
  top: 20rem;
  right: 10rem;
  color: white;
  height: 100%;

  & > h1 {
    font-family: 'TmonMonsori';
    font-size: 5rem;
  }

  & > p {
    font-size: 1.8rem;

    & > em {
      font-size: 2.3rem;
      font-weight: 800;
      color: #f8df8b;
    }
  }
`;

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.3rem;
  width: 50rem;

  & > div {
    display: flex;
    align-items: center;
    font-size: 1.8rem;

    & > svg {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
    }
  }

  & > div + div {
    margin-top: 1rem;
  }
`;

const StyledDecoration = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 80rem;
  position: absolute;
  top: 2rem;
`;

const Flake = styled.div`
  background-color: ${(props) => props.color};

  width: 6rem;
  height: 6rem;
  display: inline-block;
  animation: paperflakes 2s linear;

  &:nth-child(3n) {
    animation-duration: 2s;
    animation-iteration-count: 30;
    transform-origin: right -45px;
  }

  &:nth-child(3n + 1) {
    animation-duration: 4s;
    animation-iteration-count: 45;
    transform-origin: right -30px;
  }

  &:nth-child(3n + 2) {
    animation-duration: 6s;
    animation-iteration-count: 60;
    transform-origin: right -15px;
  }

  /* 모두 같은 시간에 시작하지 않도록, 시간차이를 둔다. */
  &:nth-child(7n) {
    opacity: 0.3;
    animation-delay: 0s;
    animation-timing-function: ease-in;
  }
  &:nth-child(7n + 1) {
    opacity: 0.4;
    animation-delay: 0.1s;
    animation-timing-function: ease-out;
  }
  &:nth-child(7n + 2) {
    opacity: 0.5;
    animation-delay: 0.2s;
    animation-timing-function: linear;
  }
  &:nth-child(7n + 3) {
    opacity: 0.6;
    animation-delay: 0.3s;
    animation-timing-function: ease-in;
  }
  &:nth-child(7n + 4) {
    opacity: 0.7;
    animation-delay: 0.4s;
    animation-timing-function: linear;
  }
  &:nth-child(7n + 5) {
    opacity: 0.8;
    animation-delay: 0.5s;
    animation-timing-function: ease-out;
  }
  &:nth-child(7n + 6) {
    opacity: 0.9;
    animation-delay: 0.8s;
    animation-timing-function: ease-in;
  }
  &:nth-child(7n + 7) {
    opacity: 1;
    animation-delay: 1s;
    animation-timing-function: ease-in;
  }

  @keyframes paperflakes {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(0.6);
    }
    100% {
      transform: translate3d(15px, 1200px, 0px) rotate(180deg) scale(0.6);
    }
  }
`;
