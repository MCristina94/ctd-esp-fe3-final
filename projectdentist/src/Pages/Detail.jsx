import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import avatar from '../Img/dentalavatar.png'
import axios from 'axios';
import {detailContainer} from '../Styles/Detail.module.css'

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
      <h1 style={{margin: '5%'}}>Dentist {dentistSelected.username}</h1>
      <div className={detailContainer}>
        <div>
          <img style={{width: '50%'}} src={avatar} alt="avatar dentist" />
        </div>
        <div>
          <h2>Dr. {dentistSelected.name}</h2>
          <h2>Email: {dentistSelected.email}</h2>
          <h2>Phone: {dentistSelected.phone}</h2>
          <h2>WebSite: {dentistSelected.website}</h2>
        </div>
      </div>

    </div>
  )
}

export default Detail