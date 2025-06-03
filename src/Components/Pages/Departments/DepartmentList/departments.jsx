"use client";
import React from 'react'
import BackButton from '@/Components/UI/Button/BackButton'
import Buttonv2 from '@/Components/UI/Button/Buttonv2'
import { FaPlus } from "react-icons/fa6";
import DepartmentListMng from './departmentListMng';
import Card from './Card'

const departments = () => {
    return (
        <div className='p-4 md:p-6'>
            <div className='flex flex-wrap justify-between items-center mb-6 gap-4'>
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                    <div className='flex flex-col w-full'>
                        <h1 className="text-2xl font-bold text-gray-900">Departments</h1>
                        <p className="text-xm text-gray-600 mt-1">Manage your clinic's departments and staff assignments</p>
                    </div>
                </div>
                <Buttonv2
                    Icon={FaPlus}
                    variant='secondary_main'
                    text="Add Department"
                    className='border border-gray-300 h-10 w-full md:w-auto'
                />
            </div>
            <Card />
            <DepartmentListMng />
        </div>
    )
}

export default departments
