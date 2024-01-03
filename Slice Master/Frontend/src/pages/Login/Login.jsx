import React from 'react'
import { Template, LoginForm } from '../../components/index'


function Login() {
  return (
    <div>
      <Template formType={<LoginForm/>} />
    </div>
  )
}

export default Login
