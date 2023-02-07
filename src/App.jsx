import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root.jsx";
import Hero from "./components/Hero.jsx";
import Stumps from "./components/Stumps.jsx";
import Staff from "./components/Staff.jsx";
import Settings from "./components/Settings.jsx";


const router = createBrowserRouter([{
        path: "/",
        element: <Root/>,
        errorElement: <Error/>
    },
        {
            path: "/home", element: <Hero/>,
            errorElement: <Error/>
        },
        {
            path: "/stumps", element: <Stumps/>,
            errorElement: <Error/>
        },
        {
            path: "/staff", element: <Staff/>,
            errorElement: <Error/>
        },
        {
            path: "/settings", element: <Settings/>,
            errorElement: <Error/>
        },

    ],
);


const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
