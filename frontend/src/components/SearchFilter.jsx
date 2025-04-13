import { useState } from "react";

function SearchFilter({ onSearch, onSort, onFilter }) {
  return (
    <section className="px-4 py-6 bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => onSearch(e.target.value)}
          className="px-4 py-2 rounded w-full md:w-1/3 bg-gray-100 dark:bg-gray-700 dark:text-white"
        />

        <select
          onChange={(e) => onSort(e.target.value)}
          className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
        >
          <option value="latest">Sort by: Latest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Most Popular</option>
        </select>

        <select
          onChange={(e) => onFilter(e.target.value)}
          className="px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
        >
          <option value="all">All Categories</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
          <option value="studio max">Studio Max</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;
