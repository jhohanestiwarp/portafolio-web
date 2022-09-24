import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="perfil">
            <span className='name_navbar'>JHOHAN ESTIWAR PALACIOS</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link " aria-current="page" to="perfil">
                Inicio
              </Link>
              <Link className="nav-link" to="perfil">
                Perfil
              </Link>
              <Link className="nav-link" to="tecnologias">
                Experiencias y Adtitudes
              </Link>
              <Link className="nav-link" to="proyectos">
                Proyectos
              </Link>
              <Link className="nav-link" to="contacto">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar