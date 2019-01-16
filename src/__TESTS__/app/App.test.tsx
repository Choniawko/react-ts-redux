import React from "react";
import { render, cleanup } from "react-testing-library";
import App from "../../app/App";

afterEach(cleanup);

it("image exists", () => {
  const { container } = render(<App />);
  const img = container.querySelector("img");
  expect(img).not.toBeNull();
});
