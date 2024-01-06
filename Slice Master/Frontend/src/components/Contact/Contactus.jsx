import React from 'react'

const Contactus = () => {
  return (
    <div className='flex flex-col items-center'>
      <label htmlFor="name">Enter Your Name</label>
      <input type="text" id='name'className='' />
      <label htmlFor="email">Email Address</label>
      <input type="email" id='email' />
      <label htmlFor="message">Description</label>
      <input type="textarea" id='message'name='message' />
    </div>
  )
}

export default Contactus
