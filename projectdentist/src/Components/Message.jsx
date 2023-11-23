import React from 'react'

const Message = ({customer}) => {
  return (
    <div>
        <h2>Thank you {customer.name}</h2>
        <h3>We will contact you as soon as possible via email.</h3>
    </div>
  )
}

export default Message