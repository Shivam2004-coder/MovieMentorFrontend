import { motion } from "framer-motion";

const ShimmerWelcome = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white p-6 pt-[10%]">
            <div className="absolute inset-0 -z-10">
                <img 
                    src="/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg" 
                    alt="netflix-background-img" 
                    className="w-full h-full object-cover opacity-50 fixed"
                />
            </div>
            {/* Hero Section Shimmer */}
            <div className="text-center space-y-6 bg-black opacity-90 p-6 rounded text-gradient shadow-inner shadow-gray-500 w-9/12">
                <div className="h-8 w-3/4 bg-gray-700 animate-pulse mx-auto rounded"></div>
                <div className="h-4 w-1/2 bg-gray-600 animate-pulse mx-auto rounded mt-2"></div>
                <div className="h-4 w-1/2 bg-gray-600 animate-pulse mx-auto rounded"></div>
            </div>

            {/* Get Started Button Shimmer */}
            <motion.div 
                className="mt-6 w-40 h-12 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse rounded-lg"
            ></motion.div>

            {/* Steps Section Shimmer */}
            <div className="mt-16 w-full max-w-3xl space-y-6 bg-yellow-400 opacity-90 text-black p-6 rounded shadow-inner shadow-black">
                <div className="h-6 w-1/3 bg-gray-700 animate-pulse mx-auto rounded"></div>
                <div className="grid gap-6 md:grid-cols-3 text-center">
                    {[1, 2, 3].map((_, index) => (
                        <div key={index} className="p-4 border border-gray-700 rounded-lg bg-gray-600 shadow-inner shadow-black">
                            <div className="h-6 w-3/4 bg-gray-700 animate-pulse mx-auto rounded"></div>
                            <div className="h-4 w-2/3 bg-gray-600 animate-pulse mx-auto rounded mt-2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShimmerWelcome;
