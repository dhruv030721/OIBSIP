import React from 'react'
import { ForgotPasswordForm, Template } from '../../components'

function ForgotPassword() {
  return (
    <div>
      <Template formType={<ForgotPasswordForm/>} title="Forgot Password?" />
    </div>
  )
}

export default ForgotPassword
