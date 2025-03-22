import { useSelector } from "react-redux";
import useMovieSearch from "../customHooks/useMovieSearch";
import { useState } from "react";

const SearchBar = () => {
    const { translations } = useSelector((store) => store?.language); // Get translations from Redux
    const user = useSelector((store) => store.user.userContent );
    const [isSearching, setIsSearching] = useState(false); // State to manage searching status
    const { text, handleSearchClick } = useMovieSearch({setIsSearching : setIsSearching}); // Destructure the values from the custom hook

    return (
        <div className="pt-[70%] md:pt-[10%] flex flex-col items-center m-2">
            <div className="p-4 m-2 bg-red-300 w-6/12 flex flex-col items-center rounded-lg shadow-inner shadow-black " >
                <h1 className="p-2 text-black text-4xl font-semibold">Hey!</h1>
                <p className="text-gray-800 mb-2 text-center">
                    Your favorite movies are just a search away! 🎥
                </p>
                <form 
                    className="bg-black w-full rounded-md p-2 flex flex-col items-center justify-between"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <input 
                        ref={text}
                        className="text-sm md:text-lg p-3 w-full text-black rounded-md" 
                        type="text" 
                        placeholder={translations.Whatwouldyouliketoseetoday} 
                    />
                    <button 
                        className="
                            text-sm md:text-lg
                            w-6/12
                            p-3 m-1 text-white bg-red-600 rounded-md 
                            hover:bg-red-700 hover:scale-105 
                            active:bg-red-800 active:scale-95 
                            transition-all duration-200 ease-in-out
                            flex justify-center
                        "
                        onClick={handleSearchClick}
                    > 
                        {isSearching ? (
                            <span className="flex items-end">
                                Searching
                                <span className="w-full items-end flex ml-2">
                                    <span className="w-[4px] h-[4px] mr-1 mb-2 bg-white rounded-full animate-bounce [animation-delay:0s]"></span>
                                    <span className="w-[4px] h-[4px] mr-1 mb-2 bg-white rounded-full animate-bounce [animation-delay:0.15s]"></span>
                                    <span className="w-[4px] h-[4px] mr-1 mb-2 bg-white rounded-full animate-bounce [animation-delay:0.3s]"></span>
                                    <span className="w-[4px] h-[4px] mr-1 mb-2 bg-white rounded-full animate-bounce [animation-delay:0.45s]"></span>
                                    <span className="w-[4px] h-[4px] mr-1 mb-2 bg-white rounded-full animate-bounce [animation-delay:0.6s]"></span>
                                </span>
                            </span>
                        ) : (
                            translations.Search
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchBar;
