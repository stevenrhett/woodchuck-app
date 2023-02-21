import '/src/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "/src/Root.jsx";
import Stumps from "/src/Stumps.jsx";
import Contact from "/src/Contact.jsx";
import Staff from "/src/Staff.jsx";
import Services from "./Services.jsx";
import Hero from "./Hero.jsx";
import React from "react";
import ErrorPage from "./ErrorPage.jsx";


const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: "/", element: <Hero/>},
            {path: "stumps", element: <Stumps/>},
            {path: "staff", element: <Staff/>},
            {path: "contact", element: <Contact/>},
            {path: "services", element: <Services/>},
            {path: "*", element: <ErrorPage/>}

        ]
    },


]);

const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
