// src/components/RepoDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "./common/Loader";

function RepoDetails() {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/godaddy/${repoName}`)
      .then((response) => {
        setRepo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [repoName]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-5">
      <div className="card bg-base-100 shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{repo.name}</h1>
        <p className="text-gray-700 mb-4">
          {repo.description || "No description available."}
        </p>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Language:</span> {repo.language}
          </p>
          <p>
            <span className="font-semibold">Forks:</span> {repo.forks}
          </p>
          <p>
            <span className="font-semibold">Open Issues:</span>{" "}
            {repo.open_issues}
          </p>
          <p>
            <span className="font-semibold">Watchers:</span> {repo.watchers}
          </p>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-6"
        >
          Visit Repository
        </a>
        <Link to="/" className="btn btn-outline mt-4">
          Back to List
        </Link>
      </div>
    </div>
  );
}

export default RepoDetails;
