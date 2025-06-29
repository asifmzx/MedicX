import React from 'react'
import BackButton from '@/Components/UI/Button/BackButton'

import Card from './Card'

const rolesAndPermission = () => {
    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                <div className="flex items-center gap-4">
                    <BackButton className="bg-white border border-gray-300 h-10 w-10 flex items-center justify-center rounded-md flex-shrink-0" />
                    <div className="flex flex-col">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                            Roles & Permissions
                        </h1>
                        <p className="text-sm text-gray-600 mt-1">
                            Manage staff access and security controls
                        </p>
                    </div>
                </div>
            </div>
            <Card />
        </div>
    )
}

export default rolesAndPermission
