import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// Mock the process.env variables
beforeAll(() => {
  process.env.REACT_APP_API_URL = "https://api.test.com";
  process.env.REACT_APP_ENVIRONMENT = "test";
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
