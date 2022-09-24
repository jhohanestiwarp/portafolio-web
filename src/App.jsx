
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Perfil from './components/Perfil'
import Proyectos from './components/Proyectos'
import Tecnologias from './components/Tecnologias'

//Imagenes proyecto
import Todo from '../src/assets/todo.png'
import AppClima from '../src/assets/aap-climas.png'
import CrudAngular from '../src/assets/crud-angular.png'
import { Title } from './components/Title'


function App() {

  return (
    <>
      <Navbar />
      <div>
        <Perfil />
      <Title titulo={"Tecnologias"} />   
        <Tecnologias />
        <Title titulo={"Proyectos"}  />
        <Proyectos
          imagen={Todo}
          title={"Aplicación todo"}
          descripcion={
            "Todo realizado con React, usando formularios, manejo de hooks y LocalStorage"
          }
          ver=""
        />
        <Proyectos
          imagen={AppClima}
          title={"Aplicación del clima"}
          descripcion={
            "Aplicacion del clima usando Angular, usando HTTP client para llamados a API y formularios"
          }
          ver=""
        />
        <Proyectos
          imagen={CrudAngular}
          title={"Crud"}
          descripcion={"Crud con Angular, usando Angular Material"}
          ver=""
        />
      
          
      
        <Footer />
      </div>
    </>
  );
}

export default App
