import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import axios from "axios";
import { useAuth } from "../context/auth";
import { Error } from "../forms/AuthForm";
import { Container } from "../styles/Container";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();
  // const referer = props.location.state.referer || "/";

  function postLogin(data) {
    axios
      .post(`api/users/login`, {
        email: data.email,
        password: data.password
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
    return <Redirect to="/" />;
  }
  return (
    <Container>
      <LoginForm onLogin={(data) => postLogin(data)}>
        <p>{isError && <Error>Incorrect username or password!</Error>}</p>
      </LoginForm>
    </Container>
  );
}

export default Login;
