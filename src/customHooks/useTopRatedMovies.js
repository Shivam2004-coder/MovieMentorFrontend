import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { SHUFFLE_ARRAY } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

  useEffect(() => {
    if (!topRatedMovies) {
      const fetchTopRatedMovies = async () => {
        try {
          console.log("🎥 useTopRatedMovies: fetching from backend...");
          const res = await fetch(`${process.env.REACT_APP_BASE_URL}api/movies/top-rated`);
          console.log("Raw response status:", res.status);
          const data = await res.json();
          console.log("📦 Top Rated Movies from backend:", data);

          const shuffledMovies = SHUFFLE_ARRAY([...data]);
          dispatch(addTopRatedMovies(shuffledMovies));
          console.log("✅ Dispatched top rated movies to Redux");
        } catch (err) {
          console.error("❌ Error fetching top rated movies:", err);
        }
      };

      fetchTopRatedMovies();
    }
  }, [topRatedMovies, dispatch]);
};

export default useTopRatedMovies;
