import db from '../db/posts.json'
import Post from '../components/post.tsx'

export default function Posts(){
    return  <main>
      {db.map(post => (
        <Post urlImage={post.urlImage} userName={post.userName} description={post.description} dateAndHour={post.dateAndHour}/>
      ))}
    </main>
}
