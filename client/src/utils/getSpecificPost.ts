export default function getSpecificPost(id:object,searchResult:Function){
    fetch('http://localhost:3000/posts/getPostByid',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(id)
    })
    .then(res => res.json())
    .then(data => searchResult(data))
}