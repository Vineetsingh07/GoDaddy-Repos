import React, { useState } from "react";
import SearchRepo from "./SearchRepo";
import Pagination from "./Pagination";
import RepoListItem from "./RepoListItem.jsx";
import useFetch from "../hooks/useFetch.js";

function RepoList() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, loading, error } = useFetch(
    "https://api.github.com/orgs/godaddy/repos"
  );

  const repos = data || [];

  // Handlers
  const handleSearch = (query) => {
    setSearch(query);
    setCurrentPage(1); // Reset to first page on search
  };

  // Derived State
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRepos.length / itemsPerPage);
  const paginatedRepos = filteredRepos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <div role="status">Loading...</div>;
  if (error) return <div className="p-5 text-red-500">Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-8">Godaddy Repositories</h1>
      <SearchRepo search={search} setSearch={handleSearch} />

      <RepoListItem repos={paginatedRepos} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default RepoList;
