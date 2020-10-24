import React from "react";
import Slider from "react-slick";
import { TeamGrid, TeamRow, Title, Description, Slide } from "./styledTeam";

const CustomSlide = ({ index }) => {
  return (
    <Slide>
      <h3>{index}</h3>
    </Slide>
  );
};

const Team = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div className="App">
      <TeamGrid>
        <TeamRow>
          <Title>Meet the Team</Title>
        </TeamRow>
        <TeamRow>
        <Description>Passionate students driving the success of the program</Description>
        </TeamRow>
        <TeamRow>
          <Slider {...settings}>
            <CustomSlide index={1} />
          </Slider>
        </TeamRow>
      </TeamGrid>
    </div>
  );
};

export default Team;
