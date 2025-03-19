import { createSlice } from "@reduxjs/toolkit";

const librarySlice = createSlice({
    name: "library",
    initialState: { playlists: {
        "Watch Later" : [],
    } },
    reducers: {
        createPlaylist: (state, action) => {
            const { name } = action.payload;
            if (!state.playlists[name]) {
                state.playlists[name] = [];
            }
        },
        addMovieToPlaylist: (state, action) => {
            const { playlistName, movie } = action.payload;
            if (!state.playlists[playlistName].some((m) => m.id === movie.id)) {
                state.playlists[playlistName].push(movie);
            }
        },
        removeMovieFromPlaylist: (state, action) => {
            const { playlistName, movieId } = action.payload;
            state.playlists[playlistName] = state.playlists[playlistName].filter(
                (movie) => movie.id !== movieId
            );
        },
        deletePlaylist: (state, action) => {
            const playlistName = action.payload;
            delete state.playlists[playlistName];
        },
    },
});

export const { createPlaylist, addMovieToPlaylist, removeMovieFromPlaylist , deletePlaylist } = librarySlice.actions;
export default librarySlice.reducer;
