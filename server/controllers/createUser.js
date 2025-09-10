import {readFile, writeFile} from 'node:fs/promises'
//this function create user in data base
export default async function createUser(path,newUser){
     let users = null;
      try {
        const data = await readFile(path);
        users = JSON.parse(data);
        const userExist = users.filter(user => user.userName === newUser.userName)
        if(userExist.length){
            throw new Error("user name exist")
        }
        users.push(newUser)
        await writeFile(path,JSON.stringify(users))
      } catch (error) {
        throw new Error(error);
      }
}