import React from "react";
import { Container } from "../styles/Container";
import { Button } from "../forms/AuthForm";
import { useAuth } from "../context/auth";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <Container>
      <div>Admin Page</div>
      <Button onClick={logOut}>Log out</Button>
    </Container>
  );
}

export default Admin;
