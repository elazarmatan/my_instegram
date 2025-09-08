import Post from '../components/post.tsx'
import { useEffect, useState } from 'react'
import getAllPosts from '../utils/getAllPosts.ts'
import '../style/errors.css'
import { Link } from 'react-router'

export default function Posts(){
    const [posts,setPosts] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string; id:number}>>([])
    useEffect(() => {
      getAllPosts(setPosts)
    },[])
    return  <main>
      {posts.length?(posts.map(post => (
        <Link to={'/todo'} state={post.id} className='posts link'>
        <Post key={post.userName + post.urlImage} urlImage={post.urlImage} userName={post.userName} description={post.description} dateAndHour={post.dateAndHour}/>
        </Link>
      ))):<h1 id='errorPosts'>⚠️ ERROR: in server</h1>}
    </main>
}