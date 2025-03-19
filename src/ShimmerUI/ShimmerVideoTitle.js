import React from "react";

const ShimmerVideoTitle = () => {
    return (
        <div className="absolute pt-[20%] pl-10 w-screen aspect-video bg-gradient-to-r from-gray-800 animate-pulse">
            <div className="group text-white">
                <div className="h-10 bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-gray-700 rounded w-1/4 opacity-50"></div>
            </div>
        </div>
    );
};

export default ShimmerVideoTitle;
