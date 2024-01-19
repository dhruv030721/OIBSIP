import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../index'
import userService from '../../services/userService';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function ForgotPasswordForm() {

    const { register, handleSubmit,watch, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [steps, setSteps] = useState(0);

    const forgotpasswordHandler = async (data) => {
        try {
            setEmail(data.email);
            console.log(data)
            await toast.promise(
                userService.forgotPassword(data),
                {
                    loading: 'Processing...',
                    success: (response) => {
                        setSteps((prev) => prev + 1)
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
    }

    const otpVerificationHandler = async (data) => {
        try {
            await toast.promise(
                userService.otpVerification(data, email),
                {
                    loading: 'Processing...',
                    success: (response) => {
                        setSteps((prev) => prev + 1)
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
    }


    const passwordChangeHandler = async (data) => {
        try {
            await toast.promise(
                userService.passwordChange(data, email),
                {
                    loading: 'Processing...',
                    success: (response) => {
                        navigate('/login')
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
    }



    return (
        <div className='font-poppins w-[60%] h-[55%] flex flex-col justify-around'>
            {steps == 0 && (<form onSubmit={handleSubmit(forgotpasswordHandler)} className='flex flex-col font-bold '>
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
            </form>)}

            {steps == 1 && (<form onSubmit={handleSubmit(otpVerificationHandler)} className='flex flex-col font-bold '>
                <Input
                    label="Enter OTP : "
                    placeholder=""
                    type="number"
                    {...register("otp", {
                        required: true,
                        pattern: /^[0-9]+$/,
                    })}
                />
                {errors.email && <p className='text-red-500'>*Please check the email</p>}
                <button className="bg-orange-500 mt-10 font-black text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" type='submit' onClick={handleSubmit(otpVerificationHandler)}>
                    <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Submit &rarr;
                </button>
            </form>)}

            {steps == 2 && (<form onSubmit={handleSubmit(passwordChangeHandler)} className='flex flex-col font-bold '>
                <Input divclassName="mt-7"
                    label="New Password : "
                    placeholder=""
                    type="password"
                    {...register("password", {
                        required: true,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    })}
                />
                {errors.email && <p className='text-red-500'>*Please check the password</p>}
                <Input divclassName="mt-7"
                    label='Confirm Password :'
                    type='password'
                    {...register('confirmPassword', {
                        required: true,
                        validate: (value) => value === watch('password') || 'Passwords do not match',
                    })}
                />
                {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
                <button className="bg-orange-500 mt-10 font-black text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" type='submit' onClick={handleSubmit(passwordChangeHandler)}>
                    <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Submit &rarr;
                </button>
            </form>)}





        </div>
    )
}

export default ForgotPasswordForm
