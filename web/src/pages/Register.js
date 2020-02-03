import React, { useState } from "react";
import RegisterForm from "../forms/RegisterForm";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Error } from "../forms/AuthForm";
import { Container } from "../styles/Container";

const Register = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleSignup = (data) => {
    axios
      .post(`/api/users`, {
        user: {
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
        }
      })
      .then((response) => {
        if (response.status === 201) {
          setIsSuccess(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        setIsError(true);
      });
  };

  if (isSuccess) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <RegisterForm onSignup={(data) => handleSignup(data)}></RegisterForm>

      {isError && (
        <Error>
          "Error register failed. Please check network or contact admin"
        </Error>
      )}
    </Container>
  );
};

export default Register;
