import React from "react";
import { Link } from "react-router-dom";

function RepoListItem({ paginatedRepos }) {
  return (
    <ul className="space-y-3">
      {paginatedRepos.map((repo) => (
        <li key={repo.id}>
          <Link
            to={`/repo/${repo.name}`}
            className="block card bg-base-100 shadow-md hover:shadow-lg hover:scale-105 transition-transform p-4"
          >
            <h2 className="font-bold text-lg">{repo.name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default RepoListItem;
