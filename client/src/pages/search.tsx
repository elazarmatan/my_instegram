import { useEffect, useRef, useState } from "react"
import getSpecificPost from "../utils/getSpecificPost"
import Post from "../components/post"

export default function Search(){
    const id = useRef<HTMLInputElement>(null)
    const [keyPost,setKeyPost] = useState('userName')
    const [submit,setSubmit] = useState(false)
    const [searchResult,setSearchResult] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string}>>([])
    useEffect(()=>{
        const search = {keyPost:keyPost,valuePost:id.current?.value}
        getSpecificPost(search,setSearchResult)
    },[submit])
    return<>
    <select value={keyPost} onChange={(e) => setKeyPost(e.target.value)}>
        <option value="userName">userName</option>
        <option value="dateAndHour">date And Hour</option>
        <option value="description">description</option>
    </select>
    <input placeholder="🔎" ref={id}/>
    <button onClick={() => {
        setSubmit(prev => !prev)
    }}>submit</button>
    {id.current?.value?(searchResult.length?(searchResult.map(post => 
        <Post key={post.userName + post.urlImage} urlImage={post.urlImage} userName={post.userName} description={post.description} dateAndHour={post.dateAndHour}/>
    )):<h1>No posts found</h1>):<p></p>}
    </>
}