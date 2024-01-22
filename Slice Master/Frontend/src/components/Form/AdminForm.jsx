import React from 'react'
import { Input } from '../index'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'
import authService from '../../services/auth';
import toast, { Toaster } from 'react-hot-toast'
import { login } from '../../store/adminAuthSlice';

function AdminForm() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm()


  const AdminLoginHandler = async (data) => {
    try {
      await toast.promise(
        authService.AdminAuth(data),
        {
          loading: 'Processing...',
          success: (response) => {
            dispatch(login(response.data));
            setTimeout(() => {
              navigate('/admin/dashboard');
            }, 2000);
            return `${response.message}`;
          },
          error: (error) => {
            return `${error.response.statusText}`
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className='font-poppins py-10 w-[60%] overflow-y-auto flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit(AdminLoginHandler)} className='flex flex-col font-bold w-full'>
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
        <button className="bg-orange-500 mt-10 font-black text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group" type='submit' onClick={handleSubmit(AdminLoginHandler)}>
          <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Login &rarr;
        </button>
      </form>
      <Toaster />
    </div>
  )
}

export default AdminForm
