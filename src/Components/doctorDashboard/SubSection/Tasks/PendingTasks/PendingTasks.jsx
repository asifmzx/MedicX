"use client";

import React, { useState } from "react";
import { FaFileAlt, FaUndo, FaCircle } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import Status from "@/Components/UI/Status/Status";

const PendingTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleTask = (index) => {
    setCompletedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const tasks = [
    {
      name: "Review lab results for Emma Thompson",
      day: "Today",
      time: "2:00 PM",
      type: "High",
      variant: "high",
    },
    {
      name: "Complete medical certificate for James Wilson",
      day: "Today",
      time: "4:00 PM",
      type: "Medium",
      variant: "medium",
    },
    {
      name: "Follow up on Michael Chen's medication",
      day: "Today",
      time: "5:00 PM",
      type: "High",
      variant: "high",
    },
    {
      name: "Review treatment plan for Sophia Rodriguez",
      day: "Tomorrow",
      time: "10:00 AM",
      type: "Medium",
      variant: "medium",
    },
    {
      name: "Sign off on nurse practitioner notes",
      day: "Tomorrow",
      time: "3:00 PM",
      type: "Low",
      variant: "low",
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Pending Tasks</h1>
        <p className="text-gray-600 mt-1">Tasks requiring your attention</p>
      </div>

      <div className="space-y-3">
        {tasks.map((task, index) => {
          const isCompleted = completedTasks.includes(index);
          return (
            <div
              key={index}
              className={`flex justify-between items-center p-4 border rounded-md ${
                isCompleted ? "bg-gray-50" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={() => toggleTask(index)}
                  className="mt-1 accent-black"
                />
                <div>
                  <h3
                    className={`font-medium text-sm ${
                      isCompleted
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {task.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-[13px] font-medium text-gray-600">
                    <span className="flex flex-row justify-center items-center gap-1">
                      <CiClock2 />
                      {task.day}, {task.time}
                    </span>
                    <Status variant={task.variant} text={task.type} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                {!isCompleted && (
                  <>
                    <FaFileAlt className="w-4 h-4 text-gray-500 cursor-pointer" />
                    <FaRegCheckCircle className="w-4 h-4 text-gray-500 cursor-pointer" />
                  </>
                )}
                {isCompleted && (
                  <FaUndo className="w-4 h-4 text-gray-400 cursor-pointer" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PendingTasks;
