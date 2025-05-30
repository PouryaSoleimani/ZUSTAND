"use client"
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const LoginPage = () => {
    const router = useRouter()
    const { login } = useAuthStore()
    const [name, setName] = React.useState<string>('')

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login(name)
        toast.success('Login Successfully')
        router.push('/profile')
    }

    return (
        <div className='w-[90vw] h-[90vh] flex flex-col justify-center items-center mx-auto bg-black my-10 rounded-xl'>
            <h2 className='bg-pink-500 p-5  rounded-xl my-10 btn-xl text-black font-bold tracking-tighter text-3xl'>LOGIN</h2>
            <form className='mx-auto w-fit flex flex-col gap-5 border-2 border-zinc-500 p-10 rounded-3xl' onSubmit={submitHandler}>
                <input type="text" placeholder='name' className='w-[300px] h-[40px] rounded-lg text-xl  bg-white text-black font-black px-2 py-6' value={name} onChange={(e) => setName(e.target.value)} />
                <button className='w-[300px] h-[40px] rounded-lg text-white text-xl py-6 btn btn-soft btn-success' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage