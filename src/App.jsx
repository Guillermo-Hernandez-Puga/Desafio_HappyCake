
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/pages/navbar/Navbar'
import Contacto from './components/pages/contacto/Contacto'
import Home from './components/pages/home/Home'

const App = () => {
  return (
   
      <div>
          <Navbar />
          <Routes>
                   <Route path='/' element={<Home />}/>
                   <Route path='/contacto' element={<Contacto />} />

            </Routes>
      
      </div>
    
  )
}

export default App
