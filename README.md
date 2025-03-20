# 🎬 CineMood – A Movie Recommendation Website

## 🚀 Overview
CineMood is an AI-powered movie recommendation platform built using React, Firebase, and TMDB API. It allows users to search for movies, get AI-based suggestions, watch trailers, and maintain a personal movie library.

## 🛠 Tech Stack
- **Frontend**: React, TailwindCSS
- **State Management**: Redux Toolkit
- **Authentication**: Firebase (Sign In, Sign Up, Profile Update)
- **APIs Used**: TMDB API (Movie Data), Google Gemini API (GPT-based movie recommendations)
- **Deployment**: Vercel

## 🔥 Features
### **User Authentication**  
- Secure **Sign Up & Login** with Firebase Authentication  
- Profile Update & Logout functionality  

### **Movie Browsing & Recommendations**  
- Displays trending movies using **TMDB API**  
- **GPT-powered search** for AI-based recommendations  
- **Multi-language support** for searching  

### **Movie Trailer & Details**  
- Embedded **YouTube trailers** for movies  
- Movie title & description display  

### **State Management & Performance Optimizations**  
- Used **Redux Toolkit** to manage user & movie data  
- **Memoization** to optimize performance  

### **Additional Features**  
- **Responsive UI** using TailwindCSS  
- **Dark-themed UI** for an immersive experience  
- **Personal Movie Library** feature  

## 📸 Screenshots  
🚀 *Add images of your project UI here*  

## 📦 Installation & Setup  
```sh
# Clone the repository
git clone https://github.com/Shivam2004-coder/CineMood---A-Movie-Recommendation-Website.git

# Navigate to the project folder
cd CineMood

# Install dependencies
npm install

# Add your TMDB API Key & Firebase Config in .env file

# Start the development server
npm start













<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# CineMood :
    - Create React App
    - Configured TailwindCSS
    - Header
    - Routing of App
    - Login Form 
    - Sign up Form 
    - Form Validation
    - useRef Hook
    - FireBase setup
    - Deploying our app to Production
    - Create signup user account
    - Implement Sign In User API
    - Created Redux Store with userSlice
    - Implemented SignOut
    - Update Profile
    - BugFix : Sign up user displayName and profile picture update
    - BugFix : if the user is not logged in Redirect '/browse' to Login Page and vice-versa
    - Unsubscribe to the onAuthStateChanged callBack
    - Add the HardCoded values to the constants file
    - Register TMDB API and create an app and get access token
    - Get Data from TMDB now-playing movies list API.
    - Custom Hook for now Playing Movies
    - Create MovieSlice
    - Update store with movieSlice
    - Planning for MainContainer and Secondary Container
    - Fetch Data for Trailer Video
    - Update store with Trailer Video Data
    - Embedded the youtube video and make it autoplay and mute
    - Tailwind classes to make the main Container look awesome
    - Build Secondary Component
    - Build Movie List
    - Build Movie Card
    - TMDB Image CDN URL
    - Made the Browse page amazing with Tailwind CSS
    - usePopularMovies Custom Hook
    - GPT search Page
    - GPT search Bar
    - Integrate the Gemini api's
    - Multi - language Feature in our App
    - Fetched MovieSuggestions from TMDB
    - created gptSlice added data
    - Resused movie list component to make movie suggestion container
    - Memoization
    - Made a library feature by creating another slice .
    - Added .env file
    - Made our site Responsive

# Features of my project :

    - Login-SignUp page
        - Sign In / Sign Up form
        - Redirect to Browse Page

    - Browse ( After Authentication )
        - Header
        - Main Movie
            - Trailer in the BackGround
            - Title & Description
            - MovieSuggestions
                - MoviesList * N

    - Netflix GPT
        - Search Bar
        - Movie Suggestions
         -->