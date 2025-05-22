const Status = ({
  variant = "default",
  text = "",
  className = "",
  type = "status",
}) => {
  // Base styles that apply to all variants
  const baseStyles =
    "flex items-center justify-center p-1 text-center rounded-full text-xs font-semibold leading-none";

  // Status variants (original)
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
    active: "bg-[#f0fcf4] text-[#14806c] w-[75px] border border-[#f0fcf4]",
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

  // Appointment variants with minimal base styles
  const appointmentVariants = {
    default: "bg-white text-gray-800 w-[90px] border border-gray-300",
    Completed:
      "bg-[#dcfce7] text-White w-[90px] border border-[#366634] border-[#366634]",
    Confirmed: "text-[#145efc] w-[90px] border border-[#3ca1fa] bg-white",
    Cancelled: "text-white bg-red-500 w-[90px] border border-red-700",
    "In Progress": "text-white bg-[#FFA725] w-[90px] border border-gray-200",
  };

  // Select variant map based on type
  const variantMap =
    type === "appointment" ? appointmentVariants : statusVariants;
  const selectedVariant = variantMap[variant] || variantMap.default;

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
