"use client";
import Button from "@/Components/UI/Button/Button";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiFilter, CiImport } from "react-icons/ci";

const AllMedicine = ({ filter }) => {
    const dummyMedicines = [
        {
            id: "MED001",
            name: "Amoxicillin 500mg",
            category: "Antibiotics",
            stock: "1250 units",
            expiryDate: "2025-06-15",
            type: "Prescription",
        },
        {
            id: "MED002",
            name: "Paracetamol 500mg",
            category: "Analgesics",
            stock: "3500 units",
            expiryDate: "2025-06-22",
            type: "OTC",
        },
        {
            id: "MED003",
            name: "Metformin 850mg",
            category: "Antidiabetics",
            stock: "850 units",
            expiryDate: "2024-12-10",
            type: "Prescription",
        },
        {
            id: "MED004",
            name: "Lisinopril 10mg",
            category: "Antihypertensives",
            stock: "120 units",
            expiryDate: "2024-09-30",
            type: "Prescription",
        },
        {
            id: "MED005",
            name: "Morphine 15mg",
            category: "Analgesics",
            stock: "75 units",
            expiryDate: "2024-11-05",
            type: "Controlled",
        },
        {
            id: "MED006",
            name: "Cetirizine 10mg",
            category: "Analgesics",
            stock: "0 units",
            expiryDate: "2024-11-05",
            type: "OTC",
        },
        {
            id: "MED007",
            name: "Atorvastatin 20mg",
            category: "Statins",
            stock: "450 units",
            expiryDate: "2025-01-25",
            type: "Prescription",
        },
        {
            id: "MED008",
            name: "Diazepam 5mg",
            category: "Anxiolytics",
            stock: "60 units",
            expiryDate: "2024-10-12",
            type: "Controlled",
        },
        {
            id: "MED009",
            name: "Ibuprofen 400mg",
            category: "NSAIDs",
            stock: "2800 units",
            expiryDate: "2025-05-20",
            type: "OTC",
        },
        {
            id: "MED010",
            name: "Omeprazole 20mg",
            category: "Proton Pump Inhibitors",
            stock: "920 units",
            expiryDate: "2025-07-28",
            type: "Prescription",
        },
    ];

    const filteredData = filter ? dummyMedicines.filter(filter) : dummyMedicines;

    const columns = [
        {
            label: "ID",
            key: "id",
        },
        {
            label: "Medicine Name",
            key: "name",
            render: (row) => <span className="font-medium">{row.name}</span>,
        },
        {
            label: "Category",
            key: "category",
        },
        {
            label: "Stock",
            key: "stock",
        },
        {
            label: "Expiry Date",
            key: "expiryDate",
        },
        {
            label: "Status",
            key: "status",
            render: (row) => {
                const stockValue = parseInt(row.stock.split(' ')[0]);

                let statusVariant = "Out of Stock";
                if (stockValue > 0) {
                    statusVariant = stockValue <= 300 ? "Low Stock" : "In Stock";
                }

                return <Status
                    type="pharmacy"
                    variant={statusVariant}
                    text={statusVariant}
                />;
            },
        },
        {
            label: "Actions",
            key: "action",
            render: () => (
                <button
                    className="text-xl text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="More actions"
                >
                    <BsThreeDots />
                </button>
            ),
        },
    ];

    return (
        <div className="p-4 md:p-6 bg-white rounded-xl shadow max-w-full">
            <div className="pb-6 flex flex-col md:flex-row justify-between items-center md:items-center gap-4 md:gap-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
                    <SearchInput
                        placeholder="Search medicines..."
                        icon={AiOutlineSearch}
                        inputClassName="text-sm text-gray-700"
                        wrapperClassName="flex w-full h-10"
                    />
                    <div className="flex flex:row gap-1">
                        <div>
                            <select
                                id="All Categories"
                                className="w-full h-10 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-black"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    All Categories
                                </option>
                                <option value="Antibiotics">Antibiotics</option>
                                <option value="Analgesics">Analgesics</option>
                                <option value="Antidiabetics">Antidiabetics</option>
                                <option value="Antihypertensives">Antihypertensives</option>
                                <option value="Antihistamines">Antihistamines</option>
                            </select>
                        </div>
                        <div>
                            <select
                                id="All Status"
                                className="w-full h-10 border border-gray-300 text-gray-600 rounded-md focus:outline-none focus:ring focus:ring-black"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    All Status
                                </option>
                                <option value="In Stock">In Stock</option>
                                <option value="Low Stock">Low Stock</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                        </div>

                    </div>

                </div>
            </div>

            <div className="overflow-x-auto border border-gray-300 rounded-md">
                <PTable columns={columns} data={filteredData} />
            </div>
        </div>
    );
};

export default AllMedicine;