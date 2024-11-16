// src/components/RepoList.test.jsx
import { render, screen, waitFor } from "@testing-library/react";
import RepoList from "./RepoList";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios");

test("renders loading state", () => {
  render(
    <Router>
      <RepoList />
    </Router>
  );
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test("renders repository list", async () => {
  const mockData = [
    { id: 1, name: "repo-1" },
    { id: 2, name: "repo-2" },
  ];
  axios.get.mockResolvedValueOnce({ data: mockData });

  render(
    <Router>
      <RepoList />
    </Router>
  );

  await waitFor(() => {
    expect(screen.getByText("repo-1")).toBeInTheDocument();
    expect(screen.getByText("repo-2")).toBeInTheDocument();
  });
});
