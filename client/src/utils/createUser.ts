//This function sends a POST request to the server with a new user object to insert it into the database.

export default async function createUser(newUser:object){
    const res = fetch('http://localhost:3000/users/createUser',
        {
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(newUser)
        })
    return res
}