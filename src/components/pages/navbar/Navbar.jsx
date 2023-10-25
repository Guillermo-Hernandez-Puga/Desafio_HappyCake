import { Link } from 'react-router-dom'
import'./Navbar.css'
import home from'./img/home.png'
import contacto from'./img/contactos.png'
import PedazoPastel from'./img/PedazoPastel.png'
const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='menu'> 
           
           <Link to="/"><img src={home}/> Home</Link> 
           
           <Link to="/contacto"><img src={contacto}/> Contacto</Link> 
        </div>

    <div className='logo'> 
        Happy Coke
         <img src={PedazoPastel}/>
    </div>

    </nav>
  )
}

export default Navbar