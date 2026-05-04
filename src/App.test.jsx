import { test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const routes = [
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
];

const renderRoute = (initialEntry = "/") => {
  const router = createMemoryRouter(routes, {
    initialEntries: [initialEntry],
  });

  render(<RouterProvider router={router} />);
};

beforeEach(() => {
  document.body.innerHTML = '<div id="root"></div>';
});

test("renders the app without crashing", () => {
  renderRoute("/");

  expect(screen.getByText(/about/i)).toBeInTheDocument();
});

test("portfolio page renders", () => {
  renderRoute("/Portfolio");

  expect(screen.getByText(/my portfolio/i)).toBeInTheDocument();
});

test("contact page renders", () => {
  renderRoute("/Contact");

  expect(
    screen.getByRole("heading", { name: /contact me/i })
  ).toBeInTheDocument();
});

test("resume page renders", () => {
  renderRoute("/Resume");

  expect(screen.getByText(/professional summary/i)).toBeInTheDocument();
});

test("navigation links render", () => {
  renderRoute("/");

  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /portfolio/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /resume/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /contact/i })).toBeInTheDocument();
});

test("portfolio renders project content", () => {
  renderRoute("/Portfolio");

expect(
  screen.getByRole("heading", { name: /^social media api$/i })
).toBeInTheDocument();
});

test("contact form renders fields", () => {
  renderRoute("/Contact");

  expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/enter your message/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
});

test("resume download link renders", () => {
  renderRoute("/Resume");

  expect(screen.getByRole("link", { name: /download resume/i })).toBeInTheDocument();
});