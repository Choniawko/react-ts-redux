import React from "react";
import ReactDOM from "react-dom";
import App from "../../src/app/App";
import { history } from "../../src/store/";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App props={history} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
