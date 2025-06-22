import React, { useState } from "react";

const Professional = () => {
  const [formData, setFormData] = useState({
    profession: "",
    specialization: "",
    qualifications: [
      {
        degree: "",
        institution: "",
        yearCompleted: "",
      },
    ],
    licenses: [
      {
        licenseType: "",
        licenseNumber: "",
        issueDate: "",
        expiryDate: "",
        issuingAuthority: "",
      },
    ],
    professionalBio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQualificationChange = (index, field, value) => {
    const updatedQualifications = [...formData.qualifications];
    updatedQualifications[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      qualifications: updatedQualifications,
    }));
  };

  const handleLicenseChange = (index, field, value) => {
    const updatedLicenses = [...formData.licenses];
    updatedLicenses[index][field] = value;
    setFormData((prev) => ({
      ...prev,
      licenses: updatedLicenses,
    }));
  };

  const addQualification = () => {
    setFormData((prev) => ({
      ...prev,
      qualifications: [
        ...prev.qualifications,
        {
          degree: "",
          institution: "",
          yearCompleted: "",
        },
      ],
    }));
  };

  const addLicense = () => {
    setFormData((prev) => ({
      ...prev,
      licenses: [
        ...prev.licenses,
        {
          licenseType: "",
          licenseNumber: "",
          issueDate: "",
          expiryDate: "",
          issuingAuthority: "",
        },
      ],
    }));
  };

  return (
    <div className="w-full mx-auto p-6 bg-white rounded-md shadow-md">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Professional Information
        </h2>
        <p className="text-gray-600">
          Enter the staff member's professional qualifications and credentials
        </p>
      </div>

      <form className="space-y-6">
        {/* Profession and Specialization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profession
            </label>
            <input
              type="text"
              name="profession"
              value={formData.profession}
              onChange={handleInputChange}
              placeholder="e.g. Doctor, Nurse, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialization
            </label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              placeholder="e.g. Cardiology, Pediatrics, etc."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Qualifications & Degrees */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Qualifications & Degrees
            </h3>
          </div>

          {formData.qualifications.map((qualification, index) => (
            <div
              key={index}
              className="mb-6 p-4 border border-gray-200 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Degree/Certification
                  </label>
                  <input
                    type="text"
                    value={qualification.degree}
                    onChange={(e) =>
                      handleQualificationChange(index, "degree", e.target.value)
                    }
                    placeholder="e.g. MD, RN, etc."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution
                  </label>
                  <input
                    type="text"
                    value={qualification.institution}
                    onChange={(e) =>
                      handleQualificationChange(
                        index,
                        "institution",
                        e.target.value
                      )
                    }
                    placeholder="University/College name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Year Completed
                  </label>
                  <input
                    type="text"
                    value={qualification.yearCompleted}
                    onChange={(e) =>
                      handleQualificationChange(
                        index,
                        "yearCompleted",
                        e.target.value
                      )
                    }
                    placeholder="YYYY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addQualification}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Add More
          </button>
        </div>

        {/* Licenses & Certifications */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900">
              Licenses & Certifications
            </h3>
          </div>

          {formData.licenses.map((license, index) => (
            <div
              key={index}
              className="mb-6 p-4 border border-gray-200 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    License Type
                  </label>
                  <input
                    type="text"
                    value={license.licenseType}
                    onChange={(e) =>
                      handleLicenseChange(index, "licenseType", e.target.value)
                    }
                    placeholder="e.g. Medical License"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    License Number
                  </label>
                  <input
                    type="text"
                    value={license.licenseNumber}
                    onChange={(e) =>
                      handleLicenseChange(
                        index,
                        "licenseNumber",
                        e.target.value
                      )
                    }
                    placeholder="Enter license number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    value={license.issueDate}
                    onChange={(e) =>
                      handleLicenseChange(index, "issueDate", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    value={license.expiryDate}
                    onChange={(e) =>
                      handleLicenseChange(index, "expiryDate", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Issuing Authority
                  </label>
                  <input
                    type="text"
                    value={license.issuingAuthority}
                    onChange={(e) =>
                      handleLicenseChange(
                        index,
                        "issuingAuthority",
                        e.target.value
                      )
                    }
                    placeholder="Enter issuing authority"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addLicense}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Add More
          </button>
        </div>

        {/* Professional Bio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Bio
          </label>
          <textarea
            name="professionalBio"
            value={formData.professionalBio}
            onChange={handleInputChange}
            placeholder="Enter professional biography and experience"
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>

        {/* Action Buttons */}
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
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Professional;
