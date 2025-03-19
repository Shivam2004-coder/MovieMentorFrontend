import React from "react";
import ShimmerVideoTitle from "./ShimmerVideoTitle";
import ShimmerVideoBackGround from "./ShimmerVideoBackGround";

const ShimmerMainContainer = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <ShimmerVideoTitle />
            <ShimmerVideoBackGround />
        </div>
    );
};

export default ShimmerMainContainer;
