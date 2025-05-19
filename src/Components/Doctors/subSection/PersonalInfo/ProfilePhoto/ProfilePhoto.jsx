import { CiExport } from "react-icons/ci";

const ProfilePhoto = () => {
  return (
    <div className="w-full">
      <div className="pb-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight mb-1">
          Profile Photo
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-4 sm:gap-x-8">
        <div className="bg-gray-200 p-6 rounded-full inline-block self-center sm:self-auto">
          <CiExport size={40} className="text-gray-500" />
        </div>

        <div className="space-y-2 w-full sm:w-auto">
          <label
            htmlFor="fileUpload"
            className="inline-block bg-transparent text-black px-4 py-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-300 transition"
          >
            Upload File
          </label>
          <input type="file" name="upload" id="fileUpload" className="hidden" />

          <p className="text-xs text-gray-600">
            Upload a profile photo. JPG, PNG or GIF. Max 2MB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
