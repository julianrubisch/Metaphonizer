import React from "react";
import { render } from "react-testing-library";
import App from "./App";

it("renders welcome message", () => {
  const { getByText } = render(<App />);
  expect(getByText("Learn React")).toBeInTheDocument();
});
