import '/src/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "/src/Root";
import Stumps from "/src/Stumps";
import Contact from "/src/Contact";
import Staff from "/src/Staff";
import Services from "./Services.jsx";
import Hero from "./Hero.jsx";


const router = createBrowserRouter([

        {
            path: '/',
            element: <RootLayout/>,
            children: [
                {index: true, path: "home", element: <Hero/>},
                {path: "stumps", element: <Stumps/>},
                {path: "staff", element: <Staff/>},
                {path: "contact", element: <Contact/>},
                {path: "services", element: <Services/>}
            ]
        }
    ]
)

export default function App() {
    return (<RouterProvider router={router}/>)
}



