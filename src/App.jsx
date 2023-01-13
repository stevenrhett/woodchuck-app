import React from 'react'
import './index.css'
import Dashboard from "./dashboard.jsx";
import ContactPage from "./contactPage.jsx";
import ContentSection from "./contentSection.jsx";
import TeamPage from "./teamPage.jsx";
import Services from "./services.jsx";
import ProjectsPhoto from "./projectsPhoto.jsx";
import TownMap from "./townMap.jsx";

function App() {

    return (<div>


        <Dashboard/>
        <TownMap />
        <Services/>
        <ProjectsPhoto/>
        <ContactPage/>
        <TeamPage/>
        <ContentSection/>
    </div>)

}

export default App
