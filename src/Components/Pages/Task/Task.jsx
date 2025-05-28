"use client";
import { useState } from "react";
import { priorityColors, statusColors, tasksData } from "./TaskData";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
import Button from "@/Components/UI/Button/Button";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import { Segmented } from "antd";

export default function Task() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const filteredTasks = tasksData.filter(
    (task) =>
      (statusFilter === "All" || task.status === statusFilter) &&
      (priorityFilter === "All" || task.priority === priorityFilter),
  );

  return (
    <div className="max-w-full px-0">
      <div className="flex flex-col md:flex-row justify-between py-4 my-4 gap-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="bg-gray-50 border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/2"
        />
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <select
            className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <select
            className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto"
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="All">All Priorities</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <div className="hidden md:bloxk">
            <div className=" bg-gray-50 border border-gray-300 rounded-lg px-2 py-1 flex items-center h-[42px] sm:h-auto">
              <Segmented
                options={[
                  { value: "List", icon: <BarsOutlined size={20} /> },
                  { value: "Kanban", icon: <AppstoreOutlined size={20} /> },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 md:p-6 border border-gray-300 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Task List</h2>
        <p className="text-gray-500 mb-4">
          Manage your tasks and track progress • {filteredTasks.length} tasks
        </p>
        {filteredTasks.map((task, id) => (
          <div
            key={id}
            className="border border-gray-300 rounded-lg p-4 mb-3 shadow-sm bg-gray-50"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={task.status === "Completed"}
                    readOnly
                  />
                  <h3 className="font-semibold text-lg">
                    {task.status === "Completed" ? (
                      <s>{task.title}</s>
                    ) : (
                      task.title
                    )}
                  </h3>
                </div>
                <div>{priorityColors[task.priority]}</div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="primary"
                  text=""
                  Icon={FiEdit}
                  className="border border-gray-300"
                />
                <Button
                  variant="primary"
                  text=""
                  Icon={RiDeleteBin7Line}
                  className="border border-gray-300"
                />
              </div>
            </div>
            <p className="text-gray-600 mt-1">{task.description}</p>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 mt-2 gap-2 sm:gap-4">
              <span className={`${statusColors[task.status]} font-medium`}>
                {task.status}
              </span>
              <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
              <span>Assigned to: {task.assignedTo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
