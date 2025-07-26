import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

    console.log("MovieList movies:", movies);

    return (
        <div className="relative mb-8 m-3 bg-black rounded-md">
            <h1 className="p-1 text-white text-lg md:text-3xl mb-1">{title}</h1>
            <div className="flex overflow-x-auto scrollbar-thin overflow-y-hidden bg-opacity-0 rounded-md">
                {movies && movies.length > 0 &&
                    movies.map((movie) =>
                        movie.poster ? (
                            <MovieCard
                                key={movie.id}
                                movieId={movie.id}
                                title={movie.original_title || movie.original_name}
                                poster_path={movie.poster}
                            />
                        ) : null
                    )
                }
            </div>
        </div>
    );
};

export default MovieList;