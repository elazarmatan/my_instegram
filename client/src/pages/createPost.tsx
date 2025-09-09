import { useRef, useState} from "react"
import createPost from "../utils/createPost"
import '../style/createPost.css'

export default function CreatePost(props:{lastId:number}){
    const [img,setImg] = useState('http://localhost:3000/noImagae.png')
    const userName = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLInputElement>(null)
    const [notError,setNotError] = useState(true)
    const [submit,setSubmit] = useState(false)
    const now = new Date()
    let post
    
    return<section id="create">
    <form>
    <input className="inputCreate" placeholder="userName" ref={userName}/>
    <select value={img} onChange={e => setImg(e.target.value)}>
        <option value="http://localhost:3000/noImagae.png">no image</option>
        <option value="http://localhost:3000/zahavi.png">zahavi</option>
        <option value="http://localhost:3000/dorPeretz.png">peretz</option>
    </select>
    <input className="inputCreate" placeholder="description" ref={description}/>
    <button id="subCreate" onClick={async(e) => {
        e.preventDefault()
        setSubmit(true)
         post = {
    "id":props.lastId + 1,
    "urlImage":img,
    "description": description.current?.value,
    "userName": userName.current?.value,
    "dateAndHour": `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
    }
    const res = await createPost(post)
    if(!res.ok){
        setNotError(false)
    }
    else{
        setNotError(true)
    }
    }}>submit</button>
    </form>
    {
        submit?(notError?<h1 id="succes">✅ succes</h1>:<h1 id='errorPosts'>⚠️ ERROR: in server</h1>):<p></p>
    }
    </section>
}