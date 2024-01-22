import React from 'react'
import { Link } from 'react-router-dom';
import { Input } from '../index'
import { useForm } from 'react-hook-form'
import authService from '../../services/auth';
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function SignupForm() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const SignupHandler = async (data) => {
    try {
      await toast.promise(
        authService.Signup(data), {
        loading: 'Processing...',
        success: (response) => {
          console.log(response);
          setTimeout(() => {
            navigate('/login');
          }, 2000);
          return `${response.message}`;
        },
        error: (error) => {
          return `${error.response.statusText}`
        },
      }
      )
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='font-poppins py-10 w-[100%] overflow-y-scroll flex flex-col  items-center'>
      <form onSubmit={handleSubmit(SignupHandler)} className='flex flex-col gap-4 font-bold w-[60%]'>
        <Input label="Name" {...register("name", {
          required: true,
          pattern: /^[A-Za-z\s]+$/
        })} />
        {errors.name && <p className='text-red-500'>*Please check the name</p>}
        <Input label="Email Address" type="email" {...register("email", {
          required: true,
          pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        })} />
        {errors.email && <p className='text-red-500'>*Please check the email</p>}
        <Input label="Password" type="password" {...register("password", {
          required: true,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        })} />
        {errors.password && <p className='text-red-500'>*Please check the password</p>}
        <Input
          label='Confirm Password'
          type='password'
          {...register('confirmPassword', {
            required: true,
            validate: (value) => value === watch('password') || 'Passwords do not match',
          })}
        />
        {errors.confirmPassword && <p className='text-red-500'>{errors.confirmPassword.message}</p>}
        <Input label="Phone Number" type='number' {...register("contactNumber", {
          required: true,
          pattern: /^[0-9]+$/,
        })} />
        {errors.contactNumber && <p className='text-red-500'>*Please check the number</p>}
      </form>

      <div className='flex flex-col items-center justify-around w-[60%] space-y-5 mt-10'>
        <button onClick={handleSubmit(SignupHandler)} type='submit' className="bg-orange-500 font-black  text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex  rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Signup &rarr;
        </button>
        <h1 className='text-center font-black border-b-2 border-black inline-block'>OR</h1>
        <Link to="/login" className='text-orange-700 font-black underline text-center'>Have Already An Account?</Link>
      </div>
      <Toaster />
    </div>
  )
}

export default SignupForm
