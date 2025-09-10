import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import login from "../utils/login"

export default function Login(){
    const navigate = useNavigate()
    const userName=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)
    const entry = useLocation()
    const [notError,setNotError] = useState(false)
    const [submit,setSubmit] = useState(false)
    return<section id="login">
    <input type="text" placeholder="user name" ref={userName} className="login"/>
    <input type="password" placeholder="password" ref={password} className="login"/>
    <button className="login" onClick={async() => {
        setSubmit(true)
        const user = {userName:userName.current?.value,password:password.current?.value}
        if(entry.state.login === 'login'){
            const res = await login(user)
            if(res.ok){
                setNotError(true)
                navigate('/home',{state:{userName:userName.current?.value}})
            }
            else{
                setNotError(false)
            }
        }
        else if(entry.state.login === 'signin'){
            
        }
    }}>submit</button>
    {submit?(notError?<p></p>:<h1 id='errorPosts'>password or username not match</h1>):<p></p>}
    </section>
}