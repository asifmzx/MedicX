import Button from "@/Components/UI/Button/Button";
import ProfessionalDetailsForm from "./ProfessionalDetailsForm/ProfessionalDetailsForm";
import EducationAndTrainingForm from "./EducationAndTrainingForm/EducationAndTrainingForm";
import DepartmentAndPositionForm from "./DepartmentAndPositionForm/DepartmentAndPositionForm";

const ProfessionalInfo = () => {
  return (
    <div>
      <div className="p-4 bg-white rounded space-y-8">
        <ProfessionalDetailsForm />
        <EducationAndTrainingForm />
        <DepartmentAndPositionForm />
      </div>
      <div className="py-4 space-x-4">
        <Button variant="primary" text="Cancel" />
        <Button variant="secondary" text="Register Patient" />
      </div>
    </div>
  );
};

export default ProfessionalInfo;
