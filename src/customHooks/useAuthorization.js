import { useRef } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { successMessage , errorMessage , invalidMessage } from "../Components/ShowMessage";
import  {getErrorMessage}  from "../utils/getErrorMessage";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



const useAuthorization = (props) => {
    
    const { 
        setSignInForm,
        isSignInForm,
    } = props;
    
    const dispatch = useDispatch();

    const toggleSignInSignUpForm = () => {
        setSignInForm(!isSignInForm);
    };

    const userName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const password2 = useRef(null);

    
    const handleSubmitButton = () => {
        //  Validate our sign in sign up form
        const message = checkValidData( isSignInForm ? "" : userName.current?.value , email.current?.value , password.current?.value , password2.current?.value , isSignInForm );

        if( message ){
            invalidMessage(message)
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
                            successMessage(`${updatedUser.displayName} , you successfully Signed Up`);
                            // ...
                        }).catch((error) => {
                            errorMessage(getErrorMessage(error));
                        });
                        
                    })
                .catch((error) => {
                    errorMessage(getErrorMessage(error));
                    // ..
                });        
        }
        else{
            // Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value , password.current.value )
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                successMessage(`${auth.currentUser.displayName} , you are successfully Logged In`);
                // ...
            })
            .catch((error) => {
                errorMessage(getErrorMessage(error));
            });
        }
    }

    //  This is sign in / sign up with Google
    const handleGoogleSubmitButton = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log(token);
            // The signed-in user info.
            const user = result.user;
            // console.log(user);
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            // const errorCode = error.code;
            const errorMessage = error.message;
            errorMessage(errorMessage);
            // The email of the user's account used.
            const email = error.customData.email;
            errorMessage(email);
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            errorMessage(credential);
            // ...
        });
    }


    return { 
            toggleSignInSignUpForm : toggleSignInSignUpForm , 
            handleSubmitButton : handleSubmitButton , 
            handleGoogleSubmitButton : handleGoogleSubmitButton,
            userName : userName ,   
            email : email ,
            password : password ,
            password2 : password2      
    }
}

export default useAuthorization;