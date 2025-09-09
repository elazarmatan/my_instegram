//The function requests all posts from the server.
export default function getAllPosts(setData:Function){
    fetch('http://localhost:3000/posts/getAllPosts')
    .then(res => res.json())
    .then(data => setData(data))
}