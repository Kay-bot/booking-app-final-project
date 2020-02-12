import React from "react";
import { login } from "./authAdmin";
import styled from "styled-components";
import { Container } from "../styles/Container";
import { Card, Form, Input, Button } from "../forms/AuthForm";
import Sidebar from "./Sidebar";

const SignIn = (props) => {
  const handleLogin = () => {
    login();
    props.history.push("/admin-dashboard");
  };

  return (
    <Wrapper>
      <Container>
        <Card>
          <h1>Admin</h1>
          <Form>
            <Input type="text" name="email" required placeholder="email" />
            <Input type="password" name="psw" required placeholder="password" />
          </Form>
          <Button onClick={() => handleLogin()}>Login</Button>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.section`
  padding: 4em;
`;
