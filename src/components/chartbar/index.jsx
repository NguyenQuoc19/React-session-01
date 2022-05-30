import React from 'react';
import style from './style.module.css'

const ChartBar = (props) => {
    const {text, color1, colors, percentage} = props;
    
    return (
        <div className={style.wrapper}>
            <div className={style.left} style={{backgroundColor: color1}}>
                <p>{text}</p>
            </div>
            <div className={style.right}>
                <div className={style.percentage} style={{width: percentage.toString() + '%', backgroundColor: colors}}>
                    <p>{percentage}%</p>
                </div>
            </div>
        </div>
    );
}

export default ChartBar;
