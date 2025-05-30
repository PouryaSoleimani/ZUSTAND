"use client"
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ProfilePage = () => {
    return (
        <div className='w-screen h-screen bg-black flex items-center justify-center'>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <Image src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Profile__Pic" width={500} height={500} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">👋 HELLO</h2>
                    <p>WELCOME TO PANEL</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-error mt-6 btn-sm"><LogOut /> LOGOUT </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage