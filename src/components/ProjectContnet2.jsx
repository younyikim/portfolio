import styled from 'styled-components';
import Brunch from 'assets/brunch.gif';
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
            <span>SOPT 29th 클라이언트, 디자인, 서버 합동 세미나에서 진행한 프로젝트입니다.</span>
          </li>
          <li>
            <h2>2021년 11월 ~ 12월</h2>
          </li>
          <li>
            <h3>
              {' '}
              <BsDot />
              Article
            </h3>
            <p>
              아티클 페이지의 header, body, footer, 댓글의 UI를 구현하였으며, 모바일/태블릿 기기에 대한 <i>반응형 뷰</i>
              도 적용하였습니다.
            </p>
            <br />
            <p>
              <em>Body (본문)</em> : 전체 본문의 스타일(제목, 부제목, 사진 등)을 그대로 서버에서 가져오기 위해, 서버-웹
              파트원, 파트장 분들과 상의하여 전체 본문 내용을 HTML 태그로 변환하여 저장하였습니다. 일반적인 저장 방식은
              아니었지만, 주어진 상황 속에서 최선의 <i>결과를 도출하기 위하여 끊임없이 노력</i>하여, 원하는 결과를
              만들어낼 수 있었습니다.
            </p>
            <p>
              <em>댓글, 좋아요 버튼</em> : 실시간 댓글 작성 기능과 좋아요 버튼을 구현하였습니다. 앱잼에서{' '}
              <i>댓글이나 좋아요, 스크랩</i> 등의 기능이 필요하다면 이를 응용하여 구현할 수 있습니다.
            </p>
          </li>
        </ul>
        <StyledLink>
          <a href="https://github.com/we-sopt-sibi/client" target="_blank" rel="noopener noreferrer">
            <BsLink /> <span>Github Repository</span>
          </a>
          <a
            href="https://time-knee-9fd.notion.site/Brunch-Re-design-45eef6160db44949aebcf4113b0fbdf9"
            target="_blank"
            rel="noopener noreferrer">
            <BsLink /> <span>Brunch 회고록</span>
          </a>
        </StyledLink>
      </StyledDesc>
      <StyledImgWrapper>
        <img src={Brunch} alt="" />
        <StyledTags>
          <ul>
            <li>SOPT</li>
            <li>합동 세미나</li>
            <li>Re-Design</li>
            <li>REST API</li>
            <li>댓글</li>
            <li>좋아요</li>
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
        font-weight: normal;
        font-style: italic;
      }

      & > h2 {
        font-size: 1.8rem;
        color: #f8df8b;
      }

      & > h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }

      & > p {
        line-height: 1.8;
        font-weight: normal;

        & > em {
          color: #f8df8b;
        }

        & > i {
          background-color: #f8df8ba2;
          padding: 0.5rem 0.8rem;
        }
      }
    }
  }
`;

const StyledImgWrapper = styled.div`
  margin-right: 3rem;
  width: 100%;

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

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  & > a {
    background-color: #f8df8b;
    padding: 0.6rem 1rem;
    width: 100%;
    margin-right: 1rem;
    text-decoration: none;
    text-align: center;
    color: #4a2c2c;
    font-weight: bolder;
  }
`;
