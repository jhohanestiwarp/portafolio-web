import React from "react";
import perfil from "../assets/perfil1.jpeg";
import "./Perfil.css";

const Perfil = () => {
  return (
    <div style={{ backgroundColor: "#13678A", marginTop: "50px" }} id="perfil">
      <div className="row container_perfil">
        <div className="col-md-6">
        <br />
        <br />
        <br />
        <br />
          <h1 className="text_perfil">HOLA,🤠 SOY JHOHAN </h1>
          <br />
          <h4 className="text_perfil">Bienvenido a mi portafolio web, full stack en el cual les estaré mostrando mis experiencias, actitudes y proyectos.</h4>

          <br></br>   



         
          <div className="buttons">
            <a href="https://github.com/jhohanestiwarp" target="__blank"> 
              {" "}
              <button href="https://github.com/jhohanestiwarp" 
                className="btn btn-info btn-lg" style={{ backgroundColor: "#", color: "#012030" }}>
                Perfil🤖
            
              </button >{" "}
              
                 
              <button
                className="btn btn-primary btn-lg" style={{ backgroundColor: "#9AEBA3", color: "#012030" }}>
                GitHub👻
              </button>
              <br />
              <br />
           </a>
          </div>


        </div>

        <div className="col-md-6">
          <img src={perfil} alt="perfil" className="img-fluid imagen_perfil"/>
         

        </div>

      </div>
    </div>
  );
};

export default Perfil;
