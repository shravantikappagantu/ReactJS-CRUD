import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "CRUD Operations in React JS",
      title2: "Persons Details",
      personData: [],
      act: 0,
      index: "",
    };
  }

  handleAdd = (e) => {
    e.preventDefault();
    let personData = this.state.personData;
    let name = this.refs.txtName.value;
    let age = this.refs.txtAge.value;

    if (this.state.act === 0) {
      let newPerson = {
        name: name,
        age: age,
      };
      personData.push(newPerson);
    } else {
      let index = this.state.index;
      personData[index].name = name;
      personData[index].age = age;
    }
    this.setState({
      personData: personData,
      act: 0,
    });

    this.refs.myForm.reset();
  };

  handleEdit = (i) => {
    let personData = this.state.personData[i];
    this.refs.txtName.value = personData.name;
    this.refs.txtAge.value = personData.age;

    this.setState({
      // personData: personData,
      act: 1,
      index: i,
    });
  };

  handleDelete = (i) => {
    let personData = this.state.personData;
    personData.splice(i, 1);
    this.setState({
      personData: personData,
    });
    this.refs.myForm.reset();
  };

  render() {
    let personData = this.state.personData;
    return (
      <div className="container">
        <h1 className="header">{this.state.title}</h1>
        <form ref="myForm" className="myForm">
          <label>Name</label>
          <input
            type="text"
            ref="txtName"
            placeholder="Enter your name"
            className="formField"
          />
          <label>Age</label>
          <input
            type="text"
            ref="txtAge"
            placeholder="Enter your Age"
            className="formField"
          />
          <button className="add" onClick={(e) => this.handleAdd(e)}>
            Add
          </button>
        </form>
        <h2 className="header">{this.state.title2}</h2>
        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {personData.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={(e) => this.handleEdit(i)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => this.handleDelete(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
