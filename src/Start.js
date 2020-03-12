import React, { Component } from "react";
import App from "./App";
import Login from "./Login";
class Start extends Component {
  constructor() {
    super();
    this.state = {
      isAdmin: false,
      errorMess: ""
    };
  }
  checkLoginInput = data => {
    console.log("start" + data.username);
    if (data.username === "" && data.password === "") {
      this.setState({ isAdmin: true });
    } else {
      this.setState({ errorMess: "Invalid Username Password" });
    }
  };
  render() {
    let temp2 = " ";
    if (this.state.isAdmin) {
      temp2 = <App />;
    } else if (!this.state.isAdmin) {
      temp2 = (
        <div>
          {console.log(this.state.errorMess)}
          <Login
            onLogin={data => this.checkLoginInput(data)}
            err={this.state.errorMess}
          />
        </div>
      );
    }
    return <div>{temp2}</div>;
  }
}
export default Start;
