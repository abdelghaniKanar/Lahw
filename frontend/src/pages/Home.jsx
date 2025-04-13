import { useState } from "react";
import HeroSlider from "../components/HeroSlider";
import CompanyScroller from "../components/CompanyScroller";
import SearchFilter from "../components/SearchFilter";
import { movies } from "../data/movies";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [categoryFilter, setCategoryFilter] = useState("all");

  let filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (categoryFilter !== "all") {
    filteredMovies = filteredMovies.filter(
      (movie) =>
        movie.category?.toLowerCase() === categoryFilter ||
        movie.company?.toLowerCase() === categoryFilter
    );
  }

  if (sortOrder === "latest") {
    filteredMovies.sort(
      (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    );
  } else if (sortOrder === "oldest") {
    filteredMovies.sort(
      (a, b) => new Date(a.releaseDate) - new Date(b.releaseDate)
    );
  } else if (sortOrder === "popular") {
    filteredMovies.sort((a, b) => b.popularity - a.popularity);
  }

  return (
    <main>
      <HeroSlider />
      <CompanyScroller />
      <SearchFilter
        onSearch={setSearchTerm}
        onSort={setSortOrder}
        onFilter={setCategoryFilter}
      />
    </main>
  );
}

export default Home;
