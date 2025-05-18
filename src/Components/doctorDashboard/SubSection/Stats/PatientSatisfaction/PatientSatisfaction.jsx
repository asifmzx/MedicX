import React from 'react'
import PatientSatisfactionLineChart from "@/Components/UI/Chart/DoctorDashboard/PatientSatisfactionLineChart"
import PatientSatisfactionCard from "@/Components/doctorDashboard/SubSection/Stats/PatientSatisfaction/PatientSatisfactionCard"
const PatientSatisfaction = () => {
    return (
        <div className="w-full sm:px-2 -mt-4 lg:px-8 ">
            <div className='p-2'>
                <PatientSatisfactionLineChart />
                <PatientSatisfactionCard />
            </div>

        </div>
    )
}

export default PatientSatisfaction



