import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import useTrendingTVShows from "../customHooks/useTrendingTVShows";
import Footer from "./Footer";

const Browse = () => {
    
    useTrendingMovies();
    useTrendingTVShows();
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();

    return (
        <div className="bg-black" >
            <Header />
            <MainContainer />
            <SecondaryContainer />
            <Footer />

            {/*
                MainContainer
                    - VideoBackground
                    - VideoTitle
                SecondaryContainer
                    - MovieList * N
                        - Cards * N

            */}
        </div>
    )
};

export default Browse;