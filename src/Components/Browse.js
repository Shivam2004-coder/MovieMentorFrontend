import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useTrendingMovies from "../customHooks/useTrendingMovies";
import useTrendingTVShows from "../customHooks/useTrendingTVShows";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ShimmerBrowse from "../ShimmerUI/ShimmerBrowse";

const Browse = () => {
    
    // useTrendingMovies();
    // useTrendingTVShows();
    useNowPlayingMovies();
    // usePopularMovies();
    // useTopRatedMovies();

    // Simulate loading delay
    // useEffect(() => {
    //     const timer = setTimeout(() => setLoading(false), 1000); // Set loading duration
    //     return () => clearTimeout(timer);
    // }, []);

    // if (loading) return <ShimmerBrowse />; // Show shimmer while loading

    return (
        <div>
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