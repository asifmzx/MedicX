import React from 'react'
import { 
  HiUsers, 
  HiUserAdd, 
  HiCog, 
  HiClock, 
  HiDownload,
  HiViewGrid
} from 'react-icons/hi'

const Card = () => {
  const staffData = {
    total: 63,
    active: 52,
    onLeave: 8,
    inactive: 3
  }

  const departments = [
    { name: 'Medical', count: 12, color: 'bg-blue-500' },
    { name: 'Nursing', count: 18, color: 'bg-green-500' },
    { name: 'Administration', count: 8, color: 'bg-purple-500' },
    { name: 'Laboratory', count: 5, color: 'bg-orange-500' },
    { name: 'Pharmacy', count: 4, color: 'bg-red-500' },
    { name: 'Radiology', count: 3, color: 'bg-indigo-500' }
  ]

  const quickActions = [
    { name: 'Add New Staff', icon: HiUserAdd },
    { name: 'Manage Roles', icon: HiCog },
    { name: 'Attendance', icon: HiClock }
  ]

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Staff Overview</h2>
          <HiUsers className="text-xl text-gray-400" />
        </div>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-gray-900 mb-1">{staffData.total}</div>
          <div className="text-sm text-gray-500">Total Staff</div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Active</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{staffData.active}</span>
              <span className="text-xs text-gray-500">83%</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">On Leave</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{staffData.onLeave}</span>
              <span className="text-xs text-gray-500">13%</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Inactive</span>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{staffData.inactive}</span>
              <span className="text-xs text-gray-500">4%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Departments</h2>
        
        <div className="space-y-2 mb-4">
          {departments.map((dept, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${dept.color}`}></div>
                <span className="text-sm text-gray-700">{dept.name}</span>
              </div>
              <span className="text-sm font-medium text-gray-900">{dept.count}</span>
            </div>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          <HiViewGrid className="text-gray-500 text-sm" />
          <span className="text-gray-700">View All</span>
        </button>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        
        <div className="space-y-2">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon
            return (
              <button
                key={index}
                className="w-full flex items-center gap-2 py-2 px-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <IconComponent className="text-gray-500 text-sm" />
                <span className="text-sm text-gray-700">{action.name}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Card
