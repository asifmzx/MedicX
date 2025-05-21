const Status = ({ variant = "default", text = "", className = "" }) => {
  const baseStyles =
    "inline-flex items-center justify-center p-1 rounded-full text-xs font-semibold tracking-wide text-center border border-gray-300";

  const variants = {
    primary: "bg-white w-[100px]",
    secondary: "bg-black text-white w-[80px]",
    follow_up: "bg-black text-white w-[90px]",
    urgent: "bg-[#ffe3e3] text-[#991c61] w-[90px]",
    check_up: "w-[90px]",
    consultation: "w-[90px]",
    default: "bg-white text-gray-800 w-[100px]",
    up_def: "bg-gray-300 text-gray-800",
    confirmed: "bg-[#dcfce7] text-[#166534] w-[85px]",
    pending: "bg-[#fef9c3] text-[#944c0d] w-[75px]",
    high: "bg-[#ffe3e3] text-[#991c61] w-[90px]",
    medium: "bg-[#fef9c3] text-[#944c0d] w-[75px]",
    low: "bg-[#dbebff] text-[#6241b0] w-[75px]",
    active: "bg-[#f0fcf4] text-[#14806c] w-[75px]",
    inactive: "bg-[#EAB308] text-[#0A0A0A] w-[75px]",
    onLeave: "bg-[#EF4444] text-[#ffe3e3] w-[75px]",
    tomorrow: "bg-[#dbebff] text-[#145efc] border border-[#145efc] w-[85px]",
    nextweek: "bg-[#faf5ff] text-[#9023cf]  border border-[#9023cf] w-[85px]",
    expired: "bg-[#EF4444] text-[#ffe3e3] w-[75px]",

  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {text}
    </span>
  );
};

export default Status;
