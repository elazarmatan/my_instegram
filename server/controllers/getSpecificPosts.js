import {readFile} from 'node:fs/promises'

export default async function getSpecificPosts(keyPost,valuePost,path){
    let posts
    try {
        const data = await readFile(path)
        const dataParse = JSON.parse(data)
        posts = dataParse.filter((post) => {
           post[keyPost] === valuePost
        })
        
    } catch (error) {
        throw new Error(error)
    }
    return posts
}