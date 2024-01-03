import React from 'react'

function LoginForm() {
    return (
        <div className=''>
            <form className='flex flex-col'>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" id="email" className='outline-none border-b-2 border-black' />
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' className='outline-none border-b-2 border-black' />
            </form>
        </div>
    )
}

export default LoginForm
