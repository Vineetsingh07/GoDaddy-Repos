import React from "react";

function SearchRepo({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search repositories..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="input input-bordered w-full mb-4"
    />
  );
}

export default SearchRepo;
