import { Outlet, useLocation } from "react-router";
import Logo from "../components/applicaton_layout/logo";
import '../style/home.css'
import Slogen from "../components/applicaton_layout/slogen";
import NavBar from "../components/applicaton_layout/navBar";

export default function HomePage(){
    const userName = useLocation()
    return<>
    {userName.state?
    <header>
        <Slogen/>
        <Logo/>
        <NavBar/>
    </header>:
    <h1>blocked</h1>
    }
    <Outlet/>
    </>
}