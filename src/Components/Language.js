const Language = (props) => {
    const {
        translations,
        currentLanguage,
        handleLanguageChange,
    } = props;

    return (
        <div className="relative m-2 md:w-64 md:mr-4 border border-gray-700 bg-slate-600 rounded-sm md:rounded-lg p-1 md:p-4 flex flex-col md:flex-row">
          <label className="text-white text-sm md:mr-4">
            {translations.selectLanguage}:
          </label>
          <select
            value={currentLanguage}
            onChange={handleLanguageChange}
            className="bg-gray-800 text-white text-sm md:text-lg font-semibold px-1 md:px-4 py-2 rounded-md border border-gray-600 
                                cursor-pointer hover:bg-gray-700 focus:outline-none transition-all duration-300"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="gu">ગુજરાતી</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
    )
}

export default Language;