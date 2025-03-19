import React from "react";
import ShimmerMovieList from "./ShimmerMovieList";

const ShimmerSecondaryContainer = () => {
    return (
        <div className="bg-black p-1">
            <div className="-mt-44 relative z-20">
                <ShimmerMovieList />
                <ShimmerMovieList />
                <ShimmerMovieList />
                <ShimmerMovieList />
                <ShimmerMovieList />
            </div>
        </div>
    );
};

export default ShimmerSecondaryContainer;
