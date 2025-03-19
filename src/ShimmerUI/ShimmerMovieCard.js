import React from "react";

const ShimmerMovieCard = () => {
    return (
        <div className="relative flex-none w-48 p-1 m-2 rounded-md border-dashed border-2 border-gray-400 bg-gray-200 animate-pulse">
            <div className="h-full w-full bg-gray-300 rounded-md"></div>
        </div>
    );
};

export default ShimmerMovieCard;
