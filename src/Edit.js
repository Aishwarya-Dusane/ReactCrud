import React from "react";
import "./Edit.css";
class Edit extends React.Component {
  state = {
    users: {
      id: this.props.users.id,
      name: this.props.users.name,
      age: this.props.users.age
    }
  };

  handleChange = event => {
    console.log("edit", this.state);
    const { name, value } = event.target;
    this.setState({
      users: { ...this.state.users, [name]: value }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, age } = this.state.users;
    console.log(name);
    console.log(age);

    this.setState({
      users: [{ name: this.state.users.name, age: this.state.users.age }]
    });
    console.log(this.state.users);
    this.props.editInData(this.state.users, this.props.i);
  };

  render() {
    console.log(this.props);
    return (
      <form class="form" onSubmit={this.handleSubmit}>
        <input
          type="number"
          className="form-input"
          value={this.state.users.id}
          name="id"
          required
        />
        <input
          type="text"
          name="name"
          className="form-input"
          onChange={this.handleChange}
          defaultValue={this.state.users.name}
          required
        />
        <input
          type="number"
          className="form-input"
          onChange={this.handleChange}
          defaultValue={this.state.users.age}
          name="age"
          required
        />
        <button className="Add" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
export default Edit;
