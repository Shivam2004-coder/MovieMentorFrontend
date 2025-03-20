import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (props) => {

    const { video } = props;

    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store?.movies?.trailerVideoTrailer);

    
    useEffect(() => {
        if (!trailerVideo) {
            const getMovieTrailer = async () => {
                
                // fetch("https://api.themoviedb.org/3/movie/1294376/videos?language=en-US", API_OPTIONS)
                // .then(res => res.json())  // Parse JSON
                // .then(res => {
                //     if (!res?.results || res?.results?.length === 0) {
                //         console.error("No video results found.");
                //         return;
                //     }
        
                    // const filteredData = res?.results?.filter(video => video?.type === "Trailer");
                    // const trailer = filteredData?.length ? filteredData[0] : res?.results[0];
        
                    dispatch(addTrailerVideos({ content : video.title , trailer : video.video}));
                    
                // })
                // .catch(err => console.error(err));  // Handle errors
        
        
            }

            getMovieTrailer();
        }
    // },[trailerVideo , dispatch]);
    },[video , trailerVideo , dispatch]);
}

export default useMovieTrailer;