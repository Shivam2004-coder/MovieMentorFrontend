import { useSelector, useDispatch } from "react-redux";
import MovieList from "./MovieList";
import Header from "./Header";
import { deletePlaylist } from "../utils/librarySlice"; // Import delete action
import Footer from "./Footer";

const Library = () => {
  const dispatch = useDispatch();
  const playlists = useSelector((store) => store.library.playlists);
  const { translations } = useSelector((store) => store.language); // Get translations from Redux

  const handleDeletePlaylist = (playlistName) => {
    dispatch(deletePlaylist(playlistName)); // Dispatch action to delete playlist
  };

  return (
    <div>
      <img 
          alt="library-images" 
          src="/libraryImage1.jpg" 
          className="fixed -z-20 h-full w-full"
      />
      <Header />
      <div className=" text-white pt-[9%] h-full bg-opacity-20">
        <div className="p-2 bg-gray-900 bg-opacity-90 shadow-inner shadow-gray-500">
          <h1 className="text-7xl font-bold mb-9 text-center">{translations.MyLibrary}</h1>
        </div>
        {Object.keys(playlists).length > 0 ? (
          Object.keys(playlists).map((playlistName) => (
            <div key={playlistName} className="bg-slate-700 bg-opacity-85 p-2 m-1 rounded-sm">
              <MovieList title={playlistName} movies={playlists[playlistName]} />
              {playlists[playlistName].length === 0 &&
                <p className="text-black p-4 bg-gray-200 m-5 rounded-sm italic">{translations.Nomoviesaddedtothisplaylistyet}</p>
              }
              <button 
                className="bg-black rounded-md p-4 ml-4 -mt-5 hover:scale-105 active:scale-100" 
                onClick={() => handleDeletePlaylist(playlistName)} // Call function to delete
              >
                {translations.Delete}
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">{translations.Noplaylistsavailable}</p>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Library;