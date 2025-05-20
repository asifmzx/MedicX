const Buttonv2 = ({
  variant = "primary",
  text = "button",
  Icon,
  onClick,
  className = "",
  isActive = false, // new prop
}) => {
  const baseStyles = "px-3 py-2 text-center rounded-md";
  const variants = {
    primary: " bg-black/1 hover:bg-[#F5F5F5] text-black text-xs font-semibold",
    secondary:
      "bg-[#0A0A0A] hover:bg-[#262626] text-[#FAFAFA] text-xs font-semibold",
    deletenote: "hover:bg-red-500/20 text-red-500 w-[135px] font-medium",
    editnote: "hover:bg-gray-500/5 w-[120px] font-medium",
    primary_main: "bg-[#FFFFFF] hover:bg-[#F5F5F5] text-black",
    secondary_main: "bg-[#0A0A0A] hover:bg-[#262626] text-[#FAFAFA]",
  };

  const activeStyle = isActive ? "bg-white" : "";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${activeStyle} ${className}`}
    >
      <div className="flex items-center justify-between gap-2 space-x-1">
        {Icon && <Icon className="w-4 h-4" />}
        <span>{text}</span>
      </div>
    </button>
  );
};

export default Buttonv2;
