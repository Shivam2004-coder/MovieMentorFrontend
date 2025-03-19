import Header from "./Header";
import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import Footer from "./Footer";

const GptSearch = () => {

    return (
        <div>
            <img  
                className="fixed -z-10 opacity-55 "
                alt="Movie-Recommendation-Background-Image" 
                src="./movieRecommendationBackgroundImage.png" 
            />
            <Header />
            <SearchBar />
            <MovieSuggestions />
            <Footer />
        </div>
    )
}

export default GptSearch;