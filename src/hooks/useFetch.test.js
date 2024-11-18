import { renderHook } from "@testing-library/react-hooks";
import useFetch from "../hooks/useFetch";
import axios from "axios";

jest.mock("axios");

test("should fetch data successfully", async () => {
  const mockData = [{ id: 1, name: "Repo 1" }];
  axios.get.mockResolvedValueOnce({ data: mockData });

  const { result, waitForNextUpdate } = renderHook(() => useFetch("test-url"));
  await waitForNextUpdate();

  expect(result.current.data).toEqual(mockData);
  expect(result.current.loading).toBe(false);
  expect(result.current.error).toBeNull();
});
