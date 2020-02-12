import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./navbar/Navbar";

import Lessons from "./pages/Lessons";
import Login from "./pages/Login";
import SingleLesson from "./pages/SingleLesson";
import Checkout from "./bookings/Checkout";

import Register from "./components/Register";
import Schedules from "./components/Schedules";
import Cart from "./bookings/Cart";
import Error from "./components/Error";

import LessonForm from "./forms/LessonForm";

import AdminDashboard from "./admin/AdminDashboard";
import AdminHome from "./admin/AdminHome";
import AdminSignIn from "./admin/AdminSignIn";
import PrivateRoute from "./admin/PrivateRoute";
import PublicRoute from "./admin/PublicRoute";

class Routes extends Component {
  constructor(props) {
    super(props);
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    this.state = {
      toHomepage: false,
      isLoggedIn: !!auth ? true : false,
      currentUser: null,
      currentUserId: null,
      loginErrorMessage: ""
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    // debugger;
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    console.log(auth);
    if (!auth) return;
    axios
      .get(`/users/${auth.userId}`, {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      .then((response) => {
        this.setState({
          currentUser: response.data,
          currentUserId: auth.userId,
          isLoggedIn: true,
          toHomepage: true
        });
        if (this.state.toHomepage === true) {
          return <Redirect to="/" />;
        }
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
        <Navbar user={userDetails} />
        <Switch>
          <Route exact path="/" component={Lessons} user={userDetails} />
          <Route
            exact
            path="/lessons/:id"
            component={SingleLesson}
            user={userDetails}
          />

          <Route
            exact
            path="/checkout"
            component={Checkout}
            user={userDetails}
          />
          <Route exact path="/Cart" component={Cart} user={userDetails} />

          <Route
            exact
            path="/login"
            component={() => <Login user={userDetails} />}
          />
          <Route
            exact
            path="/register"
            component={Register}
            user={userDetails}
          />
          <PrivateRoute
            restricted={true}
            component={AdminHome}
            path="/admin-home"
            exact
          />
          <PublicRoute
            restricted={true}
            component={AdminSignIn}
            path="/admin-signin"
            exact
          />
          <PrivateRoute
            restricted={true}
            component={AdminDashboard}
            path="/admin-dashboard"
            exact
          />
          <Route exact path="/add-lessons" component={LessonForm} />
          <Route exact path="/schedules" component={Schedules} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
