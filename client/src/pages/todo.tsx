import { useEffect, useState } from "react";
import { data, useLocation } from "react-router";
import getSpecificPost from "../utils/getSpecificPost";
import Post from "../components/post";

export default function Todo() {
  const id = useLocation();
  const [post,setPost] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string}>>([])
  
  useEffect(() => {
   const post = {keyPost:'id',valuePost:id.state}
   getSpecificPost(post,setPost)
  },[])
  return <>
  {console.log(post)}
  {post.length?<Post urlImage={post[0].urlImage} userName={post[0].userName} description={post[0].description} dateAndHour={post[0].dateAndHour}/>:<h1 id='errorPosts'>⚠️ ERROR: in server</h1>}
  </>;
}
