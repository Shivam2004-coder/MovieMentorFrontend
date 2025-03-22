import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import ShimmerAbout from "../ShimmerUI/ShimmerAbout";

const About = () => {
    const user = useSelector((store) => store.user);
    const navigate = useNavigate(); // Initialize navigate
    const location = useLocation();
    const { translations } = useSelector((store) => store.language); // Get translations from Redux

    if (!user) return <ShimmerAbout />;

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.error("Error signing out: ", error);
        });
    };

    // Function to handle navigation to Library page
    const handleLibraryClick = () => {
        if ( location !== "/library" ) {
            navigate("/library");
        }
    };

    // console.log(user);

    return (
        <div className="border text-white border-black bg-gray-800 bg-opacity-90 w-44 p-3 rounded-md shadow-lg">
            <div className="flex items-center hover:bg-slate-200 hover:rounded-md hover:bg-opacity-40">
                <img alt="userProfileIcon" src="/user-profile-icon.png" className="h-6 w-6 rounded-full m-2" />
                <p>{user.userContent.displayName}</p>
            </div>
            <div className="flex items-center hover:bg-slate-200 hover:rounded-md hover:bg-opacity-40">
                <p className="bg-slate-600 h-6 w-6 rounded-full m-2 text-center">?</p>
                <p>{translations.NeedHelp}</p>
            </div>
            <div className="flex items-center hover:bg-slate-200 hover:rounded-md hover:bg-opacity-40">
                <p className="bg-slate-600  h-6 w-6 rounded-full m-2" >🎥</p>
                <button 
                    onClick={handleLibraryClick}
                    className="hover:scale-105 active:scale-100"
                >
                    {translations.Library}
                </button>
            </div>
            <hr className="font-bold border-black border-dotted" />
            <p 
                className="text-center cursor-pointer text-red-600 hover:font-bold hover:underline active:font-normal"
                onClick={handleSignOut}
            >
                {translations.Signout}
            </p>
            {/* Library Button */}
            
        </div>
    );
};

export default About;
