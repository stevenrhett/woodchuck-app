import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./Root.jsx";
import Stumps from "./components/Stumps.jsx";
import Contact from "./components/Contact.jsx";
import ErrorPage from "./section/ErrorPage.jsx";
import Staff from "./components/Staff.jsx";
import Services from "./section/Services.jsx";


const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
    },
            {path: "/home", element: <RootLayout/>},
            {path: "/stumps", element: <Stumps/>},
            {path: "/staff", element: <Staff/>},
            {path: "/contact", element: <Contact/>},
            {path: "/services", element: <Services/>},


    ]
)


const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
