'use client';
import useArrayStore from '@/store/arrayStore';
import { Plus, Trash, User } from 'lucide-react';
import React from 'react';

const ArrayAddPage = () => {

    const fakeArray2 = [1, 2, 3, 4, 5];

    const { array: ARRAY, addToArray, removeFromArray } = useArrayStore();

    return (
        <div>
            <button className="btn btn-error btn-lg w-fit m-3 text-white font-black" onClick={removeFromArray}><Trash /> DELETE </button>
            <button className="btn btn-success btn-lg w-fit m-3 text-white font-black" onClick={() => addToArray(fakeArray2)}><Plus /> ADD </button>
            {ARRAY?.length ? (
                <div className="w-11/12 grid grid-cols-6 place-items-stretch gap-5 p-5 items-center justify-center bg-zinc-900 rounded-xl ">
                    {ARRAY?.map((item, index) => (
                        <div key={index} className="bg-black p-4 flex flex-col items-center gap-2 rounded-xl text-2xl font-black">
                            <p className="flex items-center gap-2"><User />{item}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <h2 className="bg-zinc-50/20 backdrop-blur-lg text-white text-center mx-auto col-span-3 w-fit px-6  text-3xl font-black tracking-tighter p-3 my-4 rounded-xl">NO USERS</h2>
            )}
        </div>
    );
};

export default ArrayAddPage;
