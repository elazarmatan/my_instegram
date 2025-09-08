import { Link } from "react-router";

export default function NavBar(){
    return<nav id="navBar">
    <Link to={'/'}>🏠</Link>
    <Link to={'/search'}>🔎</Link>
    </nav>
}