import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name : "Gemini" , 
    initialState : {
        geminiSearch : null,
        movieNames : null , 
        movies : null
    },
    reducers : {
        addRecommendedMovies : (state , action) => {
            const { movieNames , movies } = action.payload;
            state.movieNames = movieNames;
            state.movies = movies;
        }
    }
});

export const { addRecommendedMovies } = geminiSlice.actions;

export default geminiSlice.reducer;
