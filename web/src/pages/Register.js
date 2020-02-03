import React from "react";
import RegisterForm from "../forms/RegisterForm";
import axios from "axios";
import { Redirect } from "react-router-dom";

const Register = () => {
  const handleSignup = (data) => {
    axios
      .post(`/api/users`, {
        user: {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
        }
      })
      .then((response) => {
        alert("user successfully created, please login");

        Redirect("/");
      });
  };

  return (
    <>
      <RegisterForm onSignup={(data) => handleSignup(data)}></RegisterForm>
    </>
  );
};

export default Register;
