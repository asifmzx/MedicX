const Status = ({ variant = "default", text = "", className = "" }) => {
  const baseStyles =
    "inline-flex items-center justify-center p-1 rounded-full text-xs font-bold tracking-wide text-center border border-gray-300";

  const variants = {
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
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {text}
    </span>
  );
};

export default Status;
