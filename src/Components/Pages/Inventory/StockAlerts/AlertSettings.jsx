import React from 'react'

const AlertSettings = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Alert Settings</h2>
        <p className="text-gray-600">Configure how and when you receive inventory alerts</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Notification Preferences */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>

          {/* Email Notifications */}
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.44c.98.56 2.24.56 3.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive alerts via email</p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                Configure
              </button>
            </div>
          </div>

          {/* Alert Frequency */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Alert Frequency</h4>
                  <p className="text-sm text-gray-500">Daily summary at 9:00 AM</p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                Configure
              </button>
            </div>
          </div>
        </div>

        {/* Alert Thresholds */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Alert Thresholds</h3>

          {/* Low Stock Threshold */}
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-50 rounded-lg">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Low Stock Threshold</h4>
                  <p className="text-sm text-gray-500">Default: 20% of minimum level</p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                Configure
              </button>
            </div>
          </div>

          {/* Expiry Alert Period */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-50 rounded-lg">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 4v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-9a1 1 0 011-1h14a1 1 0 011 1v9a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1M8 7h8" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Expiry Alert Period</h4>
                  <p className="text-sm text-gray-500">Default: 30 days before expiry</p>
                </div>
              </div>
              <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertSettings
