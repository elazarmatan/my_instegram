import { readFile } from "node:fs/promises";

export default async function getUser(path, validUser) {
  let userExist =null  
  let users = null;
  try {
    const data = await readFile(path);
    users = JSON.parse(data);
    userExist = users.filter((user) => user.userName === validUser.userName);
  } catch (error) {
    throw new Error(error);
  }
  return userExist
}
