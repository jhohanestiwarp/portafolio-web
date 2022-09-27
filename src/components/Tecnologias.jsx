import React from 'react'
import './Tecnologias.css'
import Angular from '../assets/angular.png'
import React_logo from '../assets/React.png'
import js from '../assets/js.png'
import html_logo from '../assets/html.png'
import css_logo from '../assets/css.png'
import bootstrap_logo from '../assets/bootstrap.png'
import springboot from '../assets/springboot.png'


const Tecnologias = () => {
    return (
        <>
            <section className='tech' id='tecnologias'>
                <div className='tecnologias' >

                <p className="text_perfil">
                        Ingeniero de telecomunicaciones e Informática,
                        con énfasis en desarrollo con experiencia y
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
                    </p>

                    <div>
                        <p>Springboot</p>
                        <img src={springboot} style={{ width: '225px' }} alt="Imagen de springboot" />
                    </div>
                    <div>
                        <p>Angular</p>
                        <img src={Angular} style={{ width: '125px' }} alt="Imagen de angular" />
                    </div>
                    <div>
                        <p>React js</p>
                        <img src={React_logo} alt="Imagen de react" />
                    </div>
                    <div>
                        <p>JavaScript</p>
                        <img src={js} alt="Imagen de js" />
                    </div>
                    <div>
                        <p>HTML</p>
                        <img src={html_logo} alt="Imagen de htm" />
                    </div>
                    <div>
                        <p>CSS</p>
                        <img src={css_logo} alt="Imagen de css" />
                    </div>
                    <div>
                        <p>Bootstrap</p>
                        <img src={bootstrap_logo} alt="Imagen de bootstrap" />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Tecnologias