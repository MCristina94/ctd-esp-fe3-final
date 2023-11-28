import React, { useEffect } from 'react'
import { useDentistState } from '../Context/globalContext'
import avatar from '../Img/dentalavatar.png'
import { Link } from 'react-router-dom';
import {card, imgCard, buttonCard} from '../Styles/Card.module.css'

const Card = ({dentist}) => {
  
  const {state, dispatch} = useDentistState();

  useEffect(()=> {
    localStorage.setItem('favorites', JSON.stringify([...state.favs]));
   }, [state.favs])
  
  function dentistStorage () {
    dispatch({type: 'ADD-FAVS', payload: dentist })  
    localStorage.setItem('favorites', JSON.stringify([...state.favs]))  
   }
 
  //Ingresa la información de cada dentista, la cual proviene de dentistList
  //Se trae el dispatch de useDentistState, para guardar los favoritos en el localstorage y poder renderizarlos
  

  return (
    <div className={card} >
     
      <Link to={'/detail/' + dentist.id} >
        <img className={imgCard} src={avatar} alt="avatar" /> 
        <h3 style={{margin: '0'}}>{dentist.name}</h3>
        <h4 style={{margin: '0'}}>{dentist.username}</h4>
      </Link>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <h4 >Location: {dentist.address.city}</h4>
        <button className = {buttonCard}onClick={dentistStorage}>⭐</button>
      </div>
        
      </div>
   
  )
}

export default Card