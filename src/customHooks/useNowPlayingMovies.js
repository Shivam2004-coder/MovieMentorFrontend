import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS , SHUFFLE_ARRAY } from "../utils/constants";

const useNowPlayingMovies = () => {
    
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies);
   

    
    useEffect(() => {
        if (!nowPlayingMovies) {
            const getMoviesData = async () => {
                fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
                    .then(res => res.json())
                    .then(res => {
                        // const shuffledMovies = SHUFFLE_ARRAY([...SAMPLE_DATA.results]); // Shuffle the movies
                        // dispatch(addNowPlayingMovies(shuffledMovies));
                        const shuffledMovies = SHUFFLE_ARRAY([...res.results]); // Shuffle the movies
                        dispatch(addNowPlayingMovies(shuffledMovies));
                    })
                    .catch(err => console.error(err));
            }

            getMoviesData();
        }
    }, [nowPlayingMovies , dispatch]); // Dependency array includes `user`
}

export default useNowPlayingMovies;