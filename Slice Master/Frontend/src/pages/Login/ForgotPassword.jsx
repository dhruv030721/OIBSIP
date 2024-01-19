import React from 'react'
import { ForgotPasswordForm, Template } from '../../components'
import {Toaster} from 'react-hot-toast'

function ForgotPassword() {
  return (
    <div>
      <Template formType={<ForgotPasswordForm/>} title="Forgot Password?" />
      <Toaster />
    </div>
  )
}

export default ForgotPassword
