import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { SHUFFLE_ARRAY } from "../utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);

  useEffect(() => {
    if (!popularMovies) {
      const fetchPopularMovies = async () => {
        try {
          const res = await fetch(`${process.env.REACT_APP_BASE_URL}api/movies/popular`);
          const data = await res.json();
          const shuffledMovies = SHUFFLE_ARRAY([...data]);
          dispatch(addPopularMovies(shuffledMovies));
        } catch (err) {
          console.error("❌ Error fetching popular movies:", err);
        }
      };
      fetchPopularMovies();
    }
  }, [popularMovies, dispatch]);
};

export default usePopularMovies;
