import PatientVisitOutcomesPieChart from '@/Components/UI/Chart/Report/PatientVisitOutcomesPieChart';
import React from 'react';

const VisitOutcomes = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div>
          <p className="text-3xl font-semibold">Visit Outcomes</p>
          <p className="text-gray-500 mt-3">Outcomes of patient visits</p>
        </div>
        <div>
          <PatientVisitOutcomesPieChart />
        </div>
      </div>
    );
};

export default VisitOutcomes;