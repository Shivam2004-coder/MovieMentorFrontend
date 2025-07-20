import ShimmerMovieTrailer from "../ShimmerUI/ShimmerMovieTrailer";

const MovieTrailer = ({ trailerLink, posterPath }) => {
  if (!trailerLink) return <ShimmerMovieTrailer />; // Show shimmer when trailer link is not available

  return (
    <div className="relative flex justify-center items-center">
      {trailerLink ? (
        <iframe 
          className="w-full h-screen object-cover "
          src={trailerLink} 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <img
          className="w-full h-screen object-cover"
          src={posterPath} // Display the poster when no trailer is available
          alt="Movie Poster"
        />
      )}
    </div>
  );
};

export default MovieTrailer;
