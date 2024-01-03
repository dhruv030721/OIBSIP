import React from 'react'
import { Template, SignupForm } from '../../components/index'

function Signup() {
  return (
    <div>
      <Template formType={<SignupForm/>} />
    </div>
  )
}

export default Signup
