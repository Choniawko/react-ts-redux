import React, { Component } from "react";
import { push } from "connected-react-router";
import logo from "./logo.svg";
import "./App.css";

class App extends Component<any, any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div onClick={() => push("/post")}>Post</div>
        <div onClick={() => push("/category")}>Category</div>
      </div>
    );
  }
}

export default App;
