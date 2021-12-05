import styled from 'styled-components';
import Anime from 'assets/anime.png';
import Velog from 'assets/velog.jpeg';
import { BsDot, BsLink } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';

const ProjectContent3 = () => {
  return (
    <StyledContentWrapper>
      <StyledDesc>
        <h2>SOPT Study</h2>
        <ul>
          <li>
            <h3>Web Part</h3>
          </li>
          <li>
            <div>
              <p>
                {' '}
                <BsDot />
                React Study : 아이리스
              </p>
              <div>
                {' '}
                <SiNotion /> Notion
              </div>
            </div>
          </li>
          <li>
            <div>
              <p>
                {' '}
                <BsDot />
                Animation Study : 아니메
              </p>
              <div>
                {' '}
                <SiNotion /> Notion
              </div>
            </div>
          </li>
          <li>
            <h3>Every Part</h3>
          </li>
          <li>
            <div>
              <p>
                {' '}
                <BsDot />
                Javascript Algorithm Study
              </p>
              <div>
                {' '}
                <SiNotion /> Notion
              </div>
            </div>
          </li>
          <li>
            <img src={Anime} alt="" />
          </li>
        </ul>
      </StyledDesc>
      <StyledDescPost>
        <h2>My Posts</h2>
        <StyledCardWrapper>
          <StyledCard>
            <CardImgWrapper>
              <img src={Velog} alt="" />
            </CardImgWrapper>

            <h3> React에서 SVG 파일이 덮어씌워지는 문제</h3>
            <p>2021년 11월 19일</p>
          </StyledCard>
          <StyledCard>
            <CardImgWrapper>
              <img src={Velog} alt="" />
            </CardImgWrapper>
            <h3> React에서 SVG 파일이 덮어씌워지는 문제</h3>
            <p>2021년 11월 19일</p>
          </StyledCard>
          {/* <StyledCard>
            <CardImgWrapper>
              <img src={Velog} alt="" />
            </CardImgWrapper>
            <h3> React에서 SVG 파일이 덮어씌워지는 문제</h3>
            <p>2021년 11월 19일</p>
          </StyledCard>
          <StyledCard>
            <CardImgWrapper>
              <img src={Velog} alt="" />
            </CardImgWrapper>
            <h3> React에서 SVG 파일이 덮어씌워지는 문제</h3>
            <p>2021년 11월 19일</p>
          </StyledCard> */}
        </StyledCardWrapper>

        <ul>
          <li>
            {/* <a
              href="https://velog.io/@younyikim/Error-React%EC%97%90%EC%84%9C-SVG-%ED%8C%8C%EC%9D%BC%EC%9D%B4-%EB%8D%AE%EC%96%B4%EC%94%8C%EC%9B%8C%EC%A7%80%EB%8A%94-%EB%AC%B8%EC%A0%9C"
              target="_blank"
              rel="noopener noreferrer">
              React에서 SVG 파일이 덮어씌워지는 문제
            </a> */}
          </li>
          <li>
            {/* <a
              href="https://velog.io/@younyikim/ErrorError-Result...-Nothing-was-returned-from-render.-This-usually-means-a-return-statement-is-missing.-Or-to-render-nothing-return-null"
              target="_blank"
              rel="noopener noreferrer">
              [Error]Error: Result(...): Nothing was returned from render. This usually means a return statement is
              missing. Or, to render nothing, return null.
            </a> */}
          </li>
          {/* <li>
            <a
              href="https://time-knee-9fd.notion.site/Brunch-Re-design-45eef6160db44949aebcf4113b0fbdf9"
              target="_blank"
              rel="noopener noreferrer">
              합동 세미나 - Brunch Re-design 회고록
            </a>
          </li>
          <li>
            <a
              href="https://time-knee-9fd.notion.site/COEAT-44d4a363242c4742809743dc03f17f91"
              target="_blank"
              rel="noopener noreferrer">
              솝커톤 - COEAT 회고록
            </a>
          </li>
          <li>
            <a
              href="https://time-knee-9fd.notion.site/Project-HTML-CSS-JS-0c091530fd704ddb88e7194e616c6002"
              target="_blank"
              rel="noopener noreferrer">
              Project - HTML/CSS/JS
            </a>
          </li> */}
        </ul>
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
  padding-top: 15rem;
`;

const StyledDesc = styled.div`
  width: 100%;
  margin-right: 2.3rem;
  font-size: 1.7rem;

  & > h2 {
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

      & > h3 {
        font-size: 1.8rem;
        color: #f8df8b;
      }

      & > div {
        display: flex;
        justify-content: space-between;
      }

      & > img {
        width: 100%;
      }

      & > a:link {
        color: white;
      }

      & > a:visited {
        color: white;
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
`;

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(241, 243, 245);
  width: 100%;
  height: 30rem;
  border-bottom: 1px solid rgb(233, 236, 239);
  border-radius: 1rem;
  color: black;
`;

const CardImgWrapper = styled.div`
  position: relative;
  padding-top: 52.1921%;
  margin-bottom: 16px;

  & > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;
