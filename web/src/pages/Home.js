import React, { Component } from "react";
import HomeHero from "../styles/HomeHero";
import { Container } from "../styles/Container";
import {
  LessonContainer,
  LessonCardContainer,
  LessonDetailsContainer,
  LessonLink,
  LessonImage,
  LessonDetails
} from "../styles/LessonHomeStyle";
import { Link } from "react-router-dom";

class Home extends Component {
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
          {/* <LessonImage>{item.image}</LessonImage> */}
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
      padding: "100px"
    };
    return (
      <div style={box}>
        <HomeHero>
          <h1>Upcoming Lessons in 2020</h1>
        </HomeHero>
        {/* <Container> */}
        <LessonContainer>{lessonList}</LessonContainer>
        <Link to="/(@page - 1)">Previous Page</Link> &nbsp; &nbsp;
        <Link to="/(@page + 1)">Next Page</Link>
        {/* </Container> */}
      </div>
    );
  }
}

export default Home;
