import React from 'react'
import './Proyectos.css'

const Proyectos = ({imagen, descripcion, title, ver}) => {
  return (
    <>
    <div className='proyectos' id='proyectos'>
        <div className="row">
            <div className="col-md-6">
                <img src={imagen} alt="Proyecto to do" className=' img-fluid project_img' />
            </div>

            <div className="col-lg 6 ">
                <p className='title_proyecto'>{title}</p>
                <p className='info_proyecto'>{descripcion}</p>
                <div className='buttons'>
                    <a href={ver} target="__blank"><button className='button'>Ver</button></a>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Proyectos