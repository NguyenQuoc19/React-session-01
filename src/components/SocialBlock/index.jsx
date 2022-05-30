import React from 'react';
import style from './style.module.css'

const Index = (props) => {
    const {text, color, iconName, total, unit} = props

    return (
        <div className={style.wrapper} style={{backgroundColor: color}}>
            <div className={style.icon}>
                <i className={iconName}></i>
            </div>

            <div className={style.text}>
                <p>{text}</p>
            </div>

            <div className={style.infor}>
                <div className={style.total}>{total.toLocaleString('hi-IN')}</div>
                <div className={style.unit}>{unit}</div>
            </div>
        </div>
    );
}

export default Index;
