import React from 'react'
import { useDentistState } from '../Context/globalContext'
import Card from '../Components/Card';
import {cardFlex} from '../Styles/Home.module.css'

const Home = () => {
  
  //Se hace el llamado al useContext y se guarda en una variable
  const {state} = useDentistState();
  console.log({state});

  return (
    <div>
      <h1>Dential Clinic - Enjoy a lot more</h1>
      <div className={cardFlex}>
        {/**Se recorre la lista de los dentistas, y se envia la información a la card, la cual renderiza la información necesaria */}
        {state.dentistList.map(dentist => <Card key = {dentist.id} dentist = {dentist}/>)}
      </div>
    </div>
  )
}

export default Home