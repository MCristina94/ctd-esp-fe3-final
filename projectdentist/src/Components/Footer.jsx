import React from 'react'
import logoFooter from '../Img/dentalcareFooter.png'
import iconoFb from '../Img/ico-facebook.png'
import iconoIg from '../Img/ico-instagram.png'
import iconoWp from '../Img/ico-whatsapp.png'
import iconoTiktok from '../Img/ico-tiktok.png'
import {footerSt, icono, sentenceF} from '../Styles/Footer.module.css'
const Footer = () => {
  return (
    <div className={footerSt}>
      <div>
        <img style={{width: '20%'}} src={logoFooter} alt="logo footer" />
        <h3 className={sentenceF}>Show off a radiant smile!</h3>
      </div>  
      <div>
        <img className = {icono} src={iconoFb} alt="icono fb" />
        <img className = {icono} src={iconoIg} alt="icono ig" />
        <img className = {icono} src={iconoWp} alt="icono wp" />
        <img className = {icono} src={iconoTiktok} alt="icono tiktok" />
      </div>
    </div>
  )
}

export default Footer