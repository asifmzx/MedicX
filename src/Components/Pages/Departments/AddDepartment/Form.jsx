"use client";

import React, { useState } from 'react';
import { Select } from 'antd';
import Buttonv2 from '@/Components/UI/Button/Buttonv2';
import { FaRegSave } from 'react-icons/fa';

const { Option } = Select;

const Form = () => {
    const [formData, setFormData] = useState({
        departmentName: '',
        location: '',
        contactEmail: '',
        headOfDepartment: '',
        status: 'Active',
        contactPhone: '',
        description: '',
        assignedStaff: [],
        availableServices: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (name, value) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (category, id, checked) => {
        setFormData(prev => ({
            ...prev,
            [category]: checked
                ? [...prev[category], id]
                : prev[category].filter(item => item !== id)
        }));
    };

    const staffMembers = [
        { id: 'sarah_johnson', name: 'Dr. Sarah Johnson', role: 'Cardiologist' },
        { id: 'michael_chen', name: 'Dr. Michael Chen', role: 'Cardiologist' },
        { id: 'emily_rodriguez', name: 'Dr. Emily Rodriguez', role: 'Radiologist' },
        { id: 'robert_taylor', name: 'Nurse Robert Taylor', role: 'Head Nurse' },
        { id: 'jessica_adams', name: 'Nurse Jessica Adams', role: 'Registered Nurse' },
        { id: 'james_wilson', name: 'Dr. James Wilson', role: 'Orthopedic Surgeon' }
    ];

    const services = [
        { id: 'general_consultation', name: 'General Consultation', description: 'Routine examination and diagnosis' },
        { id: 'specialized_treatment', name: 'Specialized Treatment', description: 'Advanced procedures specific to department' },
        { id: 'diagnostic_testing', name: 'Diagnostic Testing', description: 'Comprehensive tests and screenings' },
        { id: 'emergency_care', name: 'Emergency Care', description: 'Urgent medical attention' },
        { id: 'follow_up_visits', name: 'Follow-up Visits', description: 'Post-treatment follow-up care' },
        { id: 'preventive_care', name: 'Preventive Care', description: 'Health maintenance and disease prevention' }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <form onSubmit={handleSubmit}>

                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">Department Information</h2>
                    <p className="text-sm text-gray-600 mb-6">Enter the details for the new department</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Department Name
                            </label>
                            <input
                                type="text"
                                name="departmentName"
                                placeholder="e.g. Cardiology"
                                value={formData.departmentName}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">The official name of the department</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Head of Department
                            </label>
                            <Select
                                placeholder="Select a doctor"
                                value={formData.headOfDepartment}
                                onChange={(value) => handleSelectChange('headOfDepartment', value)}
                                className="w-full"
                                size="large"
                            >
                                <Option value="dr_sarah">Dr. Sarah Johnson</Option>
                                <Option value="dr_michael">Dr. Michael Chen</Option>
                                <Option value="dr_emily">Dr. Emily Rodriguez</Option>
                            </Select>
                            <p className="text-xs text-gray-500 mt-1">The doctor who will lead this department</p>
                        </div>

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="e.g. Building A, Floor 3"
                                value={formData.location}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">Physical location of the department</p>
                        </div>

                        {/* Status */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Status
                            </label>
                            <Select
                                value={formData.status}
                                onChange={(value) => handleSelectChange('status', value)}
                                className="w-full"
                                size="large"
                            >
                                <Option value="Active">Active</Option>
                                <Option value="Inactive">Inactive</Option>
                                <Option value="Planning">Planning</Option>
                            </Select>
                            <p className="text-xs text-gray-500 mt-1">Current operational status</p>
                        </div>

                        {/* Contact Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Contact Email
                            </label>
                            <input
                                type="email"
                                name="contactEmail"
                                placeholder="dept@medicx.com"
                                value={formData.contactEmail}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">Department contact email</p>
                        </div>

                        {/* Contact Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Contact Phone
                            </label>
                            <input
                                type="tel"
                                name="contactPhone"
                                placeholder="+880-123-456789"
                                value={formData.contactPhone}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                            />
                            <p className="text-xs text-gray-500 mt-1">Department contact phone</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows={4}
                            placeholder="Provide a description of the department's purpose, specialties, and functions..."
                            value={formData.description}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                        />
                        <p className="text-xs text-gray-500 mt-1">Detailed description of the department</p>
                    </div>
                </div>

                {/* Assign Staff */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">Assign Staff</h2>
                    <p className="text-sm text-gray-600 mb-4">Select staff members to assign to this department</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {staffMembers.map((staff) => (
                            <div key={staff.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                                <input
                                    type="checkbox"
                                    id={staff.id}
                                    checked={formData.assignedStaff.includes(staff.id)}
                                    onChange={(e) => handleCheckboxChange('assignedStaff', staff.id, e.target.checked)}
                                    className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300 rounded"
                                />
                                <div className="flex-1">
                                    <label htmlFor={staff.id} className="block text-sm font-medium text-gray-900 cursor-pointer">
                                        {staff.name}
                                    </label>
                                    <p className="text-xs text-gray-500">{staff.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Available Services */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2">Available Services</h2>
                    <p className="text-sm text-gray-600 mb-4">Select services that will be offered by this department</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {services.map((service) => (
                            <div key={service.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
                                <input
                                    type="checkbox"
                                    id={service.id}
                                    checked={formData.availableServices.includes(service.id)}
                                    onChange={(e) => handleCheckboxChange('availableServices', service.id, e.target.checked)}
                                    className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-400 border-gray-300 rounded"
                                />
                                <div className="flex-1">
                                    <label htmlFor={service.id} className="block text-sm font-medium text-gray-900 cursor-pointer">
                                        {service.name}
                                    </label>
                                    <p className="text-xs text-gray-500">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <Buttonv2
                        type="submit"
                        variant="secondary_main"
                        text="Create Department"
                        className="px-6 py-2 text-sm font-semibold h-10"
                        Icon={FaRegSave}
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;
