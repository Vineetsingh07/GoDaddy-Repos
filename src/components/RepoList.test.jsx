import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RepoList from "./RepoList";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("axios");

test("renders loading state", async () => {
  axios.get.mockResolvedValue({ data: { id: 1, name: "repo-1" } });

  render(<RepoList />);

  // Wait for the loading state to be rendered
  await waitFor(() => expect(screen.getByRole("status")).toBeInTheDocument());
});

test("renders repository list", async () => {
  axios.get.mockResolvedValue({
    data: [
      { id: 1, name: "repo-1" },
      { id: 2, name: "repo-2" },
    ],
  });

  render(
    <BrowserRouter>
      <RepoList />
    </BrowserRouter>
  );

  // Wait for the repository list to be rendered
  await waitFor(() => expect(screen.getByText("repo-1")).toBeInTheDocument());
  expect(screen.getByText("repo-2")).toBeInTheDocument();
});
