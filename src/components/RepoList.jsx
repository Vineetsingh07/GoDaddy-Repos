import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./common/Loader";
import APICalls from "../services/ApiCalls";
import SearchRepo from "./SearchRepo";

function RepoList() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

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
  // const filteredRepos = repos.filter((repo) =>
  //   repo.name.toLowerCase().includes(search.toLowerCase())
  // );

  const filteredRepos = Array.isArray(repos)
    ? repos.filter((repo) => repo.name.includes(search.toLowerCase()))
    : [];

  if (loading) return <div role="status">Loading...</div>;

  if (error) return <div className="p-5 text-red-500">Error: {error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-8">Godaddy Repositories</h1>
      <SearchRepo search={search} setSearch={setSearch} />

      <ul className="space-y-3">
        {filteredRepos.map((repo) => (
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
    </div>
  );
}

export default RepoList;
