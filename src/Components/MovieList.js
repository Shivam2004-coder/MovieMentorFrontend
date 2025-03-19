import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="mb-8 m-3 bg-black bg-opacity-80 rounded-md">
            <h1 className="p-1 text-white text-3xl mb-1">{title}</h1>
            <div className="flex overflow-x-auto scrollbar-thin overflow-y-hidden bg-opacity-0 rounded-md">
                {movies && movies.length > 0 &&
                    movies.map((movie) =>
                        movie.poster_path ? (
                            <MovieCard
                                key={movie.id}
                                movieId={movie.id}
                                title={movie.original_title || movie.original_name}
                                poster_path={movie.poster_path}
                            />
                        ) : null
                    )
                }
            </div>
        </div>
    );
};

export default MovieList;