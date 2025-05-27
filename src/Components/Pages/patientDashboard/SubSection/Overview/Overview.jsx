import React from 'react'
import HealthSummary from './HealthSummary/HealthSummary';
import MedicationReminders from './MedicationReminders/MedicationReminders';
import HealthTips from './HealthTips/HealthTips';
import UpcomingAppointments from './UpcomingAppointments/UpcomingAppointments';
import RecentMessages from './RecentMessages/RecentMessages';

const Overview = () => {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="lg:col-span-2">
                    <HealthSummary />
                </div>
                <div className="lg:col-span-1">
                    <UpcomingAppointments />
                </div>
                <MedicationReminders />
                <RecentMessages />
                <HealthTips />
            </div>
        </div>
    );
}

export default Overview;
