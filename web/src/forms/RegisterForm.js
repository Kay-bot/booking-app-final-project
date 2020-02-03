import React, { Component } from "react";
import "../styles/form.css";
import StyledHero from "../styles/StyledHero";
import { Link } from "react-router-dom";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      isSubmitting: false,
      isError: false
    };
  }
  onSignupClick() {
    // TODO: validate inputs
    this.props.onSignup(this.state);
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({ password_confirmation: e.target.value });
  };

  render() {
    return (
      <StyledHero>
        <div className="form-container">
          <h1>Register new account</h1>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              className="input-box-2"
              placeholder="Enter valid email"
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
              className="input-box-2"
              placeholder="Enter valid email"
              type="password"
              name="psw"
              required
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="psw-repeat">Password confirmation</label>
            <input
              className="input-box-2"
              placeholder="Confirm password"
              type="password"
              name="psw-repeate"
              required
              value={this.state.password_confirmation}
              onChange={this.handleConfirmPasswordChange}
            />
          </div>
          <button
            className="submit-btn-2"
            type="submit"
            onClick={() => this.onSignupClick()}
          >
            Register
          </button>
          <br />
          &nbsp;
          <Link to="/login">Already have an account?</Link>
        </div>
      </StyledHero>
    );
  }
}

export default RegisterForm;
