import React, { Component, useState } from "react";
import "./styles/App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";

import Lessons from "./pages/Lessons";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./navbar/Navbar";

import Schedules from "./components/Schedules";
import LessonForm from "./forms/LessonForm";
import { AuthContext } from "./context/auth";
// const [authToken, setAuthTokens] = useState();

// const setTokens = (data) => {
//   localStorage.setItem("token", JSON.stringify(data));
//   setAuthTokens(data);
// };

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarOpen: false
    };
  }
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <AuthContext.Provider value={false}>
        <BrowserRouter>
          <Navbar
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          />
          <Switch>
            <Route path="/lessons" component={Lessons} />
            <Route path="/schedules" component={Schedules} />
            <Route path="/add-lessons" component={LessonForm} />
            <Route path="/login" component={Login} />
            <Route path="/Register" component={Register} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    );
  }
}

export default Routes;
