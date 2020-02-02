import React, { Component } from "react";
import "../styles/form.css";
import StyledHero from "../styles/StyledHero";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: "",
        password_confirmation: ""
      },
      isSubmitting: false,
      isError: false
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ isSubmitting: true });

    const res = await fetch(`api/users`, {
      method: "POST",
      body: JSON.stringify(this.state.values),
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
          values: {
            email: "",
            password: "",
            password_confirmation: ""
          }
        }),
      1600
    );
  };

  handleInputChange = (e) =>
    this.setState({
      values: { ...this.state.values, [e.target.name]: e.target.value }
    });
  render() {
    return (
      <StyledHero>
        <div className="form-container">
          <h1>Register new account</h1>
          <div className={`message ${this.state.isError && "error"}`}>
            {this.state.isSubmitting ? "Submitting..." : this.state.message}
          </div>
          <form onSubmit={this.submitForm}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                className="input-box-2"
                placeholder="Enter valid email"
                type="email"
                name="email"
                id="image"
                value={this.state.values.email}
                onChange={this.handleInputChange}
                title="Email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                className="input-box-2"
                placeholder="Enter valid email"
                type="password"
                name="password"
                id="password"
                value={this.state.values.password}
                onChange={this.handleInputChange}
                title="Password"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password_confirmation">
                Password confirmation
              </label>
              <input
                className="input-box-2"
                placeholder="Confirm password"
                type="password_confirmation"
                name="password_confirmation"
                id="password_confirmation"
                value={this.state.values.password_confirmation}
                onChange={this.handleInputChange}
                title="password_confirmation"
                required
              />
            </div>
            <button className="submit-btn-2" type="submit">
              Register
            </button>
          </form>
        </div>
      </StyledHero>
    );
  }
}

export default RegisterForm;
