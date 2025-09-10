import { useNavigate } from "react-router"
import '../style/entry.css'

export default function Entry(){
    const navigate = useNavigate()
    return<section id="entry">
    <h1>how do you want to enter</h1>
    <h2>Are you a registered user?</h2>
    <button onClick={()=>{
        navigate('/login',{state:{login:'login'}})}
        }>login</button>
    <h2>Register here</h2>
    <button onClick={()=>{
        navigate('/login',{state:{login:'signin'}})}
    }>signin</button>
    </section>
}