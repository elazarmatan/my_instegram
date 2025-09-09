import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router'
import Posts from './pages/postsPage.tsx'
import HomePage from './pages/homePage.tsx'
import Search from './pages/search.tsx'
import CreatePost from './pages/createPost.tsx'
import { useState } from 'react'
import SpecificPost from './pages/specificPost.tsx'
function App() {
 
  const [lastId,setLastId]=useState(0)
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<HomePage/>}>
          <Route  path='/' element={<Posts setLastId={setLastId}/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/specificPost' element={<SpecificPost/>}/>
          <Route path='/create' element={<CreatePost lastId={lastId}/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
