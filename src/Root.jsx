import {Outlet} from "react-router-dom"
import Footer from "./components/Footer";
import HeroNavigation from "./components/HeroNavigation.jsx";


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