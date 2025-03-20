import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { addTrailerVideos } from "../utils/moviesSlice";
import { DEFAULT_TRAILER } from "../utils/constants";
import ShimmerLogin from "../ShimmerUI/ShimmerLogin";

const Login = () => {
    const dispatch = useDispatch();
    const { translations } = useSelector((store) => store.language); // Get translations from Redux
    
    const [ isSignInForm , setSignInForm ] = useState(true);
    const [errorMessage , setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    const toggleSignInSignUpForm = () => {
        setErrorMessage(null);
        setSignInForm(!isSignInForm);
    };

    const userName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        // Simulate loading delay (remove this in real use case)
        
        setTimeout(() => setLoading(false), 1000); // Adjust the delay as needed
        dispatch(addTrailerVideos(DEFAULT_TRAILER))
    },[dispatch]);

    const handleSubmitButton = () => {
        //  Validate our sign in sign up form
        const message = checkValidData( isSignInForm ? null : userName.current.value , email.current.value , password.current.value , isSignInForm );

        setErrorMessage(message);
        if( message ){
            return ;
        }

        // Sign In / Sign Up

        if ( !isSignInForm ) {
            // Sign Up Logic
            createUserWithEmailAndPassword(auth , email.current.value , password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: userName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                        }).then(() => {
                            // Profile updated!
                            const updatedUser = auth.currentUser;
                            dispatch(addUser({
                                uid: updatedUser.uid,
                                email: updatedUser.email,
                                displayName: updatedUser.displayName
                            }));
                            // ...
                        }).catch((error) => {
                            setErrorMessage(error.message);
                        });
                        
                    })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                    // ..
                });
                
            }
            else{
                // Sign In Logic
                signInWithEmailAndPassword(auth, email.current.value , password.current.value )
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                });

        }
    }

    if (loading) {
        return <ShimmerLogin />; // Show shimmer while loading
    }

    return (
        <div className="absolute w-screen h-screen overflow-hidden">
            <Header/>
            
            <div className="absolute inset-0 -z-10" >
                <img 
                    src="/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg" 
                    alt="netflix-backgroung-img" 
                    className="w-full h-full object-cover"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault() } className="rounded-sm flex flex-col absolute bg-gray-900 w-10/12 md:w-4/12 my-56 md:my-16 mx-auto right-0 left-0 items-start justify-center p-8 bg-opacity-85">
                {isSignInForm && <h1 className="font-bold text-xl mb-4 text-white">{translations.SignIn}</h1>}
                {!isSignInForm && <h1 className="font-bold text-xl mb-4 text-white">{translations.SignUp}</h1>}
                {!isSignInForm && <input
                    ref={userName} 
                    type="text"
                    placeholder={translations.UserName}
                    className="rounded-sm h-10 w-full mb-4 text-white bg-gray-600 border border-black p-2"
                /> }
                
                <input
                    ref={email}
                    type="email"
                    placeholder={translations.EmailAddress}
                    className="rounded-sm h-10 w-full mb-4 text-white bg-gray-600 border border-black p-2"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder={translations.Password}
                    className="rounded-sm h-10 w-full mb-4 text-white bg-gray-600 border border-black p-2"
                />
                <p className="font-bold text-red-700 text-xl" >{errorMessage}</p>
                <button className="
                                    rounded-md 
                                    h-14 
                                    w-full 
                                    mb-4 
                                    mt-4 
                                    text-white 
                                    bg-red-600 
                                    border 
                                    border-black 
                                    p-2
                                    hover:scale-105
                                    active:scale-100 transition-transform duration-300 ease-out"
                        onClick={handleSubmitButton} >
                    {isSignInForm ? translations.SignIn : translations.SignUp}
                </button>
                
                { isSignInForm && <p className="text-white">{translations.NewtoNetflix}<span 
                                                            onClick={toggleSignInSignUpForm} 
                                                            className="text-white hover:underline hover:text-blue-500 active:text-white cursor-pointer font-bold"
                                                            >
                                                                {translations.SignUp}
                                                            </span>
                </p> }
                { !isSignInForm && <p className="text-white">{translations.AlreadyRegistered}<span 
                                                            onClick={toggleSignInSignUpForm} 
                                                            className="text-white hover:underline hover:text-blue-500 active:text-white cursor-pointer font-bold"
                                                            >
                                                                {translations.SignIn}
                                                            </span>
                </p> }
                
            </form>

        </div>
    )
};

export default Login;