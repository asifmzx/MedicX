import MedicineTemplates from "@/Components/Prescriptions/MedicineTemplates/MedicineTemplates";
import BackButton from "@/Components/UI/Button/BackButton";
// import Button from "@/Components/UI/Button/Button";
// import SearchInput from "@/Components/UI/Inputs/SearchInput";
// import { AiOutlineSearch } from "react-icons/ai";
// import { FiPlus } from "react-icons/fi";

const Page = () => {
  return (
    <div>
      <div className="p-4">
        <div className="flex items-center gap-x-4">
          <div>
            <BackButton />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Medicine Templates
            </h1>
            <p className="text-gray-600">
              Manage reusable medication templates for prescriptions.
            </p>
          </div>
        </div>

        <div className="pt-4 flex justify-between items-center flex-wrap gap-4">
          <MedicineTemplates />

        </div>
      </div>
    </div>
  );
};

export default Page;
