import { useSelector } from "react-redux";
import useMovieSearch from "../customHooks/useMovieSearch";

const SearchBar = () => {
    const { text, handleSearchClick } = useMovieSearch(); // Destructure the values from the custom hook
    const { translations } = useSelector((store) => store.language); // Get translations from Redux

    return (
        <div className="pt-[70%] md:pt-[10%] flex justify-center">
            <form 
                className="bg-black w-[95%] md:w-[45%] grid grid-cols-12 rounded-md p-2"
                onSubmit={(e) => e.preventDefault()}
            >
                <input 
                    ref={text}
                    className="text-sm md:text-lg col-span-9 p-3 m-1 text-black rounded-md" 
                    type="text" 
                    placeholder={translations.Whatwouldyouliketoseetoday} 
                />
                <button 
                    className="
                        text-sm md:text-lg
                        col-span-3 p-3 m-1 text-white bg-red-600 rounded-md 
                        hover:bg-red-700 hover:scale-105 
                        active:bg-red-800 active:scale-95 
                        transition-all duration-200 ease-in-out
                    "
                    onClick={handleSearchClick}
                > 
                    {translations.Search} 
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
