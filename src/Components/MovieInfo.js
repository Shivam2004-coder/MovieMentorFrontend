import { useParams } from "react-router-dom";
import Header from "./Header";
import MovieTrailer from "./MovieTrailer";
import MovieDescription from "./MovieDescription";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDescription } from "../utils/moviesSlice";
import { useEffect } from "react";
// import Footer from "./Footer"; // optional

const MovieInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // get from redux store
  const movieDetails = useSelector((store) => store?.movies?.movieDescription[id]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!movieDetails) {
        try {
          console.log("🎬 Fetching movie details from backend:", id);
          const res = await fetch(`${process.env.REACT_APP_BASE_URL}api/movies/${id}`);
          const data = await res.json();
          console.log("📽️ Movie details fetched:", data);
          dispatch(addMovieDescription({ id, details: data }));
        } catch (err) {
          console.error("❌ Error fetching movie details:", err);
        }
      }
    };

    fetchMovieDetails();
  }, [id, dispatch, movieDetails]);

  // ✅ trailer & poster come directly from backend
  const trailerLink = movieDetails?.trailer || null;
  const posterPath = movieDetails?.poster || null;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Trailer at the top */}
      <div className="relative w-full h-full ">
        <MovieTrailer trailerLink={trailerLink} posterPath={posterPath} />
      </div>

      {/* Description below */}
      <div className="relative -mt-52">
        <MovieDescription trailerLink={trailerLink} movie={movieDetails} />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default MovieInfo;
























// import { useParams } from "react-router-dom";
// import Header from "./Header";
// import MovieTrailer from "./MovieTrailer";
// import MovieDescription from "./MovieDescription";
// import { API_OPTIONS } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addMovieDescription, addMovieTrailer } from "../utils/moviesSlice";
// import { useEffect } from "react";
// import Footer from "./Footer";


// const MovieInfo = () => {
//     const dispatch = useDispatch();
//     const { id } = useParams();

//     const movieDetails = useSelector((store) => store?.movies?.movieDescription[id]);
//     const movieTrailer = useSelector((store) => store?.movies?.movieTrailer[id]);

//     useEffect(() => {
//         const fetchMovieDetails = async () => {
//             if (!movieDetails) {
//                 try {
//                     const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, API_OPTIONS);
//                     const data = await res.json();
//                     dispatch(addMovieDescription({ id, details: data }));
//                 } catch (err) {
//                     console.error(err);
//                 }
//             }

//             if (!movieTrailer) {
//                 try {
//                     const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
//                     const data = await res.json();
//                     dispatch(addMovieTrailer({ id, trailer: data }));
//                 } catch (err) {
//                     console.error(err);
//                 }
//             }
//         };

//         fetchMovieDetails();
//     }, [id, dispatch, movieDetails, movieTrailer]); // No warning now

//     const trailerKey = movieTrailer?.results?.length > 0 ? movieTrailer.results[0].key : null;
//     const url = "https://www.youtube.com/embed/"+trailerKey+"?autoplay=1&mute=1&loop=1&playlist="+trailerKey+"&enablejsapi=1&playsinline=1";
//     const poster_path = movieDetails?.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}` : null;

//     return (
//         <div className="min-h-screen">
//             <Header />

//             {/* Movie Trailer at the Top */}
//             <div className="relative w-full h-full -z-10">
//                 <MovieTrailer trailerLink={url} posterPath={poster_path} />
//             </div>

//             {/* Movie Description strictly below */}
//             <div className="-mt-52">
//                 <MovieDescription trailerLink={url} movie={movieDetails} />
//             </div>
//             {/* <Footer /> */}
//         </div>
//     );
// };

// export default MovieInfo;










// {
//     "adult": false,
//     "backdrop_path": null,
//     "belongs_to_collection": null,
//     "budget": 0,
//     "genres": [
//       {
//         "id": 99,
//         "name": "Documentary"
//       }
//     ],
//     "homepage": "",
//     "id": 1294376,
//     "imdb_id": null,
//     "origin_country": [
//       "US"
//     ],
//     "original_language": "en",
//     "original_title": "Meanwhile",
//     "overview": "A groundbreaking, immersive, nonlinear cinematic journey where artists' expressions blend with historical and real-life footage, unveils the profound impact of white supremacy on our human connections. Led by a dynamic team including Jacqueline Woodson, Catherine Gund, Erika Dilday, Meshell Ndegeocello, and M. Trevino, this collaborative masterpiece weaves together diverse visions, poignantly revealing how race, racism, and resistance shape our shared breath, not just in moments of crisis, but in the enduring, pervasive legacy of that risk.",
//     "popularity": 4.998,
//     "poster_path": "/6WTtDN2llm2laub4CSXuvAcr3zi.jpg",
//     "production_companies": [
//       {
//         "id": 13638,
//         "logo_path": "/8e5pSWaPlwJiokyWn7r1ed3j19q.png",
//         "name": "Aubin Pictures",
//         "origin_country": "US"
//       },
//       {
//         "id": 113790,
//         "logo_path": "/g7FpsadP1UG9MotNi54RvE5hiGY.png",
//         "name": "JustFilms / Ford Foundation",
//         "origin_country": "US"
//       }
//     ],
//     "production_countries": [
//       {
//         "iso_3166_1": "US",
//         "name": "United States of America"
//       }
//     ],
//     "release_date": "2025-03-14",
//     "revenue": 0,
//     "runtime": 89,
//     "spoken_languages": [
//       {
//         "english_name": "English",
//         "iso_639_1": "en",
//         "name": "English"
//       }
//     ],
//     "status": "Released",
//     "tagline": "This is not a letter to this country, but to us inside this country.",
//     "title": "Meanwhile",
//     "video": false,
//     "vote_average": 8.5,
//     "vote_count": 1
//   }