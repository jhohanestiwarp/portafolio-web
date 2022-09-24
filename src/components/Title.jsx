import React from 'react'
import './Title.css'

export const Title = ({titulo, id}) => {
  return (
    <div className='titulo' id={id}>
       <h2 className='h2_title'>{titulo}</h2>    
    </div>
  )
}
