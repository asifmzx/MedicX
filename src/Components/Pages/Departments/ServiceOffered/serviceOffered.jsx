"use client";

import React from 'react'
import BackButton from '@/Components/UI/Button/BackButton'
import Buttonv2 from '@/Components/UI/Button/Buttonv2'

import { FaPlus } from "react-icons/fa6";

import Card from './Card'
import ServiceListMng from './ServiceListMng';

const ServiceOffered = () => {
    return (
        <div className='p-4 md:p-6'>
            <div className='flex flex-wrap justify-between items-center mb-6 gap-4'>
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                    <div className='flex flex-col w-full'>
                        <h1 className="text-2xl font-bold text-gray-900">Services Offered</h1>
                        <p className="text-xm text-gray-600 mt-1">Manage and view all services offered across departments</p>
                    </div>
                </div>
                <Buttonv2
                    Icon={FaPlus}
                    variant='secondary_main'
                    text="Add New Service"
                    className='border border-gray-300 h-10 w-full md:w-auto'
                />
            </div>
            <Card />
            <ServiceListMng />
        </div>
    )
}

export default ServiceOffered
