import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerSecondaryContainer from "../ShimmerUI/ShimmerSecondaryContainer";

const SecondaryContainer = () => {
    const { translations } = useSelector((store) => store.language); // Get translations from Redux

    const movie = useSelector((store) => store.movies);

    if (!movie.nowPlayingMovies) {
        return <ShimmerSecondaryContainer />; // Show shimmer when movies are loading
    }

    return (
        <div className="bg-black p-1">
            <div className="-mt-44 relative z-20" >
                <MovieList title={translations.TrendingMovies} movies={movie.nowPlayingMovies} />
                <MovieList title={translations.TrendingTVShows} movies={movie.nowPlayingMovies} />
                <MovieList title={translations.NowPlaying} movies={movie.nowPlayingMovies} />
                <MovieList title={translations.Popular} movies={movie.nowPlayingMovies} />
                <MovieList title={translations.TopRated} movies={movie.nowPlayingMovies} />

                {/* <MovieList title={"Trending Movies"} movies={movie.trendingMovies} />
                <MovieList title={"Trending TV Shows"} movies={movie.trendingTVShows} />
                <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies} />
                <MovieList title={"Popular"} movies={movie.popularMovies} />
                <MovieList title={"Top-Rated"} movies={movie.topRatedMovies} /> */}
            </div>

            {
                /*
                    MovieList - NowPlaying * N
                        -MovieCards * N
                */
            }
        </div>
    )
}

export default SecondaryContainer;