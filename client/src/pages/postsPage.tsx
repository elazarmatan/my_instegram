import Post from '../components/post.tsx'
import { useEffect, useState } from 'react'
import getAllPosts from '../utils/getAllPosts.ts'
import '../style/errors.css'
import { Link } from 'react-router'

//This page shows the user all the posts that have been uploaded.
export default function Posts(props:{setLastId:Function}){
    const [posts,setPosts] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string; id:number}>>([])
    useEffect(() => {
      getAllPosts(setPosts)
    },[])
    return  <main>
      {posts.length?(props.setLastId(posts[posts.length-1].id),posts.map(post => (
        <Link to={'/specificPost'} state={post} className='posts link'>
        <Post key={post.id} urlImage={post.urlImage} userName={post.userName} description={post.description} dateAndHour={post.dateAndHour}/>
        </Link>
      ))):<h1 id='errorPosts'>⚠️ ERROR: in server</h1>}
    </main>
}