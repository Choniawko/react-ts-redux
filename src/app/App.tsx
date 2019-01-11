import React, { Component } from "react";
import { Route, Switch } from "react-router";
import PostContainer from "./Post/";
import CategoryContainer from "./Category/";
import logo from "./logo.svg";
import "./App.css";

class App extends Component<any, any> {
  render() {
    const {
      history: { push }
    } = this.props;
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
        <Switch>
          <Route exact path="/post" component={PostContainer} />
          <Route exact path="/category" component={CategoryContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
