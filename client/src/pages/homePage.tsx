import { Outlet } from "react-router";
import Logo from "../components/applicaton_layout/logo";
import '../style/home.css'
import Slogen from "../components/applicaton_layout/slogen";
import NavBar from "../components/applicaton_layout/navBar";

export default function HomePage(){
    return<>
    <header>
        <Slogen/>
        <Logo/>
        <NavBar/>
    </header>
    <Outlet/>
    </>
}