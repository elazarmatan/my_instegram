import { useLocation } from "react-router"

export default function Login(){
    const entry = useLocation()
    return<>
    <input type="text" placeholder="user name"/>
    <input type="password" placeholder="password"/>
    <button>submit</button>
    </>
}