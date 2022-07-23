import React from "react";

import Navbar from "./components/Navbar";
import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import CreateQuote from "./components/CreateQuote";
import UserProfile from "./components/UserProfile";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
function App() {
    const element = useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/create-quote",
            element: <CreateQuote />,
        },
        {
            path: "/profile",
            element: <UserProfile />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />,
        },
    ]);
    return (
        <div className="App">
            <Navbar />
            {element}
        </div>
    );
}

export default App;
