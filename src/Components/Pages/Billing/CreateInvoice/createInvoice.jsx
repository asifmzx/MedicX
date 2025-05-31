import React from 'react'
import InvoiceDetails from './InvoiceDetails'
import PatientInformation from './PatientInformation'
import InsuranceInformation from './InsuranceInformation'
import PaymentOptions from './PaymentOptions'
import BackButton from "@/Components/UI/Button/BackButton";

const createInvoice = () => {
    return (
        <>
            <div className="p-4 md:p-6">
                <div className='flex items-center gap-4 w-full md:w-auto mb-6'>
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                    <div className='flex flex-col w-full'>
                        <h1 className="text-2xl font-bold text-gray-900">Create Invoice</h1>
                        <p className="text-xm text-gray-600 mt-1">Create a new invoice for a patient.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="pt-4 sm:col-span-2 lg:col-span-2 bg-white p-4 rounded-lg">
                        <InvoiceDetails />
                    </div>
                    <div className=" sm:col-span-2 lg:col-span-1 space-y-4">
                        <PatientInformation />
                        <InsuranceInformation />
                        <PaymentOptions />
                    </div>
                </div>
            </div>
        </>
    )
}

export default createInvoice
