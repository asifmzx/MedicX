import DoctorSchedule from "@/Components/Doctors/DoctorSchedule/DoctorSchedule";
import BackButton from "@/Components/UI/Button/BackButton";

const Page = () => {
  return (
    <div className="p-4 ">
      <div className="flex items-center gap-x-4">
        <div>
          <BackButton />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
            Doctor Schedule
          </h1>
          <p className="text-gray-600">
            Manage and view doctor schedules and appointments.
          </p>
        </div>
      </div>
      <div className="pt-6">
        <DoctorSchedule />
      </div>
    </div>
  );
};

export default Page;
