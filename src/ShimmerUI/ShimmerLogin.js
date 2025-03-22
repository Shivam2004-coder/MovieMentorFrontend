const ShimmerLogin = () => {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <img 
                    src="/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg" 
                    alt="netflix-background-img" 
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <div className="rounded-sm flex flex-col bg-gray-900 w-10/12 md:w-4/12 my-36 md:my-16 mx-auto right-0 left-0 items-start justify-center p-8 bg-opacity-85">
                <div className="bg-gray-700 h-8 w-1/2 animate-pulse mb-4 rounded-md"></div>
                <div className="bg-gray-600 h-10 w-full animate-pulse mb-4 rounded-md"></div>
                <div className="bg-gray-600 h-10 w-full animate-pulse mb-4 rounded-md"></div>
                <div className="bg-gray-600 h-10 w-full animate-pulse mb-4 rounded-md"></div>
                <div className="bg-gray-700 h-6 w-1/3 animate-pulse mb-4 rounded-md"></div>
                <div className="bg-red-600 h-12 w-full animate-pulse rounded-md"></div>
                <div className="bg-gray-700 h-6 w-1/2 animate-pulse mt-4 rounded-md"></div>
                <div className="bg-gray-700 h-6 w-1/2 animate-pulse mt-2 rounded-md"></div>
            </div>
        </div>
    );
};

export default ShimmerLogin;
