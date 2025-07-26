import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

// Sample data
const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
];

test("renders a <main> element", () => {
  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main")).toBeInTheDocument();
});

test("renders an Article component for each post", () => {
  render(<ArticleList posts={posts} />);
  const titles = screen.getAllByRole("heading", { level: 3 });
  expect(titles.length).toBe(posts.length);
});


