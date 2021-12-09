import styled from 'styled-components';
import Coeat from 'assets/coeat.jpeg';
import final from 'assets/final.gif';
import { BsDot, BsLink } from 'react-icons/bs';
const ProjectContent = () => {
  return (
    <StyledContentWrapper>
      <StyledDesc>
        <h2>
          C<em>O</em>EAT : 모두가 행복한, 메뉴 취합 서비스
        </h2>
        <ul>
          <li>
            <p>
              오늘 뭐 먹을래? 아무거나는 이제 그만! 팀원들의 선택을 바탕으로 오늘 코잇할 메뉴가 정해지면 못 먹는 메뉴는
              제외하고, 함께 먹고 싶은 메뉴를 최종 결정해주는 서비스
            </p>
          </li>
          <li>
            <h3>2021년 11월</h3>
          </li>
          <li>
            <p>
              <BsDot />
              솝커톤 COEAT 팀 프론트엔드 개발자로 참여 및 Refactoring 진행중
            </p>
          </li>

          <li>
            <p>
              {' '}
              <BsDot />
              Landig Page Input | Pick Page Footer | Modal Result Page 개발
            </p>
          </li>
          <li>
            <a href="https://github.com/CO-EAT/CO-EAT-CLIENT" target="_blank" rel="noopener noreferrer">
              <BsLink /> <span>Github Repository</span>
            </a>
          </li>
          <li>
            <a
              href="https://time-knee-9fd.notion.site/COEAT-44d4a363242c4742809743dc03f17f91"
              target="_blank"
              rel="noopener noreferrer">
              <BsLink /> <span>솝커톤 회고 기록</span>
            </a>
          </li>
        </ul>
      </StyledDesc>
      <StyledImgWrapper>
        <img src={final} alt="" />
        <StyledTags>
          <ul>
            <li>SOPT</li>
            <li>솝커톤</li>
            <li>React</li>
            <li>Styled-component</li>
          </ul>
        </StyledTags>
      </StyledImgWrapper>
    </StyledContentWrapper>
  );
};

export default ProjectContent;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: calc(100% - 29rem);
  height: 100%;
  color: white;
  position: relative;
`;

const StyledDesc = styled.div`
  width: 100%;
  margin-right: 2.3rem;
  font-size: 1.7rem;

  & > h2 {
    font-family: 'TmonMonsori';
    font-size: 3.3rem;
    margin-bottom: 2rem;

    & > em {
      color: orange;
    }
  }

  & > ul {
    font-weight: bolder;

    & > li:first-child {
      font-weight: lighter;
    }
    & > li + li {
      margin-top: 2rem;
    }

    & > li {
      & > svg {
        fill: orange;
        margin-left: 1rem;
        font-size: 2rem;
      }
      & > span {
        cursor: pointer;
        font-weight: bolder;
        color: orange;
      }

      & > h3 {
        font-size: 1.8rem;
        color: orange;
      }

      & > a {
        text-decoration: none;
        color: orange;
      }
    }
  }
`;

const StyledImgWrapper = styled.div`
  margin-right: 2rem;
  & > img {
    width: 100%;
  }
`;

const StyledTags = styled.div`
  margin-top: 4rem;

  & > ul {
    display: flex;
    flex-wrap: wrap;

    & > li {
      color: white;
      font-size: 1.5rem;
      background-color: orange;
      padding: 0.3rem 1rem;
      border-radius: 0.5rem;
      text-align: center;
      line-height: 1.6;
      margin-bottom: 1rem;
    }
    & > li + li {
      margin-left: 1rem;
    }
  }
`;
