import React, { Component } from "react";
import "./styles/App.css";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";

import Home from "./pages/Home";
import Admin from "./pages/Admin";

import { AuthContext } from "./context/auth";

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // navbarOpen: false,
    };
  }
  // handleNavbar = () => {
  //   this.setState({ navbarOpen: !this.state.navbarOpen });
  // };

  render() {
    return (
      <AuthContext.Provider value={false}>
        <BrowserRouter>
          {/* <Navbar
            user={userDetails}
            navbarState={this.state.navbarOpen}
            handleNavbar={this.handleNavbar}
          /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    );
  }
}

export default Routes;
