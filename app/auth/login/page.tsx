"use client"
import useAuthStoreRepeat from '@/store/authStoreRepeat';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const LoginPage = () => {
    const [ID, setID] = useState("")
    const [userName, setUserName] = useState("")
    const { login } = useAuthStoreRepeat();
    const router = useRouter()
    
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        login(+ID, userName);
        toast.success("Login Successfully")
        router.push("/auth/profile")
    }

    return (
        <div className='w-screen h-screen bg-black flex items-center justify-center'>
            <form onSubmit={submitHandler}>
                <fieldset className="fieldset border-base-300 rounded-box w-xs border p-4 bg-zinc-900">
                    <legend className="fieldset-legend">Login</legend>

                    <label className="label">ID</label>
                    <input type="text" className="input !bg-neutral-600" placeholder="ID" value={ID} onChange={e => setID(e.target.value)} />

                    <label className="label">USER__NAME</label>
                    <input type="text" className="input !bg-neutral-600" placeholder="USER__NAME" value={userName} onChange={e => setUserName(e.target.value)} />

                    <button className="btn btn-soft btn-success mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    )
}

export default LoginPage