import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import Status from "@/Components/UI/Status/Status";
import PTable from "@/Components/UI/Table/PTable";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { CiFilter, CiImport } from "react-icons/ci";

const Rejected = ({
  filter,
  title = "Rejected Requests",
  description = "View all rejected appointment requests.",
}) => {
  const data = [
    {
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      patientName: "Emily Davis",
      requestedDoctor: "Any available doctor",
      preferredDate: "2023-07-27",
      time: "Afternoon",
      type: "Consultation",
      urgency: "Normal",
      Reason: "No dermatologists available on the request.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      patientName: "John Smith",
      requestedDoctor: "Dr. Robert Kim",
      preferredDate: "2023-07-29",
      time: "Morning",
      type: "Therapy",
      urgency: "Low",
      Reason: "Dr. Kim is on vacation during the request...",
    },
  ];
  const filteredData = filter ? data.filter(filter) : data;

  const columns = [
    {
      label: "Patient",
      key: "patientName",
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={row.img}
            alt={row.patientName}
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-medium text-gray-900 mr-3 md:mr-3">
            {row.patientName}
          </span>
        </div>
      ),
    },
    {
      label: "Requested Doctor",
      key: "requestedDoctor",
    },
    {
      label: "Preferred Date",
      key: "preferredDate",
      render: (row) => (
        <div>
          <p>{row.preferredDate}</p>
          <span className="whitespace-nowrap text-gray-500">{row.time}</span>
        </div>
      ),
    },
    {
      label: "Type",
      key: "type",
      render: (row) => <span className="capitalize">{row.type}</span>,
    },
    {
      label: "Urgency",
      key: "urgency",
      render: (row) => (
        <Status
          type="appointmentrequest"
          variant={row.urgency}
          text={row.urgency}
        />
      ),
    },

    {
      label: "Reason",
      key: "Reason",
      render: (row) => <p>{row.Reason}</p>,
    },

    {
      label: "Actions",
      key: "action",
      render: () => (
        <button className="text-xl text-gray-500 hover:text-gray-700">
          <BsThreeDots />
        </button>
      ),
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow max-w-full">
      <div className="pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight mb-1">
            {title}
          </h1>
          <p className="text-sm text-gray-600 max-w-xs md:max-w-none">
            {description}
          </p>
        </div>

        <div className="flex flex-row sm:flex-row sm:items-center gap-3 w-full md:w-auto">
          <SearchInput
            placeholder="Search requests..."
            icon={AiOutlineSearch}
            inputClassName="text-sm text-gray-700"
            wrapperClassName="flex-grow sm:flex-grow-0"
          />
          <div className="flex items-center gap-3 flex-shrink-0">
            <Buttonv2
              variant="primary_main"
              Icon={CiFilter}
              text=""
              className="border border-gray-300 whitespace-nowrap"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <PTable columns={columns} data={filteredData} />
      </div>
    </div>
  );
};

export default Rejected;
