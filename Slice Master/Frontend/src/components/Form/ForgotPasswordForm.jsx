import React from 'react'
import { useForm } from 'react-hook-form'
import {Input } from '../index'
 
function ForgotPasswordForm() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const forgotpasswordHandler = () => {

    }

    return (
        <div className='font-poppins w-[60%] h-[55%] flex flex-col justify-around'>
            <form onSubmit={handleSubmit(forgotpasswordHandler)} className='flex flex-col font-bold '>
                <Input
                    label="Enter your valid email address : "
                    placeholder=""
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    })}
                />
                {errors.email && <p className='text-red-500'>*Please check the email</p>}
                <button className="bg-orange-500 mt-10 font-black text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" type='submit' onClick={handleSubmit(forgotpasswordHandler)}>
                    <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Submit &rarr;
                </button>
            </form>
        </div>
    )
}

export default ForgotPasswordForm
