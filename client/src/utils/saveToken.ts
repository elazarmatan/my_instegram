//This function saves the token in local storage.

export default function saveToken(token:{ [key: string]: any }){
   localStorage.setItem('token',token.token)
}