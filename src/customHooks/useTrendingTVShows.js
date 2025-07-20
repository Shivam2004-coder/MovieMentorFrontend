import { useDispatch, useSelector } from "react-redux";
import { addTrendingTVShows } from "../utils/moviesSlice";
import { useEffect } from "react";
import { SHUFFLE_ARRAY } from "../utils/constants";

const useTrendingTVShows = () => {
  const dispatch = useDispatch();
  const trendingTVShows = useSelector((store) => store?.movies?.trendingTVShows);

  useEffect(() => {
    if (!trendingTVShows) {
      const fetchTrendingTVShows = async () => {
        try {
          console.log("✅ useTrendingTVShows: fetching from backend...");
          const res = await fetch(
            `${process.env.REACT_APP_BASE_URL}api/movies/tv/trending`
          );
          console.log("Raw response status:", res.status);
          const data = await res.json();
          console.log("📦 TV Shows from backend:", data);

          const shuffledTVShows = SHUFFLE_ARRAY([...data]);
          dispatch(addTrendingTVShows(shuffledTVShows));
          console.log("✅ Dispatched trending TV shows to Redux");
        } catch (err) {
          console.error("❌ Error fetching trending TV shows:", err);
        }
      };

      fetchTrendingTVShows();
    }
  }, [trendingTVShows, dispatch]);
};

export default useTrendingTVShows;












// import { useDispatch, useSelector } from "react-redux";
// import { addTrendingTVShows } from "../utils/moviesSlice";
// import { useEffect } from "react";
// import { API_OPTIONS , SHUFFLE_ARRAY } from "../utils/constants";

// const useTrendingTVShows = () => {
//     const dispatch = useDispatch();
//     const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

    
//     useEffect(() => {
//         if (!topRatedMovies) {
//             const getMoviesData = async () => {
                
//                 fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS)
//                     .then(res => res.json())
//                     .then(res => {
//                         const shuffledMovies = SHUFFLE_ARRAY([...res.results]); // Shuffle the movies
//                         dispatch(addTrendingTVShows(shuffledMovies));
//                     })
//                     .catch(err => console.error(err));
//                 // const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
                
//             }

//             getMoviesData();
//         }
//     }, [topRatedMovies , dispatch]); // Dependency array includes `user`
// }

// export default useTrendingTVShows;