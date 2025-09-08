import { useEffect, useRef, useState, type Key } from "react"
import createPost from "../utils/createPost"

export default function CreatePost(){
    const img = useRef<HTMLInputElement>(null)
    const userName = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLInputElement>(null)
    const [succes,setSucces] = useState<{msg:string}>()
    const now = new Date()
    let post
    return<>
    <input placeholder="userName" ref={userName}/>
    <input placeholder="urlImage"ref={img}/>
    <input placeholder="description" ref={description}/>
    <button onClick={() => {
           post = {
    "id":7,
    "urlImage":img.current?.value,
    "description": description.current?.value,
    "userName": userName.current?.value,
    "dateAndHour": `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
    }
    createPost(post,setSucces)
    }}>submit</button>
    {
        succes?.msg === "succes"?<p>succes</p>:succes?.msg === "error"?<p>error</p>:<p></p>
    }
    </>
}