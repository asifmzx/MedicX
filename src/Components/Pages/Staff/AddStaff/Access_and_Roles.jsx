import React, { useState } from "react";

const Access_and_Roles = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    temporaryPassword: "",
    confirmPassword: "",
    systemRole: "staff",
    useRoleDefault: true,
    modulePermissions: {
      patients: { view: false, add: false, edit: false, delete: false },
      appointments: { view: false, add: false, edit: false, delete: false },
      prescriptions: { view: false, add: false, edit: false, delete: false },
      billing: { view: false, add: false, edit: false, delete: false },
    },
    accountSettings: {
      forcePasswordChange: false,
      enableTwoFactor: false,
      accountActive: true,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (role) => {
    setFormData((prev) => ({
      ...prev,
      systemRole: role,
    }));
  };

  const handleUseRoleDefaultChange = () => {
    setFormData((prev) => ({
      ...prev,
      useRoleDefault: !prev.useRoleDefault,
    }));
  };

  const handleModulePermissionChange = (module, permission) => {
    setFormData((prev) => ({
      ...prev,
      modulePermissions: {
        ...prev.modulePermissions,
        [module]: {
          ...prev.modulePermissions[module],
          [permission]: !prev.modulePermissions[module][permission],
        },
      },
    }));
  };

  const handleAccountSettingChange = (setting) => {
    setFormData((prev) => ({
      ...prev,
      accountSettings: {
        ...prev.accountSettings,
        [setting]: !prev.accountSettings[setting],
      },
    }));
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Access & Roles
        </h2>
        <p className="text-gray-600">
          Set up system access and role permissions
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter username"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email for Access
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Temporary Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type="password"
                name="temporaryPassword"
                value={formData.temporaryPassword}
                onChange={handleInputChange}
                placeholder="Enter temporary password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm password"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            System Role
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="systemRole"
                  value="administrator"
                  checked={formData.systemRole === "administrator"}
                  onChange={() => handleRoleChange("administrator")}
                  className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    Administrator
                  </div>
                  <div className="text-sm text-gray-500">
                    Full access to all system features and settings
                  </div>
                </div>
              </label>

              <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="systemRole"
                  value="doctor"
                  checked={formData.systemRole === "doctor"}
                  onChange={() => handleRoleChange("doctor")}
                  className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    Doctor
                  </div>
                  <div className="text-sm text-gray-500">
                    Access to patient records, appointments, and prescriptions
                  </div>
                </div>
              </label>

              <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="systemRole"
                  value="receptionist"
                  checked={formData.systemRole === "receptionist"}
                  onChange={() => handleRoleChange("receptionist")}
                  className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    Receptionist
                  </div>
                  <div className="text-sm text-gray-500">
                    Access to appointments, patient registration, and billing
                  </div>
                </div>
              </label>
            </div>

            <div className="space-y-4">
              <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="systemRole"
                  value="manager"
                  checked={formData.systemRole === "manager"}
                  onChange={() => handleRoleChange("manager")}
                  className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    Manager
                  </div>
                  <div className="text-sm text-gray-500">
                    Access to manage staff, schedules, and reports
                  </div>
                </div>
              </label>

              <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="systemRole"
                  value="nurse"
                  checked={formData.systemRole === "nurse"}
                  onChange={() => handleRoleChange("nurse")}
                  className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">Nurse</div>
                  <div className="text-sm text-gray-500">
                    Access to patient care, vitals, and treatment plans
                  </div>
                </div>
              </label>

              <label className="flex items-start p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="systemRole"
                  value="staff"
                  checked={formData.systemRole === "staff"}
                  onChange={() => handleRoleChange("staff")}
                  className="mt-1 h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300"
                />
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">Staff</div>
                  <div className="text-sm text-gray-500">
                    Basic access to assigned modules only
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Module Permissions
            </h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.useRoleDefault}
                onChange={handleUseRoleDefaultChange}
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                Use Role Default
              </span>
            </label>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-900">Patients</div>
              <div className="flex space-x-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.patients.view}
                    onChange={() =>
                      handleModulePermissionChange("patients", "view")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">View</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.patients.add}
                    onChange={() =>
                      handleModulePermissionChange("patients", "add")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Add</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.patients.edit}
                    onChange={() =>
                      handleModulePermissionChange("patients", "edit")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Edit</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.patients.delete}
                    onChange={() =>
                      handleModulePermissionChange("patients", "delete")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Delete</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-900">
                Appointments
              </div>
              <div className="flex space-x-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.appointments.view}
                    onChange={() =>
                      handleModulePermissionChange("appointments", "view")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">View</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.appointments.add}
                    onChange={() =>
                      handleModulePermissionChange("appointments", "add")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Add</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.appointments.edit}
                    onChange={() =>
                      handleModulePermissionChange("appointments", "edit")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Edit</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.appointments.delete}
                    onChange={() =>
                      handleModulePermissionChange("appointments", "delete")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Delete</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-900">
                Prescriptions
              </div>
              <div className="flex space-x-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.prescriptions.view}
                    onChange={() =>
                      handleModulePermissionChange("prescriptions", "view")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">View</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.prescriptions.add}
                    onChange={() =>
                      handleModulePermissionChange("prescriptions", "add")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Add</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.prescriptions.edit}
                    onChange={() =>
                      handleModulePermissionChange("prescriptions", "edit")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Edit</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.prescriptions.delete}
                    onChange={() =>
                      handleModulePermissionChange("prescriptions", "delete")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Delete</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="text-sm font-medium text-gray-900">Billing</div>
              <div className="flex space-x-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.billing.view}
                    onChange={() =>
                      handleModulePermissionChange("billing", "view")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">View</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.billing.add}
                    onChange={() =>
                      handleModulePermissionChange("billing", "add")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Add</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.billing.edit}
                    onChange={() =>
                      handleModulePermissionChange("billing", "edit")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Edit</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.modulePermissions.billing.delete}
                    onChange={() =>
                      handleModulePermissionChange("billing", "delete")
                    }
                    disabled={formData.useRoleDefault}
                    className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded disabled:opacity-50"
                  />
                  <span className="ml-2 text-sm text-gray-700">Delete</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Account Settings
          </h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.accountSettings.forcePasswordChange}
                onChange={() =>
                  handleAccountSettingChange("forcePasswordChange")
                }
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                Force password change on first login
              </span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.accountSettings.enableTwoFactor}
                onChange={() => handleAccountSettingChange("enableTwoFactor")}
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">
                Enable two-factor authentication
              </span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.accountSettings.accountActive}
                onChange={() => handleAccountSettingChange("accountActive")}
                className="h-4 w-4 text-gray-600 focus:ring-gray-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">Account active</span>
            </label>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button
            type="button"
            className="px-6 py-2 text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Create Staff Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Access_and_Roles;
