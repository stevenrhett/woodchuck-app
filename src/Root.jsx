import {Outlet} from "react-router-dom"
import HeroNavigation from "./HeroNavigation.jsx";
import Footer from "./Footer.jsx";


function RootLayout() {

    return (
        <>
            <HeroNavigation/>
            <Outlet/>
            <Footer/>

        </>
    )
}

export default RootLayout;