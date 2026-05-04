import { test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

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
