"use client"
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation'
import React from 'react'

const ProfilePage = () => {
    const { user, isUserLogin } = useAuthStore()

    const router = useRouter()

    if (isUserLogin == false) {
        router.push('/login')
    }
    else {
        return (
            <div>HELLO {user?.name}</div>
        )
    }
}

export default ProfilePage