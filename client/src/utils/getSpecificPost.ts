export default async function getSpecificPost(id:object){
    const res = fetch('http://localhost:3000/posts/getPostByid',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(id)
    })
    return res
}