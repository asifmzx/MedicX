"use client";
import { useState } from 'react';
import BackButton from '@/Components/UI/Button/BackButton';
import Buttonv2 from '@/Components/UI/Button/Buttonv2';
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";

export default function IssueBlood() {
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [formData, setFormData] = useState({
        donorId: '',
        donorName: '',
        bloodGroup: '',
        quantity: '1',
        collectionDate: '',
        expiryDate: '',
        sourceType: '',
        collectionLocation: '',
        screeningComplete: false,
        processingComplete: false,
        additionalNotes: ''
    });

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCheckboxChange = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="min-h-screen ">

            {/* Form */}
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
                        <p className="text-sm text-gray-600 mb-6">Fill out all required information to issue blood units.</p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-6">
                                {/* Anonymous Donor Checkbox */}
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="anonymous"
                                        checked={isAnonymous}
                                        onChange={(e) => setIsAnonymous(e.target.checked)}
                                        className="h-4 w-4 text-black-600 focus:ring-gray-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="anonymous" className="ml-2 text-sm font-medium text-gray-700">
                                        Anonymous Donor
                                    </label>
                                </div>

                                {/* Conditional Fields - Only show when not anonymous */}
                                {!isAnonymous && (
                                    <>
                                        {/* Donor ID */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Donor ID
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter donor ID"
                                                value={formData.donorId}
                                                onChange={(e) => handleInputChange('donorId', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Enter the unique ID of the donor.</p>
                                        </div>

                                        {/* Donor Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Donor Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Enter donor name"
                                                value={formData.donorName}
                                                onChange={(e) => handleInputChange('donorName', e.target.value)}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                            />
                                        </div>
                                    </>
                                )}

                                {/* Blood Group */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Blood Group
                                    </label>
                                    <select
                                        value={formData.bloodGroup}
                                        onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                                    >
                                        <option value="">Select blood group</option>
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

                                {/* Quantity */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Quantity (units)
                                    </label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={formData.quantity}
                                        onChange={(e) => handleInputChange('quantity', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">Standard unit is 450ml of whole blood.</p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6 mt-0 md:mt-11">
                                {/* Collection Date */}
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

                                {/* Expiry Date */}
                                <div className="space-y-6 mt-0 md:mt-12">
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
                                            placeholder="Select expiry date"
                                        />
                                    </Space>
                                </div>

                                {/* Source Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Source Type
                                    </label>
                                    <select
                                        value={formData.sourceType}
                                        onChange={(e) => handleInputChange('sourceType', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-white"
                                    >
                                        <option value="">Select source type</option>
                                        <option value="voluntary">Voluntary Donation</option>
                                        <option value="replacement">Replacement Donation</option>
                                        <option value="commercial">Commercial</option>
                                        <option value="autologous">Transfer from another facility</option>
                                    </select>
                                </div>

                                {/* Collection Location */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Collection Location
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter collection location"
                                        value={formData.collectionLocation}
                                        onChange={(e) => handleInputChange('collectionLocation', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Checkboxes Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {/* Screening Complete */}
                            <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="screening"
                                        checked={formData.screeningComplete}
                                        onChange={() => handleCheckboxChange('screeningComplete')}
                                        className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="screening" className="ml-2 text-sm font-medium text-gray-700">
                                        Screening Complete
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Blood has been screened for infectious diseases.</p>
                            </div>

                            {/* Processing Complete */}
                            <div className="border border-gray-200 rounded-lg p-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="processing"
                                        checked={formData.processingComplete}
                                        onChange={() => handleCheckboxChange('processingComplete')}
                                        className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="processing" className="ml-2 text-sm font-medium text-gray-700">
                                        Processing Complete
                                    </label>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">Blood has been processed and is ready for storage.</p>
                            </div>
                        </div>

                        {/* Additional Notes */}
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Additional Notes
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Enter any additional information about this blood unit"
                                value={formData.additionalNotes}
                                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-8">
                            <Buttonv2 variant="secondary_main" text="Add Blood Unit" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}