import Post from '../components/post.tsx'
import { useEffect, useState } from 'react'
import getAllPosts from '../utils/getAllPosts.ts'
import '../style/errors.css'

export default function Posts(){
    const [posts,setPosts] = useState<Array<{urlImage:string; userName:string; description:string; dateAndHour:string}>>([])
    useEffect(() => {
      getAllPosts(setPosts)
    })
    return  <main>
      {posts.length?(posts.map(post => (
        <Post key={post.userName + post.urlImage} urlImage={post.urlImage} userName={post.userName} description={post.description} dateAndHour={post.dateAndHour}/>
      ))):<h1 id='errorPosts'>⚠️ ERROR: in server</h1>}
    </main>
}