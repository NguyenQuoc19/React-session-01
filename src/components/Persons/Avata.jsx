import React from 'react'
import style from '../Persons/style.module.css'

function Avata(props) {
    const {urlImage, name, job} = props
  return (
      <div className={style.avataContainer}>
          <div className={style.image}>
              <img src={require('' + urlImage)}  alt={name}/>
          </div>
          <h1>{name}</h1>
          <span>{job}</span>
      </div>
  )
}

export default Avata
