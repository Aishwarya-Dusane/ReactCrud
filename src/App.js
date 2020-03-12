import React, { Component } from "react";
import "./App.css";
import View from "./View";
import Edit from "./Edit";
import Add from "./Add";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Aishwarya", age: 22 },
        { id: 2, name: "Lavanya", age: 16 },
        { id: 3, name: "Shreya", age: 11 }
      ],
      edit: false,
      add: false,
      view: true,
      dataForEdit: {}
    };
  }
  addingData = tempData => {
    this.setState({
      data: [...this.state.data, tempData]
    });

    this.SubmitHandlers();
  };

  SubmitHandlers = () => {
    this.setState({
      view: !this.state.view,
      add: !this.state.add
    });
  };

  deleteuser = id => {
    const record = [...this.state.data];
    console.log("indelete", record);
    this.setState({ data: record.filter(p => p.id !== id) });
  };

  addEdit = (newdata, dataIndex) => {
    const datax = [...this.state.data];
    console.log(dataIndex);
    datax[dataIndex] = newdata;
    console.log(datax);
    this.setState({ data: datax });
    this.setState({ view: true, add: false, edit: false });
  };

  edituser = user => {
    console.log("user", user);
    const editdata = [...this.state.data];
    console.log("editdata", editdata);

    const indx = editdata[user];
    console.log("data wil delete", indx);
    this.setState({ dataForEdit: indx });
    console.log("dataforedit", this.dataForEdit);
    this.setState({ EditDataIndx: user });

    this.setState({ view: false, add: false, edit: true });
  };

  render() {
    let temp = " ";
    console.log(this.state.edit);
    if (this.state.edit) {
      temp = (
        <Edit
          users={this.state.dataForEdit}
          editInData={(data, i) => this.addEdit(data, i)}
          i={this.state.EditDataIndx}
        />
      );
    } else if (this.state.view) {
      temp = (
        <div>
          <View
            item={[...this.state.data]}
            OnDelete={user => this.deleteuser(user)}
            onEdit={user => this.edituser(user)}
            SubmitHandler={() => this.SubmitHandlers()}
          />
        </div>
      );
    } else if (this.state.add) {
      temp = <Add onAdd={this.addingData} />;
    }

    return <div>{temp}</div>;
  }
}

export default App;
