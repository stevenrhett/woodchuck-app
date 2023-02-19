import '/src/index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "/src/Root";
import Stumps from "/src/Stumps";
import Contact from "/src/Contact";
import ErrorPage from "/src/ErrorPage";
import Staff from "/src/Staff";
import Services from "/src/Services";
import Hero from "/src/Hero";


const router = createBrowserRouter(
    [

        {
            path: "/",
            element: <RootLayout/>, errorElement: <ErrorPage/>,
            children: [


                {
                    path: "/home",
                    component: <Hero/>,


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
