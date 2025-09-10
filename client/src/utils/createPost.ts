//This function sends a fetch request to the server to create a post.
export default async function createPost(newPost:object){
    
    const res = await fetch('http://localhost:3000/posts/createPost',{
        method:'POST',
        headers:{
            "Content-Type": "multipart/form-data"
        },
        body: JSON.stringify(newPost)
    })
    return res
}