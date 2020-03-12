import React from "react";
import "./Add.css";
class Add extends React.Component {
  state = {
    temp: {
      id: "",
      name: "",
      age: ""
    }
  };

  onChangeHandler = event => {
    const { name, value } = event.target;
    this.setState({
      temp: {
        ...this.state.temp,
        [name]: value
      }
    });
    console.log(this.state.temp);
  };
  onSubmitHandler = () => {
    console.log("Add from", this.state.temp);
    this.props.onAdd(this.state.temp);
  };
  render() {
    return (
      <div class="container">
        <form className="form">
          <h1> Add employee </h1>
          <input
            type="number"
            name="id"
            className="form-input"
            onChange={this.onChangeHandler}
            placeholder="Id"
            required
          />
          <br />
          <input
            type="text"
            name="name"
            className="form-input"
            onChange={this.onChangeHandler}
            placeholder="Name"
            required
          />
          <br />
          <input
            type="number"
            className="form-input"
            name="age"
            onChange={this.onChangeHandler}
            placeholder="Age"
            required
          />
          <br />
          <button className="Add" onClick={this.onSubmitHandler}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Add;
