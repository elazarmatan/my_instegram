import { useRef, useState } from "react"
import getSpecificPost from "../utils/getSpecificPost"
import Post from "../components/post"
import '../style/search.css'

export default function Search(){
    const id = useRef<HTMLInputElement>(null)
    const [keyPost,setKeyPost] = useState('userName')
    const [searchResult,setSearchResult] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string}>>([])
    const [notError,setNotError] = useState(true)
    return<>
    <select value={keyPost} onChange={(e) => setKeyPost(e.target.value)}>
        <option value="userName">userName</option>
        <option value="dateAndHour">date And Hour</option>
        <option value="description">description</option>
    </select>
    <input placeholder="🔎" ref={id} id="inputSearch"/>
    <button id="submitSearch" onClick={async() => {
         const search = {keyPost:keyPost,valuePost:id.current?.value}
        const res = await getSpecificPost(search)
        
        if(!res.ok){
            setNotError(false)
        }
        else{
            setNotError(true)
            const result = await res.json()
            setSearchResult(result)
        }
    }}>search</button>
    {notError?(id.current?.value?(searchResult.length?(searchResult.map(post => 
        <Post key={post.userName + post.urlImage} urlImage={post.urlImage} userName={post.userName} description={post.description} dateAndHour={post.dateAndHour}/>
    )):<h1>No posts found</h1>):<p></p>):<h1 id='errorPosts'>⚠️ ERROR: in server</h1>}
    </>
}