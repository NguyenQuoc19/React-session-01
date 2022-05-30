import React from 'react'
import style from '../ChartColumn/style.module.css'

function Columns(props) {
    const {day, percent, color} = props
    return (
      <div>
        <div className={style.container }>
          <div className={style.top } style={{height:(100-percent).toString() + '%'}}></div>
          <div className={style.col} style={{backgroundColor: color, height: percent.toString() + '%'}}></div>
        </div>
        <p>{day}</p>  
      </div>
    )
}

export default Columns
