import React from "react";
import LoginForm from "../forms/LoginForm";

const Login = (props) => {
  const handleLoginClick = (email, password) => {
    props.user.login(email, password);
  };

  return (
    <LoginForm
      onLogin={(email, password) => handleLoginClick(email, password)}
    ></LoginForm>
  );
};

export default Login;
