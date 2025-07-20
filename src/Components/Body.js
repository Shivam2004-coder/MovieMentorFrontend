import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import GptSearch from "./GptSearch";
import Library from "./Library"; // Import Library
import Footer from "./Footer";

const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/gptsearch",
            element: <GptSearch />
        },
        {
            path: "/movie/:id",
            element: <MovieInfo />
        },
        {
            path: "/library",
            element: <Library /> // New route for Library
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
            <div className=" absolute z-50 " >
            </div>
            <Footer/>
        </div>
    )
};

export default Body;