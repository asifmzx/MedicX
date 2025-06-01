import React from 'react'
import BackButton from '@/Components/UI/Button/BackButton'
import InsuranceClaimsMng from './InsuranceClaimsMng'
import Card from './Card'

const insuranceClaims = () => {
    return (
        <div className='p-4 md:p-6'>
            <div className='flex items-center gap-4 w-full md:w-auto'>
                <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md" />
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Insurance Claims</h1>
                    <p className="text-xm text-gray-600 mt-1">Manage and track insurance claims for patient services.</p>
                </div>
            </div>
            <InsuranceClaimsMng />
            <Card />
        </div>
    )
}

export default insuranceClaims
