
import SubSection from "@/Components/Patients/SubSection/subSection";
import BackButton from "@/Components/UI/Button/BackButton";


const addPatient = () => {
  return (
    <div className="p-4 ">
      <div className="flex items-center gap-x-4">
        <div>
          <BackButton />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Add Patients
          </h1>
          <p className="text-gray-600">
            Register a new patient in your clinic.
          </p>
        </div>
      </div>
      <div className="py-4">
        <SubSection />
      </div>
    </div>
  );
};

export default addPatient;
