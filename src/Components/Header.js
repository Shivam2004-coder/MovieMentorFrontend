import { useEffect, useRef, useState } from "react";
import About from "./About";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { changeLanguage } from "../utils/languageSlice"; // Import translation action
import ShimmerHeader from "../ShimmerUI/ShimmerHeader";

const Header = () => {
  const [isClicked, setIsClicked] = useState();
  const user = useSelector((store) => store.user);
  const { translations, currentLanguage } = useSelector(
    (store) => store.language
  ); // Get translations from Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const aboutRef = useRef(null); // Reference for About component
  const location = useLocation();

  const handleGPTButtonClick = () => {
    if (location.pathname !== "/gptsearch") {
      // Redirect only if not already on /browse
      navigate("/gptsearch");
    }
  };

  const handleClickButton = () => {
    setIsClicked(!isClicked);
  };

  const handleLogoClick = () => {
    if (location.pathname !== "/browse") {
      // Redirect only if not already on /browse
      navigate("/browse");
    }
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value)); // Update language in Redux
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close About if clicked outside, but not on user-icon or About
      if (
        isClicked &&
        aboutRef.current &&
        !aboutRef.current.contains(event.target) &&
        !event.target.closest("#user-icon-container")
      ) {
        setIsClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isClicked]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        if (location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  }, [dispatch, navigate, location.pathname]);

  // if (!user){
  //     return <ShimmerHeader />;
  // }

  return (
    <div className="fixed top-0 left-0 w-screen flex items-start md:items-center justify-between bg-gradient-to-b from-gray-700 z-50">
      <div className="flex items-center justify-center bg-gray-800 bg-opacity-75 rounded-md m-3 p-4">
        <h1
          className="text-lg md:text-4xl font-bold md:font-extrabold relative cursor-pointer hover:scale-110 hover:text-gray-600 active:scale-100 transition-transform duration-300 ease-out text-stroke text-shadow"
          onClick={handleLogoClick}
        >
          {translations.CINEMOOD}
        </h1>
      </div>

      <div className="flex flex-col md:flex-row w-28 md:w-[37rem] md:justify-end " >
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
        {user && (
          <div className="flex md:flex-row flex-col items-center">
            {/* Language Dropdown */}

            <div>
              <button
                className="hover:bg-white hover:text-black text-sm md:text-2xl p-2 mx-1 font-bold text-white bg-black rounded-md active:bg-black active:text-white transition-colors duration-200"
                onClick={handleGPTButtonClick}
              >
                {translations.moodSearch}
              </button>
            </div>

            <div className="relative flex items-end flex-col mr-4">
              <div
                id="user-icon-container"
                onClick={handleClickButton}
                className="flex items-center justify-end w-28 cursor-pointer"
              >
                <img
                  src="/user-icon-sun-2.png"
                  alt="userIcon"
                  className="h-10 w-10 m-2 hover:scale-110 active:scale-100 transition-transform duration-300 ease-out"
                />
                <span className="text-white font-bold m-2">
                  {isClicked ? "▴" : "▾"}
                </span>
              </div>
              <div>
                {isClicked && (
                  <div ref={aboutRef} className="absolute right-0 md:right-4 z-10">
                    <About />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;