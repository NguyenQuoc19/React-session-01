import React from 'react'
import style from '../Persons/style.module.css'

function Contact(props) {
    const {contactNames, contactIcons, contactInfor, colors} = props

    return (
        <div className={style.contactContainer} style={{backgroundColor: colors}}>
            <div className={style.contactNames}>
                <p>{contactNames}</p>
            </div>

            <div className={style.contactInfors}>
                <div className={style.icon}>
                    <i className={contactIcons}></i>
                </div>

                <p>{contactInfor}</p>
            </div>
        </div>
    )
}

export default Contact