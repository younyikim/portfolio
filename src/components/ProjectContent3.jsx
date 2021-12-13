import styled from 'styled-components';
import Anime from 'assets/anime.png';
import Brunch from 'assets/brunch.png';
import { BsDot } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';

const ProjectContent3 = () => {
  return (
    <StyledContentWrapper>
      <StyledDesc>
        <h1>SOPT Study</h1>
        <ul>
          <li>
            <h2>Web Part</h2>
          </li>
          <li>
            <div>
              <h3>React Study : 아이리스</h3>
              <p>
                React 스터디에 참여하며, React의 기초부터 Redux, Webpack 등 심화 내용까지 두루 공부하였으며,{' '}
                <em>스터디장</em>을 맡아 8주간의 스터디를 성공적으로 이끌었습니다. Notion [웹 파트 스터디]에서 기록들을
                볼 수 있습니다.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3>Animation Study : 아니메</h3>
              <p>
                애니메이션 스터디에서, CSS와 자바스크립트 애니메이션에 대해 공부하고, 실제 애니메이션을 구현하는 것 부터
                다양한 라이브러리를 적용하는 방법까지 폭넓게 공부하였습니다. 이를 바탕으로, 앞서 소개한 COEAT, Brunch
                Re-Design 프로젝트에서도 <em>다양한 애니메이션을 직접 구현</em>하였습니다. 앱잼에서도 다양하고 멋진
                애니메이션을 꼭 구현해보고 싶습니다.
              </p>
            </div>
          </li>
          <li>
            <h2>Every Part</h2>
          </li>
          <li>
            <div>
              <h3>Javascript Algorithm Study</h3>

              <p>
                자바스크립트 알고리즘 스터디를 통해, 자바스크립트 심화 문법과 문제를 해결하는{' '}
                <em>효율적인 코드와 자료구조</em>에 대해 공부했습니다.
              </p>
            </div>
          </li>
        </ul>
      </StyledDesc>
      <StyledDescPost>
        <h2>My Posts</h2>
        <p>
          SOPT에서의 기록, 공부 기록들을 천천히, 하지만 꾸준히 기록하려 노력하고 있습니다. Velog 기술 블로그와 개인
          Notion에 다양한 글들을 기록하고 있습니다.
        </p>
        <StyledCardWrapper>
          <a
            href="https://velog.io/@younyikim/Error-React%EC%97%90%EC%84%9C-SVG-%ED%8C%8C%EC%9D%BC%EC%9D%B4-%EB%8D%AE%EC%96%B4%EC%94%8C%EC%9B%8C%EC%A7%80%EB%8A%94-%EB%AC%B8%EC%A0%9C"
            rel="noopener noreferrer"
            target="_blank">
            <StyledCard>
              <CardImgWrapper>
                <img
                  src="https://media.vlpt.us/images/younyikim/post/38656971-d303-4bbb-8457-892be82fa616/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-11-19%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2010.31.23.png?w=768"
                  alt=""
                />
              </CardImgWrapper>
              <div>
                <h3> React에서 SVG 파일이 덮어씌워지는 문제</h3>
                <p>2021년 11월 19일</p>
              </div>
            </StyledCard>
          </a>
          <a
            href="https://time-knee-9fd.notion.site/Brunch-Re-design-45eef6160db44949aebcf4113b0fbdf9"
            target="_blank"
            rel="noopener noreferrer">
            <StyledCard>
              <CardImgWrapper>
                <img src={Brunch} alt="" />
              </CardImgWrapper>
              <div>
                <h3> 합동 세미나 - Brunch Re-design</h3>
                <p>2021년 12월 3일</p>
              </div>
            </StyledCard>
          </a>
        </StyledCardWrapper>
      </StyledDescPost>
    </StyledContentWrapper>
  );
};

export default ProjectContent3;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: center;
  margin: 0 auto;
  width: calc(100% - 29rem);
  height: 100%;
  color: white;
  position: relative;
  padding-top: 12rem;
`;

const StyledDesc = styled.div`
  width: 100%;
  margin-right: 2.3rem;
  font-size: 1.7rem;

  & > h1 {
    font-family: 'TmonMonsori';
    font-size: 3.3rem;
    margin-bottom: 2rem;
  }

  & > ul {
    font-weight: bolder;

    & > li + li {
      margin-top: 2rem;
    }

    & > li {
      & > svg {
        fill: #f8df8b;
        margin-left: 1rem;
        font-size: 2rem;
      }
      & > span {
        cursor: pointer;
        font-weight: bolder;
        color: #f8df8b;
      }

      & > h2 {
        font-size: 1.8rem;
        color: #f8df8b;
      }

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        & > h3 {
          font-size: 2rem;
          margin-bottom: 0.3rem;
          border: 1px solid #f8df8b;
          padding: 0.8rem 1rem;
        }

        & > a {
          text-decoration: none;
        }

        & > p {
          line-height: 1.8;
          font-weight: normal;

          & > em {
            background-color: #ffa60065;
            padding: 0.5rem 0.8rem;
          }
        }
      }

      & > img {
        width: 100%;
        height: 12.5rem;
      }
    }
  }
`;

const StyledDescPost = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 2.3rem;
  font-size: 1.7rem;

  & > h2 {
    font-family: 'TmonMonsori';
    font-size: 3.3rem;
    margin-bottom: 2rem;
  }

  & > p {
    line-height: 1.8;
    margin: 3rem 0;
  }
`;

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;

  & > a {
    text-decoration: none;
  }
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 243, 245);
  width: 100%;
  height: 34.5rem;
  border-radius: 0.3rem;
  -webkit-box-shadow: 5px 11px 15px -11px #000000;
  box-shadow: 5px 11px 15px -11px #000000;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  color: black;

  &:hover {
    transform: translateY(-8px);
  }

  & > div:last-child {
    margin: 0 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    & > h3 {
      font-weight: bolder;
    }

    & > p {
      color: gray;
    }
  }
`;

const CardImgWrapper = styled.div`
  position: relative;
  padding-top: 62.1921%;
  margin-bottom: 16px;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.3rem;
  }
`;
