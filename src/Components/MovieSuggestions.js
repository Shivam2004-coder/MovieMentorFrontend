import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
  const movieNames = useSelector((store) => store?.gemini?.movieNames);
  const movies = useSelector((store) => store?.gemini?.movies);

  console.log("MovieSuggestions - movieNames:", movieNames);

  return (
    <div className="relative h-screen w-full">

      {movies && movies.length > 0 &&
        movies.map((movieArray, index) => {
          // Filter out movies without a poster
          const filteredMovies = movieArray.filter((m) => m.poster);
          if (filteredMovies.length === 0 ) return null; // nothing to show
          
          return (
            <MovieList
              key={index}
              title={movieNames[index]}
              movies={filteredMovies}
            />
          );
        })}
    </div>
  );
};

export default MovieSuggestions;
