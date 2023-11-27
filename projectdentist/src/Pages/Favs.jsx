import React, { useEffect, useState } from 'react'
import { useDentistState } from '../Context/globalContext'
import Card from '../Components/Card';

const Favs = () => {
  const {state} = useDentistState();
  const [dentistSelected, useDentistSelected] = useState([]);
  useEffect(() => {
    const favorites = localStorage.getItem('favorites')
      if(favorites){
        useDentistSelected(JSON.parse(favorites))
      }
  })
  return (
    <div>
      <h1>Your Favorites</h1>
      {dentistSelected && dentistSelected.map((dentist) => {
        return <div key={dentist.id}>
          <Card dentist = {dentist}/>
        </div>
      })}
    </div>
  )
}

export default Favs