"use client";
import React from 'react'
import BackButton from '@/Components/UI/Button/BackButton'
import { Link } from 'next/navigation'
import Buttonv2 from '@/Components/UI/Button/Buttonv2'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";
import InvoiceManagement from './InvoiceManagement'
import Card from './Card'

const invoicesList = () => {
    return (
        <div className='p-4 md:p-6'>
            <div className='flex flex-wrap justify-between items-center mb-6 gap-4'>
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                    <div className='flex flex-col w-full'>
                        <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
                        <p className="text-xm text-gray-600 mt-1">Manage billing and invoices for your patients.</p>
                    </div>
                </div>

                <div className='flex flex-wrap gap-2 w-full md:w-auto'>
                    <div className='flex w-full md:w-auto gap-0.5 md:gap-2'>
                        <Buttonv2
                            Icon={RiMoneyDollarCircleLine}
                            variant='primary_main'
                            text="Payments"
                            className='border border-gray-300 h-10 w-full md:w-auto'
                        />
                        <Buttonv2
                            Icon={LuFileSpreadsheet}
                            variant='primary_main'
                            text="Insurance Claims"
                            className='border border-gray-300 h-10 w-full md:w-auto'
                        />
                    </div>
                    <Buttonv2
                        Icon={FaPlus}
                        variant='secondary_main'
                        text="Create Invoice"
                        className='border border-gray-300 h-10 w-full md:w-auto'
                    />
                </div>
            </div>

            <InvoiceManagement />
            <Card />
        </div>
    )
}

export default invoicesList
