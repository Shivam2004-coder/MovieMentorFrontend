import React from "react";
import ShimmerMovieCard from "./ShimmerMovieCard";

const ShimmerMovieList = () => {
    return (
        <div className="mb-8 m-3 bg-black bg-opacity-80 rounded-md">
            <h1 className="p-1 text-gray-500 text-3xl mb-1 animate-pulse">Loading...</h1>
            <div className="flex overflow-x-auto scrollbar-thin overflow-y-hidden bg-opacity-0 rounded-md">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ShimmerMovieCard key={index} />
                ))}
            </div>
        </div>
    );
};

export default ShimmerMovieList;
