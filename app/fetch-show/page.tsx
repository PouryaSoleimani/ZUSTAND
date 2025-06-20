"use client"
import React from 'react'
import useFetchStore from '@/store/fetchStore'
import { Trash } from 'lucide-react'
import Image from 'next/image'

const FetchShowPage = () => {
    const FetchData = useFetchStore((state) => state.fetchProducts)
    const Products = useFetchStore((state) => state.products)
    const deleteSingleProduct = useFetchStore((state) => state.deleteSingleProduct)
    const deleteAllProducts = useFetchStore((state) => state.deleteAllProducts)
    const fetchSingleProduct = useFetchStore((state) => state.fetchSingleProduct)
    const [ID, setID] = React.useState<number | string>("")

    function fetchSingleProductHandler(id: number) {
        if (ID.toString().length < 1) return
        fetchSingleProduct(id)
    }

    function fetchHandler() {
        FetchData()
    }

    return (
        <div className='p-5'>
            <h2>FetchShowPage</h2>
            <button className='btn btn-primary mx-2 rounded-lg text-xl my-6' onClick={fetchHandler}>Fetch Products</button>
            <button className='btn btn-error rounded-lg text-xl my-6 text-white' onClick={deleteAllProducts}>Delete All Products</button>
            <form>
                <input type="text" placeholder='Enter Product ID' className='input input-bordered input-primary w-full max-w-xs' value={ID} onChange={(e) => setID(Number(e.target.value))} />
                <button className='btn btn-primary mx-2 rounded-lg text-xl my-6' onClick={() => fetchSingleProductHandler(+ID)}>Fetch Single Product</button>
            </form>
            <div className='grid grid-cols-8 justify-items-stretch align-content-center gap-5'>
                {Products.length ? Products.map((item) =>
                    <div key={item.id} className='card border-2  border-zinc-800 bg-zinc-950 rounded'>
                        <div className='card-body p-2'>
                            <Image src={item.image.toString()} alt={item.title} width={100} height={100} className='w-full h-32 object-fill rounded-xl' />
                            {item.title.slice(0, 15)}
                            <div className='flex items-center justify-around mt-5 gap-2 px-1'>
                                <div className="badge py-5 text-xl font-bold tracking-tighter w-1/2 rounded-xl badge-soft">${item.price}</div>
                                <button className="btn w-1/2 rounded-xl btn-error p-1" onClick={() => deleteSingleProduct(item.id)}><Trash className='w-4 h-4' /></button>
                            </div>
                        </div>
                    </div>
                ) :
                    <div className='col-span-full text-center bg-red-950 text-white p-5 rounded-xl w-fit mx-auto font-bold'>No Products</div>}
            </div>
        </div>
    )
}
export default FetchShowPage