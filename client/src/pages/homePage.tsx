import { Outlet } from "react-router";
import Logo from "../components/applicaton_layout/logo";
import '../style/home.css'
import Slogen from "../components/applicaton_layout/slogen";

export default function HomePage(){
    return<>
    <header>
        <Slogen/>
        <Logo/>
    </header>
    <Outlet/>
    </>
}