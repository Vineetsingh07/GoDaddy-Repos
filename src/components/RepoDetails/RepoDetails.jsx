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
      <div className="card bg-blue-400 shadow-xl rounded-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        {/* Header Section */}
        <div className="card-header p-6 bg-indigo-600 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">{repo.name}</h1>
        </div>

        {/* Body Section */}
        <div className="card-body p-6">
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 mb-6">
            {repo.description || "No description available."}
          </p>

          {/* Repo Stats */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <FaCodeBranch className="text-xl text-gray-500" />
              <p className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
                Forks: {repo.forks}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaExclamationCircle className="text-xl text-gray-500" />
              <p className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
                Open Issues: {repo.open_issues}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEye className="text-xl text-gray-500" />
              <p className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
                Watchers: {repo.watchers}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaStar className="text-xl text-yellow-500" />
              <p className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
                Stars: {repo.stargazers_count}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/"
              className="btn bg-transparent border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white text-indigo-600 w-full sm:w-auto transition duration-300 py-3 rounded-md text-center"
            >
              Back to List
            </Link>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-indigo-600 hover:bg-indigo-800 text-white w-full sm:w-auto transition duration-300 py-3 rounded-md text-center"
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
