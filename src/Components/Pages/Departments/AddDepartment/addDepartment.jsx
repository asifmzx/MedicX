"use client";

import React from 'react'
import BackButton from '@/Components/UI/Button/BackButton'

import Form from './Form';

const AddDepartment = () => {
    

    return (
        <div className='p-4 md:p-6'>
            <div className='flex flex-wrap justify-between items-center mb-6 gap-4'>
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                    <div className='flex flex-col w-full'>
                        <h1 className="text-2xl font-bold text-gray-900">Add Department</h1>
                        <p className="text-xm text-gray-600 mt-1">Create a new department in your clinic</p>
                    </div>
                </div>
                
            </div>
            <Form />
        </div>
    )
}

export default AddDepartment
