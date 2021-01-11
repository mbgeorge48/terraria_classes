import React from "react";
import ReactDOM from "react-dom";
import Role from "./../roleSelector";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Role />, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Role />);
  expect(getByTestId("melee-role-button")).toHaveTextContent("Melee");
});
