import React, { Component } from "react";
import { Container } from "../styles/Container";

class Error extends Component {
  state = {};
  render() {
    return (
      <Container>
        <div>Page not found</div>
      </Container>
    );
  }
}

export default Error;
