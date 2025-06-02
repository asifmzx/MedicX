import React from 'react'
import Card from './Card'
import BackButton from "@/Components/UI/Button/BackButton";
import Buttonv2 from '@/Components/UI/Button/Buttonv2';
import { CiFilter } from 'react-icons/ci';


const doctorReviews = () => {
    return (
        <>
            <div className="p-4 md:p-6">
                <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 w-full'>
                    <div className='flex items-center gap-4 w-full'>
                        <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md flex-shrink-0" />
                        <div className='flex flex-col'>
                            <h1 className="text-2xl font-bold text-gray-900">Doctor Reviews</h1>
                            <p className="text-md text-gray-600 mt-1">Manage and respond to patient reviews of doctors</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2 w-full md:w-auto'>
                        <Buttonv2
                            variant="primary_main"
                            text="Export"
                            Icon={CiFilter}
                            className='h-10 w-[40%] sm:w-auto text-sm font-semibold border border-gray-300'
                        />
                        <Buttonv2
                            variant="secondary_main"
                            text="Respond to Reviews"
                            Icon={CiFilter}
                            className='h-10 w-full sm:w-auto text-sm font-semibold'
                        />
                    </div>
                </div>
                <Card />
            </div>
        </>
    )
}

export default doctorReviews
