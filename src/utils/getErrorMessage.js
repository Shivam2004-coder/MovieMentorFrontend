
export const getErrorMessage = (error) => {
    // Handle specific Firebase errors
    switch (error.code) {
        case 'auth/invalid-email':
            return "Please enter a valid email address.";
        case 'auth/email-already-in-use':
            return "This email is already registered. Please use a different email.";
        case 'auth/weak-password':
            return "Password must be at least 6 characters long and contain a mix of letters and numbers.";
        case 'auth/wrong-password':
            return "Incorrect password. Please try again.";
        case 'auth/user-not-found':
            return "No account found with this email. Please register.";
        default:
            return error.message;
    }
}