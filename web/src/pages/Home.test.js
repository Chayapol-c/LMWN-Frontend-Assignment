import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import "jest-styled-components";
import "@testing-library/jest-dom";
import {
  MemoryRouter,
} from "react-router-dom";
import { act } from 'react-dom/test-utils';

const MemoryRouterWithInitialRoutes = ({ children, initialRoutes }) => {
  return <MemoryRouter initialEntries={initialRoutes}>{children}</MemoryRouter>;
};

const renderWithRouter = async (ui, options) => {
  const initialRoutes =
    options && options.initialRoutes ? options.initialRoutes : ["/"];
  return render(ui, {
    wrapper: (args) =>
      MemoryRouterWithInitialRoutes({
        ...args,
        initialRoutes,
      }),
    ...options,
  });
};

test("Home page contains title", async () => {
  await renderWithRouter(<Home />, { initialRoutes: ["/trips"] });
  const title = screen.getByText(/เที่ยวไหนดี/);
  expect(title).toBeInTheDocument();
});

test("Home page contains input bar with placeholder", async () => {
  await renderWithRouter(<Home />, { initialRoutes: ["/trips"] });
  const placeholder = screen.getByPlaceholderText(/หาที่เที่ยวแล้วไปกัน/);
  expect(placeholder).toBeInTheDocument();
});

test("Home page with keyword", async () => {
  await act(() => renderWithRouter(<Home />, { initialRoutes: ["/trips?keyword=ชานม"] }))
  const placeholder = screen.getByPlaceholderText(/หาที่เที่ยวแล้วไปกัน/);
  expect(placeholder.value).toBe("ชานม")
});
