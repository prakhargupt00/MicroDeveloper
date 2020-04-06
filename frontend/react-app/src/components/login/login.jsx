import React from "react";
import loginImg from "./login.svg";
import { Redirect, Link } from "react-router-dom";
import { withRouter } from "react-router";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  validate = () =>{
    console.log("I'm in") ; 
    return <Redirect to= "/home" />;
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header-login">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to = {{pathname:"/home"}}>
            <button type="button" className="btn btn-danger" onClick = {this.validate}>
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
