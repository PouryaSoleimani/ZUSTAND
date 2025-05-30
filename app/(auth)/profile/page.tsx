/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import useAuthStore from '@/store/authStore'
import toast from 'react-hot-toast'

const ProfilePage = () => {

    const { user, isUserLogin, logout, accessToken, refreshToken } = useAuthStore()
    const router = useRouter()

    useEffect(() => {
        if (isUserLogin === false) {
            const TIMEOUT = setTimeout(() => { router.push('/login') }, 1000);
            return () => clearTimeout(TIMEOUT);
        }
        console.info("user ===> ", user)
        console.info("____TOKENS  ===> ", accessToken, refreshToken)

    }, [isUserLogin])

    if (user === null) {
        return <div className="text-white text-center py-4 text-2xl font-bold">در حال بررسی وضعیت ...</div>;
    }

    return (
        <div className='w-screen h-screen bg-black text-4xl font-black flex items-center justify-center gap-10 flex-col'>
            <h2 className='flex gap-4 border py-10 px-16 rounded-3xl border-zinc-700 shadow shadow-blue-500'>     👋  HELLO   <span className='text-blue-800'>{user?.name}</span>    </h2>
            <button className='btn btn-soft btn-error btn-xl'
                onClick={() => {
                    logout(accessToken, refreshToken)
                    toast.success('Logout Successfully')
                    router.push('/login')
                }}><LogOut />Logout</button>
        </div>
    )

}

export default ProfilePage