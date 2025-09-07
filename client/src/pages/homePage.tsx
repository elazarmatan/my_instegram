import { Outlet } from "react-router";
import Logo from "../components/applicaton_layout/logo";

export default function HomePage(){
    return<>
    <Logo/>
    <Outlet/>
    </>
}