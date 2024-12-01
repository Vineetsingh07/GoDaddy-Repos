import React from "react";

function SearchRepo({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search repositories by name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="input input-bordered w-full mb-4 focus:border-2 focus:border-solid focus:border-emerald-400 focus:outline-none text-emerald-600"
    />
  );
}

export default SearchRepo;
