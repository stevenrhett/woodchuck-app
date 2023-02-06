import './index.css'
import Dashboard from "./dashboard.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContentSection from "./contentSection.jsx";
import Services from "./services.jsx";
import TeamPage from "./teamPage.jsx";
import Root from "./Root.jsx";
import Hero from "./components/Hero.jsx";



const router = createBrowserRouter([{
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [

        {
            // path: "/", element: <Hero/>
        }, {
            path: 'maps', element: <ContentSection/>
        }, {
            path: 'services', element: <Services/>
        }, {
            path: 'team', element: <TeamPage/>
        },

    ],
},
]);


const App = () => {
    return (<RouterProvider router={router}/>)
}


export default App;
