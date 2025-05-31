"use client";

import { getPaymentData } from '../data/billingData';

const Card = () => {
    const dummyPayments = getPaymentData();

    const calculateTotalPayments = () => {
        const completedPayments = dummyPayments.filter(payment => payment.status === "Completed");
        const totalAmount = completedPayments.reduce((sum, payment) => sum + payment.amount, 0);

        return {
            total: totalAmount.toFixed(2),
            subtitle: `From ${completedPayments.length} transactions`
        };
    };

    const calculatePendingPayments = () => {
        const pendingPayments = dummyPayments.filter(payment => 
            payment.status === "Pending" || payment.status === "Processing"
        );
        const totalAmount = pendingPayments.reduce((sum, payment) => sum + payment.amount, 0);

        return {
            total: totalAmount.toFixed(2),
            subtitle: `From ${pendingPayments.length} transactions`
        };
    };

    const calculateFailedPayments = () => {
        const failedPayments = dummyPayments.filter(payment => payment.status === "Failed");
        const totalAmount = failedPayments.reduce((sum, payment) => sum + payment.amount, 0);

        return {
            total: totalAmount.toFixed(2),
            subtitle: `From ${failedPayments.length} transactions`
        };
    };

    const calculatePaymentMethods = () => {
        const methods = {};
        
        dummyPayments.forEach(payment => {
            if (payment.method) {
                methods[payment.method] = (methods[payment.method] || 0) + 1;
            }
        });

        // Group similar methods
        const creditCard = (methods["Credit Card"] || 0);
        const debitCard = (methods["Debit Card"] || 0);
        const cash = (methods["Cash"] || 0);
        const other = (methods["Check"] || 0) + (methods["Bank Transfer"] || 0) + (methods["Insurance"] || 0);

        return {
            "Credit Card": creditCard,
            "Debit Card": debitCard,
            "Cash": cash,
            "Other": other
        };
    };

    const calculateProgressWidth = (current, type) => {
        const totalPayments = dummyPayments.length;
        
        if (type === 'total') {
            const completedCount = dummyPayments.filter(p => p.status === "Completed").length;
            return (completedCount / totalPayments) * 100;
        }
        if (type === 'pending') {
            const pendingCount = dummyPayments.filter(p => p.status === "Pending" || p.status === "Processing").length;
            return (pendingCount / totalPayments) * 100;
        }
        if (type === 'failed') {
            const failedCount = dummyPayments.filter(p => p.status === "Failed").length;
            return (failedCount / totalPayments) * 100;
        }
        return 50;
    };

    const totalPayments = calculateTotalPayments();
    const pendingPayments = calculatePendingPayments();
    const failedPayments = calculateFailedPayments();
    const paymentMethods = calculatePaymentMethods();

    const data = [
        {
            id: 1,
            title: "Total Payments",
            total: totalPayments.total,
            subtitle: totalPayments.subtitle,
            progressColor: "bg-green-500",
            progressWidth: `${calculateProgressWidth(totalPayments.total, 'total')}%`,
            isMoney: true
        },
        {
            id: 2,
            title: "Pending Payments",
            total: pendingPayments.total,
            subtitle: pendingPayments.subtitle,
            progressColor: "bg-orange-500",
            progressWidth: `${calculateProgressWidth(pendingPayments.total, 'pending')}%`,
            isMoney: true
        },
        {
            id: 3,
            title: "Failed Payments",
            total: failedPayments.total,
            subtitle: failedPayments.subtitle,
            progressColor: "bg-red-500",
            progressWidth: `${calculateProgressWidth(failedPayments.total, 'failed')}%`,
            isMoney: true
        },
        {
            id: 4,
            title: "Payment Methods",
            isMethodCard: true
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
            {data.map((item) => {
                if (item.isMethodCard) {
                    return (
                        <div
                            key={item.id}
                            className="bg-white rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition duration-300 ease-in-out"
                        >
                            <div>
                                <span className="font-medium text-gray-800">{item.title}</span>
                            </div>

                            <div className="my-6 space-y-3">
                                {Object.entries(paymentMethods).map(([method, count]) => (
                                    <div key={method} className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">{method}</span>
                                        <span className="text-sm font-medium text-gray-900">{count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                }

                return (
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
                );
            })}
        </div>
    );
};

export default Card;