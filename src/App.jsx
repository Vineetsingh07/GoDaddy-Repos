import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RepoList from "./components/RepoList/RepoList";
import RepoDetails from "./components/RepoDetails/RepoDetails";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RepoList />} />
      <Route path="/repo/:repoName" element={<RepoDetails />} />
    </>
  ),
  {
    future: {
      v7_startTransition: true, // Opt into state update transition behavior
      v7_relativeSplatPath: true, // Opt into new relative splat path behavior
      v7_fetcherPersist: true, // Opt into new fetcher persistence behavior
      v7_normalizeFormMethod: true, // Opt into uppercase form method normalization
      v7_partialHydration: true, // Opt into partial hydration behavior
      v7_skipActionErrorRevalidation: true, // Opt into error revalidation behavior
      v7_startTransition: true,
    },
  }
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
