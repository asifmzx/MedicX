"use client";

import React from 'react'
import BackButton from '@/Components/UI/Button/BackButton'

import SubSection from './SubSection';

const AddItem = () => {
    return (
        <div className='p-4 md:p-6'>
            <div className='flex flex-wrap justify-between items-center mb-6 gap-4'>
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                    <div className='flex flex-col w-full'>
                        <h1 className="text-2xl font-bold text-gray-900">Add Inventory Item</h1>
                        <p className="text-xm text-gray-600 mt-1">Add a new item to your inventory</p>
                    </div>
                </div>
            </div>
            <SubSection/>
        </div>
    )
}

export default AddItem
