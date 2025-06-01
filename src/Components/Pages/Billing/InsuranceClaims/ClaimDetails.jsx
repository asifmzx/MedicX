import React from 'react'
import { insuranceClaimsData, getClaimDetailsById } from '../data/billingData'

const ClaimDetails = ({ id }) => {
    const claim = insuranceClaimsData.find(c => c.claimId === id);
    const claimDetails = getClaimDetailsById(claim.claimId);

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'approved': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'rejected': return 'bg-red-100 text-red-800';
            case 'submitted': return 'bg-blue-100 text-blue-800';
            case 'draft': return 'bg-gray-100 text-gray-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    if (!claim || !claimDetails) {
        return (
            <div className="mx-auto mt-4 border border-gray-200 shadow-sm rounded-xl p-6 bg-white">
                <div className="text-center py-8">
                    <p className="text-gray-500">Claim not found</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto mt-4 border border-gray-200 shadow-sm rounded-xl p-6 bg-white">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">Claim Details</h1>
                <p className="text-gray-600">View detailed information about a selected claim.</p>
            </div>

            {/* Claim Header */}
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                        Claim {claim.claimId}
                    </h2>
                    <p className="text-gray-600">
                        {claim.provider} • {claim.submitted ? `Submitted on ${claim.submitted}` : 'Not submitted'}
                    </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(claim.status)}`}>
                    {claim.status}
                </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Patient Information */}
                <div className=' border border-gray-200 rounded-2xl shadow-xl p-6'>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h3>
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img
                                src={claim.patient?.avatar || '/default-avatar.png'}
                                alt={claim.patient?.name || 'Patient'}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <div className="font-semibold text-gray-900">{claim.patient?.name || 'N/A'}</div>
                                <div className="text-sm text-gray-600">ID: {claim.patient?.id || 'N/A'}</div>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div>
                                <span className="text-gray-600">Policy Number:</span>
                                <span className="ml-2 text-gray-900">{claimDetails.policyNumber}</span>
                            </div>
                            <div>
                                <span className="text-gray-600">Group Number:</span>
                                <span className="ml-2 text-gray-900">{claimDetails.groupNumber}</span>
                            </div>
                            <div>
                                <span className="text-gray-600">Relationship to Subscriber:</span>
                                <span className="ml-2 text-blue-600 font-medium">{claimDetails.relationship}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Claim Information */}
                <div className=' border border-gray-200 rounded-2xl shadow-xl p-6'>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Claim Information</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Claim Type:</span>
                            <span className="font-semibold text-gray-900">{claimDetails.claimType}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Claim Amount:</span>
                            <span className="font-semibold text-gray-900">${claimDetails.claimAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Approved Amount:</span>
                            <span className="font-semibold text-gray-900">${claimDetails.approvedAmount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Patient Responsibility:</span>
                            <span className="font-semibold text-gray-900">${claimDetails.patientResponsibility.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Payment Date:</span>
                            <span className="font-semibold text-gray-900">{claimDetails.paymentDate || 'Pending'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services & Procedures */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services & Procedures</h3>
                <div className="overflow-hidden border border-gray-200 rounded-lg">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Service
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Billed
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Allowed
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Patient Resp.
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {claimDetails.services?.map((service, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {service.service}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {service.date}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                        ${service.billed.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                        ${service.allowed.toFixed(2)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-right">
                                        ${service.patientResp.toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Notes */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes</h3>
                <p className="text-sm text-gray-700">{claimDetails.notes}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download EOB
                </button>

                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    View Invoice
                </button>

                <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Mark as Reconciled
                </button>
            </div>
        </div>
    )
}

export default ClaimDetails
