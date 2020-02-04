import React, { Component } from "react";
import Axios from "axios";
import { Container } from "../styles/Container";

class SingleLesson extends Component {
  state = {
    lesson: {}
  };

  componentDidMount() {
    Axios.get(`/api/lessons/${this.props.match.params.id}`).then((result) => {
      console.log("result:", result);
      this.setState({ lesson: result.data.lesson });
    });
  }
  render() {
    return (
      <Container>
        {this.state.lesson ? (
          <div>
            <h1>{this.state.lesson.title}</h1>
            <p>{this.state.lesson.cost}</p>
            <p>{this.state.lesson.duration}</p>
            <p>{this.state.lesson.level}</p>
            <p>{this.state.lesson.language}</p>
            <p>{this.state.lesson.description}</p>
          </div>
        ) : (
          <p>No lesson details</p>
        )}
      </Container>
    );
  }
}

export default SingleLesson;
