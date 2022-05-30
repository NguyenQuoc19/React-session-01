import React from 'react'
import style from '../Persons/style.module.css'
import Avata from './Avata'
import Infor from './Infor'
import Contact from './Contact'

// , infors, contacts
export default function Persons({avata, infors, contacts}) {
    const {urlImage, names, job} = avata
    return (
      <div className={style.wrapper}>
          <div className={style.PersonAvata}>
             {
                    <div key={names}>
                        <Avata urlImage={urlImage} name={names} job={job}/>
                    </div>
             }
             
          </div>
  
          <div className={style.PersonInfor}>
              {
                  infors.map((infors) => {
                      const { nameIcons, texts, infor} = infors
  
                      return (
                          <div key={texts}>
                              <Infor nameIcons={nameIcons} texts={texts} infors={infor}/>
                          </div>
                      );
                  })
              }
          </div>
  
          <div className={style.PersonContact}>
              {
                  contacts.map((contacts) => {
                      const {contactNames, contactIcons, contactInfor, colors} = contacts
  
                      return (
                          <div key={contactNames}>
                              <Contact contactNames={contactNames} contactIcons={contactIcons} contactInfor={contactInfor} colors={colors}/>
                          </div>
                      );
  
                  })
              }
          </div>
      </div>
    )
}
