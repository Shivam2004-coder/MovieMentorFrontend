import GoogleSignInButton from "./GoogleSignInButton";

const Form = (props) => {

    const {
        toggleSignInSignUpForm,
        handleSubmitButton,
        handleGoogleSubmitButton,
        userName,
        email,
        password,
        password2,
        isSignInForm,
        translations,
    } = props;

    return (
        <form onSubmit={(e) => e.preventDefault() } className="rounded-sm flex flex-col bg-gray-900 w-10/12 md:w-4/12 my-56 md:my-16 mx-auto right-0 left-0 items-center justify-center p-8 bg-opacity-85">
                {isSignInForm && <h1 className="font-bold text-xl mb-4 text-white">{translations.SignIn}</h1>}
                {!isSignInForm && <h1 className="font-bold text-xl mb-4 text-white">{translations.SignUp}</h1>}
                {!isSignInForm && 
                <input
                    ref={userName} 
                    type="text"
                    placeholder={translations.UserName}
                    className="rounded-sm h-10 w-full mb-4 text-white bg-gray-600 border border-black p-2"
                /> 
                }
                
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
                { !isSignInForm &&
                    <input
                        ref={password2}
                        type="password"
                        placeholder={translations.ConfirmPassword}
                        className="rounded-sm h-10 w-full mb-4 text-white bg-gray-600 border border-black p-2"
                    />
                }
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

                {/* {!isSignInForm &&  */}
                    <GoogleSignInButton isSignInForm={isSignInForm} handleGoogleSubmitButton={handleGoogleSubmitButton} />
                {/* } */}
                
            </form>
    )
}

export default Form;