import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { SHUFFLE_ARRAY } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies);

  useEffect(() => {
    if (!nowPlayingMovies) {
      const fetchNowPlayingMovies = async () => {
        try {
          const res = await fetch(`${process.env.REACT_APP_BASE_URL}api/movies/now-playing`);
          const data = await res.json();
          const shuffledMovies = SHUFFLE_ARRAY([...data]);
          dispatch(addNowPlayingMovies(shuffledMovies));
        } catch (err) {
          console.error("❌ Error fetching now-playing movies:", err);
        }
      };
      fetchNowPlayingMovies();
    }
  }, [nowPlayingMovies, dispatch]);
};

export default useNowPlayingMovies;
