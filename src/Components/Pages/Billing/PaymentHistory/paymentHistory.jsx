import React from 'react'
import Buttonv2 from '@/Components/UI/Button/Buttonv2'
import BackButton from '@/Components/UI/Button/BackButton'
import PaymentHistoryMng from './PaymentHistoryMng'
import Card from './Card'


const paymentHistory = () => {
    return (
        <>
            <div className='p-4 md:p-6'>
                <div className='flex items-center gap-4 w-full md:w-auto'>
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Payments History</h1>
                        <p className="text-xm text-gray-600 mt-1">View and manage all payment transactions.</p>
                    </div>
                </div>
                <PaymentHistoryMng />
                <Card />
            </div>

        </>
    )
}

export default paymentHistory
