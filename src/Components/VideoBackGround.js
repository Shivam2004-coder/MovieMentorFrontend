import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";
import ShimmerVideoBackGround from "../ShimmerUI/ShimmerVideoBackGround";


const VideoBackGround = ({movieId}) => {

    const trailerVideo = useSelector((store) => store.movies.trailerVideo);

    useMovieTrailer({movieId});

    if (!trailerVideo) return <ShimmerVideoBackGround />; // Show shimmer when loading

    return (
        <div  >
            <iframe 
                className="w-screen aspect-video"
                // src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
                src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&loop=1&playlist="+trailerVideo?.key} 
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
            >
            </iframe>
        </div>
    )
}

export default VideoBackGround;