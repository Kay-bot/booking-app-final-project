import React, { Component } from "react";
import { Router } from "@reach/router";
import App from "./components/App";
import LessonForm from "./forms/LessonForm";
import Navbar from "./navbar/Navbar";
import GlobalStyle from "./styles/Global";
import Schedules from "./components/Schedules";

const About = () => <h1>Coming soon!</h1>;

class Routes extends Component {
  state = {
    navbarOpen: false
  };
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };
  render() {
    return (
      <>
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Router>
          <App path="/" />
          <About path="/about" />
          <Schedules path="/schedules" />
          <LessonForm path="/add-lessons" />
        </Router>
        <GlobalStyle />
      </>
    );
  }
}

export default Routes;
