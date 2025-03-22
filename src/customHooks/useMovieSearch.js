import { useRef } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, GOOGLE_API_KEY } from "../utils/constants";
import { addRecommendedMovies } from "../utils/geminiSlice";
import { successMessage , errorMessage , invalidMessage } from "../Components/ShowMessage";
import {getErrorMessage} from "../utils/getErrorMessage";

const useMovieSearch = (props) => {
    const {
            setIsSearching , 
    } = props;
    
    const dispatch = useDispatch();
    const text = useRef(null); // Create a ref for the input
    
    const handleSearchClick = async () => {
        if (!text?.current?.value) {
            setIsSearching(false);
            invalidMessage("Search Something !!");
            return ;
        }
        setIsSearching(true);
        const GeminiQuery = "Act as a movie Recommendation System and suggest some movies for the query : " +
            text.current.value +
            ". Only give me names of 5 movies, comma separated like the example result given ahead." +
            " Example: <movie_name1>, <movie_name2>, <movie_name3>, <movie_name4>, <movie_name5>";
        
        try{
            const { GoogleGenerativeAI } = require("@google/generative-ai");
            const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const result = await model.generateContent(GeminiQuery);
            const movieNames = result?.response?.candidates[0]?.content?.parts[0]?.text?.split(",")?.map(movie => movie.trim());

            const promises = movieNames.map(movie => {
                const url = "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1";
                return fetch(url, API_OPTIONS)
                    .then(res => res.json())
                    .then(res => res.results); // Return results from the fetch
            });
        
            // Wait for all promises to resolve
            const results = await Promise.all(promises);
            
            // Dispatch the action with movie names and results
            dispatch(addRecommendedMovies({ movieNames: movieNames, movies: results }));
        }
        catch(error){
            errorMessage("Failed to fetch. Due to slow Internet connection.");
        }
        finally{
            setIsSearching(false);
        }

    }

    return { text, handleSearchClick };
};

export default useMovieSearch;