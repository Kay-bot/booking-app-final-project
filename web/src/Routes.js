import React, { Component } from "react";
import "./styles/App.css";

import Home from "./pages/Home";
import LessonForm from "./forms/LessonForm";
import Schedules from "./components/Schedules";
import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";

import Navbar from "./navbar/Navbar";

import { BrowserRouter, Switch, Route } from "react-router-dom";

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
        <BrowserRouter>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/schedules" component={Schedules} />
            <Route exact path="/add-lessons" component={LessonForm} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Routes;
