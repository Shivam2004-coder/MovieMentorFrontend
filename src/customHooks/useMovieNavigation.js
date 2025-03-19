import { useNavigate } from "react-router-dom";

const useMovieNavigation = () => {
    const navigate = useNavigate();

    const handleMoreInfoClick = (movieId) => {
        const url = "/movie/" + movieId;
        navigate(url);
    };

    return { handleMoreInfoClick };
};

export default useMovieNavigation;
