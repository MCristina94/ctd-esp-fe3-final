import React from 'react'
import { useDentistState } from '../Context/globalContext'
import Card from '../Components/Card';

const Home = () => {
  
  //Se hace el llamado al useContext y se guarda en una variable
  const {state} = useDentistState();
  console.log({state});

  return (
    <div>
      <h1>Dentist</h1>
      {/**Se recorre la lista de los dentistas, y se envia la información a la card, la cual renderiza la información necesaria */}
      {state.dentistList.map(dentist => <Card key = {dentist.id} dentist = {dentist}/>)}
    </div>
  )
}

export default Home