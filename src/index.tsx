import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import PostContainer from "./app/Post/";
import CategoryContainer from "./app/Category/";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store/";
import "./index.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route path="/" component={App} />
          <Route render={() => <div>Miss</div>} />
          <Route exact path="/post" component={PostContainer} />
          <Route exact path="/category" component={CategoryContainer} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
