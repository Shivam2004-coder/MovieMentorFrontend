import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggestions = () => {
    const movieNames = useSelector(store => store?.gemini?.movieNames);
    const movies = useSelector(store => store?.gemini?.movies);

    return (
        <div className="">
            {movies && movies.length > 0 && 
                movies.map((movie, index) => (
                    <MovieList key={index} title={movieNames[index]} movies={movie} />
                ))
            }
        </div>
    );
}

export default MovieSuggestions;
