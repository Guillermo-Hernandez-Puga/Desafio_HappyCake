import'./Home.css'
import pastel  from'./img/dulce.png'
const Home = () => {
  return (
    <div className='home'>
      
      <p className='p'>Bienvenido a <strong>Happy Cake</strong></p>
      <h5>El lugar de las paletas felices</h5>
      <img src={pastel}/>
      </div>
  )
}

export default Home