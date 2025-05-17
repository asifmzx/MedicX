import React from "react";
import TodaysSchedule from "./TodaysSchedule/TodaysSchedule"


const Schedule = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <TodaysSchedule />
            <div className="py-4">
                {/* <AnalyticsProgress /> */}
            </div>
        </div>
    );
};

export default Schedule;
