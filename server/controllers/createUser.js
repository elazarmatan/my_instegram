import {readFile, writeFile} from 'node:fs/promises'

export default async function createUser(path,newUser){
     let users = null;
      try {
        const data = await readFile(path);
        users = JSON.parse(data);
        users.push(newUser)
        await writeFile(path,JSON.stringify(users))
      } catch (error) {
        throw new Error(error);
      }
}