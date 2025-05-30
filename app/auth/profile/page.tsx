"use client"
import useAuthStoreRepeat from '@/store/authStoreRepeat'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'

const ProfilePage = () => {

    const { user, logout, accessToken, refreshToken, loading } = useAuthStoreRepeat();

    const router = useRouter()

    useEffect(() => {
        console.info("TOKENS ===> PROFILE", accessToken, refreshToken)
        console.info("USER ==> ", user)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function logoutHandler() {
        logout();
        router.push('/auth/login')
        toast.success("Logout Successfully")
        console.info("TOKENS AFTER LOGOUT ===>", accessToken, refreshToken)
    }

    return (

        loading ? (
            <div className='w-screen h-screen bg-black flex items-center justify-center' >
                <div className="flex w-96 flex-col gap-4 border border-zinc-700 rounded-lg p-6">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div >
        ) : (
            < div className='w-screen h-screen bg-black flex items-center justify-center' >
                <div className="card card-side bg-base-100 shadow-sm border-4 border-zinc-700">
                    <figure>
                        <Image src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Profile__Pic" width={500} height={500} />
                    </figure>
                    <div className="card-body p-3">
                        <h2 className="card-title">👋 HELLO <span className='text-rose-600 underline'>{user?.name}</span> <span className='badge badge-xs badge-neutral rounded-sm py-3'>ID : {user?.id}</span> </h2>
                        <h2 className='badge badge-neutral text-xs rounded-md mx-auto mt-6'>TOKENS : {accessToken} / {refreshToken}</h2>
                        <p className='tracking-wider text-sm mt-6 text-center'>WELCOME TO PANEL</p>
                        <div className="card-actions justify-end w-full">
                            <button className="btn btn-error mt-6 btn-sm" onClick={logoutHandler}><LogOut /> LOGOUT </button>
                        </div>
                    </div>
                </div>
            </div >
        )


    )
}

export default ProfilePage