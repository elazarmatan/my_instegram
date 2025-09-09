import { Link } from "react-router";
import '../../App.css'

//General navigation component
export default function NavBar(){
    return<nav id="navBar">
    <Link to={'/home'} className="link">🏠</Link>
    <Link to={'/search'} className="link">🔎</Link>
    <Link to={'/create'} className="link">➕</Link>
    </nav>
}