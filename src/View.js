import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./View.css";
import Start from "./Start";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Start} />
    </Switch>
  </Router>
);

const View = props => {
  return (
    <div>
      <button className="AddData" onClick={props.SubmitHandler}>
        Add New User
      </button>
      <Router>
        <Link to="/">
          <button className="Logout" onClick={routing}>
            Logout
          </button>
        </Link>
      </Router>
      <div className="Container">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th></th>
              </tr>
            </thead>
            {props.item.map((items, i) => (
              <tbody>
                <tr key={i.id}>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.age}</td>
                  <td>
                    <button onClick={() => props.onEdit(i)}>Edit</button>&nbsp;
                    <button onClick={() => props.OnDelete(items.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default View;
