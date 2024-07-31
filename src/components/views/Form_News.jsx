import React from "react";
import { useNavigate } from "react-router-dom";

const Form_News = () => {
const navigate =useNavigate()


  const enviodeformulario = (e)=>{
       e.preventDefault()
       console.log('Formulario enviado con exito')
setTimeout(() => {
  navigate('/list')
}, 2000);
   
  
  }
  return <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
    <input type="email" className="form-control" id="inputemail" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="inputtitle" className="form-label">Titulo:</label>
    <input type="text" className="form-control" id="inputtitle"></input>
  </div>
  <label htmlFor="floatingTextarea">Noticia:</label>
  <div className="form-floating">
 
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" htmlFor="exampleCheck1">Acepto los terminos de servicio</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={enviodeformulario}>Submit</button>
  
</form>
};

export default Form_News;
