import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router'
import Posts from './pages/postsPage.tsx'
import HomePage from './pages/homePage.tsx'
import Search from './pages/search.tsx'
import CreatePost from './pages/createPost.tsx'
import { useState } from 'react'
import SpecificPost from './pages/specificPost.tsx'
import Entry from './pages/entry.tsx'
import Login from './pages/login.tsx'
function App() {
 
  const [lastId,setLastId]=useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Entry/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route  path='/home' element={<HomePage/>}>
          <Route  path='/home' element={<Posts setLastId={setLastId}/>}/>
          <Route path='/home/search' element={<Search/>}/>
          <Route path='/home/specificPost' element={<SpecificPost/>}/>
          <Route path='/home/create' element={<CreatePost lastId={lastId}/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
