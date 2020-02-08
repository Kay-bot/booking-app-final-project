import React, { Component } from "react";
import { Link } from "react-router-dom";
import moewLogo from "../assets/meowLogo.jpg";

import { Card, Logo, Form, Input, Button, Error } from "../forms/AuthForm";
import { Container } from "../styles/Container";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onLoginClick() {
    this.props.login(this.state.email, this.state.password);
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <Container>
        <Card>
          <Logo src={moewLogo} />
          <Error>{this.props.errMessage}</Error>
          <Form>
            <Input
              type="text"
              name="email"
              required
              value={this.state.email}
              onChange={this.handleEmailChange}
              placeholder="email"
            />
            <Input
              type="password"
              name="psw"
              required
              value={this.state.password}
              onChange={this.handlePasswordChange}
              placeholder="password"
            />
          </Form>
          <Button onClick={() => this.onLoginClick()}>Sign In</Button>
          <Link to="/register">Don't have an account?</Link>
        </Card>
      </Container>
    );
  }
}

export default LoginForm;
