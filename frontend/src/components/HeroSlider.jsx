import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { movies } from "../data/movies";

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {movies.map((movie, index) => (
        <div
          key={movie.id}
          className={`absolute w-full h-96 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-0 right-0 bg-black bg-opacity-50 text-white p-4 max-w-sm">
            <h2 className="text-xl font-bold">{movie.title}</h2>
            <p className="text-sm">{movie.description}</p>
          </div>
          <Link
            to={`/movie/${movie.id}`}
            className="absolute bottom-6 left-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Discover More
          </Link>
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {movies.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default HeroSlider;
