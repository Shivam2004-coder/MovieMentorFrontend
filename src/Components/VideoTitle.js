import { useSelector } from "react-redux";
import useMovieNavigation from "../customHooks/useMovieNavigation";
import ShimmerVideoTitle from "../ShimmerUI/ShimmerVideoTitle";

const VideoTitle = (mainMovie) => {
    const {videoTitle , overview , movieId} = mainMovie;
    const { translations } = useSelector((store) => store?.language); // Get translations from Redux

    const { handleMoreInfoClick } = useMovieNavigation();

    // Function to truncate overview to 50 words
    const truncateOverview = (text, maxWords) => {
        const words = text.split(" ");
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(" ") + "...";
        }
        return text;
    };

    if (!videoTitle) return <ShimmerVideoTitle />; // Show shimmer when loading

    return (
        <div className=" absolute pb-[4%] md:pb-0 pt-[57%] md:pt-[20%] pl-4 md:pl-10 bg-opacity-0 w-screen aspect-video bg-gradient-to-r from-gray-800 ">
            {/* Title - Initially placed above buttons and moves up/right on hover */}
            {/* h-64 w-8/12 */}
            <div className="group text-white" >
                <h1 className="
                    mb-10
                    cursor-pointer
                    font-bold 
                    text-3xl
                    md:text-5xl 
                    transform translate-y-10
                    transition-all duration-500 ease-in-out
                    group-hover:translate-y-0 group-hover:translate-x-4 group-hover:opacity-100 group-hover:text-6xl
                ">
                    {videoTitle}
                </h1>

                {/* Overview - Initially hidden and appears on hover */}
                <p className="
                    hidden
                    md:inline-block
                    cursor-pointer
                    text-sm ml-5 w-1/4 opacity-0 transition-opacity duration-500 ease-in-out
                    group-hover:opacity-100
                ">
                    {truncateOverview(overview, 25)} {/* Call the truncate function */}
                </p>
            </div>
            <div className="flex items-center mt-1" >
                <button className="
                                    text-white
                                    text-sm
                                    md:text-lg 
                                    bg-gray-900 
                                    bg-opacity-60 
                                    p-2
                                    md:p-4
                                    h-14
                                    w-30
                                    md:h-16
                                    md:w-56
                                    rounded-sm 
                                    ml-0
                                    m-1
                                    md:m-2
                                    transition-all duration-300 ease-in-out 
                                    hover:bg-gray-500 hover:bg-opacity-70 
                                    active:bg-gray-900 active:bg-opacity-60"
                        onClick={() => handleMoreInfoClick(movieId)}
                >
                    <i className="
                                    text-black
                                    fa-solid 
                                    fa-info 
                                    h-6
                                    w-6
                                    md:h-7 
                                    md:w-7 
                                    rounded-full 
                                    text-center 
                                    p-1 
                                    mr-1 
                                    border 
                                    border-black 
                                    bg-white"
                    ></i>
                        {translations.MoreInfo}
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;