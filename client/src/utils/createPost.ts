export default async function createPost(newPost:object){
    const res = await fetch('http://localhost:3000/posts/createPost',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newPost)
    })
    return res
}