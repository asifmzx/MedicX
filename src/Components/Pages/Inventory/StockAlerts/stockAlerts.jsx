"use client";

import React from 'react'
import BackButton from '@/Components/UI/Button/BackButton'
import Buttonv2 from '@/Components/UI/Button/Buttonv2'

import { CiSettings } from 'react-icons/ci';
import { MdOutlineFileDownload } from 'react-icons/md';

import Card from './Card';
import StockAlertsMng from './StockAlertsMng';

const StockAlerts = () => {
    return (
        <div className='p-4 md:p-6'>
            <div className='flex flex-wrap justify-between items-center mb-6 gap-4'>
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                    <div className='flex flex-col w-full'>
                        <h1 className="text-2xl font-bold text-gray-900">Stock Alerts</h1>
                        <p className="text-xm text-gray-600 mt-1">Monitor and manage inventory alerts</p>
                    </div>
                </div>
                <div className='flex w-full md:w-fit items-center justify-start gap-2'>
                    <Buttonv2
                        Icon={MdOutlineFileDownload}
                        variant='primary_main'
                        text="Export"
                        className='border border-gray-300 h-10 w-[30%] md:w-auto'
                    />
                    <Buttonv2
                        Icon={CiSettings}
                        variant='primary_main'
                        className='border border-gray-300 h-10 w-[14%] md:w-auto'
                    />
                </div>
            </div>
            <Card />
            <StockAlertsMng />
        </div>
    );
};

export default StockAlerts;