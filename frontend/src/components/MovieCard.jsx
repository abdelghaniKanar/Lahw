import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function MovieCard({ movie }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform">
      <img
        src={movie.poster}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="flex justify-between items-center px-4 py-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
          {movie.title}
        </h3>
        <Link to={`/movie/${movie.id}`}>
          <ArrowRight className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white" />
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
