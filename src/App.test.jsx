import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import About from "./pages/About";

test("renders the app without crashing", () => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <About /> },
        { path: "/Portfolio", element: <Portfolio /> },
        { path: "/Contact", element: <Contact /> },
        { path: "/Resume", element: <Resume /> },
      ],
    },
  ]);

  render(<RouterProvider router={router} />);

  expect(screen.getByText(/about/i)).toBeInTheDocument();
});
