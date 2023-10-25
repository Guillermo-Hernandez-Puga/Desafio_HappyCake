
import'./Contacto.css'
const Contacto = () => {
  return (
    <div className="container text-center ">
    <p > Cuentanos, ¿ en que te podemos ayudar?</p>
    <form className="d-flex justify-content-center align-items-center flex-column">
     <div className="container text-center ">
      <label htmlFor="exampleFormControlInput1" className="">Correo:</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  
     
      
      <label  className="form-label ">Descripcion</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 <div className="container text-center">
      <button type="button" className="btn btn-danger">Enviar</button>
      </div>
    </form>
    </div>
  );
}

export default Contacto;

