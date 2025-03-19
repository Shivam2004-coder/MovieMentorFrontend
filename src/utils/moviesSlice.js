import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "Movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        trendingMovies: null,
        trendingTVShows: null,
        trailerVideo: null,
        movieDescription: {},  // Store movie details with ID as the key
        movieTrailer: {}  // Store movie details with ID as the key
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addTrendingTVShows: (state, action) => {
            state.trendingTVShows = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addMovieDescription: (state, action) => {
            const { id, details } = action.payload;
            state.movieDescription[id] = details;  // Store movie details with ID as key
        },
        addMovieTrailer:(state,action) => {
            const { id , trailer } = action.payload;
            state.movieTrailer[id] = trailer;
        }
    }
});

export const { 
    addNowPlayingMovies, 
    addPopularMovies, 
    addTopRatedMovies, 
    addTrendingMovies, 
    addTrendingTVShows,  
    addTrailerVideos, 
    addMovieDescription,
    addMovieTrailer 
} = movieSlice.actions;

export default movieSlice.reducer;
