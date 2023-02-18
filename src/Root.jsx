import {Outlet} from "react-router-dom"
import Footer from "./Footer.jsx";
import HeroNavigation from "./HeroNavigation.jsx";


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