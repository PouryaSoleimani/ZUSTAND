"use client"
import useUsersStore from '@/store/usersStore'
import React, { Suspense } from 'react'
import { SingleUserType, UsersStoreType } from "@/store/usersStore"
import { Trash, User } from 'lucide-react'



const UsersPage = () => {
    const { users, addUser, deleteUser, fetchUsers, resetUsers } = useUsersStore() as UsersStoreType

    const randomUser = { id: crypto.randomUUID().toString(), name: Math.random().toString(32).slice(0, 5), age: (Math.random() * 100).toString(4).slice(0, 2) }

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <h1 className='bg-white text-black text-3xl font-black p-3 my-4 rounded-xl'>USERS</h1>
            <div className='w-11/12 grid grid-cols-6 place-items-stretch gap-5 p-5 items-center justify-center bg-zinc-900 rounded-xl '>
                {users.length ? (users.map((user: SingleUserType) => (
                    <Suspense key={user.id} fallback={<h2 className='bg-white text-black text-3xl font-black p-3 my-4 rounded-xl'>LOADING</h2>}>
                        <div className='bg-black p-4 flex flex-col items-center gap-2 rounded-xl text-2xl font-black'>
                            <p className='flex items-center gap-2'><User />{user.id.toString().slice(0, 1)} - {user.name.slice(0, 5)}</p>
                            <button className='btn btn-error btn-lg text-white font-black btn-block' onClick={() => deleteUser(user.id)}><Trash /></button>
                        </div>
                    </Suspense>
                ))) : (<h2 className='bg-zinc-50/20 backdrop-blur-lg text-white text-center mx-auto col-span-8  text-3xl font-black tracking-tighter p-3 my-4 rounded-xl'>NO USERS</h2>)}
            </div>
            <div>
                <button className='btn btn-soft btn-accent text-white my-4 btn-lg rounded-xl mx-2' onClick={() => addUser(randomUser)}>ADD FAKE USER</button>
                <button className='btn btn-soft btn-primary text-white my-4 btn-lg rounded-xl mx-2' onClick={() => fetchUsers()}>FETCH USERS</button>
                <button className='btn btn-soft btn-info text-white my-4 btn-lg rounded-xl mx-2' onClick={() => console.info(users)}>LOG ALL USERS</button>
                <button className='btn btn-soft btn-error text-white my-4 btn-lg rounded-xl mx-2' onClick={() => resetUsers()}>RESET ALL USERS</button>
            </div>
        </div >
    )
}

export default UsersPage