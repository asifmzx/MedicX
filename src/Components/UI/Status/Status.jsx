const Status = ({
  variant = "default",
  text = "",
  className = "",
  type = "status",
}) => {
  const baseStyles =
    "flex items-center justify-center p-1 text-center rounded-full text-xs font-semibold leading-none";

  const statusVariants = {
    primary: "bg-white text-gray-800 w-[100px] border border-gray-300",
    secondary: "bg-black text-white w-[80px] border border-black",
    follow_up: "bg-black text-white w-[90px] border border-black",
    urgent: "bg-[#ffe3e3] text-[#991c61] w-[90px] border border-[#ffe3e3]",
    check_up: "text-gray-800 w-[90px] border border-gray-300",
    consultation: "text-gray-800 w-[90px] border border-gray-300",
    default: "bg-white text-gray-800 w-[70px] border border-gray-300",
    up_def: "bg-gray-300 text-gray-800 w-[100px] border border-gray-300",
    confirmed: "bg-[#dcfce7] text-[#166534] w-[85px] border border-[#dcfce7]",
    pending: "bg-[#fef9c3] text-[#944c0d] w-[75px] border border-[#fef9c3]",
    high: "bg-[#ffe3e3] text-[#991c61] w-[90px] border border-[#ffe3e3]",
    medium: "bg-[#fef9c3] text-[#944c0d] w-[75px] border border-[#fef9c3]",
    low: "bg-[#dbebff] text-[#6241b0] w-[75px] border border-[#dbebff]",
    active: "bg-[#f0fcf4] text-[#14806c] w-[75px] border border-[#14806c]",
    inactive: "bg-[#EAB308] text-[#0A0A0A] w-[75px] border border-[#EAB308]",
    onLeave: "bg-[#EF4444] text-[#ffe3e3] w-[75px] border border-[#EF4444]",
    tomorrow: "bg-[#dbebff] text-[#145efc] w-[85px] border border-[#145efc]",
    nextweek: "bg-[#faf5ff] text-[#9023cf] w-[85px] border border-[#9023cf]",
    expired: "bg-[#EF4444] text-[#ffe3e3] w-[75px] border border-[#EF4444]",
    completed: "bg-[#171717] text-white w-[75px] border border-[#171717]",
    inProgress: "bg-[#F5F5F5] text-black w-[75px] border border-[#F5F5F5]",
    Available: "bg-[#171717] text-white w-[75px] border border-[#171717]",
    Maintenance: "bg-[#F5F5F5] text-black w-[95px] border border-[#F5F5F5]",
  };

  const appointmentVariants = {
    default: "bg-white text-gray-800 w-[90px] border border-gray-300",
    Completed: "bg-[#366634] text-white w-[90px] border border-[#366634]",
    Confirmed: "text-[#145efc] w-[90px] border border-[#3ca1fa] bg-white",
    Cancelled: "text-white bg-red-500 w-[90px] border border-red-700",
    "In Progress": "text-white bg-[#FFA725] w-[90px] border border-gray-200",
  };

  const ambulanceVariants = {
    default: "bg-white text-gray-800 w-[110px]  border border-gray-300",
    Operational: "bg-[#171717] text-white w-[95px]  border border-[#171717]",
    Completed: "bg-[#171717] text-white w-[95px]  border border-[#171717]",
  };

  const appointmentrequestVariants = {
    default: "bg-white text-gray-800 w-[70px]  border border-gray-300",
    Normal: "bg-[#3b82f5] text-white w-[70px]",
    High: "bg-[#f04343] text-white w-[70px]",
    Low: "bg-white text-[#] w-[70px] border border-[#21c45d]",
  };

  const pharmacyVariant = {
    default: "bg-white text-gray-800 w-[70px]  border border-gray-300",
    "In Stock": "bg-[#21c45d] text-gray-700 w-[70px]",
    "Low Stock": "bg-[#f59f0a] text-gray-700 w-[80px]",
    "Out of Stock": "bg-[#f04343] text-white w-[90px]",
  };

  const widgetVariants = {
    default: "bg-white text-gray-800 w-[70px]  border border-gray-300",
    Confirmed: "bg-[#f0f6ff] text-[#588af5] border border-[#588af5] w-[90px]",
    Active: "bg-[#dcfce7] text-[#166534] w-[80px] border border-[#dcfce7]",
  };

  const bloodBankVariants = {
    Available: "bg-[#21c45d] h-6 text-white w-[100px]",
    "Expiring Soon": "bg-[#f59f0a] h-6 text-black w-[100px]",
    Reserved: "bg-black/3 h-6 text-gray w-[100px] border border-gray-200",
  };
  const taskVariants = {
    high: "bg-red-500 text-white text-xs w-[70px]",
    medium: "bg-[#f59f0a] text-white text-xs w-[70px]",
    low: "bg-white text-black text-xs w-[70px] border border-gray-300",
  };
  const contactVariants = {
    client: "bg-[#DBEAFE] text-[#1E5DCB] text-xs w-[70px]",
    partner: "bg-[#FEF3C7] text-[#92400E] text-xs w-[70px]",
    supplier: "bg-[#DCFCE7] text-[#166534] text-xs w-[70px]",
    lead: "bg-[#FCE7F3] text-[#9D174D] text-xs w-[70px]",
  };
  const supportVariants = {
    High: "bg-sky-100 text-[#1A5BCB] text-xs w-[70px]",
    Medium: "bg-orange-100 text-[#92400E] text-xs w-[70px]",
    Low: "bg-gray-100 text-black text-xs w-[70px]",
    Open: "bg-[#DBEAFE] text-[#1E5DCB] text-xs w-[70px]",
    "In Progress": "bg-[#FEF3C7] text-[#72400E] text-xs w-[90px]",
    Resolved: "bg-[#DCFCE7] text-[#166534] text-xs w-[70px]",
  };
  const settingsVariants = {
    Active: "bg-black text-white text-xs w-[70px]",
    InActive: "bg-gray-300 text-black text-xs w-[70px]",
    Connected:
      "bg-[#F0FDF4] text-green-700 border border border-green-200 text-sm w-[90px]",
    Available:
      "bg-[#FFFBEB] text-orange-700 border border-orange-100 text-sm w-[90px]",
  };
  const reportVariants = {
    Completed:
      "bg-green-50 text-green-500 border border border-green-300 text-sm w-[90px]",
    Canceled: "bg-red-50 text-red-400 border border-red-300 w-[90px]",
    "Not Show":
      "bg-orange-50 text-orange-300 border border-orange-300 w-[90px]",
    Scheduled:
      "bg-blue-50 text-blue-500 border border-blue-300 text-xs w-[90px]",
  };
  const financialReportVariants = {
    Income:"bg-green-50 text-green-500 border border border-green-300 text-sm w-[90px]",
    Insurance:"bg-blue-50 text-blue-500 border border-blue-300 text-xs w-[90px]",
    Expense: "bg-red-50 text-red-400 border border-red-300 w-[90px]",
    Refund: "bg-orange-50 text-orange-300 border border-orange-300 w-[90px]",
  };

  const variantType = {
    appointment: appointmentVariants,
    ambulance: ambulanceVariants,
    appointmentrequest: appointmentrequestVariants,
    pharmacy: pharmacyVariant,
    status: statusVariants,
    widget: widgetVariants,
    bloodBank: bloodBankVariants,
    task: taskVariants,
    contact: contactVariants,
    support: supportVariants,
    settings: settingsVariants,
    report: reportVariants,
    financialReport: financialReportVariants,
  };

  const variants = variantType[type] || {};
  const selectedVariant = variants[variant] || variants.default;

  return (
    <span className={`${baseStyles} ${selectedVariant} ${className}`}>
      {text}
    </span>
  );
};

export default Status;

//EXAMPLE
{
  /* 
<Status variant="confirmed" text="Confirmed" />

// Appointment status
<Status type="appointment" variant="default" text="Appointment" />
<Status type="appointment" variant="tomorrow" text="Tomorrow" />

// Falls back to status variants when type isn't specified
<Status variant="pending" text="Pending" /> 
*/
}
