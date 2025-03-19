const ShimmerAbout = () => {
    return (
        <div className="border text-white border-black bg-gray-800 bg-opacity-90 w-44 p-3 rounded-md shadow-lg">
            <div className="flex items-center space-x-3">
                <div className="h-6 w-6 bg-gray-600 rounded-full animate-pulse"></div>
                <div className="h-4 w-24 bg-gray-600 rounded-md animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-3 mt-3">
                <div className="h-6 w-6 bg-gray-600 rounded-full animate-pulse"></div>
                <div className="h-4 w-28 bg-gray-600 rounded-md animate-pulse"></div>
            </div>
            <div className="flex items-center space-x-3 mt-3">
                <div className="h-6 w-6 bg-gray-600 rounded-full animate-pulse"></div>
                <div className="h-4 w-20 bg-gray-600 rounded-md animate-pulse"></div>
            </div>
            <hr className="border-black border-dotted my-2" />
            <div className="h-4 w-20 bg-red-600 rounded-md animate-pulse mx-auto"></div>
        </div>
    );
};

export default ShimmerAbout;
