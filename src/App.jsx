  
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
import app from '../src/assets/evidencia.png'
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
          ver="https://app-de-tareas-8d875.web.app/"
        />
      
        <Proyectos
          imagen={app}
          descripcion={"Crud con angular material"}
          ver="https://app-crud-angular.netlify.app/"
        />
        
        <Proyectos
          imagen={AppClima}
          title={"Aplicación del clima"}
          descripcion={
            "Aplicacion del clima usando Angular, usando HTTP client para llamados a API y formularios"}
          ver="https://app-clima-c5f22.web.app/" 
        />
        
        <Proyectos
          imagen={CrudAngular}
          title={"Aplicativo web de contrataciones"}
          descripcion={"Aplicativo web de contrataciones para la alcaldia municipal de Qubibdo creado en java SPRINTBOOT previamente consumido en angular, Con Roles usando los Guards de angular"}
          ver="https://proyecto-app-a9bca.web.app/"
        />
          
      
        <Footer />
      </div>
    </>
  );
}

export default App
