import { useDispatch, useSelector } from "react-redux";
import { addTrendingTVShows } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS , SHUFFLE_ARRAY } from "../utils/constants";

const useTrendingTVShows = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

    
    useEffect(() => {
        if (!topRatedMovies) {
            const getMoviesData = async () => {
                
                fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS)
                    .then(res => res.json())
                    .then(res => {
                        const shuffledMovies = SHUFFLE_ARRAY([...res.results]); // Shuffle the movies
                        dispatch(addTrendingTVShows(shuffledMovies));
                    })
                    .catch(err => console.error(err));
                // const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
                
            }

            getMoviesData();
        }
    }, [topRatedMovies , dispatch]); // Dependency array includes `user`
}

export default useTrendingTVShows;