import React from 'react'
import { Template, SignupForm } from '../../components/index'

function Signup() {
  return (
    <div>
      <Template formType={<SignupForm/>} title="Welcome To Back"/>
    </div>
  )
}

export default Signup
