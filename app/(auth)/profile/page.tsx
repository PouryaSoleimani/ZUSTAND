/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import useAuthStore from '@/store/authStore'

const ProfilePage = () => {
    const { user, isUserLogin, logout } = useAuthStore()
    const router = useRouter()


    useEffect(() => {
        if (isUserLogin === false) {
            const TIMEOUT = setTimeout(() => { router.push('/login') }, 1000);
            return () => clearTimeout(TIMEOUT);
        }
    }, [isUserLogin])

    if (isUserLogin === undefined) {
        return <div className="text-white text-xl">در حال بررسی وضعیت ورود...</div>;
    }

    return (
        <div className='w-screen h-screen bg-black text-4xl font-black flex items-center justify-center gap-4 flex-col'>
            <h2 className='flex gap-4'>     👋  HELLO   <span className='text-blue-800'>{user?.name}</span>    </h2>
            <button className='btn btn-soft btn-error btn-xl'
                onClick={() => {
                    logout()
                    router.push('/login')
                }}><LogOut />Logout</button>
        </div>
    )

}

export default ProfilePage