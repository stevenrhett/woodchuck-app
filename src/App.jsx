import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./Root.jsx";
import Stumps from "./Stumps.jsx";
import Contact from "./Contact.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Staff from "./Staff.jsx";
import Services from "./Services.jsx";


const router = createBrowserRouter([

        {
            path: "/",
            element: <RootLayout/>, errorElement: <ErrorPage/>,
            children: [


                {
                    path: "/home",

                },

                {
                    path: "/services",
                    element: <Services/>
                },

                {
                    path: "/stumps",
                    element: <Stumps/>
                },

                {
                    path: "/contact",
                    element: <Contact/>
                },

                {
                    path: "/staff",
                    element: <Staff/>
                },

            ],

        }

    ]
)


const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
