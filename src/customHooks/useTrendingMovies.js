import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { SHUFFLE_ARRAY } from "../utils/constants";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = useSelector((store) => store?.movies?.trendingMovies);

  useEffect(() => {
    if (!trendingMovies) {
      const fetchTrendingMovies = async () => {
        try {
          console.log("✅ useTrendingMovies: fetching from backend...");
          console.log("Base URL:", process.env.REACT_APP_BASE_URL);
          const res = await fetch(`${process.env.REACT_APP_BASE_URL}api/movies/trending`);
          console.log("Raw response status:", res.status);
          const data = await res.json();
          console.log("📦 Movies from backend:", data);

          const shuffledMovies = SHUFFLE_ARRAY([...data]);
          dispatch(addTrendingMovies(shuffledMovies));
          console.log("✅ Dispatched trending movies to Redux");
        } catch (err) {
          console.error("❌ Error fetching trending movies:", err);
        }
      };

      fetchTrendingMovies();
    }
  }, [trendingMovies, dispatch]);
};

export default useTrendingMovies;







// const useTrendingMovies = () => {
//     const dispatch = useDispatch();
//     const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

//     useEffect(() => {
//         if (!topRatedMovies) {
//             const getMoviesData = () => {
//                 fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS)
//                     .then((res) => res.json())
//                     .then((data) => {
//                         const shuffledMovies = SHUFFLE_ARRAY([...data.results]); // Shuffle the movies
//                         dispatch(addTrendingMovies(shuffledMovies));
//                     })
//                     .catch((err) => console.error("Error fetching movies:", err));
//             };

//             getMoviesData();
//         }
//     }, [topRatedMovies, dispatch]); // Correct dependencies

// };

// export default useTrendingMovies;






// import { useDispatch, useSelector } from "react-redux";
// import { addTrendingMovies } from "../utils/moviesSlice";
// import { useEffect } from "react";
// import { API_OPTIONS , SHUFFLE_ARRAY } from "../utils/constants";

// const useTrendingMovies = () => {
//     const dispatch = useDispatch();
//     const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);

//     const getMoviesData = async () => {
          
//           fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', API_OPTIONS)
//             .then(res => res.json())
//             .then(res => {
//                 const shuffledMovies = SHUFFLE_ARRAY([...res.results]); // Shuffle the movies
//                 dispatch(addTrendingMovies(shuffledMovies));
//             })
//             .catch(err => console.error(err));
//         // const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        
//     }

//     useEffect(() => {
//         if (!topRatedMovies) {
//             getMoviesData();
//         }
//     }, []); // Dependency array includes `user`
// }

// export default useTrendingMovies;