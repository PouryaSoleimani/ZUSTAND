"use client"
import React from 'react'
import useFetchStore from '@/store/fetchStore'
import { Trash } from 'lucide-react'



const FetchShowPage = () => {
    const FetchData = useFetchStore((state) => state.fetchProducts)
    const Products = useFetchStore((state) => state.products)

    function fetchHandler() {
        FetchData()
    }

    return (
        <div className='p-5'>
            <h2>FetchShowPage</h2>
            <button className='btn btn-primary mx-2 rounded-lg text-xl my-6' onClick={fetchHandler}>Fetch Products</button>
            <button className='btn btn-error rounded-lg text-xl my-6' onClick={fetchHandler}>DELETE Products</button>
            <div className='grid grid-cols-8 justify-items-stretch align-content-center gap-5'>
                {Products.length ? Products.map((item) =>
                    <div key={item.id} className='card border-2  border-zinc-800 bg-zinc-950 rounded'>
                        <div className='card-body p-2'>
                            {item.title.slice(0, 15)}
                            <div className='flex items-center justify-around mt-5 gap-2 px-1'>
                                <div className="badge py-5 text-xl font-bold tracking-tighter w-1/2 rounded-xl badge-soft">${item.price}</div>
                                <button className="btn w-1/2 rounded-xl btn-error p-1"><Trash className='w-4 h-4' /></button>
                            </div>
                        </div>
                    </div>
                ) :
                    <div>No Products</div>}
            </div>
        </div>
    )
}
export default FetchShowPage