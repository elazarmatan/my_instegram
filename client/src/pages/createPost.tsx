import { useRef, useState} from "react"
import createPost from "../utils/createPost"
import '../style/createPost.css'
import getAllPosts from "../utils/getAllPosts"

export default function CreatePost(){
    const img = useRef<HTMLInputElement>(null)
    const userName = useRef<HTMLInputElement>(null)
    const description = useRef<HTMLInputElement>(null)
    const [notError,setNotError] = useState(true)
    const [submit,setSubmit] = useState(false)
    const [allPosts,setAllPosts] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string; id:number}>>([])
    const now = new Date()
    let post
    return<section id="create">
    <form>
    <input className="inputCreate" placeholder="userName" ref={userName}/>
    <input className="inputCreate" placeholder="urlImage"ref={img}/>
    <input className="inputCreate" placeholder="description" ref={description}/>
    <button id="subCreate" onClick={async(e) => {
        getAllPosts(setAllPosts)
        e.preventDefault()
        setSubmit(true)
           post = {
    "id":allPosts[allPosts.length-1].id +1,
    "urlImage":img.current?.value,
    "description": description.current?.value,
    "userName": userName.current?.value,
    "dateAndHour": `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
    }
    console.log(post)
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