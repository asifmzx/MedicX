import Button from "@/Components/UI/Button/Button";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { PiExportBold } from "react-icons/pi";

const Branding = () => {
  const [primaryColor, setPrimaryColor] = useState("#0284c7");
  const [secondaryColor, setSecondaryColor] = useState("#0284c7");

  const handlePrimaryColorChange = (e) => {
    setPrimaryColor(e.target.value);
  };
  const handleSecondaryColorChange = (e) => {
    setSecondaryColor(e.target.value);
  };

  return (
    <div className="bg-white p-4 rounded-lg space-y-8">
      <div className="pb-5 border-b border-gray-300 space-y-8">
        <div className="space-y-2">
          <p className="text-2xl font-semibold">Branding & Appearance</p>
          <p className="text-sm text-gray-600">
            Customize your clinic's visual identity
          </p>
        </div>

        {/* Upload Logo */}
        <div className="w-full">
          <div className="pb-4">
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight mb-1">
              Clinic Logo
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-start gap-y-4 sm:gap-x-8">
            <div className="border border-dashed p-6 rounded-md inline-block">
              <FaRegHeart size={40} className="text-gray-500" />
            </div>

            <div className="space-y-2 w-full sm:w-auto">
              <label
                htmlFor="logoUpload"
                className="inline-block bg-transparent text-black px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-300 transition"
              >
                <p className="flex items-center gap-x-1">
                  <PiExportBold />
                  <span>Upload New Logo</span>
                </p>
              </label>
              <input type="file" id="logoUpload" className="hidden" />
              <p className="text-xs text-gray-600">
                Recommended size: 512x512px. Max file size: 2MB. Formats: PNG,
                JPG, SVG
              </p>
            </div>
          </div>
        </div>

        {/* Upload Favicon */}
        <div className="w-full">
          <div className="pb-4">
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight mb-1">
              Favicon
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-start gap-y-4 sm:gap-x-8">
            <div className="border border-dashed p-6 rounded-md inline-block">
              <FaRegHeart size={20} className="text-gray-500" />
            </div>

            <div className="space-y-2 w-full sm:w-auto">
              <label
                htmlFor="faviconUpload"
                className="inline-block bg-transparent text-black px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-300 transition"
              >
                <p className="flex items-center gap-x-1">
                  <PiExportBold />
                  <span>Upload Favicon</span>
                </p>
              </label>
              <input type="file" id="faviconUpload" className="hidden" />
              <p className="text-xs text-gray-600">
                Recommended size: 32x32px. Format: ICO, PNG
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Color Scheme Section */}
      <div>
        <p className="text-lg font-semibold pb-3">Color Scheme</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="clinicPrimaryColor"
              className="block mb-1 font-medium"
            >
              Primary Color
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="color"
                id="clinicPrimaryColor"
                value={primaryColor}
                onChange={handlePrimaryColorChange}
                className="w-10 h-10 rounded-md cursor-pointer"
              />
              <input
                type="text"
                value={primaryColor}
                readOnly
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="clinicSecondaryColor"
              className="block mb-1 font-medium"
            >
              Secondary Color
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="color"
                id="clinicSecondaryColor"
                value={secondaryColor}
                onChange={handleSecondaryColorChange}
                className="w-10 h-10 rounded-md cursor-pointer"
              />
              <input
                type="text"
                value={secondaryColor}
                readOnly
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              />
            </div>
          </div>

          {/* Theme Mode */}
          <div className="col-span-2">
            <label htmlFor="themeMode" className="block mb-1 font-medium">
              Theme Mode
            </label>
            <select
              id="themeMode"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
              defaultValue=""
            >
              <option value="Dark">Dark</option>
              <option value="Lights">Lights</option>
              <option value="System">10 Minutes</option>
            </select>
          </div>

          {/* Email Template */}
          <div className="col-span-2">
            <p className="text-xl font-semibold">Email Template</p>
          </div>

          <div className="col-span-2">
            <label htmlFor="emailHeaderText" className="block mb-1 font-medium">
              Email Header Text
            </label>
            <input
              id="emailHeaderText"
              type="text"
              defaultValue="MedixPro Clinic - Your Health, Our Priority"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="emailFooterText" className="block mb-1 font-medium">
              Email Footer Text
            </label>
            <textarea
              id="emailFooterText"
              rows={3}
              defaultValue="© 2023 MedixPro Clinic. All rights reserved. 123 Medical Plaza, Healthcare District, City, State, 12345"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-black resize-none"
            ></textarea>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-2 sm:space-y-0 mt-4">
          <Button
            variant="primary"
            text="Reset to Defaults"
            className="border border-gray-300"
          />
          <Button variant="secondary" text="Save Branding" />
        </div>
      </div>
    </div>
  );
};

export default Branding;
