import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import getSpecificPost from "../utils/getSpecificPost";
import Post from "../components/post";

export default function SpecificPost() {
  const id = useLocation();
  const [notError,setNotError] = useState(false)
  const [post,setPost] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string}>>([])
  useEffect(() => {
    const body = {keyPost:'id',valuePost:id.state}
    const fetchPost = async() => {
      const res = await getSpecificPost(body)
      if(res.ok){
        setNotError(true)
        const data = await res.json()
        setPost(data)
      }
    }
    fetchPost()
  },[])
  return <>
  {notError?(post.length?<Post urlImage={post[0].urlImage} userName={post[0].userName} description={post[0].description} dateAndHour={post[0].dateAndHour}/>:<p>loading</p>):<h1 id='errorPosts'>⚠️ ERROR: in server</h1>}
  </>;
}