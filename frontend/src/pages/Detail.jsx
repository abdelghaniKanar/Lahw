import { useParams } from "react-router-dom";
import movies from "../data/movies.json";
import MovieCard from "../components/MovieCard";

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);
  const recommendations = movies.filter(
    (m) => m.category === movie.category && m.id !== movie.id
  );

  if (!movie)
    return (
      <p className="text-center text-gray-500 dark:text-gray-300">
        Movie not found
      </p>
    );

  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        {movie.title}
      </h1>
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full max-h-[500px] object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {movie.description}
      </p>
      <ul className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
        <li>
          <strong>Release Date:</strong> {movie.releaseDate}
        </li>
        <li>
          <strong>Director:</strong> {movie.director}
        </li>
        <li>
          <strong>Company:</strong> {movie.company}
        </li>
        <li>
          <strong>Revenue:</strong> ${movie.revenue}
        </li>
      </ul>

      {recommendations.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
            You may also like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendations.map((rec) => (
              <MovieCard key={rec.id} movie={rec} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
