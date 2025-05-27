"use client";
import { useState } from 'react';
import BackButton from '@/Components/UI/Button/BackButton';
import Buttonv2 from '@/Components/UI/Button/Buttonv2';
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

export default function IssueBlood() {
    const [recipientType, setRecipientType] = useState('Hospital Patient');
    const [isEmergency, setIsEmergency] = useState(false);
    const [formData, setFormData] = useState({
        patient: '',
        bloodType: '',
        numberOfUnits: '1',
        department: '',
        requestingDoctor: '',
        issueDate: 'May 27th, 2025',
        purpose: '',
        additionalNotes: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto p-6">
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Issue Blood</h1>
                        <p className="text-sm text-gray-600 mt-1">Complete the form below to issue blood to a patient or external recipient.</p>
                    </div>
                    <BackButton showText={true} text="Cancel" />
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-2">Blood Issue Form</h2>
                        <p className="text-sm text-blue-600 mb-6">Fill out all required information to issue blood units.</p>

                        {/* Recipient Information Section */}
                        <div className="mb-8">
                            <h3 className="text-base font-medium text-gray-900 mb-4">Recipient Information</h3>

                            {/* Recipient Type */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">
                                    Recipient Type
                                </label>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setRecipientType('Hospital Patient')}
                                        className={`px-4 py-2 text-sm rounded-md border h-10 ${recipientType === 'Hospital Patient'
                                            ? 'bg-gray-900 text-white border-gray-900'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        Hospital Patient
                                    </button>
                                    <button
                                        onClick={() => setRecipientType('External Recipient')}
                                        className={`px-4 py-2 text-sm rounded-md border h-10 ${recipientType === 'External Recipient'
                                            ? 'bg-gray-900 text-white border-gray-900'
                                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        External Recipient
                                    </button>
                                </div>
                            </div>

                            {recipientType === 'Hospital Patient' ? (
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Patient
                                    </label>
                                    <select
                                        value={formData.patient}
                                        onChange={(e) => handleInputChange('patient', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-500"
                                    >
                                        <option value="">Select patient</option>
                                        <option value="patient1">John Doe - ID: 12345</option>
                                        <option value="patient2">Jane Smith - ID: 67890</option>
                                        <option value="patient3">Robert Johnson - ID: 54321</option>
                                    </select>
                                </div>
                            ) : (
                                <div className="mb-6">
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                        <div className='flex flex-col'>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Recipient Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter recipient name"
                                                value={formData.recipientName || ''}
                                                onChange={(e) => handleInputChange('recipientName', e.target.value)}
                                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                            />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Contact Information
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Phone or email"
                                                value={formData.contactInfo || ''}
                                                onChange={(e) => handleInputChange('contactInfo', e.target.value)}
                                                className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Blood Information Section */}
                        <div className="mb-8">
                            <h3 className="text-base font-medium text-gray-900 mb-4">Blood Information</h3>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Blood Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Blood Type
                                    </label>
                                    <select
                                        value={formData.bloodType}
                                        onChange={(e) => handleInputChange('bloodType', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-500"
                                    >
                                        <option value="">Select blood type</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>

                                {/* Number of Units */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Number of Units
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={formData.numberOfUnits}
                                        onChange={(e) => handleInputChange('numberOfUnits', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-blue-600 mt-1">Each unit is approximately 450ml</p>
                                </div>
                            </div>
                        </div>

                        {/* Issue Details Section */}
                        <div className="mb-8">
                            <h3 className="text-base font-medium text-gray-900 mb-4">Issue Details</h3>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Department */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Department
                                    </label>
                                    <select
                                        value={formData.department}
                                        onChange={(e) => handleInputChange('department', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-500"
                                    >
                                        <option value="">Select department</option>
                                        <option value="emergency">Emergency Department</option>
                                        <option value="surgery">Surgery</option>
                                        <option value="icu">ICU</option>
                                        <option value="oncology">Oncology</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="orthopedics">Orthopedics</option>
                                    </select>
                                </div>

                                {/* Requesting Doctor */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Requesting Doctor
                                    </label>
                                    <select
                                        value={formData.requestingDoctor}
                                        onChange={(e) => handleInputChange('requestingDoctor', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-500"
                                    >
                                        <option value="">Select doctor</option>
                                        <option value="dr-smith">Dr. Sarah Smith</option>
                                        <option value="dr-johnson">Dr. Michael Johnson</option>
                                        <option value="dr-williams">Dr. Emily Williams</option>
                                        <option value="dr-brown">Dr. David Brown</option>
                                    </select>
                                </div>

                                {/* Issue Date */}
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                                        Collection Date
                                    </label>
                                    <Space direction="vertical" style={{ width: "100%", height: "100%" }}>
                                        <DatePicker
                                            onChange={onChange}
                                            style={{ width: "100%", padding: "8px" }}
                                            // format="YYYY-MM-DD"
                                            format="ddd MMM DD YYYY"
                                            disabledDate={(current) => current && current < dayjs().startOf('day')}
                                            placeholder="Select collection date"
                                        />
                                    </Space>
                                </div>

                                {/* Emergency Request Checkbox */}
                                <div className="flex items-start border border-gray-200 rounded-md p-2 bg-gray-50 mt-2">
                                    <div className="flex items-center mt-1">
                                        <input
                                            type="checkbox"
                                            id="emergency"
                                            checked={isEmergency}
                                            onChange={(e) => setIsEmergency(e.target.checked)}
                                            className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                                        />
                                        <div className="ml-2">
                                            <label htmlFor="emergency" className="text-sm font-medium text-gray-700">
                                                Emergency Request
                                            </label>
                                            <p className="text-xs text-red-600">Mark this if the blood is needed for an emergency situation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Purpose */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Purpose
                            </label>
                            <textarea
                                rows="3"
                                placeholder="Describe the purpose of this blood issue"
                                value={formData.purpose}
                                onChange={(e) => handleInputChange('purpose', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-500"
                            />
                        </div>

                        {/* Additional Notes */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Additional Notes
                            </label>
                            <textarea
                                rows="3"
                                placeholder="Any additional information or special instructions"
                                value={formData.additionalNotes}
                                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-500"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3">
                            <button className="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                Cancel
                            </button>
                            <button className="px-6 py-2 text-white bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
                                Issue Blood
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}