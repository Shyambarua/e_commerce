import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LoginForm from './components/LoginForm'
import Signup from './components/Signup'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/login' element= {<LoginForm/>}/>
        <Route path='/register' element= {<Signup/>}/>
        
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
