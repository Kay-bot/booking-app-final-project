import React, { Component } from "react";
import { logout, isLogin } from "./authAdmin";
import { Link } from "react-router-dom";

class AdminHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: isLogin()
    };
  }

  handleLogout = () => {
    logout();
    this.setState({
      isLogin: false
    });
  };

  render() {
    return (
      <div>
        <h1>Admin Page</h1>

        {this.state.isLogin ? (
          <button onClick={() => this.handleLogout()}>
            Click here to log out
          </button>
        ) : (
          <Link to="/admin-signin">Go to sign in page</Link>
        )}
      </div>
    );
  }
}

export default AdminHome;
