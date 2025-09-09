import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import login from "../utils/login"

export default function Login(){
    const navigate = useNavigate()
    const userName=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)
    const entry = useLocation()
    const [validUser,setValidUser] = useState(false)
    return<>
    <input type="text" placeholder="user name" ref={userName}/>
    <input type="password" placeholder="password" ref={password}/>
    <button onClick={async() => {
        const user = {userName:userName.current?.value,password:password.current?.value}
        console.log(entry.state.login)
        if(entry.state.login === 'login'){
            const res = await login(user)
            if(res.ok){
                setValidUser(true)
                navigate('/home',{state:{validUser}})
            }
            else{
                <h1>password or username not match</h1>
            }
        }
        else if(entry.state.login === 'signin'){

        }
    }}>submit</button>
    </>
}