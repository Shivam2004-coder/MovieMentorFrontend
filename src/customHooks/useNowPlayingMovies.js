import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS , SHUFFLE_ARRAY , SAMPLE_DATA } from "../utils/constants";

const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        // const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
        
        // const jsonData = await data.json();
        const shuffledMovies = SHUFFLE_ARRAY([...SAMPLE_DATA.results]); // Shuffle the movies
        dispatch(addNowPlayingMovies(shuffledMovies));
    }

    useEffect(() => {
        getMoviesData();
    }, []); // Dependency array includes `user`
}

export default useNowPlayingMovies;