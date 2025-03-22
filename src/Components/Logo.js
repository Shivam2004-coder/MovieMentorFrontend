const Logo = (props) => {
    const  { handleLogoClick } = props;

    return (
        <div className="flex items-center justify-center bg-gray-800 bg-opacity-75 rounded-md m-3 p-4">
        <h1
          className="flex text-lg md:text-4xl font-bold md:font-extrabold relative cursor-pointer hover:scale-110 hover:text-gray-600 active:scale-100 transition-transform duration-300 ease-out text-stroke text-shadow"
          onClick={handleLogoClick}
        >
          <img alt="websiteLogo" src="/website-logo.jpg" className="w-10 h-10 rounded-md mr-2" /> <span>MovieMentor</span>
        </h1>
      </div>
    )
}

export default Logo;