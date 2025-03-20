import Header from "./Header";
import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import Footer from "./Footer";

const GptSearch = () => {

    return (
        <div className="h-screen flex flex-col justify-between" >
            <img  
                className="fixed -z-10 opacity-55 object-cover md:object-contain h-full md:h-auto"
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
