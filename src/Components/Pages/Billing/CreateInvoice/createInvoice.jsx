import React from 'react'
import InvoiceDetails from './InvoiceDetails'
import PatientInformation from './PatientInformation'
import InsuranceInformation from './InsuranceInformation'
import PaymentOptions from './PaymentOptions'

const createInvoice = () => {
    return (
        <>
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
        </>

    )
}

export default createInvoice
