import React from "react";
import { Link } from "react-router-dom";

function RepoCard({ repo }) {
  return (
    <div className="flex justify-center">
      <Link
        to={`/repo/${repo.name}`}
        className="card w-[279px] relative rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all p-6 transform duration-300 flex flex-col overflow-hidden"
      >
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center filter blur-sm opacity-90"
          style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664194583917-e2ca85efc15e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        ></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Avatar Section */}
          <div className="flex justify-center mb-5">
            <img
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
              className="w-12 h-12 rounded-full border-4 border-white shadow-md"
            />
          </div>

          {/* Repo Information */}
          <div className="mb-4 flex-grow">
            <h2 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
              {repo.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-200">
              {repo.description || "No description available"}
            </p>
            <span className="text-xs font-bold text-gray-50 dark:text-gray-200">
              by {repo.owner.login}
            </span>
          </div>

          {/* Repo Stats - Fixed at the bottom */}
          <div className="mt-auto flex justify-between text-sm text-gray-700 dark:text-gray-300">
            <span>{repo.language}</span>
            <div className="flex space-x-2">
              <span>⭐ {repo.stargazers_count}</span>
              <span>🍴 {repo.forks}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RepoCard;
