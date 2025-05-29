"use client"
import useProductsStore from '@/store/productsStore'
import React from 'react'
import { SingleProductType, ProductsStoreType } from '@/store/productsStore'

const ProductsShowPage = () => {

    const { products, addProducts, deleteProducts } = useProductsStore() as ProductsStoreType
    return (
        <div className='flex flex-col gap-3 w-[90%] mx-auto my-32 p-10'>
            <h2 className='card-title'>ProductsShowPage</h2>
            <button onClick={() => addProducts([{ id: 1, title: 'Product 1' }])} className='btn w-fit mx-auto'>Add Product</button>

            {products?.map((product: SingleProductType) => (
                <div key={product.id} className='card border w-fit p-3 flex items-center justify-center'>
                    <p>{product.title}</p>
                    <button onClick={() => deleteProducts()} className='btn btn-error w-fit'>Delete Products</button>
                </div>
            ))}

        </div>
    )
}

export default ProductsShowPage