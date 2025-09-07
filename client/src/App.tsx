import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router'
import Posts from './pages/postsPage.tsx'
import HomePage from './pages/homePage.tsx'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<HomePage/>}>
          <Route  path='/' element={<Posts/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
