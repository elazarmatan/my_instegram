import {readFile} from 'node:fs/promises'

export default async function getAllPosts(path){
    let posts = null
   try {
   const data = await readFile(path)
   posts = JSON.parse(data)
   } catch (error) {
    console.log(error)
   }
   return posts
}