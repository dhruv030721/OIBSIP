import React from 'react'

function SignupForm() {
  return (
    <div>
      <form action="">
        <label htmlFor="name">Your Name</label>
        <input type="text" name='name' id='name' />
        <label htmlFor="email">Email Address</label>
        <input type="email" name='email' id='email' />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' id='password' />
        <label htmlFor="confirmpassword">Confirmpassword</label>
        <input type="password" name='confirmpassword' id='confirmpassword' />
        <label htmlFor="Mobilenumber">Mobile Number</label>
        <input type="number" id='Mobilenumber' name='<Mobilenumber' />
      </form>

    </div>
  )
}

export default SignupForm
