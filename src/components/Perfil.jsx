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
          <h4 className="text_perfil">BIENVENIDO A MI PORTAFOLIO WEB,full stack en el cual les estare mostrando mis experiencias y actitudes</h4>

          <br></br>



          {/* <p className="text_perfil">
            Ingeniero de telecomunicaciones e Informática, con énfasis en
            desarrollo con experiencia y
            motivación estoy abierto a aprender.
            Mis fuertes son el pensamiento conceptual y el
            pensamiento analítico con más de 2 años de
            experiencias en gestión de proyectos y desarrollo de
            software. con un interés en trabajar en distintas
            industrias. soy muy empírico me gusta estar
            continuamente aprendiendo nuevas tecnologías
            trabajo en equipo excelente actitud afrontando
            problemas, generación de ideas pensamiento crítico
            a nivel personal y grupal y rápido aprendizaje.
          </p> */}
          <div className="buttons">
            <a href="" target="__blank">
              {" "}
              <button
                className="btn btn-info btn-lg"
                style={{ backgroundColor: "#", color: "#012030" }}>
                Perfil🤖
              </button>
              "" ""
              <button
                className="btn btn-primary btn-lg"
                style={{ backgroundColor: "#9AEBA3", color: "#012030" }}>
                GitHub👻
              </button>
            </a>
            
          </div>

        </div>

        <div className="col-md-6">
          <img src={perfil} alt="perfil" className="img-fluid imagen_perfil " />
         

        </div>

      </div>
    </div>
  );
};

export default Perfil;
