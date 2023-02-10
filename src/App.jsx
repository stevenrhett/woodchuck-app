import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./Root.jsx";
import Stumps from "./components/Stumps.jsx";
import Staff from "./components/Staff.jsx";
import Settings from "./components/Settings.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([{
        path: "/",
        element: <Root/>,
        errorElement: <Error/>
    },
        {
            path: "/home", element: <Root/>,


        },
        {
            path: "/stumps", element: <Stumps/>,
        },
        {
            path: "/staff", element: <Staff/>,
        },
        {
            path: "/settings", element: <Settings/>,
        },
        {
            path: "/contact", element: <Contact/>,
        },

    ],
);


const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
