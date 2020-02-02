import React, { Component } from "react";
import "../styles/form.css";
import { Container } from "../styles/Container";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {
        email: "",
        password: ""
      },
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    console.log(this.state.users);
    this.setState({ isSubmitting: true });

    const res = await fetch(`api/users/login`, {
      method: "POST",
      body: JSON.stringify(this.state.users),
      headers: {
        "Content-Type": "application/json"
      }
    });
    this.setState({ isSubmitting: false });
    const data = await res.json();
    !data.hasOwnProperty("error")
      ? this.setState({ message: data.success })
      : this.setState({ message: data.error, isError: true });

    setTimeout(
      () =>
        this.setState({
          isError: false,
          message: "",
          users: {
            email: "",
            password: ""
          }
        }),
      1600
    );
  };

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.users, [e.target.name]: e.target.value }
    });
  render() {
    return (
      <Container>
        <div className="form-container">
          <h1>Login</h1>
          <div className={`message ${this.state.isError && "error"}`}>
            {this.state.isSubmitting ? "Loging in..." : this.state.message}
          </div>
          <form onSubmit={this.submitForm}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={this.state.users.email}
                onChange={this.handleInputChange}
                title="Email"
                required
                placeholder="Enter email"
                className="input-box-2"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={this.state.users.password}
                onChange={this.handleInputChange}
                title="Password"
                required
                placeholder="Enter password"
                className="input-box-2"
              />
            </div>
            <button className="submit-btn-2" type="submit">
              Login
            </button>
          </form>
          <p>
            Don't have account? &nbsp;
            <b>
              <Link to="/register">Register now</Link>
            </b>
          </p>
        </div>
      </Container>
    );
  }
}

export default LoginForm;
