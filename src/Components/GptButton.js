const GptButton = (props) => {
    const { handleGPTButtonClick, translations } = props;

    return (
        <div>
            <button
                className="flex items-center text-sm md:text-xl p-2 mx-1 font-bold text-white 
                    bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 
                    hover:bg-gradient-to-r hover:from-yellow-400 hover:via-orange-500 hover:to-red-600
                    active:bg-gradient-to-r active:from-gray-700 active:via-gray-600 active:to-gray-800
                    rounded-md transition-colors duration-300 "
                onClick={handleGPTButtonClick}
            >
                <img alt="geminiLogo" src="/gemini.png" className="w-12 h-12 rounded-md animate-pulse" />
                <span className="ml-2">{translations.moodSearch}</span>
            </button>
        </div>
    );
};

export default GptButton;
