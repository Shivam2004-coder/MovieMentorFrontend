import { motion } from "framer-motion";

const Welcome = ({ setStarted , translations }) => {
    // bg-gradient-to-b from-black to-gray-900
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  text-white p-6 pt-[30%] md:pt-[10%]">
            {/* Hero Section */}
            <div className="text-center space-y-6 bg-black opacity-90 text p-6 rounded text-gradient shadow-inner shadow-gray-500">
                <h1 className="text-4xl font-bold tracking-wide">{translations.tagLine1}</h1>
                <p className="text-lg text-gray-300 max-w-xl mx-auto">
                    {translations.tagLine2}
                </p>
            </div>
                {/* Get Started Button */}
                <motion.button 
                    className="
                            mt-6 px-6 py-3 rounded-lg text-lg font-semibold text-white transition-all 
                            bg-gradient-to-r from-red-900 via-red-500 to-yellow-500 hover:scale-105"
                    // className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setStarted(true)}
                >
                    {translations.GetStarted} →
                </motion.button>

            {/* Steps Section */}
            <div className="mt-16 w-full max-w-3xl space-y-6 bg-yellow-400 opacity-90 text-black text p-6 rounded shadow-inner shadow-black">
                <h2 className="text-2xl font-semibold text-center ">{translations.HowItWorks} ?</h2>
                <div className="grid gap-6 md:grid-cols-3 text-center">
                    <div className="p-4 border border-gray-700 rounded-lg bg-gray-600 shadow-inner shadow-black">
                        <h3 className="text-xl font-medium">{translations.tagLine001}</h3>
                        <p className="text-gray-400">{translations.tagLine01}</p>
                    </div>
                    <div className="p-4 border border-gray-700 rounded-lg bg-gray-600 shadow-inner shadow-black">
                        <h3 className="text-xl font-medium">{translations.tagLine002}</h3>
                        <p className="text-gray-400">{translations.tagLine02}</p>
                    </div>
                    <div className="p-4 border border-gray-700 rounded-lg bg-gray-600 shadow-inner shadow-black">
                        <h3 className="text-xl font-medium">{translations.tagLine003}</h3>
                        <p className="text-gray-400">{translations.tagLine03}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;