import React from "react";
import { Divider, Steps } from "antd";
import Button from "@/Components/UI/Button/Button";

// Fake data array
const steps = [
  {
    title: "Appointment Booked",
    description:
      "Patient reported symptoms of persistent headache and dizziness. Blood pressure was elevated at 140/90.",
    date: "Today",
    time: "2:15 PM",
  },
  {
    title: "MRI Scan",
    description:
      "MRI scan of the brain was performed. Results pending review by the radiologist.",
    date: "Yesterday",
    time: "11:00 AM",
  },
  {
    title: "Blood Tests",
    description:
      "Complete blood count and metabolic panel were ordered. Results showed slightly elevated white blood cell count.",
    date: "3 days ago",
    time: "9:30 AM",
  },
  {
    title: "Medication Prescribed",
    description:
      "Prescribed Lisinopril 10mg daily for hypertension. Patient advised to monitor blood pressure daily.",
    date: "1 week ago",
    time: "4:45 PM",
  },
];

const Timeline = () => {
  return (
    <div className="mt-4">
      <div className="p-6 bg-white rounded-lg border border-gray-200 h-full flex flex-col">
        <div className="pb-4">
          <p className="text-2xl font-semibold mb-1">Rating Summary</p>
          <p className="text-gray-600 text-sm">Overall clinic performance</p>
        </div>
        <Divider />
        <Steps
          current={2}
          progressDot
          direction="vertical"
          items={steps.map((item) => ({
            title: (
              <>
                <p className="font-bold">{item.title}</p>
              </>
            ),
            description: (
              <>
                <div className="text-sm text-gray-700 mb-1 font-semibold">
                  {item.date} at {item.time}
                </div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </>
            ),
          }))}
        />
        <Button
          variant="primary"
          text="view complete History"
          className="border border-gray-300"
        />
      </div>
    </div>
  );
};

export default Timeline;
