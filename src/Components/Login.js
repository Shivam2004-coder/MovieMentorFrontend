import { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";
import { DEFAULT_TRAILER } from "../utils/constants";
import ShimmerLogin from "../ShimmerUI/ShimmerLogin";
import Welcome from "./Welcome";
import useAuthorization from "../customHooks/useAuthorization";
import Footer from "./Footer";
import ShimmerWelcome from "../ShimmerUI/ShimmerWelcome";

const Login = () => {
    const dispatch = useDispatch();
    const [isStarted , setStarted] = useState(false);
    const { translations } = useSelector((store) => store.language); // Get translations from Redux
    
    const [ isSignInForm , setSignInForm ] = useState(true);
    const [loading, setLoading] = useState(true); // Loading state

    const {
        toggleSignInSignUpForm,
        handleSubmitButton,
        handleGoogleSubmitButton,
        userName,
        email,
        password,
        password2
    } = useAuthorization({  
                            setSignInForm : setSignInForm ,  
                            isSignInForm : isSignInForm,
                        });

    useEffect(() => {
        // Simulate loading delay (remove this in real use case)
        setTimeout(() => setLoading(false), 1000); // Adjust the delay as needed
        dispatch(addTrailerVideos(DEFAULT_TRAILER))
    },[dispatch]);

    if (loading) {
        if ( isStarted ) {
            return <ShimmerLogin />; // Show shimmer while loading
        }
        else{
            return <ShimmerWelcome/>
        }
    }

    return (
        <div className="w-screen h-screen flex flex-col items-between">
            <Header setStarted={setStarted} />
            
            <div className="fixed inset-0 -z-10" >
                <img 
                    src="/IN-en-20250310-TRIFECTA-perspective_739387a0-ff14-44ed-a5af-36e5aa4d236e_medium.jpg" 
                    alt="netflix-backgroung-img" 
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                {
                    isStarted ?
                    <Form 
                        toggleSignInSignUpForm={toggleSignInSignUpForm} 
                        handleSubmitButton={handleSubmitButton} 
                        handleGoogleSubmitButton={handleGoogleSubmitButton}
                        userName={userName} 
                        email={email}
                        password={password}
                        password2={password2}
                        isSignInForm={isSignInForm}
                        translations={translations}
                    /> : 
                    <Welcome 
                        setStarted={setStarted}
                        translations={translations}
                    />           
                }
            </div>


            <Footer/>

        </div>
    )
};

export default Login;