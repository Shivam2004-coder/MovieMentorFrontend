import VideoTitle from "./VideoTitle";
import VideoBackGround from "./VideoBackGround";
import { DEFAULT_TRAILER } from "../utils/constants";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import { useSelector } from "react-redux";
import ShimmerMainContainer from "../ShimmerUI/ShimmerMainContainer";

const MainContainer = () => {

    const trailerVideoContent = useSelector((store) => store?.movies?.trailerVideoContent)

    const randomIndex = Math.floor(Math.random() * 3);
    const mainMovie = DEFAULT_TRAILER[randomIndex];
    useMovieTrailer({video : mainMovie});

    if (!trailerVideoContent) {
        return <ShimmerMainContainer />
    }

    const {original_title , overview , id} = trailerVideoContent;

    return (
        <div>
            <VideoTitle videoTitle={original_title} overview={overview} movieId={id} />
            <VideoBackGround movieId={id} />
        </div>
    )
}

export default MainContainer;
