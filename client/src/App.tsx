import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router'
import Posts from './pages/postsPage.tsx'
import HomePage from './pages/homePage.tsx'
import Search from './pages/search.tsx'
import Todo from './pages/todo.tsx'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<HomePage/>}>
          <Route  path='/' element={<Posts/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='todo' element={<Todo/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
