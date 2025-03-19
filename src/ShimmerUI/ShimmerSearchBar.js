import React from 'react';

const ShimmerSearchBar = () => {
    return (
        <div className="pt-[10%] flex justify-center">
            <div className="bg-black w-[45%] grid grid-cols-12 rounded-md p-2">
                <div className="col-span-10 p-3 m-1 bg-gray-700 animate-pulse rounded-md h-10"></div>
                <div className="col-span-2 p-3 m-1 bg-gray-600 animate-pulse rounded-md h-10"></div>
            </div>
        </div>
    );
};

export default ShimmerSearchBar;
