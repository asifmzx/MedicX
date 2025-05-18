import React from 'react'
import PatientVisitBarChart from "@/Components/UI/Chart/DoctorDashboard/PatientVisitBarChart"
import PatientVisitCard from "./PatientVisitCard"

const PatientVisit = () => {
    return (
        <div className="w-full sm:px-2 -mt-2 lg:px-8 ">
            <div className='p-2'>
                <PatientVisitBarChart />
                <PatientVisitCard />
            </div>

        </div>
    )
}

export default PatientVisit
