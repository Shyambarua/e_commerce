import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoginForm from './components/LoginForm'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/login' element= {<LoginForm/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
