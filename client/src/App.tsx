import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router'
import Posts from './pages/mainPage'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
