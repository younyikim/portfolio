import styled from 'styled-components';
import Anime from 'assets/anime.png';
import Brunch from 'assets/brunch.png';
import { BsDot } from 'react-icons/bs';
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

              <StyledLink>
                {' '}
                <SiNotion /> <span>Notion</span>
              </StyledLink>
            </div>
          </li>
          <li>
            <div>
              <p>
                {' '}
                <BsDot />
                Animation Study : 아니메
              </p>

              <StyledLink>
                {' '}
                <SiNotion /> <span>Notion</span>
              </StyledLink>
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

              <StyledLink>
                {' '}
                <SiNotion /> <span>Notion</span>
              </StyledLink>
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
  padding-top: 21rem;
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

        & > a {
          text-decoration: none;
        }

        & > a:visited {
          color: white;
        }

        & > a:link {
          color: white;
        }
      }

      & > img {
        width: 100%;
        height: 12.5rem;
      }
    }
  }
`;

const StyledLink = styled.div`
  display: flex;
  border: 1px solid white;
  padding: 0.3rem 1rem 0.1rem 1rem;

  & > span {
    margin-left: 0.6rem;
    line-height: 1.3;
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
    margin: 0 0.8rem 0.8rem 0.8rem;
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
