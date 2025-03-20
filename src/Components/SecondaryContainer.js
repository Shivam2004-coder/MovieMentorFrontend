import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShimmerSecondaryContainer from "../ShimmerUI/ShimmerSecondaryContainer";

const SecondaryContainer = () => {
    const { translations } = useSelector((store) => store?.language); // Get translations from Redux

    const movie = useSelector((store) => store?.movies);

    if (!movie?.nowPlayingMovies) {
        return <ShimmerSecondaryContainer />; // Show shimmer when movies are loading
    }

    return (
        <div className="bg-black p-1">
            <div className="  md:-mt-28 relative z-20" >
                <MovieList title={translations.TrendingMovies} movies={movie.trendingMovies} />
                <MovieList title={translations.TrendingTVShows} movies={movie.trendingTVShows} />
                <MovieList title={translations.NowPlaying} movies={movie.nowPlayingMovies} />
                <MovieList title={translations.Popular} movies={movie.popularMovies} />
                <MovieList title={translations.TopRated} movies={movie.topRatedMovies} />
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