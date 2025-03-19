const ShimmerHeader = () => {
    return (
        <div className="fixed top-0 left-0 w-screen flex items-center justify-between bg-gray-700 p-4">
            <div className="h-12 w-40 bg-gray-600 rounded-lg animate-pulse"></div>
            <div className="flex items-center space-x-4">
                <div className="h-10 w-32 bg-gray-600 rounded-md animate-pulse"></div>
                <div className="h-10 w-10 bg-gray-600 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
};

export default ShimmerHeader;
