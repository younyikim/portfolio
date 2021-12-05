import styled from 'styled-components';
import React from 'react';
import Slider from 'react-slick';
import '../styles/slick-theme.css';
import '../styles/slick.css';
import ProjectContent from './ProjectContent';
import ProjectContent2 from './ProjectContnet2';
import ProjectContent3 from './ProjectContent3';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledProjectWrapper>
      <Slider {...settings}>
        <StyledContentFirst>
          <ProjectContent />
        </StyledContentFirst>
        <StyledContentSecond>
          <ProjectContent2 />
        </StyledContentSecond>
        <StyledContentLast>
          <ProjectContent3 />
        </StyledContentLast>
      </Slider>
    </StyledProjectWrapper>
  );
};

export default Projects;

const StyledProjectWrapper = styled.div`
  height: 100%;
  width: 100%;
  font-size: 3rem;
`;
const StyledContentFirst = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  background-color: black;
`;

const StyledContentSecond = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  background-color: #4a2c2c;
`;

const StyledContentLast = styled.div`
  width: 100%;
  height: 100vh;
  font-size: 3rem;
  background-color: #a9333a;
`;
