import React from 'react'
import style from '../ChartColumn/style.module.css'
import Columns  from './columns'

function ChartColumn(props){

    const {text, total, unit, percentages, colors, days} = props

    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <p>{text}</p>
                <h1>{unit}{total.toLocaleString('hi-IN')}</h1>
            </div>

            <div className={style.footer}>
                {percentages.map((percent, index) => {
                    return(
                        <div key={index}>
                            <Columns day={days[index]} percent={percent} color={colors[index]}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ChartColumn