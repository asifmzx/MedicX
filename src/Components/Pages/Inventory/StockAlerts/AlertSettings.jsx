import React from 'react'
import Buttonv2 from '@/Components/UI/Button/Buttonv2'
import { SlCalender } from 'react-icons/sl'
import { FiBell } from 'react-icons/fi'
import { GoClock } from 'react-icons/go'
import { CgDanger } from 'react-icons/cg'

const AlertSettings = () => {
  return (
    <div className="px-4 py-4 bg-white rounded-lg shadow-sm mt-2 md:mt-4">

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Alert Settings</h2>
        <p className=" text-gray-600">Configure how and when you receive inventory alerts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Preferences</h3>

          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <FiBell />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email Notifications</h4>
                  <p className="text-sm text-gray-500">Receive alerts via email</p>
                </div>
              </div>
              <Buttonv2 text="Configure" variant='primary_main' className='text-[14px] font-semibold border border-gray-300 py-4' />
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <GoClock />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Alert Frequency</h4>
                  <p className="text-sm text-gray-500">Daily summary at 9:00 AM</p>
                </div>
              </div>
              <Buttonv2 text="Configure" variant='primary_main' className='text-[14px] font-semibold border border-gray-300 py-4' />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Alert Thresholds</h3>

          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <CgDanger />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Low Stock Threshold</h4>
                  <p className="text-sm text-gray-500">Default: 20% of minimum level</p>
                </div>
              </div>
              <Buttonv2 text="Configure" variant='primary_main' className='text-[14px] font-semibold border border-gray-300 py-4' />
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gray-50 rounded-lg">
                  <SlCalender />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Expiry Alert Period</h4>
                  <p className="text-sm text-gray-500">Default: 30 days before expiry</p>
                </div>
              </div>
              <Buttonv2 text="Configure" variant='primary_main' className='text-[14px] font-semibold border border-gray-300 py-4' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlertSettings
