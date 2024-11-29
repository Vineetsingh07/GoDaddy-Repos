import React from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../common/Loader";
import useFetch from "../../hooks/useFetch";
import {
  FaStar,
  FaCodeBranch,
  FaExclamationCircle,
  FaEye,
} from "react-icons/fa";

function RepoDetails() {
  const { repoName } = useParams();

  const {
    data: repo,
    loading,
    error,
  } = useFetch(`https://api.github.com/repos/godaddy/${repoName}`);

  if (loading) return <Loader />;
  if (error)
    return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-6 md:px-12 py-6">
      <div className="card bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 shadow-xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        {/* Header Section */}
        <div className="card-header p-6 bg-transparent text-gray-800">
          <h1 className="text-4xl font-extrabold">{repo.name}</h1>
        </div>

        {/* Body Section */}
        <div className="card-body p-6 bg-white bg-opacity-90 rounded-lg shadow-md">
          <p className="text-lg sm:text-xl text-gray-800 mb-6">
            {repo.description || "No description available."}
          </p>

          {/* Repo Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-2 p-4 bg-gray-300 rounded-xl shadow-sm">
              <FaCodeBranch className="text-3xl text-gray-600" />
              <p className="font-semibold text-lg sm:text-xl text-gray-800">
                Forks: {repo.forks}
              </p>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-gray-300 rounded-xl shadow-sm">
              <FaExclamationCircle className="text-3xl text-gray-600" />
              <p className="font-semibold text-lg sm:text-xl text-gray-800">
                Open Issues: {repo.open_issues}
              </p>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-gray-300 rounded-xl shadow-sm">
              <FaEye className="text-3xl text-gray-600" />
              <p className="font-semibold text-lg sm:text-xl text-gray-800">
                Watchers: {repo.watchers}
              </p>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-gray-300 rounded-xl shadow-sm">
              <FaStar className="text-3xl text-yellow-500" />
              <p className="font-semibold text-lg sm:text-xl text-gray-800">
                Stars: {repo.stargazers_count}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="btn bg-transparent border-2 border-gray-600 hover:bg-gray-600 hover:text-white text-gray-800 w-full sm:w-auto transition duration-300 py-3 rounded-md text-center shadow-md"
            >
              Back to List
            </Link>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gray-600 hover:bg-gray-700 text-white w-full sm:w-auto transition duration-300 py-3 rounded-md text-center shadow-md"
            >
              Visit Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoDetails;
