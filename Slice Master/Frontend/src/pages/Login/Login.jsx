import React from 'react'
import { Template, LoginForm } from '../../components/index'


function Login() {
  return (
    <div>
      <Template formType={<LoginForm/>} title="Welcome To Back" />
    </div>
  )
}

export default Login
