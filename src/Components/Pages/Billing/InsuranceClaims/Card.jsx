"use client";

import { getInsuranceClaimsData } from '../data/billingData';

const Card = () => {
    const dummyClaims = getInsuranceClaimsData();

    const calculateTotalClaims = () => {
        const totalAmount = dummyClaims.reduce((sum, claim) => sum + claim.amount, 0);
        return {
            total: totalAmount.toFixed(2),
            subtitle: `From ${dummyClaims.length} claims`
        };
    };

    const calculateApprovedClaims = () => {
        const approvedClaims = dummyClaims.filter(claim => claim.status === "Approved");
        const totalAmount = approvedClaims.reduce((sum, claim) => sum + claim.amount, 0);
        return {
            total: totalAmount.toFixed(2),
            subtitle: `From ${approvedClaims.length} claims`
        };
    };

    const calculatePendingClaims = () => {
        const pendingClaims = dummyClaims.filter(claim => claim.status === "Pending");
        const totalAmount = pendingClaims.reduce((sum, claim) => sum + claim.amount, 0);
        return {
            total: totalAmount.toFixed(2),
            subtitle: `From ${pendingClaims.length} claims`
        };
    };

    const calculateSuccessRate = () => {
        const approvedCount = dummyClaims.filter(claim => claim.status === "Approved").length;
        const submittedCount = dummyClaims.filter(claim => claim.status !== "Draft").length;
        const rate = submittedCount > 0 ? (approvedCount / submittedCount * 100).toFixed(0) : 0;
        return {
            total: `${rate}%`,
            subtitle: "Approval rate for submitted claims"
        };
    };

    const calculateProgressWidth = (type) => {
        const totalClaims = dummyClaims.length;

        if (type === 'total') {
            return 100;
        }
        if (type === 'approved') {
            const approvedCount = dummyClaims.filter(c => c.status === "Approved").length;
            return (approvedCount / totalClaims) * 100;
        }
        if (type === 'pending') {
            const pendingCount = dummyClaims.filter(c => c.status === "Pending").length;
            return (pendingCount / totalClaims) * 100;
        }
        if (type === 'success') {
            const approvedCount = dummyClaims.filter(c => c.status === "Approved").length;
            const submittedCount = dummyClaims.filter(c => c.status !== "Draft").length;
            return submittedCount > 0 ? (approvedCount / submittedCount) * 100 : 0;
        }
        return 0;
    };

    const totalClaims = calculateTotalClaims();
    const approvedClaims = calculateApprovedClaims();
    const pendingClaims = calculatePendingClaims();
    const successRate = calculateSuccessRate();

    const data = [
        {
            id: 1,
            title: "Total Claims",
            total: totalClaims.total,
            subtitle: totalClaims.subtitle,
            progressColor: "bg-blue-500",
            progressWidth: `${calculateProgressWidth('total')}%`,
            isMoney: true
        },
        {
            id: 2,
            title: "Approved Claims",
            total: approvedClaims.total,
            subtitle: approvedClaims.subtitle,
            progressColor: "bg-green-500",
            progressWidth: `${calculateProgressWidth('approved')}%`,
            isMoney: true
        },
        {
            id: 3,
            title: "Pending Claims",
            total: pendingClaims.total,
            subtitle: pendingClaims.subtitle,
            progressColor: "bg-yellow-500",
            progressWidth: `${calculateProgressWidth('pending')}%`,
            isMoney: true
        },
        {
            id: 4,
            title: "Claim Success Rate",
            total: successRate.total,
            subtitle: successRate.subtitle,
            progressColor: "bg-purple-500",
            progressWidth: `${calculateProgressWidth('success')}%`,
            isMoney: false
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ease-in-out"
                >
                    <div>
                        <span className="font-medium text-gray-800">{item.title}</span>
                    </div>

                    <div className="my-6">
                        <h3 className="text-3xl font-bold text-gray-900">
                            {item.isMoney ? `$${item.total}` : item.total}
                        </h3>
                        <p className="text-sm mt-1 text-gray-500">
                            <span>{item.subtitle}</span>
                        </p>
                    </div>

                    <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                                className={`${item.progressColor} h-1.5 rounded-full`}
                                style={{ width: item.progressWidth }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;