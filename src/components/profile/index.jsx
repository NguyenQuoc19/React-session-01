import React from 'react';
import style from '../profile/style.module.css'

const Index = (props) => {
    const {nameIcon, name, colors, percentage} = props
    return (
        <div className={style.wrapper}>
            <div className={style.left}>
                <div className={style.icon} style={{backgroundColor: colors}}>
                    <i className={nameIcon}></i>
                </div>

                <div className={style.name}>
                    <p>{name}</p>
                </div>
            </div>
            <div className={style.right}>
                <div className={style.percentage} style={{backgroundColor: colors, width: percentage.toString() + '%'}}></div>
            </div>
        </div>
    );
}

export default Index;
