//This function sends a fetch to the server with a user object to check if it exists in the system and the password it entered is correct.

export default async function login(userAndPass:object){
    const res = await fetch('http://localhost:3000/users/login',{
        method:'POST',
        headers:{
             "Content-Type": "application/json"
        },
        body:JSON.stringify(userAndPass)
    })
    return res
}