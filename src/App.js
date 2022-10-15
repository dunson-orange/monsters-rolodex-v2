import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      monsters: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
    console.log("componentDidMount");
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            this.setState({ searchText: event.target.value });
          }}
        />
        {this.state.monsters
          .filter((monster) => {
            return monster.name.includes(this.state.searchText);
          })
          .map((monster) => (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
