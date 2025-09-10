import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import login from "../utils/login"
import createUser from "../utils/createUser"
import saveToken from "../utils/saveToken"

export default function Login(){
    const navigate = useNavigate()
    const userName=useRef<HTMLInputElement>(null)
    const password=useRef<HTMLInputElement>(null)
    const entry = useLocation()
    const [notError,setNotError] = useState(false)
    const [submit,setSubmit] = useState(false)
    const [inpEmpty,setInpEmpty] = useState(true)
    const [error,setError] = useState('')
    return<section id="login">
    <input type="text" placeholder="user name" ref={userName} className="inputLogin" required/>
    <input type="password" placeholder="password" ref={password} className="inputLogin" required/>
    <button className="buttonLogin" onClick={async() => {
        if(!userName.current?.value || !password.current?.value){
            setInpEmpty(false)
            return
        }
        setSubmit(true)
        const user = {userName:userName.current?.value,password:password.current?.value}
        if(entry.state.login === 'login'){
            const res = await login(user)
            if(res.ok){
                setNotError(true)
                const token = await res.json()
                saveToken(token)
                navigate('/home',{state:{userName:userName.current?.value}})
            }
            else{
                setError('user name or password not match')
                setNotError(false)
            }
        }
        else if(entry.state.login === 'signin'){
            const res = await createUser(user)
            if(res.ok){
                setNotError(true)
                const token = await res.json()
                 saveToken(token)
                navigate('/home',{state:{userName:userName.current?.value}})
            }
            else{
                setError('the name exist in system choose another name')
                setNotError(false)
            }
        }
    }}>submit</button>
    {inpEmpty?(submit?(notError?<p></p>:<h1 id='errorPosts'>{error}</h1>):<p></p>):<p id="errorPosts">This is a required fields</p>}
    </section>
}