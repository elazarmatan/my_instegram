export default function saveToken(token:{ [key: string]: any }){
   localStorage.setItem('token',token.token)
}