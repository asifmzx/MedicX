import React from 'react'
import InvoiceManagement from './InvoiceManagement'
import Card from './Card'
import Buttonv2 from '@/Components/UI/Button/Buttonv2'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { LuFileSpreadsheet } from "react-icons/lu";

const billing = () => {
    return (
        <div>
            <div className='flex flex-wrap md:justify-between items-center mb-6'>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
                    <p className="text-sm text-gray-600 mt-1">Manage billing and invoices for your patients.</p>
                </div>
                {/* <BackButton showText={true} text="Cancel" /> */}
                <div className='flex flex-wrap md:flex-row gap-2 mt-4 md:mt-2 w-full md:w-auto'>
                    <div className='flex gap-2 w-full md:w-auto'>
                        <Buttonv2 Icon={RiMoneyDollarCircleLine} variant='primary_main' text="Payments" className='border border-gray-300 w-[40%] md:w-auto h-10' />
                        <Buttonv2 Icon={LuFileSpreadsheet} variant='primary_main' text="Insurance Claims" className='border border-gray-300 w-2/3 md:w-auto h-10' />
                    </div>
                    <Buttonv2 Icon={FaPlus} variant='secondary_main' text="Create Invoice" className='border border-gray-300 w-full md:w-auto h-10' />
                </div>
            </div>
            <InvoiceManagement />
            <Card />
        </div>
    )
}

export default billing
