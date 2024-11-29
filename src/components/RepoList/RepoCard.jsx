import React from "react";
import { Link } from "react-router-dom";

function RepoCard({ repo }) {
  return (
    <div className="flex justify-center">
      <Link
        to={`/repo/${repo.name}`}
        className="block card w-[279px] bg-cover bg-center rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all p-6 transform duration-300"
        style={{
          backgroundImage: `url('https://picsum.photos/600/300?random=20666268')`, // Reliable placeholder image
        }}
      >
        {/* Avatar Section */}
        <div className="flex justify-center mb-5">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="w-12 h-12 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Repo Information */}
        <div className="mb-4">
          <h2 className="font-bold text-lg text-gray-900 dark:text-white">
            {repo.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            {repo.description || "No description available"}
          </p>
          <span className="text-xs text-gray-600 dark:text-gray-400">
            by {repo.owner.login}
          </span>
        </div>

        {/* Repo Stats */}
        <div className="mt-4 flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <span>{repo.language}</span>
          <div className="flex space-x-2">
            <span>⭐ {repo.stars}</span>
            <span>🍴 {repo.forks}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RepoCard;
