import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import avatar from '../Img/dentist.png'
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
      
      <h1>Dentist {dentistSelected.username}</h1>
      <img src={avatar} alt="" />
      <h2>Dr. {dentistSelected.name}</h2>
      <h2>Email: {dentistSelected.email}</h2>
      <h2>Phone: {dentistSelected.phone}</h2>
      <h2>WebSite: {dentistSelected.website}</h2>
      

    </div>
  )
}

export default Detail