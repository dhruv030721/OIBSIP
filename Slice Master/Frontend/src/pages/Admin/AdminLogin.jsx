import React from 'react'
import {Template, AdminForm} from '../../components/index.js'

function AdminLogin() {
  return (
    <div>
        <Template title="Welcome To Admin" formType={<AdminForm/>}/> 
    </div>
  )
}

export default AdminLogin