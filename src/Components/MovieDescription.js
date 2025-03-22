import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToPlaylist, removeMovieFromPlaylist, createPlaylist } from "../utils/librarySlice"; // Import remove action
import ShimmerMovieDescription from "../ShimmerUI/ShimmerDescription";
import { successMessage , invalidMessage } from "../Components/ShowMessage";

const MovieDescription = ({ movie, trailerLink }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [newPlaylistName, setNewPlaylistName] = useState("");
    const playlists = useSelector((store) => store?.library?.playlists);
    const [selectedPlaylists, setSelectedPlaylists] = useState(new Set());
    const { translations } = useSelector((store) => store?.language); // Get translations from Redux

     // Show shimmer if movie data is not available
     if (!movie) return <ShimmerMovieDescription />;

    // Initialize selected playlists based on movie's existence
    const initializeSelectedPlaylists = () => {
        const selected = new Set();
        for (const [name, movies] of Object.entries(playlists)) {
            if (movies.some((m) => m?.id === movie?.id)) {
                selected.add(name);
            }
        }
        return selected;
    };

    // Handle Add to Library (ensure movie is added only once)
    const handleAddToLibrary = () => {
        if (showModal) return; // Prevent multiple modal openings
        setSelectedPlaylists(initializeSelectedPlaylists());
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // Handle checkbox toggle (add or remove movie from playlist)
    const handleCheckboxChange = (playlistName) => {
        const updatedSelection = new Set(selectedPlaylists);
        if (updatedSelection.has(playlistName)) {
            updatedSelection.delete(playlistName); // Uncheck -> Remove movie
            dispatch(removeMovieFromPlaylist({ playlistName, movieId: movie.id }));
        } else {
            updatedSelection.add(playlistName); // Check -> Add movie
        }
        setSelectedPlaylists(updatedSelection);
    };

    // Create a new playlist
    const handleCreatePlaylist = () => {
        if (!newPlaylistName.trim()) {
            invalidMessage(translations.Watchlistnamecannotbeempty);
            return;
        }
        dispatch(createPlaylist({ name: newPlaylistName }));
        setNewPlaylistName(""); // Reset input
        successMessage("Successfully created a new Watchlist.");
    };

    // Add the movie to all selected playlists (without duplicates)
    const handleDone = () => {
        selectedPlaylists.forEach((playlistName) => {
            if (!playlists[playlistName].some((m) => m?.id === movie?.id)) {
                dispatch(addMovieToPlaylist({ playlistName, movie }));
            }
        });
        handleCloseModal();
        successMessage("Movie is successfully added to your watchlist.");
    };

    return (
        <div className="bg-gray-950 text-white p-6 rounded-lg shadow-inner shadow-gray-600">
            {/* Title */}
            <h2 className="text-xl md:text-3xl font-bold mb-2">{movie?.title || translations.TitleNotAvailable}</h2>

            {/* Tagline */}
            <p className="text-sm md:text-lg text-gray-400 italic mb-2">{movie?.tagline || translations.Notaglineavailable}</p>

            {/* Overview */}
            <p className="text-sm text-gray-300 mb-4">{movie?.overview || translations.Nodescriptionavailableforthismovie}</p>

            {/* Movie Stats */}
            <div className="flex gap-4 mb-4">
                <span className="bg-gray-600 text-white px-3 py-1 text-sm md:text-lg rounded-sm shadow-inner shadow-gray-800">
                    {movie?.vote_average ? `${movie.vote_average}⭐` : translations.NoRating}
                </span>
                <span className="bg-gray-600 text-white px-3 py-1 text-sm md:text-lg rounded-sm shadow-inner shadow-gray-800">
                    {movie?.runtime ? `${movie.runtime} min` : translations.RuntimeUnknown}
                </span>
                <span className="bg-gray-600 text-white px-3 py-1 text-sm md:text-lg rounded-sm shadow-inner shadow-gray-800">
                    {movie?.release_date || translations.ReleaseDateUnavailable}
                </span>
            </div>

            {/* Watch on YouTube Button */}
            <a
                href={trailerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 mt-3 text-white md:font-semibold p-2 md:py-2 md:px-4 rounded-sm md:rounded-lg transition duration-300 ease-in-out shadow-inner shadow-gray-800 block text-center w-max"
            >
                🎬 {translations.WatchonYouTube}
            </a>

            {/* Add to Library Button */}
            <button onClick={handleAddToLibrary} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white md:font-semibold p-2 md:py-2 md:px-4 rounded-sm md:rounded-lg transition duration-300 ease-in-out">
                {translations.AddtoLibrary}
            </button>

            {/* Modal for adding to library */}
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90">
                    <div className="bg-gray-800 p-4 rounded-lg shadow-inner shadow-gray-950">
                        <h3 className="text-lg md:text-xl font-bold mb-4">{translations.AddtoLibrary}</h3>

                        {/* Existing playlists */}
                        {Object.keys(playlists).map((playlistName) => (
                            <div key={playlistName} className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={selectedPlaylists.has(playlistName)}
                                    onChange={() => handleCheckboxChange(playlistName)}
                                    className="mr-2"
                                />
                                <span>{playlistName}</span>
                            </div>
                        ))}

                        {/* Input for new playlist */}
                        <div className="bg-black w-56 p-2 rounded-sm md:rounded-lg mt-5" >
                          <div className="flex flex-col mb-2 md:mb-4">
                              <input
                                  type="text"
                                  placeholder={translations.NewPlaylistName}
                                  value={newPlaylistName}
                                  onChange={(e) => {
                                      setNewPlaylistName(e.target.value)
                                  }}
                                  className="bg-gray-700 text-white px-2 py-1 rounded-sm w-full"
                              />
                          </div>

                          {/* Buttons */}
                          <button
                              className="bg-white text-black font-bold p-2 md:py-2 md:px-4 rounded-sm mr-2 hover:bg-gray-500 active:bg-white"
                              onClick={handleCreatePlaylist}
                          >
                              {translations.CreatePlaylist}
                          </button>
                        </div>
                        <div className="flex justify-between mt-2" >
                          <button
                              className="bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-900 active:bg-gray-950"
                              onClick={handleCloseModal}
                          >
                              {translations.Cancel}
                          </button>
                          <button
                              className="bg-gray-950 text-white py-2 px-4 rounded-md hover:bg-gray-900 active:bg-gray-950"
                              onClick={handleDone}
                          >
                              {translations.Done}
                          </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDescription;