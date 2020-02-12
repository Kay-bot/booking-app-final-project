import React, { Component } from "react";
import { logout, isLogin } from "./authAdmin";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StyledHero from "../styles/StyledHero";

class AdminHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: isLogin()
    };
  }

  handleLogout = () => {
    logout();
    this.setState({
      isLogin: false
    });
  };

  render() {
    return (
      <Wrapper>
        <StyledHero>
          <h1>Admin Page</h1>
        </StyledHero>
        <StyledHero>
          {this.state.isLogin ? (
            <button onClick={() => this.handleLogout()}>
              Click here to log out
            </button>
          ) : (
            <Link to="/admin-signin">Go to sign in page</Link>
          )}
        </StyledHero>
        <StyledHero>
          <Link to="/">Exit Admin space</Link>
        </StyledHero>
      </Wrapper>
    );
  }
}

export default AdminHome;
const Wrapper = styled.section`
  padding: 4em;
`;
