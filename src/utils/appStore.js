import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import geminiReducer from "./geminiSlice";
import libraryReducer from "./librarySlice"; // Import the new library reducer
import languageReducer from "./languageSlice";

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies : moviesReducer,
        gemini : geminiReducer,
        library: libraryReducer, // Add the library reducer
        language : languageReducer,
    },
});