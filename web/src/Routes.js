import React, { Component, useState } from "react";
import "./styles/App.css";
import HomeHero from "./styles/HomeHero";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";

import Lessons from "./pages/Lessons";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleLesson from "./pages/SingleLesson";
import Error from "./pages/Error";

import Navbar from "./navbar/Navbar";

import Schedules from "./components/Schedules";
import LessonForm from "./forms/LessonForm";
import { AuthContext } from "./context/auth";

class Routes extends Component {
  constructor(props) {
    super(props);
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    this.state = {
      navbarOpen: false,
      user: {
        isLoggedIn: !!auth ? true : false,
        currentUser: null,
        currentUserId: null,
        loginErrorMessage: ""
      }
    };
  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <AuthContext.Provider value={{ ...this.state.user }}>
        <BrowserRouter>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <Switch>
            <Route exact path="/">
              <HomeHero>
                <h2>Welcome to the class room!</h2>
              </HomeHero>
            </Route>
            <Route exact path="/lessons" component={Lessons} />
            <Route exact path="/lessons/:id" component={SingleLesson} />
            <Route exact path="/schedules" component={Schedules} />
            <Route exact path="/add-lessons" component={LessonForm} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route component={Error} />
            <PrivateRoute exact path="/admin" component={Admin} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    );
  }
}

export default Routes;
