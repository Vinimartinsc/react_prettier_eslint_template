import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "../App";

test("full app rendering/navigating", () => {
  render(<App />, { wrapper: MemoryRouter });

  // verify page content for expected route, change as needed
  expect(screen.getByText(/Welcome Home/i)).toBeInTheDocument();
});
