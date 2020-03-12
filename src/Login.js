import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.getUserName.value);
    let fields = {
      username: this.getUserName.value,
      password: this.getPassword.value
    };
    this.props.onLogin(fields);
  };
  render() {
    return (
      <div className="App">
        <form className="form" onSubmit={this.handleSubmit}>
          {this.props.err}
          <input
            // required
            type="text"
            className="form-input"
            ref={input => (this.getUserName = input)}
            placeholder="Username"
          />
          <input
            // required
            type="password"
            className="form-input"
            ref={input => (this.getPassword = input)}
            placeholder="Password"
          />
          <button className="Login">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
