import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepoList from "./components/RepoList";
import RepoDetails from "./components/RepoDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/repo/:repoName" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
