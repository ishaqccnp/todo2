import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";
class App extends Component {
  state = {
    todos: [{ id: uuid.v4(), title: "book tickets", editItem: true }]
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-center ">Todo App</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
