import GoogleButton from "react-google-button";

const GoogleSignInButton = (props) => {
    const {isSignInForm , handleGoogleSubmitButton} = props;
    return (
        <div className="flex flex-col items-center justify-center text-white mt-4" >
            <p className="text-gray-400 font-bold" >---or Continue with---</p>
            <GoogleButton
                label= {isSignInForm ? "Sign In with Google" : "Sign Up with Google" }
                onClick={() => handleGoogleSubmitButton()}
            />
        </div>
    )
}

export default GoogleSignInButton;