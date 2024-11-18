import { render, waitFor } from "@testing-library/react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import React from "react";
import "@testing-library/jest-dom";

jest.mock("axios");

test("fetches data successfully", async () => {
  const mockData = [{ id: 1, name: "Repo 1" }];
  axios.get.mockResolvedValueOnce({ data: mockData });

  const TestComponent = () => {
    const { data, error, loading } = useFetch("https://api.example.com/repos");
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
      <div>
        {data.map((repo) => (
          <div key={repo.id}>{repo.name}</div>
        ))}
      </div>
    );
  };

  const { getByText } = render(<TestComponent />);

  await waitFor(() => getByText("Repo 1"));

  expect(getByText("Repo 1")).toBeInTheDocument();
});
