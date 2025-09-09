import {readFile} from 'node:fs/promises'

//this function Looking for a specific post
export default async function getSpecificPosts(id,path){
    let posts
    try {
        const data = await readFile(path)
        const dataParse = JSON.parse(data)
        posts = dataParse.filter((post) => {
           return post[id.keyPost] === id.valuePost
        })
        
    } catch (error) {
        throw new Error(error)
    }
    return posts
}