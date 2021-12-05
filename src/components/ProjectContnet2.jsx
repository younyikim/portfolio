import styled from 'styled-components';
import Coeat from 'assets/brunch.png';
import { BsDot, BsLink } from 'react-icons/bs';

const ProjectContent2 = () => {
  return (
    <StyledContentWrapper>
      <StyledDesc>
        <h2>
          글이 작품이 되는 공간, <em>Brunch</em> <br />: Re-Design
        </h2>
        <ul>
          <li>
            <p>SOPT 29th 클라이언트, 디자인, 서버 합동 세미나에서 진행한 프로젝트입니다.</p>
          </li>
          <li>
            <h3>2021년 11월 ~ 12월</h3>
          </li>
          <li>
            <p>
              {' '}
              <BsDot />
              Article 페이지를 담당하여 개발
            </p>
          </li>
          <li>
            <p>
              {' '}
              <BsDot />
              Article Page UI | Article, Comment, Likes GET, POST
            </p>
          </li>
          <li>
            <BsLink /> <span>Github Repository</span>
          </li>
          <li>
            <BsLink /> <span>Brunch Demo</span>
          </li>
        </ul>
      </StyledDesc>
      <StyledImgWrapper>
        <img src={Coeat} alt="" />
        <StyledTags>
          <ul>
            <li>SOPT</li>
            <li>합동 세미나</li>
            <li>Re-Design</li>
            <li>React</li>
            <li>REST API</li>
          </ul>
        </StyledTags>
      </StyledImgWrapper>
    </StyledContentWrapper>
  );
};

export default ProjectContent2;

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
    }
  }
`;

const StyledImgWrapper = styled.div`
  margin-right: 3rem;
  width: 100%;

  & > img {
    width: 90%;
  }
`;

const StyledTags = styled.div`
  margin-top: 4rem;

  & > ul {
    display: flex;
    flex-wrap: wrap;

    & > li {
      color: #4a2c2c;
      font-size: 1.5rem;
      background-color: #f8df8b;
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
