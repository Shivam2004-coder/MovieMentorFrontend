import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieInfo from "./MovieInfo";
import GptSearch from "./GptSearch";
import Library from "./Library"; // Import Library

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
        </div>
    )
};

export default Body;