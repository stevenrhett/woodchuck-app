import {Outlet} from "react-router-dom"
import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";



function Root() {
    return (
        <div>
            <Hero/>
            <Footer/>
            <Outlet/>
        </div>
    )
};

export default Root;