import {readFile, writeFile} from 'node:fs/promises'

//this function adds new post in data base
export default async function createPost(path,newData){
    let posts = null;
      try {
        const data = await readFile(path);
        posts = JSON.parse(data);
        posts.push(newData)
        await writeFile(path,JSON.stringify(posts))
      } catch (error) {
        throw new Error(error);
      }
}