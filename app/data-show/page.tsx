"use client"
import { useDataStore } from '@/store/dataStore'
import React from 'react'
import useSWR from 'swr'

const DataShowPage = () => {

    // const { datas, addDatas, deleteDatas } = useDataStore()
    const DATAS = useDataStore((state) => state.datas) // SELECTOR MODE IN ZUSTAND
    const ADD_DATAS = useDataStore((state) => state.addDatas)
    const DELETE_DATAS = useDataStore((state) => state.deleteDatas)
    const fetcher = (url: string) => fetch(url).then(res => res.json())
    const { data } = useSWR('https://fakestoreapi.com/products', fetcher)

    return (
        <div>
            <h1 className='text-center py-4 text-orange-500 font-black text-3xl'>DataShowPage</h1>
            <div id="BOX" className='bg-zinc-900 border overflow-scroll w-[90%] mx-auto my-10 h-[70vh] flex flex-col overflow-x-hidden p-3 items-start justify-start gap-2'>
                {DATAS.length > 0 ? (
                    DATAS.map((item) => (
                        <p key={item.id} className='p-3 rounded bg-black text-white text-xl font-black'>{item.title.slice(0, 25)}</p>
                    ))
                ) : null}
            </div>
            <div className='flex items-center justify-center gap-12 font-bold text-2xl'>
                <button className='p-3 border rounded box-border hover:border-emerald-500 hover:border-4' onClick={() => ADD_DATAS(data)} >add 1</button>
                <button className='p-3 border rounded box-border hover:border-red-500 hover:border-4' onClick={() => DELETE_DATAS()}>delete</button>
            </div>
        </div>
    )
}

export default DataShowPage 