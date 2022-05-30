import React from 'react'
import style from '../Persons/style.module.css'

function Infor(props) {
    const {nameIcons, texts, infors} = props
  return (
      <div className={style.inforContainer}>
          <div className={style.icons}>
                <i className={nameIcons}></i>
                <p>{texts}</p>
          </div>

            <p>{infors}</p>
      </div>
  )
}

export default Infor
