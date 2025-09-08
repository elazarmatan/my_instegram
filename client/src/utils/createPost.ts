export default function createPost(newPost:object,setResponse:Function){
    fetch('http://localhost:3000/posts/createPost',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(data => setResponse(data))
}