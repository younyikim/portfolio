import styled from 'styled-components';
import Profile from 'assets/contact.png';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { VscGithubAlt } from 'react-icons/vsc';

const Contact = () => {
  return (
    <StyledContactWrapper>
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
