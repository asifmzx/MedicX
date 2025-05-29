
"use client";

import { dummyIssuances } from './data/invoiceData';

const Card = () => {

    const calculateTotalOutstanding = () => {
        const totalBalance = dummyIssuances
            .filter(invoice => invoice.status !== "Paid")
            .reduce((sum, invoice) => sum + invoice.balance, 0);

        const invoiceCount = dummyIssuances.filter(invoice => invoice.status !== "Paid").length;

        return {
            total: totalBalance.toFixed(2),
            subtitle: `From ${invoiceCount} invoices`
        };
    };

    const calculatePaidThisMonth = () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        const paidThisMonth = dummyIssuances
            .filter(invoice => {
                if (invoice.status !== "Paid") return false;
                const invoiceDate = new Date(invoice.date);
                return invoiceDate.getMonth() === currentMonth && invoiceDate.getFullYear() === currentYear;
            })
            .reduce((sum, invoice) => sum + invoice.amount, 0);

        const lastMonthDate = new Date(currentYear, currentMonth - 1, 1);
        const lastMonth = dummyIssuances
            .filter(invoice => {
                if (invoice.status !== "Paid") return false;
                const invoiceDate = new Date(invoice.date);
                return invoiceDate.getMonth() === lastMonthDate.getMonth() && 
                       invoiceDate.getFullYear() === lastMonthDate.getFullYear();
            })
            .reduce((sum, invoice) => sum + invoice.amount, 0);

        const percentageChange = lastMonth > 0 ? Math.round(((paidThisMonth - lastMonth) / lastMonth) * 100) : 0;

        return {
            total: paidThisMonth.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            value: percentageChange,
            subtitle: "from last month"
        };
    };

    const calculateOverdueInvoices = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); 

        const overdueInvoices = dummyIssuances.filter(invoice => {
            if (invoice.status === "Paid") return false;
            const dueDate = new Date(invoice.dueDate);
            dueDate.setHours(0, 0, 0, 0);
            return dueDate < today;
        });

        const overdueTotal = overdueInvoices.reduce((sum, invoice) => sum + invoice.balance, 0);

        return {
            total: overdueInvoices.length.toString(),
            subtitle: `Total: $${overdueTotal.toFixed(2)}`
        };
    };

    const calculateInsuranceClaims = () => {
        const insuranceClaims = dummyIssuances.filter(invoice =>
            invoice.insurance && invoice.insurance !== "Not Submitted"
        );

        const pendingClaims = dummyIssuances.filter(invoice =>
            invoice.insurance === "Pending" || invoice.insurance === "Submitted"
        );

        const pendingTotal = pendingClaims.reduce((sum, invoice) => sum + invoice.amount, 0);

        return {
            total: insuranceClaims.length.toString(),
            subtitle: `Pending: $${pendingTotal.toFixed(2)}`
        };
    };

    const calculateProgressWidth = (current, max, type) => {
        if (type === 'outstanding') {

            const totalInvoiceValue = dummyIssuances.reduce((sum, inv) => sum + inv.amount, 0);
            const outstandingAmount = parseFloat(current.replace(/,/g, ''));
            return Math.min((outstandingAmount / totalInvoiceValue) * 100, 100);
        }
        if (type === 'paid') {
            const monthlyTarget = 2000;
            const paidAmount = parseFloat(current.replace(/,/g, ''));
            return Math.min((paidAmount / monthlyTarget) * 100, 100);
        }
        if (type === 'overdue') {
            const totalInvoices = dummyIssuances.length;
            const overdueCount = parseInt(current);
            return (overdueCount / totalInvoices) * 100;
        }
        if (type === 'insurance') {
            const totalInvoices = dummyIssuances.length;
            const claimsCount = parseInt(current);
            return (claimsCount / totalInvoices) * 100;
        }
        return 50;
    };

    const totalOutstanding = calculateTotalOutstanding();
    const paidThisMonth = calculatePaidThisMonth();
    const overdueInvoices = calculateOverdueInvoices();
    const insuranceClaims = calculateInsuranceClaims();

    const data = [
        {
            id: 1,
            title: "Total Outstanding",
            total: totalOutstanding.total,
            subtitle: totalOutstanding.subtitle,
            progressColor: "bg-black",
            progressWidth: `${calculateProgressWidth(totalOutstanding.total, null, 'outstanding')}%`,
            isMoney: true
        },
        {
            id: 2,
            title: "Paid This Month",
            total: paidThisMonth.total,
            value: paidThisMonth.value,
            subtitle: paidThisMonth.subtitle,
            progressColor: "bg-green-500",
            progressWidth: `${calculateProgressWidth(paidThisMonth.total, null, 'paid')}%`,
            isMoney: true
        },
        {
            id: 3,
            title: "Overdue Invoices",
            total: overdueInvoices.total,
            subtitle: overdueInvoices.subtitle,
            progressColor: "bg-red-500",
            progressWidth: `${calculateProgressWidth(overdueInvoices.total, null, 'overdue')}%`,
            isMoney: false
        },
        {
            id: 4,
            title: "Insurance Claims",
            total: insuranceClaims.total,
            subtitle: insuranceClaims.subtitle,
            progressColor: "bg-blue-500",
            progressWidth: `${calculateProgressWidth(insuranceClaims.total, null, 'insurance')}%`,
            isMoney: false
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-4">
            {data.map((item) => {
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
                                {item.value !== undefined && (
                                    <span className={`font-medium ${item.value >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                        {item.value >= 0 ? '+' : ''}{item.value}%{' '}
                                    </span>
                                )}
                                <span>
                                    {item.subtitle}
                                </span>
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