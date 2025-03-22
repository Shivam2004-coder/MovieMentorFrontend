import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { changeLanguage } from "../utils/languageSlice"; // Import translation action
import Logo from "./Logo";
import Language from "./Language";
import GptButton from "./GptButton";
import UserMenu from "./UserMenu";

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
        // if ( location.pathname !== "/" ) {
          navigate("/");
        // }
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  }, [dispatch, navigate, location.pathname]);

  // if (!user){
  //     return <ShimmerHeader />;
  // }

  return (
    <div className="fixed top-0 left-0 w-screen flex items-start md:items-center justify-between bg-gradient-to-b from-gray-700 z-50">
      <Logo handleLogoClick={handleLogoClick} />

      <div className="flex flex-col md:flex-row w-28 md:w-[37rem] md:justify-end " >
        {/* Language Dropdown */}
        <Language 
                  translations={translations} 
                  currentLanguage={currentLanguage}
                  handleLanguageChange={handleLanguageChange}
        />
        
        {user.userContent && (
          <div className="flex md:flex-row flex-col items-center">
            
            <GptButton 
                      translations={translations}
                      handleGPTButtonClick={handleGPTButtonClick}
            />

            <UserMenu 
                      handleClickButton={handleClickButton} 
                      isClicked={isClicked}
                      aboutRef={aboutRef}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;