import { Link, useLocation } from "react-router";
import '../../App.css'

//General navigation component
export default function NavBar(){
    const userName = useLocation()
    return<nav id="navBar">
    <Link to={'/home'} className="link" state={userName.state}>🏠</Link>
    <Link to={'/home/search'} className="link" state={userName.state}>🔎</Link>
    <Link to={'/home/create'} className="link" state={userName.state}>➕</Link>
    </nav>
}