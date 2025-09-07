import db from '../db/posts.json'
import Post from '../components/applicaton_layout/post'
import Logo from '../components/applicaton_layout/logo'

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
