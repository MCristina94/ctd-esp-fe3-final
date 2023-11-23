import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {

  const [dentistSelected, setDentistSelected] = useState({});
  const params = useParams();
    console.log(params);
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}/`

  useEffect(() => {
    axios(url)
    .then((resp) => {
      console.log(resp.data);
      setDentistSelected(resp.data)
    })
  },[])

  return (
    <div>
      
      <h1>Dentist {dentistSelected.name}</h1>
      <h2>{dentistSelected.email}</h2>
      <h2>{dentistSelected.phone}</h2>
      <h2>{dentistSelected.website}</h2>
      

    </div>
  )
}

export default Detail