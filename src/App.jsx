import '/src/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "/src/Root";
import Stumps from "/src/components/Stumps";
import Contact from "/src/components/Contact";
import Staff from "/src/components/Staff";
import Services from "./components/Services.jsx";
import Hero from "./components/Hero.jsx";


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



