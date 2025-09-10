//This function sends a fetch to the server to check if the token is valid.

export default async function checkIfTokenValid(){
    const token = localStorage.getItem('token')
    const res = await fetch('http://localhost:3000/users/checkToken',{
         method: "GET",
    headers: {
        "Authorization": `Bearer ${token}`
        }
    })
    return res
}