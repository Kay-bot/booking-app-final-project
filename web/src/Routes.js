import React, { Component } from "react";
import axios from "axios";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Lessons from "./pages/Lessons";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SingleLesson from "./pages/SingleLesson";
import Cart from "./pages/Cart";
// import Error from "./pages/Error";

import Navbar from "./navbar/Navbar";

import Schedules from "./components/Schedules";
import LessonForm from "./forms/LessonForm";

class Routes extends Component {
  constructor(props) {
    super(props);
    let auth = sessionStorage.getItem("auth");
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

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    debugger;
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    console.log(auth);
    if (!auth) return;
    axios
      .get(`/users/${auth.userId}`, {
        headers: { Authorization: auth.token }
      })
      .then((response) => {
        this.setState({
          currentUser: response.data,
          currentUserId: auth.userId,
          isLoggedIn: true
        });
        return <Redirect to="/" />;
      });
  };

  handleLogin = (email, password) => {
    axios
      .post(`/login`, {
        email: email,
        password: password
      })
      .then((response) => {
        sessionStorage.setItem("auth", JSON.stringify(response.data));
        this.getUser();
      })
      .catch((err) => {
        this.setState({
          loginErrorMessage: "Fail to login. Pleaes try again!"
        });
        return <Redirect to="/register" />;
      });
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  handleLogout = () => {
    sessionStorage.setItem("auth", null);
    this.setState({ currentUser: null, isLoggedIn: false });
  };
  render() {
    const userDetails = {
      isLoggedIn: this.state.isLoggedIn,
      loginErrorMessage: this.state.loginErrorMessage,
      currentUser: this.state.currentUser,
      currentUserId: this.state.currentUserId,

      logout: () => this.handleLogout(),
      login: (email, password) => this.handleLogin(email, password)
    };

    return (
      <BrowserRouter>
        <Navbar
          user={userDetails}
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <Switch>
          <Route exact path="/" component={Lessons} user={userDetails} />
          <Route exact path="/lessons" component={Lessons} user={userDetails} />
          <Route
            exact
            path="/lessons/:id"
            component={SingleLesson}
            user={userDetails}
          />
          <Route exact path="/cart" component={Cart} user={userDetails} />
          <Route
            exact
            path="/schedules"
            component={Schedules}
            user={userDetails}
          />
          <Route
            exact
            path="/add-lessons"
            component={LessonForm}
            user={userDetails}
          />
          <Route
            exact
            path="/login"
            component={() => <Login user={userDetails} />}
          />
          <Route
            exact
            path="/Register"
            component={Register}
            user={userDetails}
          />
          {/* <Route component={Error} /> */}
          <PrivateRoute
            exact
            path="/admin"
            component={Admin}
            user={userDetails}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
