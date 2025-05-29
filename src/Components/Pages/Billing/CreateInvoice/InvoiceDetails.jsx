"use client";
import { useState, useEffect } from "react";
import React from "react";
import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const InvoiceDetails = () => {
    const serviceOptions = [
        { id: 1, name: "General Consultation", price: 150.00 },
        { id: 2, name: "Specialist Consultation", price: 200.00 },
        { id: 3, name: "Follow-up Consultation", price: 100.00 },
        { id: 4, name: "Blood Test - Basic Panel", price: 80.00 },
        { id: 5, name: "Blood Test - Comprehensive Panel", price: 150.00 },
        { id: 6, name: "Urinalysis", price: 50.00 },
        { id: 7, name: "X-Ray - Chest", price: 200.00 },
        { id: 8, name: "X-Ray - Extremity", price: 150.00 },
        { id: 9, name: "ECG", price: 120.00 },
        { id: 10, name: "Physical Therapy Session", price: 100.00 },
        { id: 11, name: "Vaccination - Flu", price: 45.00 }
    ];

    const [items, setItems] = useState([
        { id: 1, serviceId: 1, description: "General Consultation", additionalDescription: "", quantity: 1, unitPrice: 150.00, total: 150.00 },
        { id: 2, serviceId: null, description: "", additionalDescription: "", quantity: 1, unitPrice: 0, total: 0 }
    ]);

    const [subtotal, setSubtotal] = useState(150.00);
    const [tax, setTax] = useState(12.00);
    const [discount, setDiscount] = useState(0);
    const [total, setTotal] = useState(162.00);
    const [dropdownOpen, setDropdownOpen] = useState(null);

    useEffect(() => {
        const newSubtotal = items.reduce((sum, item) => sum + item.total, 0);
        const taxRate = 0.08;
        const newTax = newSubtotal * taxRate;
        const newTotal = newSubtotal + newTax - discount;

        setSubtotal(newSubtotal);
        setTax(newTax);
        setTotal(newTotal);
    }, [items, discount]);

    const handleDeleteItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleAddItem = () => {
        const newItem = {
            id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1,
            serviceId: null,
            description: "",
            additionalDescription: "",
            quantity: 1,
            unitPrice: 0,
            total: 0
        };
        setItems([...items, newItem]);
    };

    const handleServiceSelect = (itemId, serviceId) => {
        const selectedService = serviceOptions.find(service => service.id === serviceId);

        setItems(items.map(item => {
            if (item.id === itemId) {
                const updatedItem = {
                    ...item,
                    serviceId: serviceId,
                    description: selectedService.name,
                    unitPrice: selectedService.price,
                    total: item.quantity * selectedService.price
                };
                return updatedItem;
            }
            return item;
        }));

        setDropdownOpen(null);
    };

    const handleQuantityChange = (itemId, quantity) => {
        setItems(items.map(item => {
            if (item.id === itemId) {
                const updatedItem = {
                    ...item,
                    quantity: quantity,
                    total: quantity * item.unitPrice
                };
                return updatedItem;
            }
            return item;
        }));
    };

    const handleUnitPriceChange = (itemId, price) => {
        setItems(items.map(item => {
            if (item.id === itemId) {
                const updatedItem = {
                    ...item,
                    unitPrice: price,
                    total: item.quantity * price
                };
                return updatedItem;
            }
            return item;
        }));
    };

    const handleAdditionalDescriptionChange = (itemId, description) => {
        setItems(items.map(item => {
            if (item.id === itemId) {
                return { ...item, additionalDescription: description };
            }
            return item;
        }));
    };

    const onDateChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const toggleDropdown = (itemId) => {
        if (dropdownOpen === itemId) {
            setDropdownOpen(null);
        } else {
            setDropdownOpen(itemId);
        }
    };

    return (
        <>
            <div className="p-0 md:p-6 bg-white rounded-lg shadow-sm">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-800">Invoice Details</h2>
                    <p className="text-sm text-gray-600">Enter the details for the new invoice.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Number</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            placeholder="INV-008"
                            defaultValue="INV-008"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Date</label>
                        <DatePicker
                            onChange={onDateChange}
                            style={{ width: "100%", padding: "6px" }}
                            format="ddd MMM DD YYYY"
                            defaultValue={dayjs("2025-05-22")}
                            placeholder="Select date"
                            className="border border-gray-300 rounded"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                        <DatePicker
                            onChange={onDateChange}
                            style={{ width: "100%", padding: "6px" }}
                            format="ddd MMM DD YYYY"
                            defaultValue={dayjs("2025-05-13")}
                            placeholder="Select date"
                            className="border border-gray-300 rounded"
                        />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Invoice Type</label>
                    <div className="relative">
                        <select
                            className="w-full border border-gray-300 rounded px-3 py-2 pr-8 focus:outline-none focus:ring-1 focus:ring-gray-400 appearance-none"
                            defaultValue="standard"
                        >
                            <option value="standard">Standard Invoice</option>
                            <option value="proforma">Proforma Invoice</option>
                            <option value="recurring">Recurring Invoice</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reference / PO Number (Optional)</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        placeholder="Enter reference or PO number"
                    />
                </div>

                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4">
                        <h3 className="text-lg font-medium">Items & Services</h3>
                        <button
                            onClick={handleAddItem}
                            className="inline-flex items-center px-3 py-1.5 border border-transparent rounded-md bg-gray-800 hover:bg-gray-700 text-white text-sm"
                        >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                            </svg>
                            Add Item
                        </button>
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden md:block">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="w-8 py-3"></th>
                                    <th className="text-left py-3 text-sm font-medium text-gray-600">Description</th>
                                    <th className="text-center py-3 text-sm font-medium text-gray-600">Quantity</th>
                                    <th className="text-center py-3 text-sm font-medium text-gray-600">Unit Price</th>
                                    <th className="text-right py-3 text-sm font-medium text-gray-600">Total</th>
                                    <th className="w-8 py-3"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id} className="border-b border-gray-100">
                                        <td className="py-3 align-top">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 mt-2" />
                                        </td>
                                        <td className="py-3 relative">
                                            <div>
                                                <div
                                                    className="relative cursor-pointer border border-gray-300 rounded px-3 py-2 flex items-center justify-between"
                                                    onClick={() => toggleDropdown(item.id)}
                                                >
                                                    <span className="truncate pr-4">{item.serviceId ? `${item.description} - $${item.unitPrice.toFixed(2)}` : "Select service or item"}</span>
                                                    <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </div>

                                                {dropdownOpen === item.id && (
                                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
                                                        {serviceOptions.map(service => (
                                                            <div
                                                                key={service.id}
                                                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                                                onClick={() => handleServiceSelect(item.id, service.id)}
                                                            >
                                                                {item.serviceId === service.id && (
                                                                    <svg className="w-4 h-4 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                                    </svg>
                                                                )}
                                                                <div className="truncate">
                                                                    <div>{service.name} - ${service.price.toFixed(2)}</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <input
                                                    type="text"
                                                    className="w-full border border-gray-300 rounded px-3 py-2 mt-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                                    placeholder="Additional description"
                                                    value={item.additionalDescription || ""}
                                                    onChange={(e) => handleAdditionalDescriptionChange(item.id, e.target.value)}
                                                />
                                            </div>
                                        </td>
                                        <td className="py-3 text-center align-top">
                                            <input
                                                type="number"
                                                className="w-20 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 text-center"
                                                value={item.quantity}
                                                min={1}
                                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                            />
                                        </td>
                                        <td className="py-3 text-center align-top">
                                            <input
                                                type="number"
                                                className="w-24 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 text-center"
                                                value={item.unitPrice}
                                                min={0}
                                                step={0.01}
                                                onChange={(e) => handleUnitPriceChange(item.id, parseFloat(e.target.value) || 0)}
                                            />
                                        </td>
                                        <td className="py-3 text-right text-sm font-medium align-top">${item.total.toFixed(2)}</td>
                                        <td className="py-3 text-center align-top">
                                            <button
                                                onClick={() => handleDeleteItem(item.id)}
                                                className="text-red-500 hover:text-red-700 mt-2"
                                                aria-label="Delete item"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards View */}
                    <div className="md:hidden space-y-6">
                        {items.map((item) => (
                            <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex justify-between items-start mb-4">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 mt-1" />
                                    <button
                                        onClick={() => handleDeleteItem(item.id)}
                                        className="text-red-500 hover:text-red-700"
                                        aria-label="Delete item"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </div>

                                <div className="mb-3">
                                    <div className="text-sm text-gray-600 mb-1">Description</div>
                                    <div
                                        className="relative cursor-pointer border border-gray-300 rounded px-3 py-2 flex items-center justify-between mb-2"
                                        onClick={() => toggleDropdown(item.id)}
                                    >
                                        <span className="truncate pr-4">{item.serviceId ? `${item.description} - $${item.unitPrice.toFixed(2)}` : "Select service or item"}</span>
                                        <svg className="w-4 h-4 text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>

                                    {dropdownOpen === item.id && (
                                        <div className="relative z-10 mb-2 w-full bg-white border border-gray-300 rounded shadow-lg max-h-48 overflow-y-auto">
                                            {serviceOptions.map(service => (
                                                <div
                                                    key={service.id}
                                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                                    onClick={() => handleServiceSelect(item.id, service.id)}
                                                >
                                                    {item.serviceId === service.id && (
                                                        <svg className="w-4 h-4 mr-2 text-gray-800 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    )}
                                                    <div className="truncate">
                                                        <div>{service.name} - ${service.price.toFixed(2)}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                        placeholder="Additional description"
                                        value={item.additionalDescription || ""}
                                        onChange={(e) => handleAdditionalDescriptionChange(item.id, e.target.value)}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Quantity</div>
                                        <input
                                            type="number"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 text-center"
                                            value={item.quantity}
                                            min={1}
                                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-600 mb-1">Unit Price</div>
                                        <input
                                            type="number"
                                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 text-center"
                                            value={item.unitPrice}
                                            min={0}
                                            step={0.01}
                                            onChange={(e) => handleUnitPriceChange(item.id, parseFloat(e.target.value) || 0)}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                                    <span className="text-sm font-medium">Total:</span>
                                    <span className="text-sm font-bold">${item.total.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Totals */}
                <div className="flex justify-end">
                    <div className="w-full md:w-64">
                        <div className="flex justify-between py-2">
                            <span className="text-sm font-medium">Subtotal:</span>
                            <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-sm font-medium">Tax (8%):</span>
                            <span className="text-sm font-medium">${tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="text-sm font-medium">Discount:</span>
                            <span className="text-sm font-medium">-${discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between py-2 border-t border-gray-200 mt-2">
                            <span className="text-base font-semibold">Total:</span>
                            <span className="text-base font-semibold">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Additional Information */}
                <div className="mt-8">
                    <h3 className="text-lg font-medium mb-4">Additional Information</h3>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                        <textarea
                            rows={4}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            placeholder="Enter any additional notes for this invoice"
                        ></textarea>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Payment Terms</label>
                        <div className="relative">
                            <select
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 appearance-none"
                                defaultValue="net30"
                            >
                                <option value="net30">Net 30 Days</option>
                                <option value="net15">Net 15 Days</option>
                                <option value="net45">Net 45 Days</option>
                                <option value="immediate">Due on Receipt</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                <Buttonv2 variant="primary_main" text="Save as Draft" className="border border-gray-300 w-40 h-12 rounded-xl bg-white font-semibold text-md" />
                <Buttonv2 variant="secondary_main" text="Create Invoice" className="border border-gray-300 w-40 h-12 rounded-xl font-semibold text-md" />
            </div>
        </>
    );
};

export default InvoiceDetails;
