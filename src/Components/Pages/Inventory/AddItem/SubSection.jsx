"use client";
import React from 'react'
import { useState } from "react";

import Buttonv2 from "@/Components/UI/Button/Buttonv2";

const SubSection = () => {
    const [activeTab, setActiveTab] = useState("itemDetails");
    const [formData, setFormData] = useState({
        itemName: '',
        itemId: '',
        category: '',
        subcategory: '',
        description: '',
        unitOfMeasure: '',
        unitQuantity: '',
        storageLocation: '',
        manufacturer: '',
        brand: '',
        modelVersion: '',
        expiryTracking: '',
        requiresRefrigeration: false,
        hazardousMaterial: false,
        controlledSubstance: false,
        sterile: false,
        notes: '',
        // Stock Management fields
        currentStock: '',
        minimumStockLevel: '',
        maximumStockLevel: '',
        reorderPoint: '',
        reorderQuantity: '',
        unitCost: '',
        unitPrice: '',
        enableLowStockAlerts: true,
        enableExpiryAlerts: false,
        // Supplier fields
        primarySupplier: '',
        supplierItemCode: '',
        supplierPrice: '',
        leadTime: '',
        minimumOrderQuantity: '',
        alternativeSuppliers: {
            pharmaTech: false,
            medEquip: false,
            healthSupply: false
        }
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

    const handleAlternativeSupplierChange = (supplier) => {
        setFormData(prev => ({
            ...prev,
            alternativeSuppliers: {
                ...prev.alternativeSuppliers,
                [supplier]: !prev.alternativeSuppliers[supplier]
            }
        }));
    };

    const renderItemDetailsForm = () => (
        <div className="mt-6">
            {/* Basic Information */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic Information</h3>
                <p className="text-sm text-gray-600 mb-6">Enter the basic details of the inventory item</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                        <input
                            type="text"
                            placeholder="Enter item name"
                            value={formData.itemName}
                            onChange={(e) => handleInputChange('itemName', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Item ID/SKU</label>
                        <input
                            type="text"
                            placeholder="Enter item ID or SKU"
                            value={formData.itemId}
                            onChange={(e) => handleInputChange('itemId', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                            value={formData.category}
                            onChange={(e) => handleInputChange('category', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        >
                            <option value="">Select category</option>
                            <option value="Equipment">Equipment</option>
                            <option value="Medical Supplies">Medical Supplies</option>
                            <option value="Medications">Medications</option>
                            <option value="Office Supplies">Office Supplies</option>

                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Subcategory</label>
                        <select
                            value={formData.subcategory}
                            onChange={(e) => handleInputChange('subcategory', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        >
                            <option value="">Select subcategory</option>
                            <option value="Disposables">Disposables</option>
                            <option value="Reusable">Reusable</option>
                            <option value="Prescription">Prescription</option>
                            <option value="Over the Counter">Over-the-Counter</option>
                        </select>
                    </div>
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea
                        rows="3"
                        placeholder="Enter item description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Unit of Measure</label>
                        <select
                            value={formData.unitOfMeasure}
                            onChange={(e) => handleInputChange('unitOfMeasure', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        >
                            <option value="">Select unit</option>
                            <option value="pieces">Pieces</option>
                            <option value="boxes">Boxes</option>
                            <option value="bottles">Bottles</option>
                            <option value="packs">Packs</option>
                            <option value="units">Units</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Unit Quantity</label>
                        <input
                            type="number"
                            placeholder="Quantity per unit"
                            value={formData.unitQuantity}
                            onChange={(e) => handleInputChange('unitQuantity', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Storage Location</label>
                        <input
                            type="text"
                            placeholder="Enter storage location"
                            value={formData.storageLocation}
                            onChange={(e) => handleInputChange('storageLocation', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Additional Information</h3>
                <p className="text-sm text-gray-600 mb-6">Enter additional details about the item</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
                        <input
                            type="text"
                            placeholder="Enter manufacturer"
                            value={formData.manufacturer}
                            onChange={(e) => handleInputChange('manufacturer', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Brand</label>
                        <input
                            type="text"
                            placeholder="Enter brand name"
                            value={formData.brand}
                            onChange={(e) => handleInputChange('brand', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Model/Version</label>
                        <input
                            type="text"
                            placeholder="Enter model or version"
                            value={formData.modelVersion}
                            onChange={(e) => handleInputChange('modelVersion', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Tracking</label>
                        <select
                            value={formData.expiryTracking}
                            onChange={(e) => handleInputChange('expiryTracking', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        >
                            <option value="">Select option</option>
                            <option value="required">Required</option>
                            <option value="optional">Optional</option>
                            <option value="not-applicable">Not Applicable</option>
                        </select>
                    </div>
                </div>

                {/* Item Properties */}
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Item Properties</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="requiresRefrigeration"
                                checked={formData.requiresRefrigeration}
                                onChange={() => handleCheckboxChange('requiresRefrigeration')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="requiresRefrigeration" className="ml-2 text-sm text-gray-700">
                                Requires Refrigeration
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="controlledSubstance"
                                checked={formData.controlledSubstance}
                                onChange={() => handleCheckboxChange('controlledSubstance')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="controlledSubstance" className="ml-2 text-sm text-gray-700">
                                Controlled Substance
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="hazardousMaterial"
                                checked={formData.hazardousMaterial}
                                onChange={() => handleCheckboxChange('hazardousMaterial')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="hazardousMaterial" className="ml-2 text-sm text-gray-700">
                                Hazardous Material
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="sterile"
                                checked={formData.sterile}
                                onChange={() => handleCheckboxChange('sterile')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="sterile" className="ml-2 text-sm text-gray-700">
                                Sterile
                            </label>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                    <textarea
                        rows="3"
                        placeholder="Enter any additional notes"
                        value={formData.notes}
                        onChange={(e) => handleInputChange('notes', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none"
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
                <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                </button>
                <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                    Save Item
                </button>
            </div>
        </div>
    );

    const renderStockManagementForm = () => (
        <div className="mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Stock Information</h3>
                <p className="text-sm text-gray-600 mb-6">Configure stock levels and reorder settings</p>

                {/* Current Stock, Min/Max Levels */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Current Stock</label>
                        <input
                            type="number"
                            placeholder="Enter current quantity"
                            value={formData.currentStock}
                            onChange={(e) => handleInputChange('currentStock', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Stock Level</label>
                        <input
                            type="number"
                            placeholder="Enter minimum quantity"
                            value={formData.minimumStockLevel}
                            onChange={(e) => handleInputChange('minimumStockLevel', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Stock Level</label>
                        <input
                            type="number"
                            placeholder="Enter maximum quantity"
                            value={formData.maximumStockLevel}
                            onChange={(e) => handleInputChange('maximumStockLevel', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Reorder Point and Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Reorder Point</label>
                        <input
                            type="number"
                            placeholder="Enter reorder point"
                            value={formData.reorderPoint}
                            onChange={(e) => handleInputChange('reorderPoint', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Reorder Quantity</label>
                        <input
                            type="number"
                            placeholder="Enter reorder quantity"
                            value={formData.reorderQuantity}
                            onChange={(e) => handleInputChange('reorderQuantity', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Unit Cost and Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Unit Cost ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Enter unit cost"
                            value={formData.unitCost}
                            onChange={(e) => handleInputChange('unitCost', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Unit Price ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Enter unit price"
                            value={formData.unitPrice}
                            onChange={(e) => handleInputChange('unitPrice', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Stock Alerts */}
                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Stock Alerts</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="enableLowStockAlerts"
                                checked={formData.enableLowStockAlerts}
                                onChange={() => handleCheckboxChange('enableLowStockAlerts')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="enableLowStockAlerts" className="ml-2 text-sm text-gray-700">
                                Enable Low Stock Alerts
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="enableExpiryAlerts"
                                checked={formData.enableExpiryAlerts}
                                onChange={() => handleCheckboxChange('enableExpiryAlerts')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="enableExpiryAlerts" className="ml-2 text-sm text-gray-700">
                                Enable Expiry Alerts
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-4">
                <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                </button>
                <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                    Save Item
                </button>
            </div>
        </div>
    );

    const renderSuppliersForm = () => (
        <div className="mt-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Supplier Information</h3>
                <p className="text-sm text-gray-600 mb-6">Link suppliers to this inventory item</p>

                {/* Primary Supplier */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Primary Supplier</label>
                    <select
                        value={formData.primarySupplier}
                        onChange={(e) => handleInputChange('primarySupplier', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    >
                        <option value="">Select primary supplier</option>
                        <option value="PharmaTech Inc.">PharmaTech Inc.</option>
                        <option value="MedEquip Solutions">MedEquip Solutions</option>
                        <option value="Health Supply Co.">Health Supply Co.</option>
                        <option value="Global Medical Supplies">Global Medical Supplies</option>
                    </select>
                </div>

                {/* Supplier Item Code and Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Supplier Item Code</label>
                        <input
                            type="text"
                            placeholder="Enter supplier's item code"
                            value={formData.supplierItemCode}
                            onChange={(e) => handleInputChange('supplierItemCode', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Supplier Price ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Enter supplier price"
                            value={formData.supplierPrice}
                            onChange={(e) => handleInputChange('supplierPrice', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Lead Time and Minimum Order Quantity */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Lead Time (Days)</label>
                        <input
                            type="number"
                            placeholder="Enter lead time in days"
                            value={formData.leadTime}
                            onChange={(e) => handleInputChange('leadTime', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Order Quantity</label>
                        <input
                            type="number"
                            placeholder="Enter minimum order quantity"
                            value={formData.minimumOrderQuantity}
                            onChange={(e) => handleInputChange('minimumOrderQuantity', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Alternative Suppliers */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Alternative Suppliers</label>
                    <div className="space-y-3">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="pharmaTech"
                                checked={formData.alternativeSuppliers.pharmaTech}
                                onChange={() => handleAlternativeSupplierChange('pharmaTech')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="pharmaTech" className="ml-2 text-sm text-gray-700">
                                PharmaTech Inc.
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="medEquip"
                                checked={formData.alternativeSuppliers.medEquip}
                                onChange={() => handleAlternativeSupplierChange('medEquip')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="medEquip" className="ml-2 text-sm text-gray-700">
                                MedEquip Solutions
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="healthSupply"
                                checked={formData.alternativeSuppliers.healthSupply}
                                onChange={() => handleAlternativeSupplierChange('healthSupply')}
                                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
                            />
                            <label htmlFor="healthSupply" className="ml-2 text-sm text-gray-700">
                                Health Supply Co.
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-4">
                <button className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    Cancel
                </button>
                <button className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
                    Save Item
                </button>
            </div>
        </div>
    );

    return (
        <div className="max-w-full mt-6">
            <div className="grid grid-cols-7 gap-2 w-full md:w-fit">
                <Buttonv2
                    variant="primary"
                    text="Item Details"
                    onClick={() => setActiveTab("itemDetails")}
                    className="col-span-2 flex items-center justify-center h-10 text-sm"
                    isActive={activeTab === "itemDetails"}
                />
                <Buttonv2
                    variant="primary"
                    text="Stock Management"
                    onClick={() => setActiveTab("stockManagement")}
                    className="col-span-3 flex items-center justify-center h-10 text-sm"
                    isActive={activeTab === "stockManagement"}
                />
                <Buttonv2
                    variant="primary"
                    text="Suppliers"
                    onClick={() => setActiveTab("suppliers")}
                    className="col-span-2 flex items-center justify-center h-10 text-sm"
                    isActive={activeTab === "suppliers"}
                />
            </div>

            {activeTab === "itemDetails" && renderItemDetailsForm()}
            {activeTab === "stockManagement" && renderStockManagementForm()}
            {activeTab === "suppliers" && renderSuppliersForm()}
        </div>
    );
};

export default SubSection;
