import { IMG_CDN_URL } from "../utils/constants";
import useMovieNavigation from "../customHooks/useMovieNavigation";
import { useSelector } from "react-redux";

const MovieCard = ({movieId , title, poster_path }) => {
    const { translations } = useSelector((store) => store.language); // Get translations from Redux

    const { handleMoreInfoClick } = useMovieNavigation();

    return (
        <div
            className="relative flex-none w-36 md:w-48 p-1 m-2 rounded-md border-dashed border-2 border-gray-400 bg-gray-200 
                       transition-all duration-100 hover:bg-gray-300 hover:scale-105 cursor-pointer overflow-hidden group"
        >
            <img
                className="w-full rounded-md"
                alt={title + ' Poster'}
                src={IMG_CDN_URL + poster_path}
            />
            {/* More Info Button with Inner Shadow */}
            <button
                className="
                    absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-4 md:opacity-0 
                    bg-red-600 text-white px-3 py-2 rounded-md text-sm font-semibold
                    shadow-inner shadow-gray-950
                    transition-all duration-100 ease-in-out
                    hover:bg-red-500 active:bg-red-600
                    group-hover:translate-y-0 md:group-hover:opacity-100 group-hover:pointer-events-auto
                    pointer-events-none
                "
                onClick={() => handleMoreInfoClick(movieId)}
            >
                {translations.MoreInfo}
            </button>
        </div>
    );
}

export default MovieCard;





// import { IMG_CDN_URL } from "../utils/constants";

// const MovieCard = ({ title, poster_path }) => {
//     return (
//         <div
//             className="relative flex-none w-48 p-1 m-2 rounded-md border-dashed border-2 border-gray-400 bg-gray-200 
//                        transition-all duration-100 hover:bg-gray-300 hover:scale-105 cursor-pointer overflow-hidden group"
//         >
//             <img
//                 className="w-full rounded-md"
//                 alt={title + ' Poster'}
//                 src={IMG_CDN_URL + poster_path}
//             />
//             {/* More Info Button (Initially Hidden) */}
//             <button
//                 className="
//                     absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-y-4 opacity-0 
//                     bg-red-600 text-white px-3 py-2 rounded-md text-sm font-semibold
//                     transition-all duration-100 ease-in-out
//                     hover:bg-red-500 active:bg-red-600
//                     group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto
//                     pointer-events-none
//                 "
//             >
//                 More Info
//             </button>
//         </div>
//     );
// }

// export default MovieCard;