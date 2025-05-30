"use client"
import UseUsersFetchStore from '@/store/usersFetchStore,'
import React from 'react'

const UsersFetchShowPage = () => {
    const { users, setUsers, clearUsers } = UseUsersFetchStore()

    return (
        <section className='mockup-window border border-base-300 w-11/12 mx-auto my-10 p-10'> 
            <div>UsersFetchShowPage</div>
            <div>
                <button className='btn btn-soft btn-success btn-md mx-1 my-2' onClick={() => setUsers()}>SET USERS</button>
                <button className='btn btn-soft btn-error btn-md mx-1 my-2' onClick={() => clearUsers()}>CLEAR USERS</button>
            </div>
            <div className='card card-border card-xl'>
                {users.length ? (
                    users.map((user) => (
                        <div key={user.id} className='p-1'>
                            <h2 className='bg-zinc-800 m-1 w-fit p-2 rounded-lg'>{user.id} . {user.username.slice(0,15).toUpperCase()}</h2>
                        </div>
                    ))
                ) : <h2>No users</h2>}
            </div>
        </section>
    )
}

export default UsersFetchShowPage