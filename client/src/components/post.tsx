import { useState } from 'react'
import '../style/post.css'

//Component for a single post
export default function Post(props:{urlImage:string,description:string,userName:string,dateAndHour:string}){
    const [likes,setLikes] = useState(0)
    return<div className="post" key={props.dateAndHour}>
        <p className='userNamePost'>{props.userName}</p>
        <img src={props.urlImage} className="imagePost"/>
        <button className="likes" onClick={(e)=> {
            e.stopPropagation()
            setLikes(prev => prev === 0? prev +1:prev-1)
        }}>like ❤️</button>
        <p className='countLikes'>{likes}</p>
        <p className="descriptPost">{props.description}</p>
        <p className="datePost">{props.dateAndHour}</p>
        
    </div>
}