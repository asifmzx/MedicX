import React from 'react'
import Upcoming from './Upcoming/Upcoming';
import Past from './Past/Past';

const Appointments = () => {
    return (
        <div className="w-full md:px-2 md:py-3 border border-gray-300 rounded-xl bg-white shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 mx-4 my-4">Your Appointments</h2>
            <p className="text-sm text-gray-600 mb-6 mx-4 my-4">Manage your upcoming and past appointments</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Upcoming />
                <Past />
            </div>
        </div>
    );
}

export default Appointments;
