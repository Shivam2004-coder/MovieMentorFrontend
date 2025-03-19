import React from 'react';
import ShimmerMovieCard from './ShimmerMovieCard';

const ShimmerMovieSuggestions = () => {
    return (
        <div className="h-screen p-4">
                {Array.from({ length: 6 }).map((_, index) => (
                    <ShimmerMovieCard />
                ))}
        </div>
    );
};

export default ShimmerMovieSuggestions;
