import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./Root.jsx";
import Stumps from "./components/Stumps.jsx";
import Contact from "./components/Contact.jsx";
import ErrorPage from "./section/ErrorPage.jsx";
import Staff from "./components/Staff.jsx";
import Services from "./section/Services.jsx";
import Hero from "./components/Hero.jsx";


const router = createBrowserRouter([

        {
            path: "/",
            element: <RootLayout/>,
            errorElement: <ErrorPage/>,
            children: [
                {
                    path: "home",
                    element: <Hero/>
                },

                {
                    path: "services",
                    element: <Services/>
                },

                {
                    path: "stumps",
                    element: <Stumps/>
                },

                {
                    path: "contact",
                    element: <Contact/>
                },

                {
                    path: "staff",
                    element: <Staff/>
                }]
        }
    ]
)


const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
