import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
    minutes: 5,
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
    minutes: 10,
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
    minutes: 35,
  },
];

test("renders a <main> element", () => {
  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main")).toBeInTheDocument();
});

test("renders an Article component for each post passed as a prop", () => {
  render(<ArticleList posts={posts} />);
  const headings = screen.getAllByRole("heading", { level: 3 });
  expect(headings).toHaveLength(3);
});

