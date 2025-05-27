import React from 'react';

const IssuesByDepartment = () => {
    const data = [
        { department: "External", units: 6, color: "#3B82F6" },
        { department: "Emergency", units: 5, color: "#10B981" },
        { department: "Surgery", units: 2, color: "#F59E0B" },
        { department: "Cardiology", units: 2, color: "#EF4444" },
        { department: "Internal Medicine", units: 1, color: "#8B5CF6" },
        { department: "Obstetrics", units: 1, color: "#EC4899" },
        { department: "Oncology", units: 1, color: "#6366F1" },
        { department: "Nephrology", units: 1, color: "#06B6D4" },
    ];

    const maxUnits = Math.max(...data.map(item => item.units));

    return (
        <div className="p-2 space-y-4">
            {data.map((item) => (
                <div key={item.department} className="space-y-1">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-900">
                            {item.department}
                        </span>
                        <span className="text-sm text-gray-500">
                            {item.units} unit{item.units !== 1 ? 's' : ''}
                        </span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                            className="h-2 rounded-full transition-all duration-300 ease-out"
                            style={{
                                backgroundColor: item.color,
                                width: `${(item.units / maxUnits) * 100}%`
                            }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default IssuesByDepartment;