import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";
import ShimmerMainContainer from "../ShimmerUI/ShimmerMainContainer";

const MainContainer = () => {

    const movies = useSelector((store) => store.movies?.nowPlayingMovies );

    if (!movies) {
        return <ShimmerMainContainer />; // Show shimmer when movies are loading
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    const mainMovie = movies[randomIndex];

    const {original_title , overview , id} = mainMovie;

    return (
        <div>
            <VideoTitle videoTitle={original_title} overview={overview} movieId={id} />
            <VideoBackGround movieId={id} />
        </div>
    )
}

export default MainContainer;