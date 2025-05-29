"use client"
import React, { useState } from 'react';

const InsuranceInformation = () => {
    const [billToInsurance, setBillToInsurance] = useState(true);
    const [verificationStatus, setVerificationStatus] = useState('verified');

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-5 sm:p-6">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Insurance Information</h2>
                <p className="text-sm text-gray-600">Patient's insurance details.</p>
            </div>

            <div className="flex items-center justify-between mb-6">
                <label htmlFor="billToInsurance" className="font-medium">
                    Bill to Insurance
                </label>
                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                    <input
                        type="checkbox"
                        id="billToInsurance"
                        className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white border rounded-full appearance-none cursor-pointer peer border-gray-300 checked:right-0 checked:border-gray-800 checked:bg-gray-800 dark:checked:bg-primary-500"
                        checked={billToInsurance}
                        onChange={() => setBillToInsurance(!billToInsurance)}
                    />
                    <label
                        htmlFor="billToInsurance"
                        className="block h-full overflow-hidden rounded-full cursor-pointer bg-gray-300 peer-checked:bg-gray-500 opacity-50"
                    ></label>
                </div>
            </div>

            <div className="mb-5">
                <div className="p-4 border border-gray-500 rounded-md">
                    <div className="mb-1 font-medium">Blue Cross Blue Shield</div>
                    <div className="text-sm text-gray-700 mb-1">Policy #: BCBS123456789</div>
                    <div className="text-sm text-gray-700 mb-1">Group #: GRP987654321</div>
                    <div className="text-sm text-gray-700">Coverage: PPO</div>
                </div>
            </div>

            <div className="mb-5">
                <label htmlFor="copayAmount" className="block mb-2 font-medium">
                    Copay Amount
                </label>
                <input
                    type="number"
                    id="copayAmount"
                    className="w-full border border-gray-500 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                />
            </div>

            <div>
                <label className="block mb-3 font-medium">Coverage Verification</label>
                <div className="space-y-2">
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="verified"
                            name="verificationStatus"
                            value="verified"
                            checked={verificationStatus === 'verified'}
                            onChange={() => setVerificationStatus('verified')}
                            className="w-4 h-4 text-gray-800 border-gray-300 focus:ring-gray-500"
                        />
                        <label htmlFor="verified" className="ml-2 text-gray-700">
                            Verified
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="pending"
                            name="verificationStatus"
                            value="pending"
                            checked={verificationStatus === 'pending'}
                            onChange={() => setVerificationStatus('pending')}
                            className="w-4 h-4 text-gray-800 border-gray-300 focus:ring-gray-500"
                        />
                        <label htmlFor="pending" className="ml-2 text-gray-700">
                            Pending Verification
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="notCovered"
                            name="verificationStatus"
                            value="notCovered"
                            checked={verificationStatus === 'notCovered'}
                            onChange={() => setVerificationStatus('notCovered')}
                            className="w-4 h-4 text-gray-800 border-gray-300 focus:ring-gray-500"
                        />
                        <label htmlFor="notCovered" className="ml-2 text-gray-700">
                            Not Covered
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsuranceInformation;
