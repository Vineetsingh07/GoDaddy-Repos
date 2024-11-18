import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RepoList from "./RepoList";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// Mock axios
jest.mock("axios", () => ({
  get: jest.fn(),
}));

describe("RepoList Component", () => {
  // Clear mock data before each test
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", async () => {
    // Mock the response for loading state
    axios.get.mockResolvedValueOnce({ data: { id: 1, name: "repo-1" } });

    render(<RepoList />);

    // Wait for the loading state to be rendered
    const loadingText = screen.getByRole("status");
    expect(loadingText).toBeInTheDocument();
  });

  test("renders repository list", async () => {
    // Mock the response for repository list
    axios.get.mockResolvedValueOnce({
      data: [
        { id: 1, name: "repo-1" },
        { id: 2, name: "repo-2" },
      ],
    });

    render(
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <RepoList />
      </BrowserRouter>
    );

    // Check if repository names appear in the document
    const repo1 = await screen.findByText("repo-1");
    const repo2 = await screen.findByText("repo-2");

    expect(repo1).toBeInTheDocument();
    expect(repo2).toBeInTheDocument();
  });
});
