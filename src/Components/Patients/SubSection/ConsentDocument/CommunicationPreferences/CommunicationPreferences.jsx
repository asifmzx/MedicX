import React from "react";

const CommunicationPreferences = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1">
          <p className="py-3 text-xl font-semibold">
            Communication Preferences
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="" name="" />
              <label htmlFor="">Receive appointment reminders</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="" name="" />
              <label htmlFor="">Receive lab result notifications</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="" name="" />
              <label htmlFor="">Receive prescription notifications</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input type="checkbox" id="" name="" />
              <label htmlFor="">Receive clinic newsletter and updates</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPreferences;
