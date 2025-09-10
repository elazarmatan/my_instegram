import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import getSpecificPost from "../utils/getSpecificPost";
import Post from "../components/post";

export default function SpecificPost() {
  const id = useLocation();
  const [loading,setloading] = useState(false)
  const [post,setPost] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string}>>([])
  useEffect(() => {
    const body = {keyPost:'id',valuePost:id.state.id}
    const fetchPost = async() => {
      const res = await getSpecificPost(body)
      if(res.ok){
        setloading(true)
        const data = await res.json()
        setPost(data)
      }
    }
    fetchPost()
  },[])
  if(loading){
    if(post.length){
      return <Post urlImage={post[0].urlImage} userName={post[0].userName} description={post[0].description} dateAndHour={post[0].dateAndHour}/>
    }
    else{
    return <h1 id='errorPosts'>⚠️ ERROR: in server</h1>
    }
  }
  else{
      return <p>loading...</p>
  }
}