"use client"
import useAuthStore from '@/store/authStore'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const ProfilePage = () => {
    const { user, isUserLogin, logout } = useAuthStore()

    const router = useRouter()

    useEffect(() => {
        if (isUserLogin === false && !user) {
            router.push('/login')
        }
    }, [isUserLogin, user, router])


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