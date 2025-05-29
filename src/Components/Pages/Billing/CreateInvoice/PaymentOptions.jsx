"use client"
import React, { useState } from 'react';

const PaymentOptions = () => {
    const [paymentMethods, setPaymentMethods] = useState({
        creditCard: true,
        debitCard: true,
        cash: true,
        check: true,
        bankTransfer: true,
        insurance: true,
        patientPortal: true,
        paymentPlan: true
    });

    const [offerPaymentPlan, setOfferPaymentPlan] = useState(false);

    const handlePaymentMethodChange = (method) => {
        setPaymentMethods({
            ...paymentMethods,
            [method]: !paymentMethods[method]
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Payment Options</h2>
            </div>

            <div className="mb-6">
                <h3 className="text-base font-medium mb-4">Accepted Payment Methods</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="creditCard"
                            checked={paymentMethods.creditCard}
                            onChange={() => handlePaymentMethodChange('creditCard')}
                            className="w-4 h-4 text-gray-800 rounded border-gray-300 focus:ring-0"
                        />
                        <label htmlFor="creditCard" className="ml-2 text-gray-700">
                            Credit Card
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="debitCard"
                            checked={paymentMethods.debitCard}
                            onChange={() => handlePaymentMethodChange('debitCard')}
                            className="w-4 h-4 text-gray-800 rounded border-gray-300 focus:ring-0"
                        />
                        <label htmlFor="debitCard" className="ml-2 text-gray-700">
                            Debit Card
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="cash"
                            checked={paymentMethods.cash}
                            onChange={() => handlePaymentMethodChange('cash')}
                            className="w-4 h-4 text-gray-800 rounded border-gray-300 focus:ring-0"
                        />
                        <label htmlFor="cash" className="ml-2 text-gray-700">
                            Cash
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="check"
                            checked={paymentMethods.check}
                            onChange={() => handlePaymentMethodChange('check')}
                            className="w-4 h-4 text-gray-800 rounded border-gray-300 focus:ring-0"
                        />
                        <label htmlFor="check" className="ml-2 text-gray-700">
                            Check
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="bankTransfer"
                            checked={paymentMethods.bankTransfer}
                            onChange={() => handlePaymentMethodChange('bankTransfer')}
                            className="w-4 h-4 text-gray-800 rounded border-gray-300 focus:ring-0"
                        />
                        <label htmlFor="bankTransfer" className="ml-2 text-gray-700">
                            Bank Transfer
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="insurance"
                            checked={paymentMethods.insurance}
                            onChange={() => handlePaymentMethodChange('insurance')}
                            className="w-4 h-4 text-gray-800 rounded border-gray-300 focus:ring-0"
                        />
                        <label htmlFor="insurance" className="ml-2 text-gray-700">
                            Insurance
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="patientPortal"
                            checked={paymentMethods.patientPortal}
                            onChange={() => handlePaymentMethodChange('patientPortal')}
                            className="w-4 h-4 text-gray-800 rounded border-gray-300 focus:ring-0"
                        />
                        <label htmlFor="patientPortal" className="ml-2 text-gray-700">
                            Patient Portal
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="paymentPlan"
                            checked={paymentMethods.paymentPlan}
                            onChange={() => handlePaymentMethodChange('paymentPlan')}
                            className="w-4 h-4 text-gray-800 rounded border-gray-300 focus:ring-0"
                        />
                        <label htmlFor="paymentPlan" className="ml-2 text-gray-700">
                            Payment Plan
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mb-6">
                <label htmlFor="offerPaymentPlan" className="font-medium">
                    Offer Payment Plan
                </label>
                <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                    <input
                        type="checkbox"
                        id="offerPaymentPlan"
                        className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white border rounded-full appearance-none cursor-pointer peer border-gray-300 checked:right-0 checked:border-gray-800 checked:bg-gray-800 dark:checked:bg-primary-500"
                        checked={offerPaymentPlan}
                        onChange={() => setOfferPaymentPlan(!offerPaymentPlan)}
                    />
                    <label
                        htmlFor="offerPaymentPlan"
                        className="block h-full overflow-hidden rounded-full cursor-pointer bg-gray-300 peer-checked:bg-gray-500 opacity-50"
                    ></label>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    Tax Calculator
                </button>

                <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    Preview
                </button>
            </div>
        </div>
    );
};

export default PaymentOptions;
