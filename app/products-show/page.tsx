"use client"
import useProductsStore from '@/store/productsStore'
import React, { Suspense } from 'react'
import { SingleProductType, ProductsStoreType } from '@/store/productsStore'
import { toast } from 'react-hot-toast'
import { Trash } from 'lucide-react'


const ProductsShowPage = () => {

    function generateRandomString(length: number) {
        return Math.random().toString(36).substring(2, length + 2);
    }

    function toaster(id: number | string) {
        toast(`Product ((${id})) Deleted`,
            { icon: '❌', style: { borderRadius: '4px', background: '#000000', color: '#fff', border: '1px solid #fff', fontSize: '13px' }, }
        );
    }

    const { addProducts, deleteProducts } = useProductsStore() as ProductsStoreType

    const products = useProductsStore((state: ProductsStoreType) => state.products)

    return (
        <div className='flex w-screen h-screen flex-col gap-3 bg-black p-10'>
            <h2 className='text-center font-black bg-blue-950 w-fit mx-auto p-3 rounded-lg my-4'>ProductsShowPage</h2>
            <button onClick={() => addProducts([{ id: crypto.randomUUID().slice(0, 5), title: generateRandomString(5) }])} className='btn w-fit mx-auto btn-success rounded-lg my-3'>Add Product</button>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 place-items-center gap-5 border p-4 border-zinc-800 rounded-lg'>
                {products.length ? products?.map((product: SingleProductType) => (
                    <>
                        <Suspense fallback={<p className='text-3xl font-black text-white'>LOADING</p>}>
                            <div key={product.id} className='card card-border gap-3 bg-zinc-900 py-3 px-10  flex items-center justify-center rounded-lg'>
                                <p className='font-bold'>{product.title.toUpperCase()}</p>
                                <button onClick={() => { deleteProducts(product.id); console.log("DELETE", product.id); toaster(product.id) }} className='btn btn-error btn-circle size-12 text-sm text-neutral-100  tracking-tighter rounded-full group'><Trash className='w-6 h-9 group-hover:rotate-12' /></button>
                            </div>
                        </Suspense>
                    </>
                )) : <h2 className='text-center w-fit mx-auto'>NO PRODUCTS</h2>}
            </div>

        </div >
    )
}

export default ProductsShowPage