import React from 'react'
import { useDentistState } from '../Context/globalContext'
import avatar from '../Img/dentist.png'
import { Link } from 'react-router-dom';

const Card = ({dentist}) => {
  
  const {dispatch} = useDentistState();
 
  //Ingresa la información de cada dentista, la cual proviene de dentistList
  //Se trae el dispatch de useDentistState, para guardar los favoritos en el localstorage y poder renderizarlos
  

  return (
    <div>
      <Link to={'/detail/' + dentist.id} >
        <img  src={avatar} alt="avatar" />
        <h3>{dentist.name}</h3>
        <h4>{dentist.username}</h4>
      </Link>
        <h4>Location: {dentist.address.city}</h4>
        <button>⭐</button>
    </div>
  )
}

export default Card