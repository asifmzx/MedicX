"use client";
import { useState } from "react";
import React from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import { Select } from 'antd';
import { assets } from "@/assets";

const placeholderPatient = assets.prof;
const placeholderDoctor = assets.prof;

const onChange = (date, dateString) => {
    console.log(date, dateString);
};

const AddDoctorSection = () => {
    const [appointmentStatus, setAppointmentStatus] = useState("scheduled");

    const patientOptions = [
        {
            value: '1',
            label: 'John Doe',
            dob: '1990-05-15',
            img: placeholderPatient
        },
        {
            value: '2',
            label: 'Alice Smith',
            dob: '1985-12-22',
            img: placeholderPatient
        },
        {
            value: '3',
            label: 'Michael Johnson',
            dob: '1978-03-08',
            img: placeholderPatient
        },
    ];

    const doctorOptions = [
        {
            value: '1',
            label: 'Dr. Sarah Wilson',
            specialty: 'Cardiologist',
            img: placeholderDoctor
        },
        {
            value: '2',
            label: 'Dr. Robert Brown',
            specialty: 'Pediatrician',
            img: placeholderDoctor
        },
        {
            value: '3',
            label: 'Dr. Emily Davis',
            specialty: 'Dermatologist',
            img: placeholderDoctor
        },
    ];

    const renderPatientOption = (option) => (
        <div className="flex items-center gap-3 p-2">
            <img
                src={option.img}
                alt={option.label}
                className="w-10 h-10 rounded-full object-cover"
            />
            <div>
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-gray-500">
                    DOB: {dayjs(option.dob).format('MMM D, YYYY')}
                </div>
            </div>
        </div>
    );

    const renderDoctorOption = (option) => (
        <div className="flex items-center gap-3 p-2">
            <img
                src={option.img}
                alt={option.label}
                className="w-10 h-10 rounded-full object-cover"
            />
            <div>
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-gray-500">{option.specialty}</div>
            </div>
        </div>
    );

    return (
        <div className="space-x-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-1 space-y-4">
                <div className="lg:col-span-2 rounded-xl space-y-4 pb-6">
                    <div className=" bg-white px-4 py-2 rounded-xl shadow-md space-y-4">
                        <div className="mt-2">
                            <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
                                Appointment Details
                            </h1>
                            <p className="text-gray-600">
                                Enter the details for the new appointment.
                            </p>
                        </div>

                        <label htmlFor="appointmentType" className="block mb-1 font-medium">
                            Appointment Type
                        </label>
                        <select
                            id="appointmentType"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select appointment Type
                            </option>
                            <option value="Procedure">Procedure (60 min)</option>
                            <option value="Check-up">Check-up (30 min)</option>
                            <option value="Consultation">Consultation (45 min)</option>
                            <option value="Follow-up">Follow-up (20 min)</option>
                            <option value="Emergency">Emergency (60 min)</option>
                            <option value="Vaccination">Vaccination (15 min)</option>
                            <option value="Lab-Work">Lab Work (30 min)</option>
                            <option value="Physical-Therapy">Physical Therapy (45 min)</option>
                        </select>

                        <div className="col-span-1">
                            <label htmlFor="date" className="block font-medium mb-2">
                                Date
                            </label>
                            <Space direction="vertical" style={{ width: "100%" }}>
                                <DatePicker
                                    onChange={onChange}
                                    style={{ width: "100%", padding: "8px" }}
                                    format="ddd MMM DD YYYY"
                                    showToday={false}
                                    allowClear={false}
                                    renderExtraFooter={() => (
                                        <div style={{ textAlign: "center", fontWeight: "bold" }}>
                                            {dayjs().format("MMMM YYYY")}
                                        </div>
                                    )}
                                />
                            </Space>
                        </div>

                        <label htmlFor="timeslot" className="block mb-1 font-medium">
                            Time
                        </label>
                        <select
                            id="timeslot"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-black"
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select time slot
                            </option>
                            <option value="0900">09:00 AM</option>
                            <option value="0930">09:30 AM</option>
                            <option value="1000">10:00 AM</option>
                            <option value="1030">10:30 AM</option>
                            <option value="1100">11:00 AM</option>
                            <option value="1130">11:30 AM</option>
                            <option value="1200">12:00 PM</option>
                            <option value="1230">12:30 PM</option>
                            <option value="0100">01:00 PM</option>
                            <option value="0130">01:30 PM</option>
                            <option value="0200">02:00 PM</option>
                        </select>

                        <label htmlFor="duration" className="block mb-1 font-medium">
                            Duration (minutes)
                        </label>
                        <select
                            id="primarySpecialization"
                            className="w-full border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring focus:ring-black"
                            defaultValue="30minutes"
                        >
                            <option value="15minutes">15 minutes</option>
                            <option value="20minutes">20 minutes</option>
                            <option value="30minutes">30 minutes</option>
                            <option value="45minutes">45 minutes</option>
                            <option value="60minutes">60 minutes</option>
                            <option value="90minutes">90 minutes</option>
                        </select>

                        <label
                            htmlFor="reasonforappointment"
                            className="block mb-1 font-medium"
                        >
                            Reason For Appointment
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black h-24 resize-none"
                            placeholder="Enter the reason for the appointment"
                            id="reasonforappointment"
                            rows={4}
                        />

                        <div className="border border-gray-200"></div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Appointment Status</h3>
                            <div role="radiogroup" className="flex flex-col space-y-1">

                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="scheduled"
                                        checked={appointmentStatus === "scheduled"}
                                        onChange={(e) => setAppointmentStatus(e.target.value)}
                                        className="hidden"
                                    />
                                    <div
                                        className={`size-4 rounded-full border-2 flex items-center justify-center
              ${appointmentStatus === "scheduled"
                                                ? "border-primary bg-primary"
                                                : "border-gray-400"
                                            }`}
                                    >
                                        {appointmentStatus === "scheduled" && (
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium">Scheduled</span>
                                </label>

                                {/* Tentative Option */}
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="tentative"
                                        checked={appointmentStatus === "tentative"}
                                        onChange={(e) => setAppointmentStatus(e.target.value)}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center 
              ${appointmentStatus === "tentative"
                                                ? "border-primary bg-primary"
                                                : "border-gray-400"
                                            }`}
                                    >
                                        {appointmentStatus === "tentative" && (
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium">
                                        Tentative (Pending Confirmation)
                                    </span>
                                </label>

                                {/* Waitlist Option */}
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="status"
                                        value="waitlist"
                                        checked={appointmentStatus === "waitlist"}
                                        onChange={(e) => setAppointmentStatus(e.target.value)}
                                        className="hidden"
                                    />
                                    <div
                                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${appointmentStatus === "waitlist" ? "border-primary bg-primary" : "border-gray-400"}`}>
                                        {appointmentStatus === "waitlist" && (
                                            <div className="w-2 h-2 bg-black rounded-full"></div>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium">Add to Waitlist</span>
                                </label>
                            </div>
                        </div>
                        <div className="border border-gray-200"></div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Additional Information</h3>
                            <textarea
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black h-24 resize-none"
                                placeholder="Enter any additional notes for the appointment"
                                rows={4}
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-2 flex justify-end">
                        <div className="flex flex-col sm:flex-col sm:items-center gap-3 w-full md:w-auto">
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <Buttonv2
                                    variant="primary_main"
                                    text="Cancel"
                                    className="border border-gray-300 whitespace-nowrap w-2/4 h-10"
                                />
                                <Buttonv2
                                    variant="secondary_main"
                                    text="Schedule Appointment"
                                    className="border border-gray-300 w-full md:w-70 h-10"
                                />
                            </div>
                        </div>
                    </div>
                </div>



                <div className="lg:col-span-1 rounded-xl space-y-6">
                    <div className="md:col-span-1 bg-white p-4 rounded-xl shadow-md space-y-4">


                        <div>
                            <h3 className="text-xl font-semibold">Select Patient</h3>
                            <p className="text-xs text-gray-500">Search and select a patient for this appointment.</p>
                        </div>

                        <Select
                            style={{ width: '100%' }}
                            showSearch
                            placeholder="Search patients..."
                            optionFilterProp="label"
                            filterOption={(input, option) =>
                                option.label.toLowerCase().includes(input.toLowerCase())
                            }
                            options={patientOptions}
                            optionRender={(option) => renderPatientOption(option.data)}
                            labelRender={(option) => option.label}
                        />


                        <Buttonv2
                            variant="primary_main"
                            text="Register New Patient"
                            className="border border-gray-300 whitespace-nowrap w-full text-[14px] font-semibold h-10 mt-4"
                        />
                    </div>
                    <div className="md:col-span-1 bg-white p-4 rounded-xl shadow-md space-y-4">
                        <div>
                            <h3 className="text-xl font-semibold">Select Doctor</h3>
                            <p className="text-xs text-gray-500">Choose a doctor for this appointment.</p>
                        </div>

                        <Select
                            style={{ width: '100%' }}
                            showSearch
                            placeholder="Search doctors..."
                            optionFilterProp="label"
                            filterOption={(input, option) =>
                                option.label.toLowerCase().includes(input.toLowerCase())
                            }
                            options={doctorOptions}
                            optionRender={(option) => renderDoctorOption(option.data)}
                            labelRender={(option) => option.label}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddDoctorSection;
