import React from 'react'
import './index.css'
import Dashboard from "./dashboard.jsx";
import {Route, Routes,} from "react-router-dom";
import Footer from "./footer.jsx";
import TeamPage from "./teamPage.jsx";
import Header from "./Header.jsx";
import ContactPage from "./contactPage.jsx";
import ContentSection from "./contentSection.jsx";

function App() {

    return (<div>
        <Header/>
        <Dashboard />
        <Routes>
            <Route path={'/home'}
                   element={<Dashboard/>}
            />,
            <Route path={'/teams'}
                   element={<TeamPage/>}
            />,
            <Route path={'/projects'}
                   element={<ContactPage/>}
            />,
            <Route path={'/calendar'}
                   element={<ContentSection/>}
            />,
        </Routes>
        <Footer/>

    </div>)

}

export default App;