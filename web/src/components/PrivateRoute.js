import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  // const { authTokens } = useAuth();

  return (
    <Route
    // {...rest}
    // render={(props) =>
    //   !isLoggedIn ? (
    //     <Component {...props} />
    //   ) : (
    //     <Redirect to={{ pathname: "/login" }} />
    //   )
    // }
    />
  );
}

export default PrivateRoute;
