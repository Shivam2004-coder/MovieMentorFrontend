export const checkValidData = (userName, email, password, password2, isSignInPage) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,20}$/.test(password);

    if (!isSignInPage && (!userName || userName.trim() === "")) {
        return "Please enter a username.";
    }

    if (!isEmailValid) {
        return "Invalid email format.";
    }

    if (!isPasswordValid) {
        // console.log("password1"+password);
        // console.log("password2"+password2);

        return "Password must include uppercase, lowercase, number, and special character.";
    }
    else if(!isSignInPage) {
        if (password !== password2) {
            return "Passwords do not match.";
        }
    }


    return "";
};
