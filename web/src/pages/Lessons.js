import React, { Component } from "react";
import StyledHero from "../styles/StyledHero";
import {
  LessonContainer,
  LessonCardContainer,
  LessonDetailsContainer,
  LessonLink,
  LessonImage,
  LessonDetails
} from "../styles/LessonHomeStyle";
import { Link } from "react-router-dom";

class Lessons extends Component {
  state = {
    lessons: []
  };
  componentDidMount() {
    fetch("/api/lessons")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ lessons: json });
      });
  }

  render() {
    const lessonList = this.state.lessons.map((item, key) => (
      <LessonCardContainer key={key}>
        <LessonLink to={`/lesson/${this.props.lessonId}`}>
          {/* <LessonImage>url("{item.image}")</LessonImage> */}
          <LessonDetailsContainer>
            <LessonDetails>{item.title}</LessonDetails>
            <LessonDetails>{item.duration}</LessonDetails>
            <LessonDetails> {item.cost}</LessonDetails>
            <LessonDetails>{item.language}</LessonDetails>
            <LessonDetails> {item.level}</LessonDetails>
          </LessonDetailsContainer>
        </LessonLink>
      </LessonCardContainer>
    ));
    const box = {
      padding: "100px",
      position: "reletive"
    };
    const box2 = {
      margin: "0",
      position: "absolute",
      top: "90%",
      left: "50%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    };
    return (
      <div style={box}>
        <StyledHero>
          <h1>Upcoming Lessons in 2020</h1>
        </StyledHero>
        {/* <Container> */}
        <LessonContainer>{lessonList}</LessonContainer>
        <div style={box2}>
          <Link to="/(@page - 1)">Previous Page</Link> &nbsp;|&nbsp;
          <Link to="/(@page + 1)">Next Page</Link>
        </div>

        {/* </Container> */}
      </div>
    );
  }
}

export default Lessons;
