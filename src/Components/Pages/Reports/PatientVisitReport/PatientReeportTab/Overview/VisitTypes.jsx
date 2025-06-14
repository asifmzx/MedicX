import PatientVisitTypePieChart from '@/Components/UI/Chart/Report/PatientVisitTypePieChart';
import React from 'react';

const VisitTypes = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div>
          <p className="text-3xl font-semibold">Visit Types</p>
          <p className="text-gray-500 mt-3">
            Distribution of patient visits by type
          </p>
        </div>
        <div>
          <PatientVisitTypePieChart />
        </div>
      </div>
    );
};

export default VisitTypes;