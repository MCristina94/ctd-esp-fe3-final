import React from 'react'
import {nav} from '../Styles/Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    //La pagina tiene tres pages principales: home donde se redenrizan las cards de dentist
    //Contact para enviar los datos del usuario y favs donde se renderizan las cards de dentist preferidos por el usuario
    <div className={nav}>
      <Link to = '/'> <h4>Home</h4></Link>
      <Link to = '/contact' ><h4>Contact</h4></Link>
      <Link to = '/favs'> <h4>Favs</h4></Link>
    </div>
  )
}

export default Navbar