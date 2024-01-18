import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { Input } from '../index'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import authService from '../../services/auth'
import { login } from '../../store/authSlice'
import toast, { Toaster } from 'react-hot-toast'


function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm()


    const LoginHandler = async (data) => {
        try {
            await toast.promise(
                authService.Login(data),
                {
                    loading: 'Processing...',
                    success: (response) => {
                        // console.log(response);
                        dispatch(login(response.data));
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                        return `${response.message}`;
                    },
                    error: (error) => {
                        return `${error.response.data.message}`
                    },
                }
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='font-poppins w-[60%] h-[55%] flex flex-col justify-around' >
            <form onSubmit={handleSubmit(LoginHandler)} className='flex flex-col font-bold '>
                <Input
                    label="Email Address"
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    })}
                />
                {errors.email && <p className='text-red-500'>*Please check the email</p>}
                <Input label="Password" type="password" divclassName="mt-7" {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

                })} />
                {errors.password && <p className='text-red-500'>*Please check the password</p>}
                <button className="bg-orange-500 mt-10 font-black text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" type='submit' onClick={handleSubmit(LoginHandler)}>
                    <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Login &rarr;
                </button>
            </form>

            <div className='flex flex-col items-center justify-around w-[100%] space-y-5 mt-5'>
            <Link to="/forgotpassword" className='text-orange-700 font-black underline text-center'>Forgot Password?</Link>
                <h1 className='text-center font-black border-b-2 border-black inline-block'>OR</h1>
                <Link to="/signup" className='text-orange-700 font-black underline text-center'>Don't have an account?</Link>
                
            </div>
            <Toaster />
        </div>
    )
}

export default LoginForm
