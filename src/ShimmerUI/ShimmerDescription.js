// ShimmerMovieDescription.js
const ShimmerMovieDescription = () => {
    return (
        <div className="bg-gray-950 text-white p-6 rounded-lg shadow-inner shadow-gray-600">
            <div className="h-8 bg-gray-700 rounded mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-600 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-500 rounded mb-4 animate-pulse"></div>
            <div className="flex gap-4 mb-4">
                <div className="h-6 bg-gray-600 rounded px-3 py-1 animate-pulse"></div>
                <div className="h-6 bg-gray-600 rounded px-3 py-1 animate-pulse"></div>
                <div className="h-6 bg-gray-600 rounded px-3 py-1 animate-pulse"></div>
            </div>
            <div className="h-10 bg-gray-600 rounded mt-4 animate-pulse"></div>
        </div>
    );
};

export default ShimmerMovieDescription;
