import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./common/Loader";
import APICalls from "../services/ApiCalls.jsx";
import SearchRepo from "./SearchRepo";
import RepoListItem from "./RepoListItem.jsx";

function RepoList() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 10; // Number of repos per page

  const WebServices = new APICalls();

  useEffect(() => {
    const fetchRepoList = async () => {
      try {
        const response = await WebServices.getRepoList();
        setRepos(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoList();
  }, []);

  // Filtered Repositories
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  // Paginated Data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRepos = filteredRepos.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Total Pages
  const totalPages = Math.ceil(filteredRepos.length / itemsPerPage);

  // Handlers for pagination
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading) return <div role="status">Loading...</div>;

  if (error) return <div className="p-5 text-red-500">Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-8">Godaddy Repositories</h1>
      <SearchRepo search={search} setSearch={setSearch} />
      <RepoListItem paginatedRepos={paginatedRepos} />

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-2">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="btn btn-primary"
        >
          Previous
        </button>
        <span className="text-lg font-bold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default RepoList;
