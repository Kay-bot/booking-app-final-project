import React, { Component } from "react";
import "../styles/form.css";
import StyledHero from "../styles/StyledHero";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <StyledHero>
        <div className="form-container">
          <h1>Login</h1>
          <p>{this.props.errMessage}</p>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter email"
              className="input-box-2"
              type="text"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Enter password"
              className="input-box-2"
              type="password"
              name="psw"
              required
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <button
            className="submit-btn-2"
            type="submit"
            onClick={() => this.onLoginClick()}
          >
            Login
          </button>

          <p>
            Don't have account? &nbsp;
            <b>
              <Link to="/register">Register now</Link>
            </b>
          </p>
        </div>
      </StyledHero>
    );
  }
}

export default LoginForm;
