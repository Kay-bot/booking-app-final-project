import React, { useState } from "react";
import "./styles/App.css";
import HomeHero from "./styles/HomeHero";

import { BrowserRouter, Switch, Route } from "react-router-dom";
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
import { AuthContext } from "./context/auth";

function Routes(props) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [authTokens, setAuthTokens] = useState();

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <BrowserRouter>
        <Navbar navbarState={navbarOpen} handleNavbar={handleNavbar} />
        <Switch>
          <Route exact path="/">
            <HomeHero>
              <h2>Welcome to the class room!</h2>
            </HomeHero>
          </Route>
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/lessons/:id" component={SingleLesson} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/schedules" component={Schedules} />
          <Route exact path="/add-lessons" component={LessonForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/Register" component={Register} />
          {/* <Route component={Error} /> */}
          <PrivateRoute exact path="/admin" component={Admin} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default Routes;
