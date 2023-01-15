import './index.css'
import React from 'react'
import Dashboard from "./dashboard.jsx";
import {Outlet, Route, Routes,} from "react-router-dom";
import Footer from "./footer.jsx";
import TeamPage from "./teamPage.jsx";
import Header from "./Header.jsx";
import ContentSection from "./contentSection.jsx";
import ProjectsPhoto from "./projectsPhoto.jsx";
import ContactPage from "./contactPage.jsx";
import Services from "./services.jsx";
import NotFound from "./notFound.jsx";

function App() {

    return (<div>
        <Header/>
<Dashboard />
        <Routes>
            {/*<Route path={'/'}*/}
            {/*       element={<Dashboard/>}*/}
            {/*/>,*/}
            <Route path={'/maps'}
                     element={<ContentSection/>}
                   />,exact={true}
            <Route path={'/services'}
                   element={<Services/>}
            />,
            <Route path={'/team'}
                   element={<TeamPage/>}
            />,

            <Route path={'/projects'}
                   element={<ProjectsPhoto/>}
            />,
            <Route path={'/photos'}
                   element={<ProjectsPhoto/>}
            />,
            <Route path={'/contactus'}
                   element={<ContactPage/>}
            />,
            <Route path={'/maps'}
                   element={<ContentSection/>}
            />,
            <Route path={'*'}
                   element={<NotFound/>}
            />,

        </Routes>
        <Footer/>
    </div>)

}

export default App;