"use client"
import useProductsStore from '@/store/productsStore'
import React from 'react'
import { SingleProductType, ProductsStoreType } from '@/store/productsStore'
import { toast } from 'react-hot-toast'

const ProductsShowPage = () => {

    function generateRandomString(length: number) {
        return Math.random().toString(36).substring(2, length + 2);
    }

    function toaster(id: number | string) {
        toast(`Product ((${id})) Deleted Successfully`,
            { icon: '❌', style: { borderRadius: '4px', background: '#000000', color: '#fff', border: '1px solid #fff', fontSize: '13px' }, }
        );
    }

    const { addProducts, deleteProducts } = useProductsStore() as ProductsStoreType

    const products = useProductsStore((state: ProductsStoreType) => state.products)

    return (
        <div className='flex flex-col gap-3 w-[90%] mx-auto my-32 p-10'>
            <h2 className='card-title'>ProductsShowPage</h2>
            <button onClick={() => addProducts([{ id: crypto.randomUUID().slice(0, 4), title: generateRandomString(5) }])} className='btn w-fit mx-auto'>Add Product</button>
            <div className='grid grid-flow-row grid-cols-8 place-items-center gap-3'>
                {products?.map((product: SingleProductType) => (
                    <div key={Math.random()} className='card border w-fit gap-3 bg-zinc-950 p-3 flex items-center justify-center'>
                        <p className='font-bold'>{product.title.toUpperCase()}</p>
                        <button onClick={() => { deleteProducts(product.id); console.log("DELETE", product.id); toaster(product.id) }} className='btn btn-error w-fit'>Delete Products</button>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default ProductsShowPage