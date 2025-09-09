import { useNavigate } from "react-router"

export default function Entry(){
    const navigate = useNavigate()
    return<>
    <h1>how do you want to enter</h1>
    <h2>Are you a registered user?</h2>
    <button onClick={()=>{
        navigate('/login',{state:{login:'login'}})}
        }>login</button>
    <h2>Register here</h2>
    <button onClick={()=>{
        navigate('/login',{state:{login:'signin'}})}
    }>signin</button>
    </>
}