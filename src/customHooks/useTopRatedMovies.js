import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS , SHUFFLE_ARRAY } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

    const getMoviesData = async () => {
          
          fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
            .then(res => res.json())
            .then(res => {
                const shuffledMovies = SHUFFLE_ARRAY([...res.results]); // Shuffle the movies
                dispatch(addTopRatedMovies(shuffledMovies));
            })
            .catch(err => console.error(err));
        // const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        
    }

    useEffect(() => {
        if (!topRatedMovies) {
            getMoviesData();
        }
    }, []); // Dependency array includes `user`
}

export default useTopRatedMovies;