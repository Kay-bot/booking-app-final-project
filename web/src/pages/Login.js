import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import moewLogo from "../assets/meowLogo.jpg";
import axios from "axios";
import { useAuth } from "../context/auth";
import { Card, Logo, Form, Input, Button, Error } from "../forms/AuthForm";
import { Container } from "../styles/Container";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios
      .post(`/authenticate`, {
        email,
        password
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  }
  if (isLoggedIn) {
    return <Redirect to="/admin" />;
  }
  return (
    <Container>
      <Card>
        <Logo src={moewLogo} />
        <Form>
          <Input
            type="email"
            value={email}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <Button onClick={postLogin}>Sign In</Button>
        </Form>
        <Link to="/register">Don't have an account?</Link>
        {isError && (
          <Error>The username or password provided were incorrect!</Error>
        )}
      </Card>
    </Container>
  );
}

export default Login;
