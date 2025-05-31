"use client";
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { patients } from './data/invoiceData';

const PatientInformation = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const searchRef = useRef(null);

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handlePatientSelect = (patient) => {
        setSelectedPatient(patient);
        setIsDropdownOpen(false);
        setSearchTerm('');
    };

    const handleSearchFocus = () => {
        setIsDropdownOpen(true);
    };

    const renderPatientAvatar = (patient) => {
        try {
            return (
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                    <Image
                        src={patient.image}
                        alt={patient.name}
                        width={40}
                        height={40}
                        className="object-cover"
                        onError={(e) => {
                            e.target.src = '/placeholder-avatar.png'; // Fallback image
                        }}
                    />
                </div>
            );
        } catch (error) {
            return (
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0">
                    {patient.name.split(' ').map(name => name[0]).join('')}
                </div>
            );
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Patient Information</h2>
            <p className="text-sm text-gray-600 mb-6">Select a patient for this invoice.</p>

            <div className="relative" ref={searchRef}>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search patients..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={handleSearchFocus}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                </div>

                {isDropdownOpen && filteredPatients.length > 0 && (
                    <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
                        {filteredPatients.map(patient => (
                            <div
                                key={patient.id}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                onClick={() => handlePatientSelect(patient)}
                            >
                                {renderPatientAvatar(patient)}
                                <div className="ml-3">
                                    <div className="font-medium">{patient.name}</div>
                                    <div className="text-sm text-gray-500">{patient.age} • {patient.gender}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {selectedPatient && (
                <div className="mt-6 p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                        {renderPatientAvatar(selectedPatient)}
                        <div className="ml-4">
                            <h3 className="font-medium text-gray-900">{selectedPatient.name}</h3>
                            <p className="text-sm text-gray-500">
                                {selectedPatient.age} • {selectedPatient.gender} • ID: {selectedPatient.id}
                            </p>
                        </div>
                    </div>

                    <div className="mt-4 space-y-2">
                        <p className="text-sm">
                            <span className="font-medium">Email:</span> {selectedPatient.email}
                        </p>
                        <p className="text-sm">
                            <span className="font-medium">Phone:</span> {selectedPatient.phone}
                        </p>
                        <p className="text-sm">
                            <span className="font-medium">Address:</span> {selectedPatient.address}
                        </p>
                    </div>

                    <button className="mt-4 text-blue-600 text-sm font-medium hover:text-blue-800 focus:outline-none">
                        View patient details
                    </button>
                </div>
            )}
        </div>
    );
};

export default PatientInformation;
