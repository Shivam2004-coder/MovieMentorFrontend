import { useDispatch } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";


const useMovieTrailer = (props) => {

    const { movieId } = props;

    const dispatch = useDispatch();

    const getMovieTrailer = async () => {

        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDA4NDQxZDliZjQ0ODc1MzUyNjA1MDljNTFlYjZkMCIsIm5iZiI6MTc0MjAzODg3NS40ODk5OTk4LCJzdWIiOiI2N2Q1Njc1YjU3NzY2NWFjZTVmMTYzODkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oSFDGE4BzANlzzicnHG-NgHSHa5ucCRL_QA-ObxZdJo'
            }
        };
        
        fetch("https://api.themoviedb.org/3/movie/1294376/videos?language=en-US", options)
        .then(res => res.json())  // Parse JSON
        .then(res => {
            if (!res.results || res.results.length === 0) {
                console.error("No video results found.");
                return;
            }

            const filteredData = res.results.filter(video => video.type === "Trailer");
            const trailer = filteredData.length ? filteredData[0] : res.results[0];

            dispatch(addTrailerVideos(trailer));
        })
        .catch(err => console.error(err));  // Handle errors


    }

    useEffect(() => {
        getMovieTrailer();
    },[]);
}

export default useMovieTrailer;