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
            <div>
              <img src={this.state.lesson.url} />
            </div>

            <b>{this.state.lesson.title}</b>
            <p>
              <b>Cost: </b>${this.state.lesson.cost} AUD <b>Duration:</b>
              &nbsp; Approx. {this.state.lesson.duration} hours
            </p>
            <p>
              <b>Level:</b> {this.state.lesson.level} &nbsp;
              <b>Language: </b>
              {this.state.lesson.language}
            </p>
            <p>
              <b>Class description: </b>
              {this.state.lesson.description}
            </p>
          </div>
        ) : (
          <p>No lesson details</p>
        )}
      </Container>
    );
  }
}

export default SingleLesson;
