import React from "react";
import { Root } from "./Root";
import { render } from "@testing-library/react";

test("Root", () => {
  const { getByText } = render(<Root />);
  expect(getByText("OK")).toBeDefined();
});
