import React from 'react';

const DashboardPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white to-[#1e56b1]">
            <div className="bg-gray-200 p-10 rounded-2xl shadow-xl text-center max-w-md w-full">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">
                    Welcome to your
                    <span className="text-[#1e56b1] block mt-1">Dashboard</span>
                </h1>
                <p className="text-gray-600 text-base sm:text-lg">
                    Stay on top of your health insights, appointments, and reports.
                </p>
            </div>
        </div>
    );
};

export default DashboardPage;
