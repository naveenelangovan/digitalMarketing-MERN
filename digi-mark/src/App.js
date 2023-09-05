import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App () {
    return (
        <>
        <nav className="nav"> 
            <Navigation />
            <Routes>
                <Route path={"/"} element={<HomePage />} />
                <Route path={"/AboutUs"} element={<AboutUs />} />
                <Route path={"/Contact"} element={<Contact /> } />
                <Route path={'/Portfolio'} element={<Portfolio />} />
                <Route path={'/Service'} element={<Service />} />
                <Route path={"*"} element={<h2>Page Not Found</h2>} />
            </Routes>
        </ nav>    
        </>
    )
}
export default App