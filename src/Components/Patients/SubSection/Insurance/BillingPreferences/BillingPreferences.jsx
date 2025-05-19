import React from "react";

const BillingPreferences = () => {
  return (
    <div >
      <div className="pb-4">
        <h1 className="text-xl md:text-xl font-semibold tracking-tight mb-1">
          Billing Preferences
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
        <div className="col-span-3">
          <label htmlFor="" className="block mb-1 font-medium">
            Relationship to Patient
          </label>
          <select
            id=""
            className="w-full border border-gray-300 rounded px-3 py-2  focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="" disabled selected>
              Preferred Billing Method
            </option>
            <option value="Insurance only">Insurance only</option>
            <option value="Self-pay">Self-pay</option>
            <option value="Insurance + Self pay">Insurance + Self-pay</option>
          </select>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <p className="py-3 font-semibold">Payment Methods</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex gap-x-1.5">
            <input type="checkbox" name="Credit-Card" />
            <label>Credit-Card</label>
          </div>
          <div className="flex gap-x-1.5">
            <input type="checkbox" name="Cash" />
            <label>Cash</label>
          </div>
          <div className="flex gap-x-1.5">
            <input type="checkbox" name="Debit Card" />
            <label>Debit Card</label>
          </div>
          <div className="flex gap-x-1.5">
            <input type="checkbox" name="Check" />
            <label>Check</label>
          </div>
          <div className="flex gap-x-1.5">
            <input type="checkbox" name="Online Payment" />
            <label>Online Payment</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPreferences;
