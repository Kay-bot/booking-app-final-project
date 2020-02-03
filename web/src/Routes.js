import React, { useState } from "react";
import "./styles/App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./pages/PrivateRoute";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { AuthContext } from "./context/auth";

function Routes(props) {
  const [authToken, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("token", JSON.stringify(data));
    setAuthTokens(data);
  };
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     navbarOpen: false,
  //   };
  // }
  // handleNavbar = () => {
  //   this.setState({ navbarOpen: !this.state.navbarOpen });
  // };
  return (
    <AuthContext.Provider value={{ authToken, setAuthTokens: setTokens }}>
      <BrowserRouter>
        {/* <Navbar
              user={userDetails}
              navbarState={this.state.navbarOpen}
              handleNavbar={this.handleNavbar}
            /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <PrivateRoute path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default Routes;
