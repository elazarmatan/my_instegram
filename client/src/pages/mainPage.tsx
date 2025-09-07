import db from '../db/posts.json'
import Post from '../components/post'
import Logo from '../components/logo'

export default function Posts(){
    return  <>
    <Logo/>
     <main>
      {db.map(post => (
        <Post urlImage={post.urlImage} userName={post.userName} description={post.description} dateAndHour={post.dateAndHour}/>
      ))}
    </main>
    </>
}
